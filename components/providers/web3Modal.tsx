"use client"

import React, { type ReactNode } from "react"
import { env } from "@/env.mjs"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createWeb3Modal } from "@web3modal/wagmi/react"
import { WagmiProvider, type State } from "wagmi"

import { config } from "@/config/web3Modal"

const queryClient = new QueryClient()

createWeb3Modal({
  wagmiConfig: config,
  projectId: env.NEXT_PUBLIC_PROJECT_ID,
  enableOnramp: false, // default to true, Remove buy
  featuredWalletIds: [
    "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
  ],
})

function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode
  initialState: State | undefined
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3ModalProvider
