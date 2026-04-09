import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/HeroSection'
import { StatsSection } from '@/components/home/StatsSection'
import { TechStackSection } from '@/components/home/TechStackSection'
import { ValuePropsSection } from '@/components/home/ValuePropsSection'
import { FeaturedProjectsSection } from '@/components/home/FeaturedProjectsSection'
import { CTABand } from '@/components/home/CTABand'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <TechStackSection />
        <ValuePropsSection />
        <FeaturedProjectsSection />
        <CTABand />
      </main>

      <Footer />
    </div>
  )
}