"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"

const values = [
  "Integrar y dar coherencia a todas las líneas de negocio",
  "Entrenar la mente para el crecimiento personal y profesional",
  "Fortalecer la marca personal como activo estratégico",
  "Potenciar el crecimiento empresarial con herramientas digitales",
  "Crear comunidad y conexiones de valor real",
  "Democratizar el acceso a educación de calidad",
]

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative overflow-hidden py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-1">
              <div className="rounded-xl bg-gradient-to-br from-primary/10 via-secondary to-card p-6 sm:p-12">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Academy", desc: "Formación" },
                    { label: "BrandLab", desc: "Marca" },
                    { label: "Learning", desc: "Educación" },
                    { label: "Café", desc: "Comunidad" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
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
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="mt-4 flex items-center justify-center rounded-xl border border-primary/30 bg-primary/10 p-4 text-center"
                >
                  <span className="font-display text-lg font-bold text-primary">
                    NeuronaHub
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
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

            <ul className="mt-8 flex flex-col gap-4">
              {values.map((value, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
