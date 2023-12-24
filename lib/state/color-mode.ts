import { create } from "zustand"

const STORAGE_KEY = "theme"

const getDefault = (storageKey: string) =>
  typeof window !== "undefined"
    ? localStorage.getItem(storageKey) || "system"
    : "system"

export interface IColorMode {
  theme: string
  setMode: (newTheme: string) => void
  toggleMode: () => void
}

export const useColorMode = create<IColorMode>((set, get) => ({
  theme: getDefault(STORAGE_KEY),
  setMode: (newTheme: string) => {
    set({ theme: newTheme })
    localStorage.setItem(STORAGE_KEY, newTheme)
  },
  toggleMode: () => get().setMode(get().theme === "light" ? "dark" : "light"),
}))
