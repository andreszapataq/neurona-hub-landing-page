import { type Variants } from "framer-motion"

// ────────────────────────────────────────────────────────────────
// Transition presets — consistent feel across the entire site
// Uses GPU-accelerated properties only (opacity + transform)
// ────────────────────────────────────────────────────────────────

export const transitions = {
  /** Default spring — balanced, natural feel */
  spring: { type: "spring" as const, stiffness: 260, damping: 25 },
  /** Bouncy spring — playful micro-interactions (hover, tap) */
  springBouncy: { type: "spring" as const, stiffness: 400, damping: 17 },
  /** Stiff spring — snappy UI responses */
  springStiff: { type: "spring" as const, stiffness: 500, damping: 30 },
  /** Smooth tween — for opacity fades and subtle movements */
  smooth: {
    type: "tween" as const,
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1] as number[],
  },
} as const

// ────────────────────────────────────────────────────────────────
// Viewport config — shared whileInView settings
// margin: "-80px" triggers when 80px inside viewport so users see
// the animation beginning, not the completed state.
// ────────────────────────────────────────────────────────────────

export const viewportOnce = { once: true, margin: "-80px" } as const

// ────────────────────────────────────────────────────────────────
// Orchestration — stagger containers
// ────────────────────────────────────────────────────────────────

export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0.15
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren, delayChildren },
  },
})

// ────────────────────────────────────────────────────────────────
// Element variants — GPU-accelerated (opacity + transform only)
// ────────────────────────────────────────────────────────────────

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.spring,
  },
}

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.spring,
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.spring,
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.spring,
  },
}
