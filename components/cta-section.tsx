"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { transitions, fadeInUp, fadeInScale, viewportOnce } from "@/lib/animations"

export function CtaSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Card — scale entrance */}
        <motion.div
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-12 md:p-20"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
            <div className="h-[120px] w-[180px] rounded-full bg-primary/10 blur-[60px] md:h-[300px] md:w-[600px] md:blur-[100px]" />
          </div>

          <div className="relative">
            {/* Floating icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ ...transitions.springBouncy, delay: 0.2 }}
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Zap className="h-7 w-7 text-primary" />
              </motion.div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl"
            >
              <span className="text-balance">
                Activa tu potencial con{" "}
                <span className="text-primary">NeuronaHub</span>
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mx-auto mt-6 max-w-xl text-balance text-muted-foreground"
            >
              Únete al ecosistema que está transformando la forma en que los profesionales
              y emprendedores crecen, aprenden y construyen su marca.
            </motion.p>

            {/* CTA Buttons — hover & tap */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={transitions.springBouncy}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Comenzar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={transitions.springBouncy}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary"
                >
                  Hablar con un asesor
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
