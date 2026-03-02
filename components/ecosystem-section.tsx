"use client"

import { motion } from "framer-motion"
import { ChartLine, Compass, Layers, Rocket } from "lucide-react"
import {
  transitions,
  staggerContainer,
  fadeInUp,
  viewportOnce,
} from "@/lib/animations"

const pillars = [
  {
    icon: Compass,
    title: "Diagnóstico y foco",
    description:
      "Analizamos oferta, narrativa y embudo para detectar bloqueos de percepción y venta en tiempo real.",
    tag: "Semana 1",
  },
  {
    icon: Layers,
    title: "Arquitectura de propuesta",
    description:
      "Definimos mensaje, autoridad y activos clave para que tu valor se entienda, se recuerde y se pague.",
    tag: "Semana 2",
  },
  {
    icon: Rocket,
    title: "Ejecución guiada",
    description:
      "Implementas con mentoría práctica, SOPs y ritmo semanal para pasar de ideas a acciones rentables.",
    tag: "Semanas 3-6",
  },
  {
    icon: ChartLine,
    title: "Optimización continua",
    description:
      "Medimos resultados y ajustamos mensajes, pricing y canales para escalar sin perder claridad estratégica.",
    tag: "Iterativo",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.spring,
  },
}

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative overflow-hidden py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Método Neurona
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Un sistema operativo para crecer con estrategia</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
            Cada etapa conecta posicionamiento, contenido, oferta y conversión para construir
            tracción real y sostenible.
          </p>
        </motion.div>

        {/* Cards — staggered entrance + hover lift */}
        <motion.div
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={transitions.springBouncy}
              className="group grain-overlay relative overflow-hidden rounded-2xl border border-border/80 bg-card/75 p-8 transition-colors hover:border-primary/50"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-[2.2]" />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  {pillar.tag}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
                  <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
