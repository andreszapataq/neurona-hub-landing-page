"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Network, Lightbulb, Target, Layers } from "lucide-react"

const pillars = [
  {
    icon: Lightbulb,
    title: "Formación estratégica",
    description:
      "Programas diseñados para desarrollar habilidades de alto impacto en marketing digital, liderazgo y desarrollo profesional.",
  },
  {
    icon: Target,
    title: "Asesoría personalizada",
    description:
      "Acompañamiento one-to-one para definir y ejecutar estrategias de marca personal y crecimiento empresarial.",
  },
  {
    icon: Network,
    title: "Educación digital",
    description:
      "Plataformas y contenidos educativos que conectan el conocimiento con la acción práctica y resultados medibles.",
  },
  {
    icon: Layers,
    title: "Productos funcionales",
    description:
      "Herramientas, recursos y productos diseñados para potenciar la productividad y la presencia digital.",
  },
]

export function EcosystemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ecosystem" className="relative overflow-hidden py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Ecosistema
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Un ecosistema diseñado para el crecimiento</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
            NeuronaHub no opera como una unidad comercial independiente, sino como el paraguas
            estratégico que da coherencia a todas las líneas de negocio.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
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
        </div>
      </div>
    </section>
  )
}
