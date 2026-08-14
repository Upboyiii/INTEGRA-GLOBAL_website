import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { DivisionsSection } from "@/components/divisions-section"
import { SettlementTechSection } from "@/components/settlement-tech-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <OverviewSection />
        <DivisionsSection />
        <SettlementTechSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
