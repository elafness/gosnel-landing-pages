import { ConsumerHeader } from "@/components/consumer/header"
import { ConsumerHero } from "@/components/consumer/hero"
import { TrustBadges } from "@/components/consumer/trust-badges"
import { Personalization } from "@/components/consumer/personalization"
import { HowItWorks } from "@/components/consumer/how-it-works"
import { Comparison } from "@/components/consumer/comparison"
import { AiDemo } from "@/components/consumer/ai-demo"
import { ConsumerCta } from "@/components/consumer/cta"
import { ConsumerFooter } from "@/components/consumer/footer"

export default function ConsumerLandingPage() {
  return (
    <main className="min-h-screen">
      <ConsumerHeader />
      <ConsumerHero />
      <TrustBadges />
      <Personalization />
      <HowItWorks />
      <Comparison />
      <AiDemo />
      <ConsumerCta />
      <ConsumerFooter />
    </main>
  )
}
