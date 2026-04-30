"use client"

import Image from "next/image"
import { Check, MessageCircle } from "lucide-react"

const benefits = [
  {
    title: "WhatsApp Orders",
    description: "Orders come directly to your WhatsApp. No complex apps to learn.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
    features: ["Instant notifications", "Easy to manage", "No training needed"],
  },
  {
    title: "Keep Your Profits",
    description: "Pay only 15% commission compared to 30%+ on other platforms.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
    features: ["50% lower fees", "Same-day payments", "No hidden charges"],
  },
  {
    title: "Full Control",
    description: "Set your delivery radius from 1-7km. You decide where to deliver.",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=800",
    features: ["Custom delivery zone", "Own your customers", "Build loyalty"],
  },
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose GoSnel
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything Your Restaurant Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, profitable, and designed for busy restaurant owners in UAE
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-16 lg:space-y-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border/50 shadow-lg">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  <ul className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#4ECDC4]/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-[#4ECDC4]" />
                        </div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/971542503729?text=Hi%20I%20want%20to%20join%20as%20a%20partner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-[#4ECDC4]/30"
          >
            <MessageCircle className="w-5 h-5" />
            Start Growing Your Business
          </a>
        </div>
      </div>
    </section>
  )
}
