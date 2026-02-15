"use client"

import { MotionConfig } from "framer-motion"
import { useEffect, useState } from "react"

/**
 * Wraps the app with MotionConfig to globally respect the user's
 * prefers-reduced-motion OS setting. When enabled, all framer-motion
 * animations complete instantly (no motion).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState<"never" | "always">("never")

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const applyPreference = () => {
      setReducedMotion(mediaQuery.matches ? "always" : "never")
    }

    applyPreference()
    mediaQuery.addEventListener("change", applyPreference)

    return () => {
      mediaQuery.removeEventListener("change", applyPreference)
    }
  }, [])

  return (
    <MotionConfig reducedMotion={reducedMotion}>
      {children}
    </MotionConfig>
  )
}
