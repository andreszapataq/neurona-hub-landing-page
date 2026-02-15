"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import {
  transitions,
  staggerContainer,
  fadeInUp,
  slideInRight,
  viewportOnce,
} from "@/lib/animations"

const values = [
  "Integrar y dar coherencia a todas las líneas de negocio",
  "Entrenar la mente para el crecimiento personal y profesional",
  "Fortalecer la marca personal como activo estratégico",
  "Potenciar el crecimiento empresarial con herramientas digitales",
  "Crear comunidad y conexiones de valor real",
  "Democratizar el acceso a educación de calidad",
]

const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.spring,
  },
}

const valueItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.spring,
  },
}

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Visual — fade in + stagger grid items */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-1">
              <div className="rounded-xl bg-gradient-to-br from-primary/10 via-secondary to-card p-6 sm:p-12">
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={staggerContainer(0.06, 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {[
                    { label: "Academy", desc: "Formación" },
                    { label: "BrandLab", desc: "Marca" },
                    { label: "Learning", desc: "Educación" },
                    { label: "Café", desc: "Comunidad" },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      variants={gridItemVariants}
                      whileHover={{ scale: 1.04, y: -2 }}
                      transition={transitions.springBouncy}
                      className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-background/50 p-4 text-center backdrop-blur-sm sm:p-6"
                    >
                      <span className="font-display text-lg font-bold text-foreground">
                        {item.label}
                      </span>
                      <span className="mt-1 text-xs text-muted-foreground">
                        {item.desc}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="mt-4 flex items-center justify-center rounded-xl border border-primary/30 bg-primary/10 p-4 text-center"
                >
                  <span className="font-display text-lg font-bold text-primary">
                    NeuronaHub
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content — slide in from right + stagger values */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Nosotros
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              <span className="text-balance">
                El paraguas estratégico que conecta todo
              </span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              NeuronaHub es la marca matriz del ecosistema. Su función principal es integrar,
              ordenar y dar coherencia a todas las líneas de negocio: formación, asesoría,
              educación digital y productos funcionales.
            </p>

            <motion.ul
              className="mt-8 flex flex-col gap-4"
              variants={staggerContainer(0.06, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {values.map((value, i) => (
                <motion.li
                  key={i}
                  variants={valueItemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{value}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
