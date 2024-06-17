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
  description: "Web3 App framework built using Next.js, web3modal and more! ",
  localeDefault: "en",
  links: {
    docs: "",
    discord: "",
    twitter: "",
    github: "https://github.com/Pony-Unicorn/web3-framework",
  },
}

export const DEPLOY_URL =
  "https://vercel.com/new/clone?repository-url=https://github.com/Pony-Unicorn/web3-framework&project-name=Hexagon&repository-name=hexagon&demo-title=Hexagon&env=NEXT_PUBLIC_ALCHEMY_API_KEY,NEXT_PUBLIC_PROJECT_ID&envDescription=How%20to%20get%20these%20env%20variables:&envLink=https://github.com/Pony-Unicorn/web3-framework/blob/main/.env.local.example"

//   export type SiteConfig = typeof siteConfig

// export const siteConfig = {
//   name: "Next.js",
//   description:
//     "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
//   mainNav: [
//     {
//       title: "Home",
//       href: "/",
//     },
//   ],
//   links: {
//     twitter: "https://twitter.com/shadcn",
//     github: "https://github.com/shadcn/ui",
//     docs: "https://ui.shadcn.com",
//   },
// }