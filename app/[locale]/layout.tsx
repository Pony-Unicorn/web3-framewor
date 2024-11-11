import "@/styles/globals.css"

import { ReactNode } from "react"
import { Metadata } from "next"
import { headers } from "next/headers"
import { env } from "@/env.mjs"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { ThemeProvider } from "next-themes"
import { Config, cookieToInitialState } from "wagmi"

import { wagmiAdapter } from "@/config/appkit"
import { siteConfig } from "@/config/site"
import { fontPlaywrite } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { NetworkStatus } from "@/components/blockchain/network-status"
import { TailwindIndicator } from "@/components/debug/tailwind-indicator"
import { Footer } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/site-header"
import AppKitProvider from "@/components/providers/AppKitProvider"

const url = env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: `${siteConfig.name} - ${siteConfig.description}`,
  description: siteConfig.description,
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    headers().get("cookie")
  )

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          fontPlaywrite.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AppKitProvider initialState={initialState}>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1 relative">{children}</main>
                <Footer />
              </div>
              <NetworkStatus />
              <Toaster />
            </AppKitProvider>
            <TailwindIndicator />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
