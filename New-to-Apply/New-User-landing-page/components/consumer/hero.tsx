"use client"

import { MessageCircle, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ConsumerHero() {
  const whatsappUrl = "https://wa.me/971542503729?text=Hi%20GoSnel!%20I%20want%20to%20order%20food"

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Food Agent</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Stop Scrolling.
                <span className="block text-primary">Start Eating.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                The Perfect 4-Item Combo in 30 Seconds.
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              GoSnel is your AI food agent. We cure menu fatigue by instantly building the perfect Main, Side, Drink, and Dessert combo from top local spots.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Chat with GoSnel
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-14 text-lg font-semibold border-2"
                asChild
              >
                <a href="#how-it-works" className="flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  See How It Works
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Food Image Collage */}
          <div className="relative">
            {/* Main Phone Mockup with Chat */}
            <div className="relative mx-auto w-full max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-primary px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">G</span>
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold">GoSnel AI</p>
                      <p className="text-primary-foreground/70 text-xs">Online</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 min-h-[320px] bg-muted/30">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground px-4 py-3 rounded-2xl rounded-br-md max-w-[80%]">
                        <p className="text-sm">I want something cheesy and filling!</p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start">
                      <div className="bg-card border border-border px-4 py-3 rounded-2xl rounded-bl-md max-w-[90%] shadow-sm">
                        <p className="text-sm text-foreground mb-3">Perfect! Here&apos;s your combo:</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span>🍔</span>
                            <span className="text-foreground">Cheesy Burger</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>🧀</span>
                            <span className="text-foreground">Mozzarella Sticks</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>🥤</span>
                            <span className="text-foreground">Strawberry Shake</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>🍫</span>
                            <span className="text-foreground">Chocolate Brownie</span>
                          </div>
                        </div>
                        <p className="text-primary font-semibold mt-3">50 AED Total</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Food Images */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl overflow-hidden shadow-xl animate-float">
                <Image
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop"
                  alt="Burger"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-8 w-20 h-20 rounded-2xl overflow-hidden shadow-xl animate-float animation-delay-200">
                <Image
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&h=200&fit=crop"
                  alt="Dessert"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 rounded-xl overflow-hidden shadow-lg animate-float animation-delay-300">
                <Image
                  src="https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=200&h=200&fit=crop"
                  alt="Drink"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
