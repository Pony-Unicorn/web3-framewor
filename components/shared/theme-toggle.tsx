"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <LuSun className="dark:hidden size-5" />
      <LuMoon className="hidden dark:block size-5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
