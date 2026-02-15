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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Glow effect — animated entrance */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="h-[180px] w-[180px] rounded-full bg-primary/10 blur-[70px] md:h-[500px] md:w-[500px] md:blur-[120px]" />
      </motion.div>

      {/* Content — parent drives stagger for all children */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={heroItemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Ecosistema de crecimiento integral</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={heroItemVariants}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          <span className="text-balance">
            Entrena tu mente.{" "}
            <span className="text-primary">Potencia</span> tu crecimiento.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={heroItemVariants}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
        >
          NeuronaHub integra formación, asesoría, educación digital y productos funcionales
          bajo un mismo ecosistema estratégico para fortalecer tu marca personal y profesional.
        </motion.p>

        {/* CTA Buttons — with hover & tap micro-interactions */}
        <motion.div
          variants={heroItemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={transitions.springBouncy}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explorar el ecosistema
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={transitions.springBouncy}
          >
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              Conocer más
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats — nested stagger container */}
        <motion.div
          variants={statContainerVariants}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { value: "4", label: "Marcas integradas" },
            { value: "360°", label: "Visión estratégica" },
            { value: "100%", label: "Enfoque digital" },
            { value: "+500", label: "Profesionales" },
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
