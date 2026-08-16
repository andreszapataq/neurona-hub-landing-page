"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  BrainCircuit,
  Brain,
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
  category: string
  tagline: string
  description: string
  accentColor: string
  accentRgb: string
  screenshot: string | null
  href: string
  colSpan: 7 | 5
  isNew?: boolean
}

const brands: Brand[] = [
  {
    name: "Neurona Academy",
    icon: GraduationCap,
    logo: null,
    category: "Estrategia & IA",
    tagline: "Programa intensivo para vender con autoridad",
    description:
      "Domina las herramientas y el pensamiento sistémico para liderar la era de la inteligencia artificial aplicada a los negocios.",
    accentColor: "text-sky-400",
    accentRgb: "56,189,248",
    screenshot: "/images/brands/neurona-academy.webp",
    href: "https://jhonnyaponza.org/",
    colSpan: 7,
  },
  {
    name: "Neurona BrandLab",
    icon: BrainCircuit,
    logo: null,
    category: "Identidad Visual",
    tagline: "Reposicionamiento premium de marca",
    description:
      "Construimos marcas memorables fusionando diseño editorial y narrativa estratégica digital.",
    accentColor: "text-emerald-400",
    accentRgb: "52,211,153",
    screenshot: "/images/brands/neurona-brandlab.webp",
    href: "#testimonials",
    colSpan: 5,
  },
  {
    name: "Neurona Learning",
    icon: BookOpen,
    logo: null,
    category: "Crecimiento Continuo",
    tagline: "Escuela digital con aplicación inmediata",
    description:
      "Plataforma de aprendizaje bajo demanda con micro-unidades de conocimiento aplicable inmediato.",
    accentColor: "text-orange-400",
    accentRgb: "251,146,60",
    screenshot: "/images/brands/neurona-learning.webp",
    href: "https://hotmart.com/es/marketplace/productos/el-negocio-eres-tu/",
    colSpan: 5,
  },
  {
    name: "Super Food",
    icon: Brain,
    logo: null,
    category: "Biohacking & Nutrición",
    tagline: "Alimentos para tus neuronas",
    description:
      "Combustible de alto rendimiento para el cerebro. Nutrición diseñada para optimizar tu enfoque y claridad cognitiva.",
    accentColor: "text-amber-300",
    accentRgb: "252,211,77",
    screenshot: "/images/brands/super-food.webp",
    href: "https://www.impulsocoffee.com/",
    colSpan: 7,
    isNew: true,
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
      <div className="pointer-events-none absolute bottom-1/4 left-0">
        <div className="h-[200px] w-[200px] rounded-full bg-accent/5 blur-[80px] md:h-[500px] md:w-[500px] md:blur-[120px]" />
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
            Nuestro Enfoque
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">
              Soluciones diseñadas para transformar la forma en que las{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                personas y equipos venden.
              </span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground md:text-lg">
            Programas diseñados para desarrollar la forma en que piensas, comunicas y conviertes oportunidades en ventas.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-12"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {brands.map((brand) => {
            const isLarge = brand.colSpan === 7

            return (
              <motion.a
                key={brand.name}
                href={brand.href}
                target={brand.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  brand.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={transitions.spring}
                className={`group grain-overlay relative flex flex-col justify-end overflow-hidden rounded-[2rem] border border-border/10 bg-card transition-all duration-500 hover:bg-muted/20 ${
                  isLarge ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  {brand.screenshot && (
                    <Image
                      src={brand.screenshot}
                      alt=""
                      fill
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                        isLarge ? "opacity-30" : "opacity-20"
                      }`}
                      sizes={
                        isLarge
                          ? "(max-width: 768px) 100vw, 58vw"
                          : "(max-width: 768px) 100vw, 42vw"
                      }
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-8 md:min-h-[450px] md:p-10">
                  {/* Category label */}
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`text-sm font-bold uppercase tracking-widest ${brand.accentColor}`}
                    >
                      {brand.category}
                    </span>
                    {brand.isNew && (
                      <span className="rounded-full bg-primary/20 px-3 py-0.5 text-[10px] font-black text-primary">
                        NUEVO
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                    {brand.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-8 mt-4 max-w-md text-muted-foreground">
                    {brand.description}
                  </p>

                  {/* CTA Button */}
                  {isLarge ? (
                    <span className="flex w-fit items-center gap-3 rounded-full bg-gradient-to-br from-primary to-sky-600 px-8 py-3.5 font-bold text-primary-foreground shadow-lg transition-all group-hover:shadow-primary/20">
                      Quiero esta ruta
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  ) : (
                    <span
                      className="block w-full rounded-full border px-8 py-3.5 text-center font-bold text-foreground backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                      style={{
                        borderColor: `rgba(${brand.accentRgb}, 0.15)`,
                        backgroundColor: `rgba(${brand.accentRgb}, 0.05)`,
                        // @ts-expect-error -- CSS custom properties
                        "--btn-accent": brand.accentRgb,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget
                        el.style.borderColor = `rgba(${brand.accentRgb}, 0.6)`
                        el.style.backgroundColor = `rgba(${brand.accentRgb}, 0.12)`
                        el.style.boxShadow = `0 0 20px rgba(${brand.accentRgb}, 0.15)`
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget
                        el.style.borderColor = `rgba(${brand.accentRgb}, 0.15)`
                        el.style.backgroundColor = `rgba(${brand.accentRgb}, 0.05)`
                        el.style.boxShadow = "none"
                      }}
                    >
                      Quiero esta ruta
                    </span>
                  )}
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
