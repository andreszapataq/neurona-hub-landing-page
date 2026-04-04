"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { fadeInUp, viewportOnce } from "@/lib/animations"

const faqs = [
  {
    question: "¿Esto es para marca personal o para empresa?",
    answer:
      "Es para quienes venden. Trabajamos con emprendedores, líderes y equipos comerciales que necesitan estructura para posicionarse y convertir. El sistema se adapta al contexto, no al revés.",
  },
  {
    question: "¿Cuánto tiempo tarda en verse un cambio real?",
    answer:
      "Desde las primeras semanas hay claridad. Los resultados en ventas dependen del nivel de ejecución, pero el cambio en enfoque, mensaje y dirección es inmediato.",
  },
  {
    question: "¿Necesito tener una audiencia grande para empezar?",
    answer:
      "No. No se trata de tener más audiencia, sino de tener mejor posicionamiento. Puedes vender con claridad, incluso con audiencias pequeñas.",
  },
  {
    question: "¿Esto es capacitación?",
    answer:
      "No. Es un sistema aplicado para generar resultados en ventas.",
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
            Resolvemos dudas antes de que tomes una decisión
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
