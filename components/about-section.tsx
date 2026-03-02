"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck } from "lucide-react"
import {
  transitions,
  staggerContainer,
  fadeInUp,
  slideInRight,
  viewportOnce,
} from "@/lib/animations"

const values = [
  "Estrategia antes que estética vacía o volumen sin foco.",
  "Sistemas simples para ejecutar sin desgaste mental.",
  "Marca personal como activo empresarial, no solo visibilidad.",
  "Decisiones guiadas por datos y feedback del mercado.",
  "Acompañamiento humano para sostener consistencia.",
  "Educación accionable: menos teoría, mas implementación.",
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
              <div className="grain-overlay rounded-xl bg-gradient-to-br from-primary/15 via-secondary to-card p-6 sm:p-12">
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={staggerContainer(0.06, 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {[
                    { label: "Claridad", desc: "Mensaje" },
                    { label: "Oferta", desc: "Estructura" },
                    { label: "Sistema", desc: "Ejecución" },
                    { label: "Escala", desc: "Optimización" },
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
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 p-4 text-center"
                >
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="font-display text-lg font-bold text-primary">Framework NeuronaHub</span>
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
              Manifiesto
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              <span className="text-balance">
                No vendemos humo. Construimos posicionamiento que factura.
              </span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              NeuronaHub nace para eliminar la brecha entre saber mucho y lograr poco. Combinamos
              pensamiento estratégico, ejecución guiada y accountability para que avances con una
              ruta concreta, no con tareas sueltas.
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
