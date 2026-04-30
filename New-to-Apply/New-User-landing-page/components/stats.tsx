"use client"

import { TrendingUp, Clock, Wallet, Users } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "50%",
    label: "Lower Commission",
    description: "Save more on every order",
  },
  {
    icon: Clock,
    value: "Instant",
    label: "Order Delivery",
    description: "Direct to your WhatsApp",
  },
  {
    icon: Wallet,
    value: "Same Day",
    label: "Payments",
    description: "Cash in hand immediately",
  },
  {
    icon: Users,
    value: "100%",
    label: "Customer Data",
    description: "Own your relationships",
  },
]

export function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-background to-white rounded-3xl p-6 lg:p-8 border border-border/50 hover:border-[#4ECDC4]/30 transition-all hover:shadow-xl hover:shadow-[#4ECDC4]/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#4ECDC4]/10 flex items-center justify-center mb-4 group-hover:bg-[#4ECDC4]/20 transition-colors">
                <stat.icon className="w-6 h-6 text-[#4ECDC4]" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
