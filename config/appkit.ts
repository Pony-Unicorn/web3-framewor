import { env } from "@/env.mjs"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import { mainnet, sepolia, type AppKitNetwork } from "@reown/appkit/networks"
import { cookieStorage, createStorage } from "@wagmi/core"

export const networks: [AppKitNetwork, ...AppKitNetwork[]] =
  env.NEXT_PUBLIC_ENABLE_TESTNETS ? [sepolia] : [mainnet]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId: env.NEXT_PUBLIC_PROJECT_ID,
  networks,
})

export const config = wagmiAdapter.wagmiConfig
