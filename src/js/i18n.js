const translations = {
  fr: {
    title: "Cartographie des initiatives en technologie civique à Montréal",
    subtitle: "Mapping Civic Tech Initiatives in Montréal",
    searchPlaceholder: "Rechercher une initiative…",
    types: "Types",
    tags: "Tags",
    status: "Statut",
    legend: "Légende",
    distributionByType: "Répartition par type",
    addInitiative: "Ajouter une initiative (sauvegarde locale)",
    nameFr: "Nom (FR)",
    nameEn: "Name (EN)",
    type: "Type",
    statusLabel: "Statut",
    tagsLabel: "Tags (séparés par des virgules)",
    latitude: "Latitude",
    longitude: "Longitude",
    website: "Site web",
    descriptionFr: "Description FR",
    descriptionEn: "Description EN",
    add: "Ajouter",
    remove: "Retirer",
    shown: "affichées",
    approxLocation: "Localisation approximative",
    listView: "Liste",
    userAdded: "Ajouté localement",
  },
  en: {
    title: "Mapping Civic Tech Initiatives in Montréal",
    subtitle: "Cartographie des initiatives en technologie civique à Montréal",
    searchPlaceholder: "Search initiatives…",
    types: "Types",
    tags: "Tags",
    status: "Status",
    legend: "Legend",
    distributionByType: "Distribution by type",
    addInitiative: "Add an initiative (local save)",
    nameFr: "Name (FR)",
    nameEn: "Name (EN)",
    type: "Type",
    statusLabel: "Status",
    tagsLabel: "Tags (comma-separated)",
    latitude: "Latitude",
    longitude: "Longitude",
    website: "Website",
    descriptionFr: "Description FR",
    descriptionEn: "Description EN",
    add: "Add",
    remove: "Remove",
    shown: "shown",
    approxLocation: "Approximate location",
    listView: "List",
    userAdded: "Locally added",
  },
};

let currentLang = "fr";

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
}

export function t(key) {
  return translations[currentLang]?.[key] ?? translations.fr[key] ?? key;
}

/** Get a bilingual field value based on current language. */
export function localized(item, field) {
  const frKey = field + "Fr";
  const enKey = field + "En";
  if (currentLang === "en") {
    return item[enKey] || item[frKey] || "";
  }
  return item[frKey] || item[enKey] || "";
}
