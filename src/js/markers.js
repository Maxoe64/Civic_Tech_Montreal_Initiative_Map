import L from "leaflet";
import { CATEGORIES } from "../data/initiatives.js";

/**
 * Build a circular SVG icon coloured by category.
 */
function createIcon(category) {
  const color = CATEGORIES[category]?.color ?? "#6b7280";
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

const STATUS_LABELS = {
  active: "Active",
  pilot: "Pilot",
  planned: "Planned",
};

/**
 * Create a marker for a single initiative and add it to the given layer group.
 */
export function addMarker(initiative, layerGroup) {
  const { name, category, neighbourhood, description, status, url, lat, lng } =
    initiative;

  const categoryLabel = CATEGORIES[category]?.label ?? category;
  const statusLabel = STATUS_LABELS[status] ?? status;

  const linkHtml = url
    ? `<a href="${url}" target="_blank" rel="noopener noreferrer">Learn more &rarr;</a>`
    : "";

  const popupContent = `
    <div class="popup-content">
      <h3>${name}</h3>
      <span class="popup-badge" style="background:${CATEGORIES[category]?.color ?? "#6b7280"}">${categoryLabel}</span>
      <span class="popup-status popup-status--${status}">${statusLabel}</span>
      <p class="popup-neighbourhood">${neighbourhood}</p>
      <p>${description}</p>
      ${linkHtml}
    </div>`;

  const marker = L.marker([lat, lng], { icon: createIcon(category) })
    .bindPopup(popupContent, { maxWidth: 280 })
    .addTo(layerGroup);

  return marker;
}
