import { env } from "@/env.mjs"
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config"
import { cookieStorage, createStorage } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"

import { siteConfig } from "./site"

export const config = defaultWagmiConfig({
  projectId: env.NEXT_PUBLIC_PROJECT_ID,
  chains: env.NEXT_PUBLIC_ENABLE_TESTNETS ? [sepolia] : [mainnet],
  metadata: {
    name: siteConfig.name,
    description: siteConfig.description,
    url: env.NEXT_PUBLIC_SITE_URL,
    icons: [`${env.NEXT_PUBLIC_SITE_URL}favicon.ico`],
  },
  auth: {
    email: false, // default to true, Remove email login
  },
  enableWalletConnect: false, // default to true, Remove trust wallet and WalletConnect
  enableEIP6963: true,
  enableCoinbase: false, // default to true, Remove Coinbase
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
})
