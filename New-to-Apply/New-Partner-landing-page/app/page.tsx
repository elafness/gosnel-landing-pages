import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { HowItWorks } from "@/components/how-it-works"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
