"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale" | "rotate"
  duration?: number
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 1000,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`
    const durationClass = `duration-${duration}`

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
        case "down":
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`
        case "left":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`
        case "right":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`
        case "fade":
          return `${baseClasses} ${durationClass} opacity-0`
        case "scale":
          return `${baseClasses} ${durationClass} opacity-0 scale-75`
        case "rotate":
          return `${baseClasses} ${durationClass} opacity-0 rotate-12 scale-75`
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
      }
    } else {
      return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
