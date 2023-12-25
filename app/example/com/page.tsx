"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { PageHeader, PageHeaderHeading } from "@/components/layout/page-header"
import { PageSectionGrid } from "@/components/layout/page-section"

export default function Page() {
  return (
    <div className="container relative mt-20 px-0">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Components Demo</PageHeaderHeading>
      </PageHeader>
      <PageSectionGrid>
        <Button
          onClick={() => {
            toast("Your message failed to be sent.", {
              className: "error",
            })
          }}
        >
          toast
        </Button>

        <Button
          variant={"destructive"}
          onClick={() => {
            toast.error("My error toast")
          }}
        >
          toast error
        </Button>
      </PageSectionGrid>
    </div>
  )
}
