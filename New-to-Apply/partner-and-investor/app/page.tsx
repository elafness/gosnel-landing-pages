"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  MessageCircle,
  ArrowRight,
  Phone,
  Check,
  TrendingUp,
  Wallet,
  Users,
  Clock,
  Shield,
  Star,
  ChevronDown,
  Banknote,
  Smartphone,
  RefreshCw,
  CircleDollarSign,
  HandCoins,
  Store,
  Utensils,
  Truck,
  X,
  Sparkles,
  ArrowDown,
  CreditCard,
  Gift,
  Heart,
  Handshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WHATSAPP_LINK = "https://wa.me/971542503729?text=Hi%20I%20want%20to%20join%20as%20a%20partner"
const PHONE_NUMBER = "+971542503729"

export default function PartnerLandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#4ECDC4] flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className={cn("font-bold text-xl transition-colors", scrolled ? "text-gray-900" : "text-white")}>
              GoSnel
            </span>
          </div>
          <Button asChild className="bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Now
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#4ECDC4]/20 backdrop-blur-sm border border-[#4ECDC4]/40 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" />
              Now in Ajman — Expanding Soon
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              Get Paid Today.
              <span className="text-[#4ECDC4]"> Not Next Week.</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              You collect cash from customers. You keep <span className="text-[#4ECDC4] font-bold">85%</span> instantly. 
              We take just <span className="text-[#4ECDC4] font-bold">15%</span> from your prepaid wallet. 
              No waiting. No confusion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
                <Banknote className="w-8 h-8 text-[#4ECDC4] mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-white/80 text-sm">Cash in Your Hand</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
                <Wallet className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">15%</p>
                <p className="text-white/80 text-sm">From Wallet Only</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
                <Clock className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">Same Day</p>
                <p className="text-white/80 text-sm">Money is Yours</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-6 rounded-2xl font-bold text-lg shadow-xl shadow-[#25D366]/30 hover:scale-105 transition-all"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Register on WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/30 text-white px-8 py-6 rounded-2xl font-bold text-lg"
              >
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Understand how it works</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Why Traditional Delivery Apps Hurt Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You work hard cooking and delivering food. Your profit should not disappear into fees and waiting periods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Other Apps */}
            <div className="bg-white rounded-3xl p-8 border-2 border-red-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Traditional Apps</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { label: "Commission", value: "25-30%+", bad: true },
                  { label: "Cash Flow", value: "Wait 7-14 days", bad: true },
                  { label: "Delivery", value: "Their fleet + hidden fees", bad: true },
                  { label: "Customer Data", value: "They hide it from you", bad: true },
                  { label: "Accounting", value: "Complicated settlements", bad: true },
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-red-500 font-medium text-sm">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* GoSnel */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#4ECDC4] shadow-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#4ECDC4] text-white text-xs font-bold px-3 py-1 rounded-full">
                SMART CHOICE
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#4ECDC4]/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#4ECDC4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">GoSnel Smart System</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { label: "Commission", value: "Only 15%", good: true },
                  { label: "Cash Flow", value: "100% instant — same day", good: true },
                  { label: "Delivery", value: "You deliver (1-7 km)", good: true },
                  { label: "Customer Data", value: "Direct WhatsApp access", good: true },
                  { label: "Accounting", value: "Transparent wallet system", good: true },
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-[#4ECDC4]/20 pb-3">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-[#4ECDC4] font-semibold text-sm">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Order Flow Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              How Every Order Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From customer tap to cash in your hand — here is the complete journey of every order.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4ECDC4] via-[#4ECDC4] to-[#25D366]" />

            {/* Steps */}
            <div className="space-y-8 md:space-y-0">
              {[
                {
                  icon: Smartphone,
                  title: "Customer Opens GoSnel App",
                  desc: "They tap \"Get Meal Suggestion\" instead of scrolling through long confusing menus.",
                  side: "left",
                },
                {
                  icon: Sparkles,
                  title: "AI Suggests Smart Combos",
                  desc: "Our AI instantly creates 3 perfect meal combinations: Main + Side + Drink + Dessert.",
                  side: "right",
                },
                {
                  icon: MessageCircle,
                  title: "Order Goes to Your WhatsApp",
                  desc: "Customer picks a combo and sends the complete order directly to your WhatsApp with one tap.",
                  side: "left",
                },
                {
                  icon: Utensils,
                  title: "You Prepare the Meal",
                  desc: "You see the order details instantly. Prepare the food as you normally would.",
                  side: "right",
                },
                {
                  icon: Truck,
                  title: "You Deliver Within Your Area",
                  desc: "Deliver yourself within your chosen 1-7 km radius. No third-party drivers needed.",
                  side: "left",
                },
                {
                  icon: HandCoins,
                  title: "Collect Full Payment",
                  desc: "Customer pays you cash or card. You receive 100% of the order amount plus delivery fee.",
                  side: "right",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={cn(
                    "relative md:grid md:grid-cols-2 gap-8 items-center",
                    i > 0 && "md:mt-8"
                  )}
                >
                  {/* Left Content */}
                  <div className={cn(
                    "md:text-right",
                    step.side === "right" && "md:order-2 md:text-left"
                  )}>
                    {step.side === "left" && (
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#4ECDC4]/30 hover:shadow-lg transition-all">
                        <div className={cn(
                          "flex items-center gap-3 mb-3",
                          step.side === "left" ? "md:justify-end" : "md:justify-start"
                        )}>
                          <span className="text-sm font-bold text-[#4ECDC4]">Step {i + 1}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#4ECDC4] items-center justify-center shadow-lg shadow-[#4ECDC4]/30 z-10">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Right Content */}
                  <div className={cn(
                    step.side === "right" && "md:order-1"
                  )}>
                    {step.side === "right" && (
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#4ECDC4]/30 hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-bold text-[#4ECDC4]">Step {i + 1}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile Icon */}
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center shadow-lg">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#4ECDC4]">Step {i + 1}</span>
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <div className="md:hidden bg-gray-50 rounded-2xl p-4 border border-gray-100 mb-6">
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prepaid Wallet Explanation */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Understand the System
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              How the Prepaid Wallet Works
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Because you receive cash directly from customers, we use a simple wallet system to handle commissions. Here is exactly how it works.
            </p>
          </div>

          {/* Visual Wallet Explanation */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
              {/* The Flow */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#4ECDC4]/20 flex items-center justify-center mx-auto mb-4">
                    <Wallet className="w-8 h-8 text-[#4ECDC4]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">1. Top Up Your Wallet</h3>
                  <p className="text-white/70 text-sm">Add any amount you choose. This keeps your restaurant visible and active in the app.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Banknote className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">2. You Collect Cash</h3>
                  <p className="text-white/70 text-sm">When orders come, you receive 100% payment directly from the customer in cash or card.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                    <CircleDollarSign className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">3. We Deduct 15%</h3>
                  <p className="text-white/70 text-sm">Only after the order is complete, we deduct 15% commission from your wallet balance.</p>
                </div>
              </div>

              {/* Example Calculation */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Store className="w-5 h-5 text-[#4ECDC4]" />
                  Real Example: 27 AED Order
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/70">Food Order Value</span>
                      <span className="font-semibold">27 AED</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/70">Delivery Fee (yours to keep)</span>
                      <span className="font-semibold text-emerald-400">+5 AED</span>
                    </div>
                    <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                      <span className="text-white/70">You Receive from Customer</span>
                      <span className="font-bold text-lg text-white">32 AED</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/70">Commission (15% of 27 AED)</span>
                      <span className="font-semibold text-amber-400">-4 AED</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/70">Deducted From</span>
                      <span className="font-semibold">Your Wallet</span>
                    </div>
                    <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                      <span className="text-white/70">Your Net Profit</span>
                      <span className="font-bold text-lg text-[#4ECDC4]">28 AED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What if wallet runs out */}
              <div className="mt-6 bg-amber-500/10 rounded-2xl p-5 border border-amber-500/20">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">What if my wallet runs out?</h4>
                    <p className="text-white/70 text-sm">Your restaurant temporarily stops appearing as &quot;Open&quot; in the app. Simply top up your wallet and you are back online instantly. Complete control. No surprises.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triple Win Section */}
      <section className="py-20 bg-gradient-to-br from-[#4ECDC4]/5 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Everyone Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Triple Win — A Fair System for All
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              GoSnel is designed so that you, your customers, and we all succeed together. No one loses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Restaurant Win */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#4ECDC4]/10 flex items-center justify-center mb-6">
                <Store className="w-7 h-7 text-[#4ECDC4]" />
              </div>
              <div className="inline-block bg-[#4ECDC4]/10 text-[#4ECDC4] text-xs font-bold px-3 py-1 rounded-full mb-4">
                YOU WIN
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Restaurant Owner</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You receive the full order amount plus the entire delivery fee directly from the customer. 
                Only 15% commission is deducted from your prepaid wallet — not from your cash.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#4ECDC4]" />
                  100% cash in hand immediately
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#4ECDC4]" />
                  Keep entire delivery fee as profit
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#4ECDC4]" />
                  Direct customer relationships
                </li>
              </ul>
            </div>

            {/* Customer Win */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-emerald-500" />
              </div>
              <div className="inline-block bg-emerald-500/10 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                CUSTOMER WINS
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Customer</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                They enjoy competitive pricing without platform markups. 
                They build a real relationship with your restaurant directly through WhatsApp.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Fair prices with no hidden fees
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-emerald-500" />
                  AI-curated meal suggestions
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Direct chat with restaurant
                </li>
              </ul>
            </div>

            {/* GoSnel Win */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6">
                <Handshake className="w-7 h-7 text-amber-500" />
              </div>
              <div className="inline-block bg-amber-500/10 text-amber-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                GOSNEL WINS
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">GoSnel Platform</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We earn a fair and transparent 15% commission on food and drink value only. 
                We grow by helping you succeed, not by squeezing your margins.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-amber-500" />
                  Fair 15% on food/drink only
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-amber-500" />
                  No commission on delivery fees
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-amber-500" />
                  Growth through partnership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fair Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
              We Protect Your Business
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Fair Policies That Make Sense
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#4ECDC4]/10 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-[#4ECDC4]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Order Cancelled?</h3>
              <p className="text-gray-600 text-sm">If the customer cancels, we refund your full 15% commission immediately. You lose nothing.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Extra Items Added?</h3>
              <p className="text-gray-600 text-sm">If customer adds extra items via WhatsApp after ordering, no additional commission. Pure profit for you.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Item Removed?</h3>
              <p className="text-gray-600 text-sm">If customer removes any item, we refund the proportional commission. Every dirham is tracked fairly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Real Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Restaurant Owners Like You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The wallet system was confusing at first, but now I love it. I get cash from customers and the commission just gets deducted automatically. Much simpler than waiting for settlements.",
                name: "Ahmed Al Rashid",
                restaurant: "Spice Garden Restaurant",
              },
              {
                quote: "We switched from a big app. They took 28% and held our money for 2 weeks. Now with GoSnel, we keep the cash same day and pay only 15%. Our profit doubled.",
                name: "Fatima Hassan",
                restaurant: "Golden Biryani House",
              },
              {
                quote: "What I like most is the direct WhatsApp contact with customers. We can offer special deals, take custom orders, and build real relationships. No middleman.",
                name: "Mohammed Iqbal",
                restaurant: "Fresh Bites Cafe",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.restaurant}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
            alt="Restaurant food"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/95 to-[#3DBDB5]/95" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            Start receiving orders tomorrow
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Keep More of What You Earn?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto">
            Join GoSnel in 5 minutes. No setup fees. No contracts. Just send us your menu on WhatsApp and we handle everything else.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-10 py-7 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-3" />
                Register Now on WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-white/70 text-sm">
            Or call us directly: <a href={`tel:${PHONE_NUMBER}`} className="text-white underline font-medium">{PHONE_NUMBER}</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#4ECDC4] flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl">GoSnel</span>
            </div>
            <p className="text-white/60 text-sm text-center md:text-left">
              The smart delivery platform for independent restaurants in UAE.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4ECDC4] transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} GoSnel. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
