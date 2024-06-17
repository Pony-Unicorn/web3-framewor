"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

interface LightDarkImageProps {
  LightImage: string
  DarkImage: string
  alt: string
  height: number
  width: number
  className?: string
}

const LightDarkImage = ({
  LightImage,
  DarkImage,
  alt,
  height,
  width,
  className,
}: LightDarkImageProps) => {
  return (
    <>
      <Image
        src={DarkImage}
        alt={alt}
        width={width}
        height={height}
        className={cn("hidden dark:block object-contain", className)}
      />
      <Image
        src={LightImage}
        alt={alt}
        width={width}
        height={height}
        className={cn("dark:hidden object-contain", className)}
      />
    </>
  )
}

export { LightDarkImage }
