"use client"

import React, { type ReactNode } from "react"
import { env } from "@/env.mjs"
import { createAppKit } from "@reown/appkit/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Config, WagmiProvider, type State } from "wagmi"

import { networks, wagmiAdapter } from "@/config/appkit"
import { siteConfig } from "@/config/site"

const queryClient = new QueryClient()

// Set up metadata
const metadata = {
  name: siteConfig.name,
  description: siteConfig.description,
  url: env.NEXT_PUBLIC_SITE_URL,
  icons: [`${env.NEXT_PUBLIC_SITE_URL}favicon.ico`],
}

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: env.NEXT_PUBLIC_PROJECT_ID,
  networks,
  metadata: metadata,
  features: {
    email: false,
    socials: false,
    swaps: false,
    onramp: false,
  },
  allWallets: "ONLY_MOBILE",
  debug: env.NEXT_PUBLIC_ENABLE_TESTNETS,
  enableWalletConnect: false, // default to true, Remove trust wallet and WalletConnect
  enableEIP6963: true,
  enableCoinbase: false, // default to true, Remove Coinbase
  featuredWalletIds: [
    "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
  ],
})

function AppKitProvider({
  children,
  initialState,
}: {
  children: ReactNode
  initialState: State | undefined
}) {
  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default AppKitProvider
