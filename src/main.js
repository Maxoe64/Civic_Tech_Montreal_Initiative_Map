import { createMap } from "./js/map.js";
import { addMarker } from "./js/markers.js";
import { setupCategoryFilters, filterInitiatives } from "./js/filters.js";
import { initiatives, CATEGORIES } from "./data/initiatives.js";

/* ── Initialise map ──────────────────────────────── */
const map = createMap("map");

/* ── State ───────────────────────────────────────── */
let markerLayer = L.layerGroup().addTo(map);
let currentMarkers = new Map(); // initiative.id → marker
let searchQuery = "";
let getActiveCategories;

/* ── Render markers on the map ───────────────────── */
function renderMarkers(filtered) {
  markerLayer.clearLayers();
  currentMarkers.clear();

  for (const init of filtered) {
    const marker = addMarker(init, markerLayer);
    currentMarkers.set(init.id, marker);
  }
}

/* ── Render sidebar list ─────────────────────────── */
function renderList(filtered) {
  const listEl = document.getElementById("initiative-items");
  listEl.innerHTML = "";

  for (const init of filtered) {
    const li = document.createElement("li");
    li.className = "initiative-item";
    li.innerHTML = `
      <div class="item-name">${init.name}</div>
      <div class="item-meta">${init.neighbourhood} · ${CATEGORIES[init.category]?.label ?? init.category}</div>
    `;
    li.addEventListener("click", () => {
      map.setView([init.lat, init.lng], 15);
      const marker = currentMarkers.get(init.id);
      if (marker) marker.openPopup();
    });
    listEl.appendChild(li);
  }
}

/* ── Render stats cards ──────────────────────────── */
function renderStats(filtered) {
  const grid = document.querySelector(".stats-grid");
  const active = filtered.filter((i) => i.status === "active").length;
  const pilot = filtered.filter((i) => i.status === "pilot").length;
  const planned = filtered.filter((i) => i.status === "planned").length;
  const neighbourhoods = new Set(filtered.map((i) => i.neighbourhood)).size;

  grid.innerHTML = `
    <div class="stat-card"><div class="stat-value">${filtered.length}</div><div class="stat-label">Initiatives</div></div>
    <div class="stat-card"><div class="stat-value">${active}</div><div class="stat-label">Active</div></div>
    <div class="stat-card"><div class="stat-value">${pilot + planned}</div><div class="stat-label">Pilot / Planned</div></div>
    <div class="stat-card"><div class="stat-value">${neighbourhoods}</div><div class="stat-label">Neighbourhoods</div></div>
  `;
}

/* ── Full refresh ────────────────────────────────── */
function refresh() {
  const activeCategories = getActiveCategories();
  const filtered = filterInitiatives(initiatives, activeCategories, searchQuery);
  renderMarkers(filtered);
  renderList(filtered);
  renderStats(filtered);
}

/* ── Category filters ────────────────────────────── */
const filterContainer = document.getElementById("category-filters");
getActiveCategories = setupCategoryFilters(filterContainer, () => refresh());

/* ── Search ──────────────────────────────────────── */
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  refresh();
});

/* ── Initial render ──────────────────────────────── */
refresh();
