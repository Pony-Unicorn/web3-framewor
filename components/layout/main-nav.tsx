"use client"

import React from "react"
import { usePathname } from "next/navigation"
// import Link from "next/link"
import { Link } from "@/navigation"

import { menu as menuConfig } from "@/config/menu"
import { siteConfig } from "@/config/site"
import { isUrl } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { LightDarkImage } from "@/components/shared/light-dark-image"

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <LightDarkImage
          LightImage="/logo-dark.png"
          DarkImage="/logo-light.png"
          alt="Hexagon Logo"
          className="rounded-full"
          height={32}
          width={32}
        />
        <span className="hidden bg-gradient-primary bg-clip-text text-2xl font-bold text-transparent sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <MainNavMenu />
    </div>
  )
}

function MainNavMenu() {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuConfig.map(({ title, href }) => (
          <NavigationMenuItem key={title}>
            <NavigationMenuLink
              asChild
              active={pathname === href}
              className={navigationMenuTriggerStyle()}
            >
              <Link href={href} target={isUrl(href) ? "_blank" : "_self"}>
                {title}
                {isUrl(href) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                )}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
