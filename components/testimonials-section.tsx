"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { fadeInUp, staggerContainer, transitions, viewportOnce } from "@/lib/animations"

const testimonials = [
  {
    quote:
      "Pasamos de publicar por intuicion a tener un sistema que nos genero 3 clientes premium en 6 semanas.",
    author: "Laura M.",
    role: "Consultora B2B",
    impact: "+214% en solicitudes calificadas",
  },
  {
    quote:
      "NeuronaHub nos ayudo a simplificar la oferta y aumentar el ticket promedio sin perder cercania con la comunidad.",
    author: "Santiago R.",
    role: "Founder, marca educativa",
    impact: "Ticket promedio x2.1",
  },
  {
    quote:
      "Lo mejor fue la claridad. Cada semana sabiamos que priorizar y por que. Dejamos de apagar incendios.",
    author: "Valentina P.",
    role: "Directora de marketing",
    impact: "Embudo estable en 45 dias",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Prueba social
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Resultados que se sienten en caja y posicionamiento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
            Historias de profesionales y equipos que pasaron del desgaste a una estrategia
            accionable con crecimiento medible.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-3"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.author}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={transitions.springBouncy}
              className="grain-overlay rounded-2xl border border-border/80 bg-card/80 p-7"
            >
              <div className="mb-4 flex items-center justify-between">
                <Quote className="h-5 w-5 text-primary" />
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.quote}</p>
              <div className="mt-6 border-t border-border/70 pt-5">
                <p className="font-display text-base font-semibold text-foreground">{item.author}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  {item.impact}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
