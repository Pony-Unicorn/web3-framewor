"use client"

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { CopyButton } from "@/components/shared/copy-button"
import { Example } from "@/components/shared/example"
import WrapSimpleIcon from "@/components/shared/WrapSimpleIcon"

export default function HomePage() {
  return (
    <div className="container relative mt-20 px-0">
      <PageHeader className="pb-8">
        <Image
          src="/logo-gradient.png"
          alt="hexagon Logo"
          width={80}
          height={80}
          className="h-20 w-20 rounded-2xl"
        />
        <PageHeaderHeading>Build Web3 in Hexagon&nbsp;Mode</PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
        <PageHeaderCTA>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: "secondary" })}
          >
            <WrapSimpleIcon className="mr-2" slug="github" color="white" />
            Github
          </Link>
        </PageHeaderCTA>
        <PageHeaderCTA>
          <CopyButton value="pnpm create hexagon-web3@latest">
            <span className="text-xs sm:text-base">
              pnpm create hexagon-web3@latest
            </span>
          </CopyButton>
        </PageHeaderCTA>
      </PageHeader>
      <Example />
    </div>
  )
}
