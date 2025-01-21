import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // NEXTAUTH_SECRET: z.string().min(32),
  },
  client: {
    NEXT_PUBLIC_APP_MODE: z.enum(["pro", "dev"]).default("dev"),
    NEXT_PUBLIC_USE_TESTNETS: z
      .enum(["true", "false"])
      .default(process.env.NEXT_PUBLIC_APP_MODE === "pro" ? "false" : "true")
      .transform((val) => val === "true"),
    NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000/"),
    NEXT_PUBLIC_PROJECT_ID: z.string().length(32).readonly(),
    // NEXT_PUBLIC_ALCHEMY_API_KEY: z.string().min(1).optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_MODE: process.env.NEXT_PUBLIC_APP_MODE,
    NEXT_PUBLIC_USE_TESTNETS: process.env.NEXT_PUBLIC_USE_TESTNETS,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    // NEXT_PUBLIC_ALCHEMY_API_KEY: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  },
})
