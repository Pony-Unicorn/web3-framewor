import React from "react"
import { usePathname, useRouter } from "@/navigation"
import { useLocale } from "next-intl"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const language = {
  en: "English",
  "zh-CN": "中文简体",
  ko: "Korean",
  ja: "Japanese",
  "zh-TW": "中文繁体",
} as Record<string, string>

export default function LanguageToggle() {
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()
  const changeLanguage = (e: string) =>
    router.replace(pathname, { locale: e as any, scroll: true })

  return (
    <Select onValueChange={changeLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={language[locale]} />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(language).map((v) => (
          <SelectItem key={v[0]} value={v[0]}>
            {v[1]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
