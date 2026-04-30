"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Al Rashid",
    restaurant: "Spice Garden Restaurant",
    location: "Ajman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    quote: "Finally, a platform that understands restaurant owners. The WhatsApp integration is genius.",
    rating: 5,
  },
  {
    name: "Fatima Hassan",
    restaurant: "Golden Biryani House",
    location: "Ajman",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    quote: "We save so much on commissions now. The same-day payments make cash flow so much easier.",
    rating: 5,
  },
  {
    name: "Mohammed Iqbal",
    restaurant: "Fresh Bites Cafe",
    location: "Ajman",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    quote: "Setup took 5 minutes. Orders started coming the same day. Best decision for my business.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-3">
            Partner Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted by Restaurant Owners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the growing community of successful restaurants in UAE
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-3xl p-8 border border-border/50 hover:border-[#4ECDC4]/30 transition-all hover:shadow-xl hover:shadow-[#4ECDC4]/5 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#4ECDC4]/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-[#4ECDC4]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.restaurant}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
