import type { useTheme } from "next-themes"
import { create } from "zustand"

type ITheme = Exclude<ReturnType<typeof useTheme>["systemTheme"], undefined>

const DEFAULT_VALUE: ITheme = "light"

const STORAGE_KEY = "theme"

const getDefault: (storageKey: string) => ITheme = (storageKey) =>
  typeof window !== "undefined"
    ? (localStorage.getItem(storageKey) as ITheme) || DEFAULT_VALUE
    : DEFAULT_VALUE

export interface IColorMode {
  theme: ITheme
  setMode: (newTheme: ITheme) => void
  toggleMode: () => void
}

export const useColorMode = create<IColorMode>((set, get) => ({
  theme: getDefault(STORAGE_KEY),
  setMode: (newTheme: ITheme) => {
    set({ theme: newTheme })
    localStorage.setItem(STORAGE_KEY, newTheme)
  },
  toggleMode: () => get().setMode(get().theme === "light" ? "dark" : "light"),
}))
