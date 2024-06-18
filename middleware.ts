import createMiddleware from "next-intl/middleware"

import { localePrefix, locales } from "./navigation"

export default createMiddleware({
  locales,
  defaultLocale: locales[0],
  localePrefix,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ko|zh-CN|ja|zh-TW|en)/:path*"],
}
