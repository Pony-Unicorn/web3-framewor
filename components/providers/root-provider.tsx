"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

import { useIsMounted } from "@/lib/hooks/use-is-mounted"
import { RainbowKit } from "@/components/providers/rainbow-kit"

interface RootProviderProps {
  children: ReactNode
}

export default function RootProvider({ children }: RootProviderProps) {
  const isMounted = useIsMounted()
  return isMounted ? (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RainbowKit>{children}</RainbowKit>
    </ThemeProvider>
  ) : null
}
