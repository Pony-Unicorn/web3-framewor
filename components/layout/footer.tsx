import { HTMLAttributes } from "react"
import Link from "next/link"
import packageJson from "@/package.json"
import { Github, Twitter } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { LinkComponent } from "../shared/link-component"
import { buttonVariants } from "../ui/button"

export function Footer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const classes = cn(
    className,
    "flex flex-col items-center justify-center px-4 py-6"
  )

  return (
    <footer className={classes} {...props}>
      <Link
        href="https://testbug.cc/"
        target="_blank"
        rel="noreferrer noopenner"
        className={cn(buttonVariants({ variant: "link", size: "sm" }))}
      >
        Built by Pony Unicorn, version: {packageJson.version}
      </Link>
      <div className="mt-2 flex items-center space-x-2">
        <LinkComponent href={`${siteConfig.links.github}`}>
          <Github />
        </LinkComponent>
        <LinkComponent href={`${siteConfig.links.twitter}`}>
          <Twitter />
        </LinkComponent>
      </div>
    </footer>
  )
}
