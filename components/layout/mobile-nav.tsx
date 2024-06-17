"use client"

import { useState } from "react"
import { Link } from "@/navigation"
// import Link from "next/link"
import { LuMenu } from "react-icons/lu"

import { menu as menuConfig } from "@/config/menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { WalletConnect } from "../blockchain/wallet-connect"
import { ThemeToggle } from "../shared/theme-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="flex w-full items-center justify-between md:hidden">
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <LuMenu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <WalletConnect />
      </div>
      <SheetContent side="left" className="pr-0">
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
        </div>
        <ul className="mt-6 flex flex-col gap-y-6">
          {menuConfig.map(({ title, href }) => (
            <li key={title} onClick={() => setOpen(false)}>
              <Link href={href}>{title}</Link>
              <Separator className="mt-2" />
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
