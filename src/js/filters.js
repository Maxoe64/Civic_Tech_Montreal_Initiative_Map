import { CATEGORIES } from "../data/initiatives.js";

/**
 * Render category checkboxes into the given container element.
 * Returns a function that returns the set of currently active category keys.
 */
export function setupCategoryFilters(container, onChange) {
  const state = {};

  for (const [key, { label, color }] of Object.entries(CATEGORIES)) {
    state[key] = true;

    const wrapper = document.createElement("label");
    wrapper.className = "filter-label";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    checkbox.dataset.category = key;
    checkbox.addEventListener("change", () => {
      state[key] = checkbox.checked;
      onChange(getActiveCategories());
    });

    const swatch = document.createElement("span");
    swatch.className = "filter-swatch";
    swatch.style.backgroundColor = color;

    wrapper.appendChild(checkbox);
    wrapper.appendChild(swatch);
    wrapper.appendChild(document.createTextNode(` ${label}`));
    container.appendChild(wrapper);
  }

  function getActiveCategories() {
    return new Set(Object.keys(state).filter((k) => state[k]));
  }

  return getActiveCategories;
}

/**
 * Filter initiatives by active categories and search query.
 */
export function filterInitiatives(initiatives, activeCategories, query) {
  const q = query.toLowerCase().trim();

  return initiatives.filter((init) => {
    if (!activeCategories.has(init.category)) return false;
    if (!q) return true;
    return (
      init.name.toLowerCase().includes(q) ||
      init.neighbourhood.toLowerCase().includes(q) ||
      init.description.toLowerCase().includes(q)
    );
  });
}
