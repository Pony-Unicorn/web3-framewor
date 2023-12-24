import { PageHeader, PageHeaderHeading } from "@/components/layout/page-header"

export default function Page() {
  return (
    <div className="container relative mt-20 px-0">
      <PageHeader className="pb-8">
        <PageHeaderHeading>
          <p>This About</p>
        </PageHeaderHeading>
      </PageHeader>
    </div>
  )
}
