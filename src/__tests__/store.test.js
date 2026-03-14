/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { getAllInitiatives, addInitiative, removeUserInitiative } from "../js/store.js";
import { STORAGE_KEY, defaultInitiatives } from "../data/initiatives.js";

describe("store", () => {
  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);
  });

  it("returns default initiatives when localStorage is empty", () => {
    const all = getAllInitiatives();
    expect(all.length).toBe(defaultInitiatives.length);
  });

  it("adds a user initiative and persists it", () => {
    const init = addInitiative({
      nameFr: "Test Init",
      nameEn: "Test Init EN",
      type: "projet",
      tags: ["open-data"],
      status: "active",
      lat: 45.5,
      lng: -73.5,
      url: "",
      descriptionFr: "Desc",
      descriptionEn: "Desc EN",
      neighbourhood: "",
    });

    expect(init.id).toBeGreaterThan(defaultInitiatives.length);
    expect(init.userAdded).toBe(true);

    const all = getAllInitiatives();
    expect(all.length).toBe(defaultInitiatives.length + 1);
    expect(all[all.length - 1].nameFr).toBe("Test Init");

    // Verify localStorage
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    expect(stored).toHaveLength(1);
    expect(stored[0].nameFr).toBe("Test Init");
  });

  it("removes a user initiative", () => {
    const init = addInitiative({
      nameFr: "To Remove",
      nameEn: "",
      type: "projet",
      tags: [],
      status: "active",
      lat: 45.5,
      lng: -73.5,
      url: "",
      descriptionFr: "",
      descriptionEn: "",
      neighbourhood: "",
    });

    removeUserInitiative(init.id);
    const all = getAllInitiatives();
    expect(all.length).toBe(defaultInitiatives.length);
  });
});
