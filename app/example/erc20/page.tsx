"use client"

import Link from "next/link"
import { LuBook } from "react-icons/lu"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { IsWalletConnected } from "@/components/blockchain/is-wallet-connected"
import { IsWalletDisconnected } from "@/components/blockchain/is-wallet-disconnected"
import { WalletConnect } from "@/components/blockchain/wallet-connect"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { PageSection } from "@/components/layout/page-section"
import { LightDarkImage } from "@/components/shared/light-dark-image"
import { ERC20Deploy } from "@/integrations/erc20/components/erc20-deploy"
import { ERC20Read } from "@/integrations/erc20/components/erc20-read"
import { Erc20SetTokenStorage } from "@/integrations/erc20/components/erc20-set-token-storage"
import { ERC20WriteMint } from "@/integrations/erc20/components/erc20-write-mint"
import { ERC20WriteTransfer } from "@/integrations/erc20/components/erc20-write-transfer"
import { useERC20TokenStorage } from "@/integrations/erc20/hooks/use-erc20-token-storage"

export default function Erc20Page() {
  const [token] = useERC20TokenStorage((state) => [state.erc20Token])

  return (
    <div className="container relative mt-20">
      <PageHeader className="pb-8">
        <LightDarkImage
          LightImage="/integrations/erc20.png"
          DarkImage="/integrations/erc20.png"
          alt="ERC20 Logo"
          width={100}
          height={100}
        />
        <PageHeaderHeading>ERC20</PageHeaderHeading>
        <PageHeaderDescription>
          ERC20 is a standard for fungible tokens on EVM chains
        </PageHeaderDescription>
        <PageHeaderCTA>
          <Link
            href="https://eips.ethereum.org/EIPS/eip-20"
            target="_blank"
            rel="noreferrer noopener"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LuBook className="mr-2 h-4 w-4" />
            Documentation
          </Link>
        </PageHeaderCTA>
      </PageHeader>
      <PageSection>
        <IsWalletConnected>
          <div className="flex w-full max-w-screen-lg flex-col gap-y-8">
            <ERC20Deploy />
            <Erc20SetTokenStorage />
            {token && (
              <>
                <Card>
                  <CardContent className="flex flex-col">
                    <span className="mb-4 text-lg">
                      Access the token page where you can update the url
                      parameters to select which ERC20 token to view
                    </span>
                    <Link
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" })
                      )}
                      href={`/example/erc20/1/0xed2F865e3427f0a9F9249912263a701eAe882EE4`}
                    >
                      View Token Page
                    </Link>
                  </CardContent>
                </Card>
                <ERC20Read address={token} />
                <ERC20WriteMint address={token} />
                <ERC20WriteTransfer address={token} />
              </>
            )}
          </div>
        </IsWalletConnected>
        <IsWalletDisconnected>
          <div className="flex items-center justify-center">
            <WalletConnect />
          </div>
        </IsWalletDisconnected>
      </PageSection>
    </div>
  )
}
