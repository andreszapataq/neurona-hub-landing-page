"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    // ── Respect prefers-reduced-motion ──
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    // ── Detect mobile for performance tuning ──
    const isMobile = window.innerWidth < 768

    const nodes: Node[] = []
    const nodeCount = prefersReducedMotion ? 10 : isMobile ? 12 : 42
    const connectionDistance = isMobile ? 90 : 130
    const connectionDistanceSq = connectionDistance * connectionDistance
    const targetFps = prefersReducedMotion ? 0 : isMobile ? 20 : 45
    const frameInterval = targetFps > 0 ? 1000 / targetFps : 0

    let lastFrameTime = 0

    // ── Pause when tab is hidden ──
    let isVisible = true
    const handleVisibility = () => {
      isVisible = !document.hidden
    }
    document.addEventListener("visibilitychange", handleVisibility)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      // Reset transform before scaling; iOS can fire many resize events.
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener("resize", resize)

    const logicalWidth = window.innerWidth
    const logicalHeight = window.innerHeight

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * logicalWidth,
        y: Math.random() * logicalHeight,
        vx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.4),
        vy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.4),
      })
    }

    /** Draw a single static frame (for reduced-motion users) */
    const drawStaticFrame = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      // Connections
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distSq = dx * dx + dy * dy

          if (distSq < connectionDistanceSq) {
            const opacity =
              (1 - Math.sqrt(distSq) / connectionDistance) * 0.15
            ctx.strokeStyle = `rgba(46, 155, 218, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      ctx.fillStyle = "rgba(46, 155, 218, 0.3)"
      for (let i = 0; i < nodes.length; i++) {
        ctx.beginPath()
        ctx.arc(nodes[i].x, nodes[i].y, 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // If reduced motion, draw once and stop
    if (prefersReducedMotion) {
      drawStaticFrame()
      return () => {
        window.removeEventListener("resize", resize)
        document.removeEventListener("visibilitychange", handleVisibility)
      }
    }

    const animate = (timestamp: number) => {
      animationId = requestAnimationFrame(animate)

      if (!isVisible) return

      // Throttle FPS
      const elapsed = timestamp - lastFrameTime
      if (elapsed < frameInterval) return
      lastFrameTime = timestamp - (elapsed % frameInterval)

      const w = window.innerWidth
      const h = window.innerHeight

      ctx.clearRect(0, 0, w, h)

      // Update positions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1
      }

      // Draw connections — squared distance avoids sqrt per pair
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distSq = dx * dx + dy * dy

          if (distSq < connectionDistanceSq) {
            const opacity =
              (1 - Math.sqrt(distSq) / connectionDistance) * 0.15
            ctx.strokeStyle = `rgba(46, 155, 218, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = "rgba(46, 155, 218, 0.3)"
      for (let i = 0; i < nodes.length; i++) {
        ctx.beginPath()
        ctx.arc(nodes[i].x, nodes[i].y, 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
