"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { fadeInUp, staggerContainer, transitions, viewportOnce } from "@/lib/animations"

const testimonials = [
  {
    company: "Honda motos",
    description:
      "Fortalecimos la estructura comercial y el enfoque del equipo de ventas.",
    result: "Mayor claridad en la comunicación y el cierre.",
  },
  {
    company: "América de Cali",
    description:
      "Entrenamos la mentalidad y la toma de decisiones en escenarios de alto rendimiento.",
    result: "Mayor enfoque, liderazgo y criterio en el juego.",
  },
  {
    company: "Uki",
    description:
      "Transformamos la experiencia del cliente desde la comunicación y el servicio.",
    result: "Mayor conexión y percepción de valor.",
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
            Human Focus System™
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Resultados medibles en ventas y posicionamiento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
            Casos reales de equipos y marcas que transformaron su forma de vender y escalaron sus resultados.
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
              key={item.company}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={transitions.springBouncy}
              className="grain-overlay rounded-2xl border border-border/80 bg-card/80 p-7"
            >
              <div className="mb-4">
                <Quote className="h-5 w-5 text-primary" />
              </div>
              <p className="font-display text-lg font-semibold text-foreground">{item.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <div className="mt-6 border-t border-border/70 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  Resultado
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.result}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
