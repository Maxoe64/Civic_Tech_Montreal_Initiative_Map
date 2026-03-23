/**
 * Montreal civic tech initiative dataset.
 * Bilingual (FR/EN), with types, tags, and status.
 */

export const TYPES = {
  laboratoire: { fr: "Laboratoire", en: "Lab", color: "#1e3a5f" },
  obnl: { fr: "OBNL", en: "Non-profit", color: "#2d6a4f" },
  collectif: { fr: "Collectif", en: "Collective", color: "#b5179e" },
  gouvernement: { fr: "Gouvernement", en: "Government", color: "#3f37c9" },
  projet: { fr: "Projet", en: "Project", color: "#4361ee" },
  evenement: { fr: "Événement", en: "Event", color: "#f77f00" },
  plateforme: { fr: "Plateforme", en: "Platform", color: "#e63946" },
};

export const STATUSES = {
  active: { fr: "Actif", en: "Active", color: "#16a34a", dot: "#16a34a" },
  veille: { fr: "En veille", en: "On hold", color: "#ea580c", dot: "#ea580c" },
  termine: { fr: "Terminé", en: "Completed", color: "#6b7280", dot: "#6b7280" },
};

export const ALL_TAGS = [
  "open-data",
  "open-source",
  "hackathon",
  "mobilité",
  "environnement",
  "inclusion",
  "urbanisme",
  "IA",
  "IoT",
  "cartographie",
];

export const STORAGE_KEY = "civic-tech-mtl-user-initiatives";

