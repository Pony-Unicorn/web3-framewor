import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // Iron session requires a secret of at least 32 characters
    // NEXTAUTH_SECRET: z.string().min(32),
  },
  client: {
    NEXT_PUBLIC_ENABLE_TESTNETS: z
      .enum(["true", "false"])
      .default("false")
      .transform((val) => val === "true"),
    NEXT_PUBLIC_ALCHEMY_API_KEY: z.string().min(1).optional(),
    NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000/"),
    NEXT_PUBLIC_PROJECT_ID: z.string().length(32).readonly(),
  },
  runtimeEnv: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_ENABLE_TESTNETS: process.env.NEXT_PUBLIC_ENABLE_TESTNETS,
    NEXT_PUBLIC_ALCHEMY_API_KEY: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
})
