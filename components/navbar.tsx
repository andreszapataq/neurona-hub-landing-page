"use client"

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { transitions, staggerContainer } from "@/lib/animations"

const navLinks = [
  { label: "Método", href: "#ecosystem" },
  { label: "Programas", href: "#brands" },
  { label: "Resultados", href: "#testimonials" },
  { label: "Nosotros", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contact" },
]

/* ── Desktop nav link variant ── */
const navItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.spring,
  },
}

/* ── Mobile menu variants ── */
const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto" as const,
    transition: {
      height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.2 },
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.15 },
    },
  },
}

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: transitions.spring },
  exit: { opacity: 0, x: -12 },
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const scrolledRef = useRef(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 20
    if (next !== scrolledRef.current) {
      scrolledRef.current = next
      setScrolled(next)
    }
  })

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-md md:backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-border/70 bg-background/90 shadow-sm shadow-black/20"
          : "border-border/40 bg-background/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={transitions.springBouncy}
        >
          <Image
            src="/images/logo.svg"
            alt="NeuronaHub"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </motion.a>

        {/* Desktop nav — staggered entrance */}
        <motion.nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
          variants={staggerContainer(0.06, 0.4)}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              variants={navItemVariants}
              whileHover={{ y: -1 }}
              transition={transitions.springBouncy}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            Cohorte limitada marzo
          </span>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transitions.spring, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={transitions.springBouncy}
            >
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Quiero diagnóstico gratis
                <ArrowUpRight className="ml-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop CTA */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transitions.spring, delay: 0.6 }}
        >
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            Plazas limitadas
          </span>
        </motion.div>

        {/* Hamburger — animated icon rotation */}
        <motion.button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          whileTap={{ scale: 0.9 }}
          transition={transitions.springBouncy}
        >
          <motion.div
            animate={{ rotate: mobileOpen ? 90 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile menu — staggered links */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6" aria-label="Navegación móvil">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={mobileLinkVariants}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={mobileLinkVariants}>
                <Button size="sm" className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Quiero diagnóstico gratis
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
