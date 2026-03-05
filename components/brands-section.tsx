"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  GraduationCap,
  Palette,
  BookOpen,
  Coffee,
  Building2,
  BrainCircuit,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  transitions,
  staggerContainer,
  fadeInUp,
  viewportOnce,
} from "@/lib/animations"

const brands = [
  {
    name: "Neurona Academy",
    icon: GraduationCap,
    tagline: "Programa intensivo para vender con autoridad",
    description:
      "Ideal si tienes experiencia pero tus ventas no reflejan tu valor. Reestructuramos narrativa, oferta y embudo.",
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "hover:border-sky-500/50",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
  },
  {
    name: "Neurona BrandLab",
    icon: BrainCircuit,
    tagline: "Reposicionamiento premium de marca",
    description:
      "Para marcas que necesitan una presencia sólida y diferenciada para entrar a segmentos de mayor ticket.",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "hover:border-amber-500/50",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    name: "Neurona Learning",
    icon: BookOpen,
    tagline: "Escuela digital con aplicación inmediata",
    description:
      "Biblioteca de talleres y playbooks para pasar del consumo de contenido a implementación con resultados.",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "hover:border-blue-500/50",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    name: "Neurona Café",
    icon: Coffee,
    tagline: "Comunidad de networking y colaboración",
    description:
      "Sesiones en vivo, conexiones estratégicas y espacios para validar decisiones con otros perfiles de alto rendimiento.",
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "hover:border-rose-500/50",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.spring,
  },
}

export function BrandsSection() {
  return (
    <section id="brands" className="relative overflow-hidden py-32 px-6">
      {/* Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
        <div className="h-[150px] w-[150px] rounded-full bg-primary/5 blur-[60px] md:h-[400px] md:w-[400px] md:blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Programas y unidades
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Elige la ruta que más acelera tu siguiente nivel</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
            No necesitas hacer todo al mismo tiempo. Empiezas por la unidad con mayor retorno y
            avanzas con una hoja de ruta integrada.
          </p>
        </motion.div>

        {/* Brand cards — staggered + hover lift */}
        <motion.div
          className="mt-20 grid gap-6 md:grid-cols-2"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={transitions.springBouncy}
              className={`group grain-overlay relative overflow-hidden rounded-2xl border border-border bg-card/75 p-8 transition-all duration-300 ${brand.borderColor}`}
            >
              {/* Background gradient on hover */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${brand.iconBg}`}>
                    <brand.icon className={`h-7 w-7 ${brand.iconColor}`} />
                  </div>
                  <span className="rounded-full border border-border/80 bg-background/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Ruta especializada
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                  {brand.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {brand.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {brand.description}
                </p>
                <Button
                  variant="ghost"
                  className="mt-5 h-auto p-0 text-sm font-semibold text-foreground hover:bg-transparent hover:text-primary"
                >
                  Quiero esta ruta
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
