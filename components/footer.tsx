"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const footerLinks = {
  Programas: [
    { label: "Neurona Academy", href: "#" },
    { label: "Neurona BrandLab", href: "#" },
    { label: "Neurona Learning", href: "#" },
    { label: "Super Food", href: "#" },
  ],
  Navegación: [
    { label: "Sobre nosotros", href: "#about" },
    { label: "Método", href: "#ecosystem" },
    { label: "Resultados", href: "#testimonials" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ],
  Recursos: [
    { label: "Checklist de posicionamiento", href: "#" },
    { label: "Guía de oferta irresistible", href: "#" },
    { label: "Plantilla de contenidos", href: "#" },
  ],
  Legal: [
    { label: "Términos de uso", href: "#" },
    { label: "Privacidad", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

export function Footer({ year }: { year: number }) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="border-t border-border bg-card/60"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main grid — staggered entrance */}
        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-5"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <a href="#" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="NeuronaHub"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Desarrollamos la forma en que las personas y los equipos venden, posicionan y convierten.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              contacto@neuronahub.com
            </p>
            <p className="text-sm text-muted-foreground">Cali, Colombia</p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div key={title} variants={fadeInUp}>
              <h3 className="font-display text-sm font-semibold text-foreground">
                {title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row"
        >
          <p className="text-sm text-muted-foreground">
            {year} NeuronaHub. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "Instagram", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
