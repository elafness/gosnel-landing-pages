"use client"

import { ArrowRight, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
          alt="Modern restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#4ECDC4]/20 backdrop-blur-sm border border-[#4ECDC4]/40 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" />
            Now Available in Ajman
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Stop Losing Your{" "}
            <span className="text-[#4ECDC4]">Profits</span> to Delivery Apps
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 leading-relaxed max-w-2xl">
            GoSnel delivers customers directly to you with{" "}
            <span className="text-[#4ECDC4] font-bold">50% lower commissions</span>.
            Get paid the same day. Keep your money.
          </p>

          {/* Quick Stats Row */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
              <p className="text-3xl font-bold text-[#4ECDC4]">50%</p>
              <p className="text-white/80 text-sm font-medium">Lower Commission</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
              <p className="text-3xl font-bold text-emerald-400">Instant</p>
              <p className="text-white/80 text-sm font-medium">WhatsApp Orders</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
              <p className="text-3xl font-bold text-amber-400">Same Day</p>
              <p className="text-white/80 text-sm font-medium">Payments</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/971542503729?text=Hi%20I%20want%20to%20join%20as%20a%20partner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-[#25D366]/30"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+971542503729"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-sm font-medium">Scroll to learn more</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
