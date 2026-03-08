import { NeuralBackground } from "@/components/neural-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { BrandsSection } from "@/components/brands-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Page() {
  const currentYear = new Date().getUTCFullYear()

  return (
    <>
      <ScrollProgress />
      <NeuralBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <TestimonialsSection />
        <BrandsSection />
        <EcosystemSection />
        <AboutSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer year={currentYear} />
    </>
  )
}
