"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-12 md:p-20"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
            <div className="h-[200px] w-[300px] rounded-full bg-primary/10 blur-[100px] md:h-[300px] md:w-[600px]" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10"
            >
              <Zap className="h-7 w-7 text-primary" />
            </motion.div>

            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              <span className="text-balance">
                Activa tu potencial con{" "}
                <span className="text-primary">NeuronaHub</span>
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-balance text-muted-foreground">
              Únete al ecosistema que está transformando la forma en que los profesionales
              y emprendedores crecen, aprenden y construyen su marca.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Comenzar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary"
              >
                Hablar con un asesor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
