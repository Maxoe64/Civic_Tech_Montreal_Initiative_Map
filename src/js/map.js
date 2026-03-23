import L from "leaflet";

const MONTREAL_CENTER = [45.5017, -73.5673];
const DEFAULT_ZOOM = 12;

/**
 * Create and return a Leaflet map instance anchored to the given element ID.
 */
export function createMap(elementId) {
  const map = L.map(elementId, {
    zoomControl: true,
  }).setView(MONTREAL_CENTER, DEFAULT_ZOOM);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  return map;
}
