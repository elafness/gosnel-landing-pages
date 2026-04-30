"use client"

import { MessageCircle, Phone, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"

export function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
          alt="Restaurant food"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4]/95 to-[#1A9A93]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Limited Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Limited Time: Get 70% Discount
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Start Receiving Orders Today?
          </h2>

          {/* Subtext */}
          <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto">
            Join GoSnel now and get your first orders by tomorrow. 
            Quick 5-minute setup via WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971542503729?text=Hi%20I%20want%20to%20join%20as%20a%20partner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-2xl shadow-black/20"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+971542503729"
              className="inline-flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              No Setup Fee
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              Cancel Anytime
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
