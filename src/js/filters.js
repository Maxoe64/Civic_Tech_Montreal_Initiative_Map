import { TYPES, STATUSES, ALL_TAGS } from "../data/initiatives.js";
import { t, getLang, localized } from "./i18n.js";

/**
 * Render checkbox filters for types, tags, and statuses.
 * Returns getter functions for each filter state.
 */
export function setupFilters(
  typeContainer,
  tagContainer,
  statusContainer,
  onChange,
) {
  const typeState = {};
  const tagState = {};
  const statusState = {};

  // ── Type checkboxes ──
  for (const [key, meta] of Object.entries(TYPES)) {
    typeState[key] = true;
    const label = buildCheckbox(
      key,
      getLang() === "fr" ? meta.fr : meta.en,
      meta.color,
      true,
      (checked) => {
        typeState[key] = checked;
        onChange();
      },
    );
    typeContainer.appendChild(label);
  }

  // ── Tag checkboxes ──
  for (const tag of ALL_TAGS) {
    tagState[tag] = true;
    const label = buildCheckbox(tag, tag, null, true, (checked) => {
      tagState[tag] = checked;
      onChange();
    });
    tagContainer.appendChild(label);
  }

  // ── Status checkboxes ──
  for (const [key, meta] of Object.entries(STATUSES)) {
    statusState[key] = true;
    const label = buildStatusCheckbox(
      key,
      getLang() === "fr" ? meta.fr : meta.en,
      meta.dot,
      true,
      (checked) => {
        statusState[key] = checked;
        onChange();
      },
    );
    statusContainer.appendChild(label);
  }

  return {
    getActiveTypes: () => new Set(Object.keys(typeState).filter((k) => typeState[k])),
    getActiveTags: () => new Set(Object.keys(tagState).filter((k) => tagState[k])),
    getActiveStatuses: () =>
      new Set(Object.keys(statusState).filter((k) => statusState[k])),
  };
}

function buildCheckbox(key, label, swatchColor, checked, onToggle) {
  const wrapper = document.createElement("label");
  wrapper.className = "filter-label";

  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.checked = checked;
  cb.addEventListener("change", () => onToggle(cb.checked));

  wrapper.appendChild(cb);

  if (swatchColor) {
    const swatch = document.createElement("span");
    swatch.className = "filter-swatch";
    swatch.style.backgroundColor = swatchColor;
    wrapper.appendChild(swatch);
  }

  wrapper.appendChild(document.createTextNode(` ${label}`));
  return wrapper;
}

function buildStatusCheckbox(key, label, dotColor, checked, onToggle) {
  const wrapper = document.createElement("label");
  wrapper.className = "filter-label";

  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.checked = checked;
  cb.addEventListener("change", () => onToggle(cb.checked));

  const dot = document.createElement("span");
  dot.className = "status-dot";
  dot.style.backgroundColor = dotColor;

  wrapper.appendChild(cb);
  wrapper.appendChild(dot);
  wrapper.appendChild(document.createTextNode(` ${label}`));
  return wrapper;
}

/**
 * Filter initiatives by active types, tags, statuses, and search query.
 */
export function filterInitiatives(
  initiatives,
  activeTypes,
  activeTags,
  activeStatuses,
  query,
) {
  const q = query.toLowerCase().trim();

  return initiatives.filter((init) => {
    if (!activeTypes.has(init.type)) return false;
    if (!activeStatuses.has(init.status)) return false;

    // At least one of the initiative's tags must be in the active set
    const hasMatchingTag =
      init.tags.length === 0 || init.tags.some((tag) => activeTags.has(tag));
    if (!hasMatchingTag) return false;

    if (!q) return true;

    const name = localized(init, "name");
    const desc = localized(init, "description");
    return (
      name.toLowerCase().includes(q) ||
      init.neighbourhood.toLowerCase().includes(q) ||
      desc.toLowerCase().includes(q) ||
      init.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });
}
