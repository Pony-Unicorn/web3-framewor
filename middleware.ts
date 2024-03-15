import createMiddleware from "next-intl/middleware"

import { localePrefix, locales } from "./navigation"

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ko|zh-CN|ja|zh-TW|en)/:path*"],
}
