"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Palette,
  BookOpen,
  Coffee,
  ArrowUpRight,
} from "lucide-react"
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
    tagline: "Formación de alto impacto",
    description:
      "Programas formativos intensivos para desarrollar competencias en marketing digital, ventas, liderazgo y crecimiento empresarial.",
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "hover:border-sky-500/50",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
  },
  {
    name: "Neurona BrandLab",
    icon: Palette,
    tagline: "Laboratorio de marcas",
    description:
      "Consultoría especializada en construcción de marca personal y corporativa. Estrategia, identidad visual y posicionamiento digital.",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "hover:border-amber-500/50",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    name: "Neurona Learning",
    icon: BookOpen,
    tagline: "Educación digital accesible",
    description:
      "Plataforma educativa con cursos, talleres y recursos digitales diseñados para aprender a tu propio ritmo y aplicar de inmediato.",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "hover:border-blue-500/50",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    name: "Neurona Café",
    icon: Coffee,
    tagline: "Comunidad y conexión",
    description:
      "Espacio de encuentro para profesionales y emprendedores. Eventos, networking y contenido inspirador para nutrir tu camino.",
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
        <div className="h-[250px] w-[250px] rounded-full bg-primary/5 blur-[100px] md:h-[400px] md:w-[400px]" />
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
            Nuestras marcas
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Cuatro pilares, un solo propósito</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
            Cada marca dentro de NeuronaHub cumple un rol específico para cubrir todas las
            dimensiones de tu crecimiento profesional y personal.
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
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 ${brand.borderColor}`}
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
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
