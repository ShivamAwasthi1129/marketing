import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { NavbarMain } from "@/components/navbar-main"
import { FloatingSocialBar } from "@/components/floating-social-bar"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { ClientLogos } from "@/components/client-logos"
import { HowWeWork } from "@/components/how-we-work"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarMain />
      <FloatingSocialBar />

      <main className="pt-16">
        <Hero />
        <ClientLogos />
        <Features />
        <StatsSection />
        <HowWeWork />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
