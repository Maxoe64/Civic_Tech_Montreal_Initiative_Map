import { describe, it, expect, beforeEach } from "vitest";
import { filterInitiatives } from "../js/filters.js";

const sampleData = [
  {
    id: 1,
    nameFr: "Portail Open Data",
    nameEn: "Open Data Portal",
    type: "plateforme",
    tags: ["open-data"],
    neighbourhood: "Ville-Marie",
    status: "active",
    descriptionFr: "Un portail",
    descriptionEn: "A portal",
  },
  {
    id: 2,
    nameFr: "Coop Vélo",
    nameEn: "Bike Co-op",
    type: "collectif",
    tags: ["open-source", "mobilité"],
    neighbourhood: "Plateau",
    status: "active",
    descriptionFr: "Vélos",
    descriptionEn: "Bikes",
  },
  {
    id: 3,
    nameFr: "Carte Canopée",
    nameEn: "Tree Canopy Map",
    type: "obnl",
    tags: ["environnement", "cartographie"],
    neighbourhood: "Ahuntsic",
    status: "veille",
    descriptionFr: "Arbres",
    descriptionEn: "Trees",
  },
  {
    id: 4,
    nameFr: "Projet Terminé",
    nameEn: "Finished Project",
    type: "projet",
    tags: [],
    neighbourhood: "Verdun",
    status: "termine",
    descriptionFr: "Fini",
    descriptionEn: "Done",
  },
];

const allTypes = new Set(["plateforme", "collectif", "obnl", "projet"]);
const allTags = new Set(["open-data", "open-source", "mobilité", "environnement", "cartographie"]);
const allStatuses = new Set(["active", "veille", "termine"]);

describe("filterInitiatives", () => {
  it("returns all initiatives when everything is active and no query", () => {
    const result = filterInitiatives(sampleData, allTypes, allTags, allStatuses, "");
    expect(result).toHaveLength(4);
  });

  it("filters by type", () => {
    const types = new Set(["collectif"]);
    const result = filterInitiatives(sampleData, types, allTags, allStatuses, "");
    expect(result).toHaveLength(1);
    expect(result[0].nameEn).toBe("Bike Co-op");
  });

  it("filters by status", () => {
    const statuses = new Set(["veille"]);
    const result = filterInitiatives(sampleData, allTypes, allTags, statuses, "");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(3);
  });

  it("filters by tag — excludes initiatives missing active tags", () => {
    const tags = new Set(["open-data"]);
    const result = filterInitiatives(sampleData, allTypes, tags, allStatuses, "");
    // id=1 has open-data, id=4 has no tags (passes), id=2 & id=3 don't have open-data
    expect(result.map((i) => i.id)).toEqual([1, 4]);
  });

  it("filters by search query on name (FR)", () => {
    const result = filterInitiatives(sampleData, allTypes, allTags, allStatuses, "vélo");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  it("filters by neighbourhood", () => {
    const result = filterInitiatives(sampleData, allTypes, allTags, allStatuses, "ahuntsic");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(3);
  });

  it("filters by tag text in search", () => {
    const result = filterInitiatives(sampleData, allTypes, allTags, allStatuses, "cartographie");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(3);
  });

  it("returns empty when no types match", () => {
    const result = filterInitiatives(sampleData, new Set(), allTags, allStatuses, "");
    expect(result).toHaveLength(0);
  });

  it("combines type, status, and search filters", () => {
    const types = new Set(["plateforme", "obnl"]);
    const statuses = new Set(["active"]);
    const result = filterInitiatives(sampleData, types, allTags, statuses, "portail");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });
});
