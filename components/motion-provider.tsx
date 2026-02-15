"use client"

import { MotionConfig } from "framer-motion"

/**
 * Wraps the app with MotionConfig to globally respect the user's
 * prefers-reduced-motion OS setting. When enabled, all framer-motion
 * animations complete instantly (no motion).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  )
}
