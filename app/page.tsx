import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { ProblemsSection } from "@/components/problems-section"
import { SolutionSection } from "@/components/solution-section"
import { ScholarshipPackages } from "@/components/scholarship-packages"
import { ProgramsSection } from "@/components/programs-section"
import { SchoolsSection } from "@/components/schools-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProcessSection } from "@/components/process-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <ProblemsSection />
      <SolutionSection />
      <ScholarshipPackages />
      <ProgramsSection />
      <SchoolsSection />
      <BenefitsSection />
      <ProcessSection />
      <Footer />
    </main>
  )
}
