import { describe, it, expect } from "vitest";
import { filterInitiatives } from "../js/filters.js";

const sampleData = [
  { id: 1, name: "Open Data Portal", category: "openData", neighbourhood: "Ville-Marie", description: "A portal" },
  { id: 2, name: "Bike Co-op", category: "transport", neighbourhood: "Plateau", description: "Bikes" },
  { id: 3, name: "Tree Canopy Map", category: "environment", neighbourhood: "Ahuntsic", description: "Trees" },
];

describe("filterInitiatives", () => {
  it("returns all initiatives when all categories active and no query", () => {
    const active = new Set(["openData", "transport", "environment"]);
    const result = filterInitiatives(sampleData, active, "");
    expect(result).toHaveLength(3);
  });

  it("filters by category", () => {
    const active = new Set(["transport"]);
    const result = filterInitiatives(sampleData, active, "");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Bike Co-op");
  });

  it("filters by search query on name", () => {
    const active = new Set(["openData", "transport", "environment"]);
    const result = filterInitiatives(sampleData, active, "bike");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  it("filters by neighbourhood", () => {
    const active = new Set(["openData", "transport", "environment"]);
    const result = filterInitiatives(sampleData, active, "ahuntsic");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(3);
  });

  it("returns empty when no categories match", () => {
    const active = new Set();
    const result = filterInitiatives(sampleData, active, "");
    expect(result).toHaveLength(0);
  });

  it("combines category and search filters", () => {
    const active = new Set(["openData"]);
    const result = filterInitiatives(sampleData, active, "portal");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });
});
