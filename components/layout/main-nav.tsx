"use client"

import React from "react"
// import { usePathname } from "next/navigation"
// import Link from "next/link"
import { Link, usePathname } from "@/navigation"
import { FaExternalLinkAlt } from "react-icons/fa"

import { menu as menuConfig } from "@/config/menu"
import { siteConfig } from "@/config/site"
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
      <Link href="/" className="flex items-center">
        <LightDarkImage
          LightImage="/logo-dark.png"
          DarkImage="/logo-light.png"
          alt="Hexagon Logo"
          className="rounded-full mx-2"
          height={32}
          width={32}
        />
        <span className="hidden bg-gradient-primary bg-clip-text text-2xl font-bold text-transparent sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <MainNavMenu />
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-4">
          <Link
            className="flex items-center gap-2"
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <FaExternalLinkAlt />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            className="flex items-center gap-2"
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
            <FaExternalLinkAlt />
            <span className="sr-only">Twitter</span>
          </Link>
        </nav>
      </div>
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
              <Link href={href}>{title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
