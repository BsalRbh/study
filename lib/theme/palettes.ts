export const PALETTES = [
  { id: "indigo", label: "Indigo", swatch: "oklch(0.52 0.22 277)" },
  { id: "teal", label: "Teal", swatch: "oklch(0.52 0.1 185)" },
  { id: "violet", label: "Violet", swatch: "oklch(0.54 0.24 293)" },
  { id: "terracotta", label: "Terracotta", swatch: "oklch(0.58 0.2085 31.8)" },
] as const;

export type PaletteId = (typeof PALETTES)[number]["id"];

export const DEFAULT_PALETTE: PaletteId = "indigo";
export const PALETTE_STORAGE_KEY = "exam-prep-hub:palette";

// Runs in <head> before first paint so a saved palette never flashes the default.
export const paletteInitScript = `(function(){try{var p=localStorage.getItem(${JSON.stringify(
  PALETTE_STORAGE_KEY
)});if(p&&${JSON.stringify(PALETTES.map((p) => p.id))}.indexOf(p)>-1)document.documentElement.setAttribute("data-palette",p)}catch(e){}})()`;

const listeners = new Set<() => void>();

export function subscribePalette(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getPalette(): PaletteId {
  return (document.documentElement.getAttribute("data-palette") as PaletteId) ?? DEFAULT_PALETTE;
}

export function setPalette(id: PaletteId) {
  document.documentElement.setAttribute("data-palette", id);
  try {
    localStorage.setItem(PALETTE_STORAGE_KEY, id);
  } catch {}
  listeners.forEach((l) => l());
}
