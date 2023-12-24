import { HTMLAttributes, useEffect, useState } from "react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

interface TimeFromEpochProps extends HTMLAttributes<HTMLSpanElement> {
  epoch?: number | string
}

export const TimeFromEpoch = ({
  className,
  epoch,
  ...props
}: TimeFromEpochProps) => {
  const [timestamp, setTimestamp] = useState<string>()
  useEffect(() => {
    if (epoch) {
      setTimestamp(dayjs.unix(Number(epoch)).utc().local().format())
    }
  }, [])
  return (
    <span className={className} {...props}>
      {timestamp}
    </span>
  )
}

export default TimeFromEpoch
