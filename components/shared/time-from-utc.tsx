import { HTMLAttributes, useEffect, useState } from "react"
import dayjs from "dayjs"

interface TimeFromUtcProps extends HTMLAttributes<HTMLSpanElement> {
  date: string
}

export const TimeFromUtc = ({
  className,
  date,
  ...props
}: TimeFromUtcProps) => {
  const [timestamp, setTimestamp] = useState<string>()
  useEffect(() => {
    if (date) {
      setTimestamp(dayjs(date).utc().local().format())
    }
  }, [date])
  return (
    <span className={className} {...props}>
      {timestamp}
    </span>
  )
}