export const defaultInitiatives = [
  {
    id: 1,
    nameFr: "Données Ouvertes Montréal",
    nameEn: "Montreal Open Data",
    type: "plateforme",
    tags: ["open-data"],
    neighbourhood: "Ville-Marie",
    lat: 45.5088,
    lng: -73.5538,
    status: "active",
    descriptionFr:
      "Portail de données ouvertes de la Ville offrant des centaines de jeux de données sur le transport, l'infrastructure et les services publics.",
    descriptionEn:
      "City-wide open data portal providing hundreds of datasets on transit, infrastructure, permits, and public services.",
    url: "https://donnees.montreal.ca/",
    userAdded: false,
  },
  {
    id: 2,
    nameFr: "Budget Participatif",
    nameEn: "Participatory Budget",
    type: "gouvernement",
    tags: ["open-data"],
    neighbourhood: "Plateau-Mont-Royal",
    lat: 45.5225,
    lng: -73.5706,
    status: "active",
    descriptionFr:
      "Programme de budget participatif permettant aux résidents de proposer et voter sur des projets d'amélioration de quartier.",
    descriptionEn:
      "Participatory budgeting program allowing residents to propose and vote on neighbourhood improvement projects.",
    url: "",
    userAdded: false,
  },
  {
    id: 3,
    nameFr: "Vélo Libre MTL",
    nameEn: "Free Bike MTL",
    type: "collectif",
    tags: ["open-source", "mobilité"],
    neighbourhood: "Rosemont–La Petite-Patrie",
    lat: 45.5395,
    lng: -73.5817,
    status: "active",
    descriptionFr:
      "Coopérative communautaire de vélopartage utilisant un suivi open-source pour entretenir une flotte de vélos partagés.",
    descriptionEn:
      "Community bike-sharing co-op using open-source tracking to maintain a fleet of shared bicycles.",
    url: "",
    userAdded: false,
  },
  {
    id: 4,
    nameFr: "Capteurs Citoyens Air",
    nameEn: "Citizen Air Sensors",
    type: "projet",
    tags: ["environnement", "IoT"],
    neighbourhood: "Hochelaga-Maisonneuve",
    lat: 45.5415,
    lng: -73.5369,
    status: "active",
    descriptionFr:
      "Réseau citoyen de capteurs de qualité de l'air publiant des données de pollution en temps réel dans l'est de Montréal.",
    descriptionEn:
      "Citizen-led air-quality sensor network publishing real-time pollution data across eastern Montreal.",
    url: "",
    userAdded: false,
  },
  {
    id: 5,
    nameFr: "Labo Numérique NDG",
    nameEn: "NDG Digital Lab",
    type: "laboratoire",
    tags: ["inclusion"],
    neighbourhood: "Notre-Dame-de-Grâce",
    lat: 45.4772,
    lng: -73.6187,
    status: "active",
    descriptionFr:
      "Ateliers gratuits de littératie numérique et accès informatique pour les aînés et les nouveaux arrivants.",
    descriptionEn:
      "Free digital literacy workshops and computer access for seniors and newcomers.",
    url: "",
    userAdded: false,
  },
  {
    id: 6,
    nameFr: "Hackathon Civique MTL",
    nameEn: "MTL Civic Hackathon",
    type: "evenement",
    tags: ["hackathon", "open-data", "open-source"],
    neighbourhood: "Mile End",
    lat: 45.5271,
    lng: -73.5965,
    status: "active",
    descriptionFr:
      "Hackathon civique annuel réunissant développeurs, designers et organisateurs communautaires pour créer des outils d'intérêt public.",
    descriptionEn:
      "Annual civic hackathon bringing together developers, designers, and community organisers to build tools for the public good.",
    url: "",
    userAdded: false,
  },
  {
    id: 7,
    nameFr: "Consultation Verdun",
    nameEn: "Verdun Consultation",
    type: "gouvernement",
    tags: ["urbanisme"],
    neighbourhood: "Verdun",
    lat: 45.4579,
    lng: -73.5719,
    status: "veille",
    descriptionFr:
      "Plateforme numérique de consultations publiques sur l'aménagement urbain et le développement des espaces verts.",
    descriptionEn:
      "Digital platform for public consultations on local urban planning and green space development.",
    url: "",
    userAdded: false,
  },
  {
    id: 8,
    nameFr: "Transport Accessible IA",
    nameEn: "Accessible Transit AI",
    type: "projet",
    tags: ["IA", "mobilité", "inclusion"],
    neighbourhood: "Saint-Laurent",
    lat: 45.5085,
    lng: -73.6673,
    status: "active",
    descriptionFr:
      "Outil de routage alimenté par l'IA pour aider les personnes en fauteuil roulant à trouver des trajets de transport en commun accessibles.",
    descriptionEn:
      "AI-powered routing tool to help wheelchair users and people with reduced mobility find accessible transit routes.",
    url: "",
    userAdded: false,
  },
  {
    id: 9,
    nameFr: "Canopée Montréal",
    nameEn: "Montreal Canopy",
    type: "obnl",
    tags: ["environnement", "cartographie"],
    neighbourhood: "Ahuntsic-Cartierville",
    lat: 45.5505,
    lng: -73.6575,
    status: "active",
    descriptionFr:
      "Cartographie et suivi de la canopée urbaine de Montréal à l'aide d'imagerie satellite et de contributions citoyennes.",
    descriptionEn:
      "Mapping and tracking Montreal's urban tree canopy using satellite imagery and citizen contributions.",
    url: "",
    userAdded: false,
  },
  {
    id: 10,
    nameFr: "WiFi Communautaire PSC",
    nameEn: "PSC Community WiFi",
    type: "collectif",
    tags: ["inclusion", "open-source"],
    neighbourhood: "Parc-Extension",
    lat: 45.5305,
    lng: -73.6215,
    status: "active",
    descriptionFr:
      "Réseau WiFi maillé communautaire offrant un accès Internet gratuit aux habitations à loyer modique.",
    descriptionEn:
      "Community mesh WiFi network providing free internet access to low-income housing blocks.",
    url: "",
    userAdded: false,
  },
  {
    id: 11,
    nameFr: "311 Analyse Ouverte",
    nameEn: "311 Open Analysis",
    type: "projet",
    tags: ["open-data"],
    neighbourhood: "Côte-des-Neiges",
    lat: 45.4946,
    lng: -73.6282,
    status: "active",
    descriptionFr:
      "Tableau de bord analysant les requêtes 311 pour identifier les problèmes récurrents de quartier et les temps de réponse.",
    descriptionEn:
      "Dashboard analysing 311 service requests to identify recurring neighbourhood issues and response times.",
    url: "",
    userAdded: false,
  },
  {
    id: 12,
    nameFr: "Jardin Intelligent LaSalle",
    nameEn: "LaSalle Smart Garden",
    type: "projet",
    tags: ["environnement", "IoT"],
    neighbourhood: "LaSalle",
    lat: 45.4364,
    lng: -73.6315,
    status: "veille",
    descriptionFr:
      "Jardin communautaire équipé de capteurs IoT partageant des données d'humidité du sol et de croissance avec des chercheurs en agriculture urbaine.",
    descriptionEn:
      "IoT sensor-equipped community garden sharing soil moisture and growth data with urban agriculture researchers.",
    url: "",
    userAdded: false,
  },
  {
    id: 13,
    nameFr: "Citoyens Cartographes",
    nameEn: "Citizen Mappers",
    type: "collectif",
    tags: ["cartographie", "open-data"],
    neighbourhood: "Mercier–Hochelaga-Maisonneuve",
    lat: 45.5565,
    lng: -73.5255,
    status: "active",
    descriptionFr:
      "Projet bénévole de cartographie documentant les obstacles d'accessibilité, le stationnement vélo et les aménagements publics sur OpenStreetMap.",
    descriptionEn:
      "Volunteer mapping project documenting accessibility barriers, bike parking, and public amenities on OpenStreetMap.",
    url: "",
    userAdded: false,
  },
  {
    id: 14,
    nameFr: "Navette Autonome Griffintown",
    nameEn: "Griffintown Autonomous Shuttle",
    type: "projet",
    tags: ["IA", "mobilité"],
    neighbourhood: "Griffintown",
    lat: 45.4929,
    lng: -73.5618,
    status: "termine",
    descriptionFr:
      "Projet pilote explorant un service de navette autonome pour le corridor Griffintown–Canal de Lachine.",
    descriptionEn:
      "Pilot project exploring autonomous shuttle service for the Griffintown–Lachine Canal corridor.",
    url: "",
    userAdded: false,
  },
  {
    id: 15,
    nameFr: "Code & Café Villeray",
    nameEn: "Code & Coffee Villeray",
    type: "evenement",
    tags: ["inclusion", "open-source"],
    neighbourhood: "Villeray",
    lat: 45.5435,
    lng: -73.6139,
    status: "active",
    descriptionFr:
      "Sessions de programmation hebdomadaires dans un café local aidant les résidents à créer des sites web, automatiser des tâches et apprendre la programmation.",
    descriptionEn:
      "Weekly drop-in coding sessions at a local café helping residents build personal websites, automate tasks, and learn programming.",
    url: "",
    userAdded: false,
  },
];
