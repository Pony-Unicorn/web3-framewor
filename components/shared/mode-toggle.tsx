"use client"

import * as Switch from "@radix-ui/react-switch"
import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Switch.Root
      className="peer inline-flex h-9 w-9 shrink-0 cursor-pointer items-center"
      onCheckedChange={(checked) => {
        checked ? setTheme("light") : setTheme("dark")
      }}
      defaultChecked={theme === "light"}
    >
      <Switch.Thumb className="data-[state=unchecked]:hidden">
        <LuSun className="h-6 w-6 rotate-0 transition-all dark:-rotate-90" />
      </Switch.Thumb>
      <Switch.Thumb className="data-[state=checked]:hidden">
        <LuMoon className="h-6 w-6 rotate-90 transition-all dark:rotate-0" />
      </Switch.Thumb>
    </Switch.Root>
  )
}
