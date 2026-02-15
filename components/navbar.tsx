"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Ecosistema", href: "#ecosystem" },
  { label: "Marcas", href: "#brands" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.jpeg"
            alt="NeuronaHub"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Comienza ahora
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-4 px-6 py-6" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Comienza ahora
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
