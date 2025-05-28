"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rotate-45 animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent/25 rounded-full animate-float-fast"></div>
      <div className="absolute top-60 left-1/3 w-5 h-5 bg-muted/40 rotate-12 animate-float-slow"></div>
      <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-primary/15 rounded-full animate-float-medium"></div>
      <div className="absolute top-1/3 right-10 w-7 h-7 bg-secondary/20 rotate-45 animate-float-fast"></div>
    </div>
  )
}
