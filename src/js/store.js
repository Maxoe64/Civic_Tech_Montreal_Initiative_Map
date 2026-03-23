import { defaultInitiatives, STORAGE_KEY } from "../data/initiatives.js";

/**
 * Manages initiative data: merges built-in defaults with user-added
 * initiatives persisted in localStorage.
 */

function loadUserInitiatives() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUserInitiatives(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function getAllInitiatives() {
  return [...defaultInitiatives, ...loadUserInitiatives()];
}

export function addInitiative(data) {
  const all = getAllInitiatives();
  const maxId = all.reduce((max, i) => Math.max(max, i.id), 0);
  const initiative = { ...data, id: maxId + 1, userAdded: true };
  const userItems = loadUserInitiatives();
  userItems.push(initiative);
  saveUserInitiatives(userItems);
  return initiative;
}

export function removeUserInitiative(id) {
  const userItems = loadUserInitiatives().filter((i) => i.id !== id);
  saveUserInitiatives(userItems);
}
