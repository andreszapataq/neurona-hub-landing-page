"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { transitions, staggerContainer } from "@/lib/animations"

/* ── Orchestrated hero container: stagger all direct children ── */
const heroContainer = staggerContainer(0.12, 0.2)

const heroItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 25 },
  },
}

/* ── Stats get their own stagger (nested inside hero) ── */
const statContainerVariants = staggerContainer(0.06, 0)

const statItemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.spring,
  },
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-14 pt-24 md:pb-20 md:pt-28">
      {/* Glow effect — animated entrance */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="h-[220px] w-[220px] rounded-full bg-primary/15 blur-[70px] md:h-[560px] md:w-[560px] md:blur-[120px]" />
      </motion.div>
      <div className="pointer-events-none absolute right-[-6rem] top-24 h-72 w-72 rounded-full bg-accent/20 blur-[110px]" />

      {/* Content — parent drives stagger for all children */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={heroItemVariants}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-5 py-2"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Diagnóstico de posicionamiento en 15 minutos
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={heroItemVariants}
          className="font-display text-4xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          <span className="text-balance">
            Convierte tu conocimiento en{" "}
            <span className="bg-gradient-to-r from-primary via-sky-300 to-accent bg-clip-text text-transparent">
              demanda real
            </span>{" "}
            y ventas consistentes.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={heroItemVariants}
          className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Estrategia, formación y acompañamiento para escalar tu marca personal o negocio digital
          sin improvisar contenido ni depender de la suerte.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={heroItemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={transitions.springBouncy}
          >
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary px-8 text-base text-primary-foreground shadow-[0_0_40px_hsl(var(--primary)/0.35)] hover:bg-primary/90"
            >
              <a href="https://calendar.app.google/Q6CEa9jN1BbW1iqG8" target="_blank" rel="noopener noreferrer">
                Reservar sesión estratégica
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={transitions.springBouncy}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-border bg-background/50 px-8 text-base text-foreground hover:bg-secondary"
            >
              <a href="#testimonials">
                Ver casos de éxito
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={statContainerVariants}
          className="mt-14 grid grid-cols-2 gap-5 rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur md:grid-cols-4 md:gap-8 md:p-8"
        >
          {[
            { value: "+500", label: "Profesionales impactados" },
            { value: "4", label: "Unidades de negocio activas" },
            { value: "92%", label: "Implementación en 30 días" },
            { value: "3.4x", label: "Mejora media en conversión" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={statItemVariants} className="text-center">
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
