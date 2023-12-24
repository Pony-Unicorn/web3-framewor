export const integrationCategories = [
  "general",
  "protocols",
  "services",
] as const

interface HexagonIntegration {
  name: string
  href: string
  url: string
  description: string
  imgLight: string
  imgDark: string
  category: (typeof integrationCategories)[number]
}

export const hexagonIntegrations: Record<string, HexagonIntegration> = {
  erc20: {
    name: "ERC20",
    href: "/integration/erc20",
    url: "https://eips.ethereum.org/EIPS/eip-20",
    description: "ERC20 is a standard for fungible tokens on EVM chains",
    imgLight: "/integrations/erc20.png",
    imgDark: "/integrations/erc20.png",
    category: "protocols",
  },
} as const
