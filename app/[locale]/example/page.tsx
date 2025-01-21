"use client"

import { useEffect } from "react"
import { useTranslations } from "next-intl"
import { SiweMessage } from "siwe"
import { toast } from "sonner"
import { useAccount, useSignMessage } from "wagmi"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PageHeader, PageHeaderHeading } from "@/components/layout/page-header"
import { PageSectionGrid } from "@/components/layout/page-section"

export default function Page() {
  const t = useTranslations("example")

  const account = useAccount()
  const { signMessage, data } = useSignMessage()

  useEffect(() => {
    if (data) {
      console.log("signMessage>>>", data)
    }
  }, [data])

  return (
    <div className="container relative mt-20 px-0">
      <PageHeader className="pb-8">
        <PageHeaderHeading>{t("title")}</PageHeaderHeading>
      </PageHeader>
      <PageSectionGrid>
        <Card>
          <CardHeader>
            <CardTitle>Toast Demo</CardTitle>
            <CardDescription>Toast Demo demonstration</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-3">
            <Button
              onClick={() => {
                toast("Your message failed to be sent.", {
                  className: "error",
                })
              }}
            >
              toast
            </Button>

            <Button
              variant={"destructive"}
              onClick={() => {
                toast.error("My error toast")
              }}
            >
              toast error
            </Button>

            <Input type="email" placeholder="Email" />
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Siwe sign</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-3">
            <Button
              onClick={async () => {
                const message = new SiweMessage({
                  domain: document.location.host,
                  address: account.address,
                  chainId: account.chainId,
                  uri: document.location.origin,
                  version: "1",
                  statement: "Please sign with your account",
                  nonce: await getNonce(),
                })

                signMessage({ message: message.prepareMessage() })
              }}
            >
              Siwe Sign
            </Button>
          </CardContent>
        </Card>
      </PageSectionGrid>
    </div>
  )
}

const getNonce = async (): Promise<string> => {
  const res = await fetch(
    "https://sepolia-wallet.nanon.network/thirdparty/siwe/nonce",
    {
      method: "GET",
    }
  )
  if (!res.ok) {
    throw new Error("Network response was not ok")
  }

  const resData = await res.json()
  const nonce = resData.data.nonce
  console.log("Nonce:", nonce)
  return nonce
}
