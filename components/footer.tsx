"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const footerLinks = {
  Marcas: [
    { label: "Neurona Academy", href: "#" },
    { label: "Neurona BrandLab", href: "#" },
    { label: "Neurona Learning", href: "#" },
    { label: "Neurona Café", href: "#" },
  ],
  Ecosistema: [
    { label: "Sobre nosotros", href: "#about" },
    { label: "Formación", href: "#" },
    { label: "Asesoría", href: "#" },
    { label: "Comunidad", href: "#" },
  ],
  Legal: [
    { label: "Términos de uso", href: "#" },
    { label: "Privacidad", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="border-t border-border bg-card/50"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main grid — staggered entrance */}
        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
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
              Entrenar la mente, fortalecer la marca personal y potenciar el crecimiento
              profesional y empresarial.
            </p>
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
            {new Date().getFullYear()} NeuronaHub. Todos los derechos reservados.
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
