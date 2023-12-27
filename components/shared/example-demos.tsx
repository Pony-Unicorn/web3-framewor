"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, MotionProps } from "framer-motion"
import Balancer from "react-wrap-balancer"

import { fadeUpVariant } from "@/config/design"
import { DEPLOY_URL } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { WalletAddress } from "@/components/blockchain/wallet-address"
import { WalletConnect } from "@/components/blockchain/wallet-connect"
import { PageSectionGrid } from "@/components/layout/page-section"
import { IsWalletConnected } from "@/components/shared/is-wallet-connected"
import { IsWalletDisconnected } from "@/components/shared/is-wallet-disconnected"
import {
  ERC20Decimals,
  ERC20Name,
  ERC20Symbol,
} from "@/integrations/erc20/components/erc20-read"

const demos = [
  {
    title: "Example Components",
    description: "example UI components.",
    demo: (
      <div className="min-w-[220px] text-center">
        <Link href="/example/com" className={cn(buttonVariants())}>
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
        <img
          alt="Deploy with Vercel"
          src="https://vercel.com/button"
          width={120}
        />
      </a>
    ),
  },
  {
    title: "Rainbowkit",
    description:
      "The best way to connect a wallet. Designed for everyone. Built for developers.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="Rainbow logo"
          height={100}
          src="/integrations/rainbowkit.svg"
          width={100}
        />
      </div>
    ),
  },
  {
    title: "ERC20 WAGMI",
    description:
      "Read and Write to ERC20 smart contracts using minimal UI components.",
    demo: (
      <div className="min-w-[220px] text-center">
        <h3 className="mt-4 text-2xl font-normal">
          <ERC20Name
            address={
              "0xed2F865e3427f0a9F9249912263a701eAe882EE4" as "0x${string}"
            }
            chainId={1}
          />
          (
          <ERC20Symbol
            address={
              "0xed2F865e3427f0a9F9249912263a701eAe882EE4" as "0x${string}"
            }
            chainId={1}
          />
          )
        </h3>
        <p>
          Decimals
          <ERC20Decimals
            address={
              "0xed2F865e3427f0a9F9249912263a701eAe882EE4" as "0x${string}"
            }
            chainId={1}
          />
        </p>
        <Link href="/example/erc20" className={cn(buttonVariants())}>
          View Token Page
        </Link>
      </div>
    ),
  },
]

interface ExampleDemosProps extends MotionProps {
  className?: string
}

export function ExampleDemos({ className, ...props }: ExampleDemosProps) {
  return (
    <PageSectionGrid className={className} {...props}>
      {demos.map(({ title, description, demo }) => (
        <DemoCard
          key={title}
          title={title}
          description={description}
          demo={demo}
        />
      ))}
    </PageSectionGrid>
  )
}

interface DemoCardProps extends MotionProps {
  demo: React.ReactNode
  title: string
  description: string
}

function DemoCard({ title, description, demo }: DemoCardProps) {
  return (
    <motion.div
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
  )
}
