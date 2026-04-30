"use client"

import { MessageCircle, ClipboardCheck, Truck, Banknote } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Join on WhatsApp",
    description: "Quick 5-minute setup. Just send us your menu and restaurant details.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "We List Your Menu",
    description: "Our AI creates beautiful meal combos from your dishes automatically.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Receive Orders",
    description: "Customers find you, order through our AI, and you get a WhatsApp message.",
  },
  {
    icon: Banknote,
    step: "04",
    title: "Get Paid Instantly",
    description: "Cash or card on delivery. The money is yours the same day.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            No complicated setup. No app to download. Just WhatsApp.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#4ECDC4]/50 to-transparent" />
              )}
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:-translate-y-2 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#4ECDC4]/20 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-[#4ECDC4]" />
                  </div>
                  <span className="text-5xl font-bold text-white/10 group-hover:text-[#4ECDC4]/20 transition-colors">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
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
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-[#25D366]/30"
          >
            <MessageCircle className="w-5 h-5" />
            Start Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
