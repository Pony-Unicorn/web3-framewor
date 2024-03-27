import { useTranslations } from "next-intl"

import { PageHeader, PageHeaderHeading } from "@/components/layout/page-header"

export default function Page() {
  const t = useTranslations("About")

  return (
    <div className="container relative mt-20 px-0">
      <PageHeader className="pb-8">
        <PageHeaderHeading>
          <p>{t("title")}</p>
        </PageHeaderHeading>
      </PageHeader>
    </div>
  )
}
