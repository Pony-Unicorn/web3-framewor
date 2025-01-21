import { env } from "@/env"
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_SITE_URL}${path}`
}

export function trimFormattedBalance(
  balance: string | undefined,
  decimals = 4
) {
  if (!balance) {
    return "0"
  }
  const [integer, decimal] = balance.split(".")
  if (!decimal) return integer

  const trimmedDecimal = decimal.slice(0, decimals)
  return `${integer}.${trimmedDecimal}`
}

export function truncateEthAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function GetNetworkColor(chain?: string) {
  if (chain === "homestead") return "green"
  if (chain === "arbitrum") return "blue"
  if (chain === "optimism") return "red"
  if (chain === "matic") return "purple"
  if (chain === "goerli") return "yellow"

  return "gray"
}

export const sleep = (ms = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms))
