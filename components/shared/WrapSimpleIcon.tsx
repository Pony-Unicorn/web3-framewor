"use client"

import Image, { ImageLoaderProps } from "next/image"

export interface WrapSimpleIconProps {
  slug: string
  width?: number
  height?: number
  color?: string
  className?: string
}

/**
 * Wrap simpleicons popular brands svg
 * icons see https://simpleicons.org/
 * Example github
 */
const WrapSimpleIcon = ({
  slug,
  width = 16,
  height = 16,
  color = "default",
  className,
}: WrapSimpleIconProps) => (
  <Image
    className={className}
    loader={({ src }: ImageLoaderProps) =>
      `https://cdn.simpleicons.org/${src}/${color}`
    }
    src={slug}
    alt={`${slug} Icon`}
    width={width}
    height={height}
  />
)

export default WrapSimpleIcon
