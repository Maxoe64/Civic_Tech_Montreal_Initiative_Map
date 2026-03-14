/**
 * Montreal civic tech initiative dataset.
 * Each entry includes coordinates, category, status, and details.
 */

export const CATEGORIES = {
  openData: { label: "Open Data", color: "#2563eb" },
  community: { label: "Community Engagement", color: "#16a34a" },
  transport: { label: "Transportation", color: "#ea580c" },
  environment: { label: "Environment", color: "#059669" },
  digital: { label: "Digital Inclusion", color: "#7c3aed" },
};

export const initiatives = [
  {
    id: 1,
    name: "Données Ouvertes Montréal",
    category: "openData",
    neighbourhood: "Ville-Marie",
    lat: 45.5088,
    lng: -73.5538,
    status: "active",
    description:
      "City-wide open data portal providing hundreds of datasets on transit, infrastructure, permits, and public services.",
    url: "https://donnees.montreal.ca/",
  },
  {
    id: 2,
    name: "Budget Participatif",
    category: "community",
    neighbourhood: "Plateau-Mont-Royal",
    lat: 45.5225,
    lng: -73.5706,
    status: "active",
    description:
      "Participatory budgeting program allowing residents to propose and vote on neighbourhood improvement projects.",
    url: "",
  },
  {
    id: 3,
    name: "Vélo Libre MTL",
    category: "transport",
    neighbourhood: "Rosemont–La Petite-Patrie",
    lat: 45.5395,
    lng: -73.5817,
    status: "active",
    description:
      "Community bike-sharing co-op using open-source tracking to maintain a fleet of shared bicycles.",
    url: "",
  },
  {
    id: 4,
    name: "Capteurs Citoyens Air",
    category: "environment",
    neighbourhood: "Hochelaga-Maisonneuve",
    lat: 45.5415,
    lng: -73.5369,
    status: "active",
    description:
      "Citizen-led air-quality sensor network publishing real-time pollution data across eastern Montreal.",
    url: "",
  },
  {
    id: 5,
    name: "Labo Numérique NDG",
    category: "digital",
    neighbourhood: "Notre-Dame-de-Grâce",
    lat: 45.4772,
    lng: -73.6187,
    status: "active",
    description:
      "Free digital literacy workshops and computer access for seniors and newcomers.",
    url: "",
  },
  {
    id: 6,
    name: "Hackathon Civique MTL",
    category: "openData",
    neighbourhood: "Mile End",
    lat: 45.5271,
    lng: -73.5965,
    status: "active",
    description:
      "Annual civic hackathon bringing together developers, designers, and community organisers to build tools for the public good.",
    url: "",
  },
  {
    id: 7,
    name: "Consultation Verdun",
    category: "community",
    neighbourhood: "Verdun",
    lat: 45.4579,
    lng: -73.5719,
    status: "planned",
    description:
      "Digital platform for public consultations on local urban planning and green space development.",
    url: "",
  },
  {
    id: 8,
    name: "Transport Accessible AI",
    category: "transport",
    neighbourhood: "Saint-Laurent",
    lat: 45.5085,
    lng: -73.6673,
    status: "pilot",
    description:
      "AI-powered routing tool to help wheelchair users and people with reduced mobility find accessible transit routes.",
    url: "",
  },
  {
    id: 9,
    name: "Canopée Montréal",
    category: "environment",
    neighbourhood: "Ahuntsic-Cartierville",
    lat: 45.5505,
    lng: -73.6575,
    status: "active",
    description:
      "Mapping and tracking Montreal's urban tree canopy using satellite imagery and citizen contributions.",
    url: "",
  },
  {
    id: 10,
    name: "WiFi Communautaire PSC",
    category: "digital",
    neighbourhood: "Parc-Extension",
    lat: 45.5305,
    lng: -73.6215,
    status: "active",
    description:
      "Community mesh WiFi network providing free internet access to low-income housing blocks.",
    url: "",
  },
  {
    id: 11,
    name: "311 Analyse Ouverte",
    category: "openData",
    neighbourhood: "Côte-des-Neiges",
    lat: 45.4946,
    lng: -73.6282,
    status: "active",
    description:
      "Dashboard analysing 311 service requests to identify recurring neighbourhood issues and response times.",
    url: "",
  },
  {
    id: 12,
    name: "Jardin Intelligent LaSalle",
    category: "environment",
    neighbourhood: "LaSalle",
    lat: 45.4364,
    lng: -73.6315,
    status: "pilot",
    description:
      "IoT sensor-equipped community garden sharing soil moisture and growth data with urban agriculture researchers.",
    url: "",
  },
  {
    id: 13,
    name: "Citoyens Cartographes",
    category: "community",
    neighbourhood: "Mercier–Hochelaga-Maisonneuve",
    lat: 45.5565,
    lng: -73.5255,
    status: "active",
    description:
      "Volunteer mapping project documenting accessibility barriers, bike parking, and public amenities on OpenStreetMap.",
    url: "",
  },
  {
    id: 14,
    name: "Navette Autonome Griffintown",
    category: "transport",
    neighbourhood: "Griffintown",
    lat: 45.4929,
    lng: -73.5618,
    status: "planned",
    description:
      "Pilot project exploring autonomous shuttle service for the Griffintown–Lachine Canal corridor.",
    url: "",
  },
  {
    id: 15,
    name: "Code & Café Villeray",
    category: "digital",
    neighbourhood: "Villeray",
    lat: 45.5435,
    lng: -73.6139,
    status: "active",
    description:
      "Weekly drop-in coding sessions at a local café helping residents build personal websites, automate tasks, and learn programming.",
    url: "",
  },
];
