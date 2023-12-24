"use client"

import "@rainbow-me/rainbowkit/styles.css"

import { ReactNode } from "react"
import { env } from "@/env.mjs"
import {
  darkTheme,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"
import { createConfig, WagmiConfig } from "wagmi"

import { chains, publicClient } from "@/config/networks"
import { siteConfig } from "@/config/site"
import { useColorMode } from "@/lib/state/color-mode"

const { connectors } = getDefaultWallets({
  appName: siteConfig.name,
  projectId: env.NEXT_PUBLIC_PROJECT_ID,
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

export function RainbowKit({ children }: { children: ReactNode }) {
  const [colorMode] = useColorMode((state) => state.theme)
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={{ appName: siteConfig.name }}
        locale="en-US"
        theme={colorMode === "dark" ? darkTheme() : lightTheme()}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
