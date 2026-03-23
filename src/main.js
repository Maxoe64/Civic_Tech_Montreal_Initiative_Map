import { createMap } from "./js/map.js";
import { addMarker } from "./js/markers.js";
import { setupFilters, filterInitiatives } from "./js/filters.js";
import { getAllInitiatives, addInitiative, removeUserInitiative } from "./js/store.js";
import { TYPES, STATUSES, ALL_TAGS } from "./data/initiatives.js";
import { t, getLang, setLang, localized } from "./js/i18n.js";

/* ── Initialise map ──────────────────────────────── */
const map = createMap("map");

/* ── State ───────────────────────────────────────── */
let markerLayer = L.layerGroup().addTo(map);
let currentMarkers = new Map();
let searchQuery = "";
let filterGetters = null;

/* ── Render markers ──────────────────────────────── */
function renderMarkers(filtered) {
  markerLayer.clearLayers();
  currentMarkers.clear();
  for (const init of filtered) {
    const marker = addMarker(init, markerLayer);
    currentMarkers.set(init.id, marker);
  }
}

/* ── Count line ──────────────────────────────────── */
function renderCount(filtered, total) {
  const el = document.getElementById("count-line");
  el.textContent = `${filtered.length} / ${total} ${t("shown")}`;
}

/* ── Legend ───────────────────────────────────────── */
function renderLegend() {
  const el = document.getElementById("legend");
  const lang = getLang();
  el.innerHTML = Object.entries(TYPES)
    .map(
      ([, meta]) =>
        `<div class="legend-row"><span class="legend-dot" style="background:${meta.color}"></span> ${lang === "fr" ? meta.fr : meta.en}</div>`,
    )
    .join("");
}

/* ── Distribution bars ───────────────────────────── */
function renderDistribution(filtered) {
  const el = document.getElementById("distribution");
  const lang = getLang();
  const counts = {};
  for (const key of Object.keys(TYPES)) counts[key] = 0;
  for (const init of filtered) counts[init.type] = (counts[init.type] || 0) + 1;
  const max = Math.max(1, ...Object.values(counts));

  el.innerHTML = Object.entries(TYPES)
    .map(([key, meta]) => {
      const count = counts[key] || 0;
      const pct = (count / max) * 100;
      const label = lang === "fr" ? meta.fr : meta.en;
      return `
        <div class="dist-row">
          <span class="dist-label">${label}</span>
          <div class="dist-bar-bg"><div class="dist-bar" style="width:${pct}%;background:${meta.color}"></div></div>
          <span class="dist-count">${count}</span>
        </div>`;
    })
    .join("");
}

/* ── Populate add-form selects ───────────────────── */
function populateFormSelects() {
  const lang = getLang();
  const typeSelect = document.getElementById("add-type");
  typeSelect.innerHTML = Object.entries(TYPES)
    .map(
      ([key, meta]) =>
        `<option value="${key}">${lang === "fr" ? meta.fr : meta.en}</option>`,
    )
    .join("");

  const statusSelect = document.getElementById("add-status");
  statusSelect.innerHTML = Object.entries(STATUSES)
    .map(
      ([key, meta]) =>
        `<option value="${key}">${lang === "fr" ? meta.fr : meta.en}</option>`,
    )
    .join("");
}

/* ── Update all translatable labels ──────────────── */
function updateLabels() {
  document.getElementById("app-title").textContent = t("title");
  document.getElementById("app-subtitle").textContent = t("subtitle");
  document.getElementById("search-input").placeholder = t("searchPlaceholder");
  document.getElementById("label-types").textContent = t("types");
  document.getElementById("label-tags").textContent = t("tags");
  document.getElementById("label-status").textContent = t("status");
  document.getElementById("label-legend").textContent = t("legend");
  document.getElementById("label-distribution").textContent = t("distributionByType");
  document.getElementById("label-add-initiative").textContent = t("addInitiative");
  document.getElementById("add-btn").textContent = t("add");
  document.getElementById("add-nameFr").placeholder = t("nameFr");
  document.getElementById("add-nameEn").placeholder = t("nameEn");
  document.getElementById("add-tags").placeholder = t("tagsLabel");
  document.getElementById("add-lat").placeholder = t("latitude");
  document.getElementById("add-lng").placeholder = t("longitude");
  document.getElementById("add-url").placeholder = t("website");
  document.getElementById("add-descFr").placeholder = t("descriptionFr");
  document.getElementById("add-descEn").placeholder = t("descriptionEn");
}

/* ── Full refresh ────────────────────────────────── */
function refresh() {
  const all = getAllInitiatives();
  const activeTypes = filterGetters.getActiveTypes();
  const activeTags = filterGetters.getActiveTags();
  const activeStatuses = filterGetters.getActiveStatuses();
  const filtered = filterInitiatives(
    all,
    activeTypes,
    activeTags,
    activeStatuses,
    searchQuery,
  );
  renderMarkers(filtered);
  renderCount(filtered, all.length);
  renderDistribution(filtered);
}

/* ── Setup filters ───────────────────────────────── */
function initFilters() {
  const typeContainer = document.getElementById("type-filters");
  const tagContainer = document.getElementById("tag-filters");
  const statusContainer = document.getElementById("status-filters");
  typeContainer.innerHTML = "";
  tagContainer.innerHTML = "";
  statusContainer.innerHTML = "";

  filterGetters = setupFilters(typeContainer, tagContainer, statusContainer, refresh);
}

/* ── Language switch ─────────────────────────────── */
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    setLang(lang);
    document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    updateLabels();
    populateFormSelects();
    renderLegend();
    // Re-init filters to update labels
    initFilters();
    refresh();
  });
});

/* ── Search ──────────────────────────────────────── */
document.getElementById("search-input").addEventListener("input", (e) => {
  searchQuery = e.target.value;
  refresh();
});

/* ── Add form ────────────────────────────────────── */
document.getElementById("add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;

  const tagsRaw = document.getElementById("add-tags").value;
  const tags = tagsRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  addInitiative({
    nameFr: document.getElementById("add-nameFr").value.trim(),
    nameEn: document.getElementById("add-nameEn").value.trim(),
    type: document.getElementById("add-type").value,
    status: document.getElementById("add-status").value,
    tags,
    lat: parseFloat(document.getElementById("add-lat").value),
    lng: parseFloat(document.getElementById("add-lng").value),
    url: document.getElementById("add-url").value.trim(),
    descriptionFr: document.getElementById("add-descFr").value.trim(),
    descriptionEn: document.getElementById("add-descEn").value.trim(),
    neighbourhood: "",
  });

  form.reset();
  refresh();
});

/* ── Click on map to fill lat/lng ────────────────── */
map.on("click", (e) => {
  document.getElementById("add-lat").value = e.latlng.lat.toFixed(6);
  document.getElementById("add-lng").value = e.latlng.lng.toFixed(6);
});

/* ── Initial render ──────────────────────────────── */
updateLabels();
populateFormSelects();
renderLegend();
initFilters();
refresh();
