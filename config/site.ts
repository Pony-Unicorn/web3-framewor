import manifestJson from "@/public/manifest.json"

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: manifestJson.name,
  description: manifestJson.description,
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
