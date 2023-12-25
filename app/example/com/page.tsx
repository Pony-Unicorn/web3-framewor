"use client"

import { PageHeader, PageHeaderHeading } from "@/components/layout/page-header"
import { PageSectionGrid } from "@/components/layout/page-section"

export default function Page() {
  return (
    <div className="container relative mt-20 px-0">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Components Demo</PageHeaderHeading>
      </PageHeader>
      <PageSectionGrid></PageSectionGrid>
    </div>
  )
}
