"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Coffee,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react"
import {
  transitions,
  staggerContainer,
  fadeInUp,
  viewportOnce,
} from "@/lib/animations"

interface Brand {
  name: string
  icon: LucideIcon
  logo: string | null
  tagline: string
  accentColor: string
  borderColor: string
  screenshot: string | null
  href: string
}

const brands: Brand[] = [
  {
    name: "Neurona Academy",
    icon: GraduationCap,
    logo: null,
    tagline: "Programa intensivo para vender con autoridad",
    accentColor: "text-sky-400",
    borderColor: "hover:border-sky-500/50",
    screenshot: "/images/brands/neurona-academy.webp",
    href: "https://jhonnyaponza.org/",
  },
  {
    name: "Neurona BrandLab",
    icon: BrainCircuit,
    logo: null,
    tagline: "Reposicionamiento premium de marca",
    accentColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    screenshot: "/images/brands/neurona-brandlab.webp",
    href: "#",
  },
  {
    name: "Neurona Learning",
    icon: BookOpen,
    logo: null,
    tagline: "Escuela digital con aplicación inmediata",
    accentColor: "text-orange-400",
    borderColor: "hover:border-orange-500/50",
    screenshot: "/images/brands/neurona-learning.webp",
    href: "https://hotmart.com/es/marketplace/productos/el-negocio-eres-tu/",
  },
  {
    name: "Neurona Café",
    icon: Coffee,
    logo: null,
    tagline: "Comunidad de networking y colaboración",
    accentColor: "text-amber-300",
    borderColor: "hover:border-amber-400/50",
    screenshot: "/images/brands/neurona-cafe.webp",
    href: "#",
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

        {/* Brand cards */}
        <motion.div
          className="mt-20 grid gap-6 md:grid-cols-2"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {brands.map((brand) => (
            <motion.a
              key={brand.name}
              href={brand.href}
              target={brand.href !== "#" ? "_blank" : undefined}
              rel={brand.href !== "#" ? "noopener noreferrer" : undefined}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={transitions.spring}
              className={`group grain-overlay relative flex aspect-[3/2] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card transition-[border-color] duration-300 md:aspect-[16/10] ${brand.borderColor}`}
            >
              {/* Screenshot background */}
              {brand.screenshot ? (
                <Image
                  src={brand.screenshot}
                  alt=""
                  fill
                  className="pointer-events-none object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-muted/30" />
              )}

              {/* "Quiero esta ruta" CTA — top right */}
              <div className="absolute right-4 top-4 z-10">
                <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3.5 py-1.5 text-[12px] font-semibold text-white/90 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
                  Quiero esta ruta
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>

              {/* Frosted panel */}
              <div className="relative z-10 mt-auto">
                <div className="flex items-center gap-4 border-t border-white/10 bg-black/50 px-5 py-4 backdrop-blur-xl">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base font-bold text-white">
                      {brand.name}
                    </h3>
                    <p className={`mt-0.5 text-[13px] font-medium ${brand.accentColor}`}>
                      {brand.tagline}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
                    {brand.logo ? (
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                      />
                    ) : (
                      <brand.icon className="h-5 w-5 text-white/90" />
                    )}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
