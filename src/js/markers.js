import L from "leaflet";
import { TYPES, STATUSES } from "../data/initiatives.js";
import { t, getLang, localized } from "./i18n.js";

/**
 * Build a circular SVG icon coloured by type.
 */
function createIcon(type) {
  const color = TYPES[type]?.color ?? "#6b7280";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
      <circle cx="14" cy="14" r="12" fill="${color}" stroke="#fff" stroke-width="2"/>
    </svg>`;

  return L.divIcon({
    html: svg,
    className: "custom-marker",
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });
}

/**
 * Create a marker for a single initiative and add it to the given layer group.
 */
export function addMarker(initiative, layerGroup) {
  const lang = getLang();
  const name = localized(initiative, "name");
  const desc = localized(initiative, "description");
  const typeMeta = TYPES[initiative.type];
  const typeLabel = typeMeta
    ? lang === "fr"
      ? typeMeta.fr
      : typeMeta.en
    : initiative.type;
  const statusMeta = STATUSES[initiative.status];
  const statusLabel = statusMeta
    ? lang === "fr"
      ? statusMeta.fr
      : statusMeta.en
    : initiative.status;

  const tagsHtml = initiative.tags
    .map((tag) => `<span class="popup-tag">${tag}</span>`)
    .join("");

  const linkHtml = initiative.url
    ? `<a href="${initiative.url}" target="_blank" rel="noopener noreferrer">${t("website")}</a>`
    : "";

  const userBadge = initiative.userAdded
    ? `<div class="popup-user-added">${t("userAdded")}</div>`
    : "";

  const popupContent = `
    <div class="popup-content">
      <h3>${name}</h3>
      <div class="popup-badges">
        <span class="popup-badge" style="background:${typeMeta?.color ?? "#6b7280"}">${typeLabel}</span>
        <span class="popup-status popup-status--${initiative.status}">${statusLabel}</span>
      </div>
      ${tagsHtml ? `<div class="popup-tags">${tagsHtml}</div>` : ""}
      ${linkHtml}
      <p class="popup-neighbourhood">${t("approxLocation")}</p>
      <p class="popup-desc">${desc}</p>
      ${userBadge}
    </div>`;

  const marker = L.marker([initiative.lat, initiative.lng], {
    icon: createIcon(initiative.type),
  })
    .bindPopup(popupContent, { maxWidth: 300 })
    .addTo(layerGroup);

  return marker;
}
