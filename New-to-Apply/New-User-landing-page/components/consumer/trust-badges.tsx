import { BadgeCheck, Banknote, Tag } from "lucide-react"

const badges = [
  {
    icon: Tag,
    text: "No Hidden Fees",
  },
  {
    icon: Banknote,
    text: "Cash on Delivery",
  },
  {
    icon: BadgeCheck,
    text: "Real Restaurant Prices",
  },
]

export function TrustBadges() {
  return (
    <section className="py-8 bg-muted/50 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
