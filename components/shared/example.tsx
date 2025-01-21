"use client"

// import Link from "next/link"
import { Link } from "@/navigation"
import { motion } from "framer-motion"
import Balancer from "react-wrap-balancer"

import { fadeUpVariant } from "@/config/design"
import { DEPLOY_URL } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { IsWalletConnected } from "@/components/blockchain/is-wallet-connected"
import { IsWalletDisconnected } from "@/components/blockchain/is-wallet-disconnected"
import { WalletAddress } from "@/components/blockchain/wallet-address"
import { WalletConnect } from "@/components/blockchain/wallet-connect"
import { PageSectionGrid } from "@/components/layout/page-section"

const demos = [
  {
    title: "Example",
    description: "All examples.",
    demo: (
      <div className="min-w-[220px] text-center">
        <Link
          href="/example"
          className={cn(buttonVariants(), "font-playwrite")}
        >
          View Example Page
        </Link>
      </div>
    ),
  },
  {
    title: "Web3 Components for the power developer",
    description: "Pre-built Web3 components, powered by WAGMI",
    demo: (
      <div className="mx-auto  justify-between">
        <IsWalletConnected>
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-5 lg:pt-10">
            <div className=" block text-center">
              <WalletAddress isLink truncate />
              <span className="mt-4 block font-mono text-xs font-semibold">
                &lt;WalletAddress isLink truncate /&gt;
              </span>
            </div>
          </div>
        </IsWalletConnected>
        <IsWalletDisconnected>
          <WalletConnect className="mx-auto inline-block" />
        </IsWalletDisconnected>
      </div>
    ),
  },
  {
    title: "One-click Deploy",
    description:
      "Start your next Web3 project in hexagon Mode with a deploy to Vercel in one click.",
    demo: (
      <a href={DEPLOY_URL} rel="noreferrer" target="_blank">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Deploy with Vercel"
          src="https://vercel.com/button"
          width={120}
        />
      </a>
    ),
  },
]

export function Example() {
  return (
    <PageSectionGrid>
      {demos.map(({ title, description, demo }) => (
        <motion.div
          key={title}
          variants={fadeUpVariant()}
          className={`relative col-span-1 overflow-hidden rounded-xl border bg-card px-4 shadow-sm transition-shadow hover:shadow-md`}
        >
          <div className="flex h-60 items-center justify-center">{demo}</div>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mb-3 bg-gradient-primary bg-clip-text text-xl font-bold text-transparent md:text-3xl md:font-normal">
              <Balancer>{title}</Balancer>
            </h2>
            <div className="prose-sm md:prose -mt-2 leading-normal text-muted-foreground">
              <Balancer>{description}</Balancer>
            </div>
          </div>
        </motion.div>
      ))}
    </PageSectionGrid>
  )
}
