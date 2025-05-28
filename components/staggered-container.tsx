"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"

interface StaggeredContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  baseDelay?: number
}

export function StaggeredContainer({
  children,
  className = "",
  staggerDelay = 100,
  baseDelay = 0,
}: StaggeredContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, baseDelay)
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
  }, [baseDelay])

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}
          style={{
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
