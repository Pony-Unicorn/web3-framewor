import type { Address } from "wagmi"
import { create } from "zustand"

type TokenType = Address | undefined

const DEFAULT_VALUE: TokenType = undefined

const STORAGE_KEY = "erc20-token"

const getDefault = (storageKey: string) =>
  typeof window !== "undefined"
    ? (JSON.parse(localStorage.getItem(storageKey) || "") as Address)
    : DEFAULT_VALUE

export interface IERC20TokenStorage {
  erc20Token: TokenType
  setToken: (newToken: TokenType) => void
}

export const useERC20TokenStorage = create<IERC20TokenStorage>((set, get) => ({
  erc20Token: getDefault(STORAGE_KEY),
  setToken: (newToken: TokenType) => {
    set({ erc20Token: newToken })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newToken))
  },
}))
