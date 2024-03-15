import React from "react"
import { useRouter } from "@/navigation"
import { useLocale } from "next-intl"

import {
  Select,
  SelectContent,
  SelectGroup,
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
  const changeLanguage = (e: string) => {
    router.replace(e, { scroll: true })
  }

  return (
    <Select onValueChange={changeLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={language[locale]} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ja">Japanese</SelectItem>
        <SelectItem value="ko">Korean</SelectItem>
        <SelectItem value="zh-CN">中文简体</SelectItem>
        <SelectItem value="zh-TW">中文繁体</SelectItem>
      </SelectContent>
    </Select>
  )
}
