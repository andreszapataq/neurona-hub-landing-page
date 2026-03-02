"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { fadeInUp, viewportOnce } from "@/lib/animations"

const faqs = [
  {
    question: "Esto es para marca personal o para empresa?",
    answer:
      "Funciona para ambos. Adaptamos la estrategia segun tu etapa: profesional independiente, equipo comercial o marca en proceso de escalado.",
  },
  {
    question: "Cuanto tiempo tarda en verse un cambio real?",
    answer:
      "Normalmente entre 3 y 8 semanas. Depende de tu punto de partida, velocidad de ejecucion y capacidad para implementar recomendaciones.",
  },
  {
    question: "Necesito tener una audiencia grande para empezar?",
    answer:
      "No. Priorizamos claridad de oferta, posicionamiento y conversion. Una audiencia pequena con mensaje correcto puede vender mejor que una grande sin foco.",
  },
  {
    question: "Que incluye la sesion estrategica gratuita?",
    answer:
      "Revisamos tu narrativa, oferta y embudo actual. Te llevas un diagnostico de cuellos de botella y tres acciones concretas para ejecutar de inmediato.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Preguntas frecuentes
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Resolvemos dudas antes de que decidas
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 rounded-2xl border border-border/80 bg-card/75 px-6 py-2 md:px-8"
        >
          <Accordion type="single" collapsible>
            {faqs.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-border/60">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
