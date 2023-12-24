import { env } from "@/env.mjs"

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  links: {
    docs: string
    discord: string
    twitter: string
    github: string
  }
}

export const SITE_CANONICAL = env.NEXT_PUBLIC_SITE_URL

export const siteConfig: SiteConfig = {
  name: "Hexagon",
  title: "Hexagon - Web3 App Framework",
  emoji: "⬡",
  description: "Web3 App framework built using Next.js, RainbowKit and more! ",
  localeDefault: "en",
  links: {
    docs: "",
    discord: "",
    twitter: "",
    github: "https://github.com/Pony-Unicorn/web3-framework",
  },
}

// https://vercel.com/new/clone?repository-url=https://github.com/Pony-Unicorn/web3-framework&project-name=Hexagon&repository-name=hexagon&demo-title=Hexagon&env=NEXT_PUBLIC_ALCHEMY_API_KEY,NEXT_PUBLIC_PROJECT_ID&envDescription=How to get these env variables:&envLink=https://github.com/Pony-Unicorn/web3-framework/blob/main/.env.local.example
export const DEPLOY_URL =
  "https%3A%2F%2Fvercel.com%2Fnew%2Fclone%3Frepository-url%3Dhttps%3A%2F%2Fgithub.com%2FPony-Unicorn%2Fweb3-framework%26project-name%3DHexagon%26repository-name%3Dhexagon%26demo-title%3DHexagon%26env%3DNEXT_PUBLIC_ALCHEMY_API_KEY%2CNEXT_PUBLIC_PROJECT_ID%26envDescription%3DHow%20to%20get%20these%20env%20variables%3A%26envLink%3Dhttps%3A%2F%2Fgithub.com%2FPony-Unicorn%2Fweb3-framework%2Fblob%2Fmain%2F.env.local.example"
