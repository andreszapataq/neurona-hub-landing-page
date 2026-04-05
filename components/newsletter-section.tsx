"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Send, ShieldCheck, Lock, Zap, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  transitions,
  fadeInUp,
  slideInLeft,
  slideInRight,
  viewportOnce,
} from "@/lib/animations"

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "El email es requerido" })
    .email({ message: "Ingresa un email válido" }),
})

type NewsletterFormValues = z.infer<typeof newsletterSchema>

const trustItems = [
  { icon: ShieldCheck, label: "Sin spam, nunca" },
  { icon: Lock, label: "Datos protegidos" },
  { icon: Zap, label: "Cancela cuando quieras" },
]

export function NewsletterSection() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  })

  const { ref: hookFormRef, ...emailRegister } = register("email")

  async function onSubmit(data: NewsletterFormValues) {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzHJlbpsn8aZiP3907eUXvmSbTv2vgzJNqgEV0qtAWAYZpHeGVq4na5W9K8gDYOTOk_sA/exec",
        {
          method: "POST",
          body: JSON.stringify({ email: data.email }),
          mode: "no-cors",
        }
      )

      toast.success("¡Suscripción exitosa!", {
        description: "Te enviaremos contenido de valor cada semana.",
      })

      reset()
      inputRef.current?.focus()
    } catch {
      toast.error("Hubo un error", {
        description: "Inténtalo de nuevo más tarde.",
      })
    }
  }

  return (
    <section id="newsletter" className="relative py-32 px-6">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent/8 blur-[100px]" />
        <div className="absolute -right-32 top-1/3 h-[250px] w-[250px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Divider top */}
        <div className="mb-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left column — Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ ...transitions.springBouncy, delay: 0.2 }}
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Mail className="h-7 w-7 text-accent" />
              </motion.div>
            </motion.div>

            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Boletín Semanal
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Insights de posicionamiento directo a tu{" "}
              <span className="bg-gradient-to-r from-primary via-sky-300 to-accent bg-clip-text text-transparent">
                bandeja de entrada
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-balance text-muted-foreground">
              Estrategias accionables, tendencias del mercado y casos de éxito
              cada semana. Sin spam, solo valor.
            </p>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {trustItems.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <Icon className="h-3.5 w-3.5 text-primary/70" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right column — Form card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="grain-overlay relative overflow-hidden rounded-2xl border border-border/80 bg-card/75 p-8 backdrop-blur-sm sm:p-10">
              {/* Card glow */}
              <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
                <div className="h-[80px] w-[160px] rounded-full bg-accent/20 blur-[50px]" />
              </div>

              <div className="relative">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Suscríbete gratis
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Recibe cada semana lo mejor en posicionamiento y marca
                  personal.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Correo electrónico
                  </label>

                  <div className="flex flex-col gap-3">
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="tu@email.com"
                      aria-describedby={
                        errors.email ? "newsletter-error" : undefined
                      }
                      className="h-12 rounded-xl border-border/80 bg-background/50 px-4 text-base backdrop-blur-sm placeholder:text-muted-foreground focus-visible:ring-primary/50"
                      {...emailRegister}
                      ref={(e) => {
                        hookFormRef(e)
                        inputRef.current = e
                      }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={transitions.springBouncy}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        className="h-12 w-full rounded-xl bg-primary px-6 text-base text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.25)] hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="mr-2 h-4 w-4" />
                        )}
                        Suscribirme
                      </Button>
                    </motion.div>
                  </div>

                  {errors.email && (
                    <p
                      id="newsletter-error"
                      role="alert"
                      className="mt-2 text-sm text-destructive"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider bottom */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  )
}
