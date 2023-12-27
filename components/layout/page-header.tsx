"use client"

import { motion, MotionProps } from "framer-motion"

import { fadeDownVariant, staggerContainer } from "@/config/design"
import { cn } from "@/lib/utils"

interface MotionHeaderProps extends MotionProps {
  className?: string
  children?: React.ReactNode
}

function PageHeader({ className, children, ...props }: MotionHeaderProps) {
  return (
    <motion.section
      variants={staggerContainer({ staggerChildren: 0.15 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={cn(
        "mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 pt-8 md:pt-12",
        className
      )}
      {...props}
    >
      {children}
    </motion.section>
  )
}

function PageHeaderHeading({
  className,
  children,
  ...props
}: MotionHeaderProps) {
  return (
    <motion.h1
      variants={fadeDownVariant()}
      className={cn(
        "bg-gradient-primary bg-clip-text text-center text-4xl font-bold leading-tight tracking-tight text-transparent drop-shadow-sm md:text-8xl md:leading-[6rem] lg:leading-[1.1]",
        className
      )}
      {...props}
    >
      {children}
    </motion.h1>
  )
}

function PageHeaderDescription({
  className,
  children,
  ...props
}: MotionHeaderProps) {
  return (
    <motion.p
      variants={fadeDownVariant()}
      className={cn(
        "text-center text-lg text-muted-foreground md:text-xl",
        className
      )}
      {...props}
    >
      {children}
    </motion.p>
  )
}

// CTA 全称 Call-To-Action ，它是 Web 和 App 上的关键 UI 元素，例如购买，联系，订阅等，其主要目的是引导用户采取某些行动，使页面提升转化。
function PageHeaderCTA({ className, children, ...props }: MotionHeaderProps) {
  return (
    <motion.div
      variants={fadeDownVariant()}
      className={cn(
        "mx-auto mt-4 flex max-w-4xl flex-wrap items-center justify-center gap-3",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription, PageHeaderCTA }
