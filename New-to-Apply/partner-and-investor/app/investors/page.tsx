"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  TrendingUp,
  Wallet,
  Users,
  Globe,
  Layers,
  Zap,
  Building2,
  ChevronDown,
  Check,
  Target,
  Rocket,
  Lightbulb,
  ShieldCheck,
  CircleDollarSign,
  Heart,
  Store,
  Smartphone,
  Brain,
  MapPin,
  Banknote,
  Timer,
  Scale,
  Network,
  ChartNoAxesCombined,
  HandCoins,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const CONTACT_EMAIL = "invest@gosnel.com"

export default function InvestorPitchPage() {
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
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white border-b border-gray-100"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#4ECDC4] flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="font-bold text-xl text-gray-900">GoSnel</span>
            <span className="hidden sm:inline-block text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full ml-2">
              Investor Relations
            </span>
          </div>
          <Button asChild className="bg-[#4ECDC4] hover:bg-[#3DBDB5] rounded-full shadow-lg">
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#4ECDC4]/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#4ECDC4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4ECDC4]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#4ECDC4]/10 border border-[#4ECDC4]/30 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Live in UAE — Ajman
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              The Future of Food Delivery is{" "}
              <span className="text-[#4ECDC4]">Asset-Light</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              GoSnel is a <strong>meta-layer platform</strong> that connects AI-powered food discovery 
              with restaurants&apos; own delivery — no fleet, no riders, no heavy capital. 
              Just smart technology that scales fast.
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#4ECDC4]/10 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-[#4ECDC4]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                  <p className="text-sm text-gray-500">Motorcycles Owned</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#4ECDC4]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#4ECDC4]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                  <p className="text-sm text-gray-500">Employed Riders</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15%</p>
                  <p className="text-sm text-gray-500">Commission Only</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white px-8 py-6 rounded-2xl font-bold text-lg shadow-xl shadow-[#4ECDC4]/25 hover:scale-105 transition-all"
              >
                <a href="#opportunity">
                  View Investment Opportunity
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gray-200 hover:bg-gray-50 px-8 py-6 rounded-2xl font-bold text-lg"
              >
                <a href="#model">
                  Understand Our Model
                  <ChevronDown className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Market Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              The Food Delivery Industry is Broken
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Traditional platforms bleed money on logistics while squeezing restaurants with 30%+ fees.
              Customers pay inflated prices. Nobody wins except venture capital burning cash.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Store className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Restaurants Suffer</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                25-30% commission fees eat their margins. Payment delays of 7-14 days 
                strangle cash flow. They lose direct customer relationships.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Customers Overpay</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Menu markups of 15-20% plus hidden service fees. Decision fatigue from 
                endless scrolling. Poor experience leads to churn.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Platforms Lose Money</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Heavy logistics costs — motorcycles, riders, insurance, fuel. 
                Most major players remain unprofitable after a decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The GoSnel Solution */}
      <section id="model" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              GoSnel: The Meta-Layer Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don&apos;t own logistics. We don&apos;t employ riders. We build the intelligent layer 
              that connects AI-powered food discovery with restaurants who already deliver.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-[#4ECDC4]/5 rounded-3xl p-8">
                <div className="space-y-4">
                  {/* Layer 1 */}
                  <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#4ECDC4]/20 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-[#4ECDC4]" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">AI Food Discovery</p>
                        <p className="text-sm text-gray-500">Smart meal combos in 30 seconds</p>
                      </div>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-[#4ECDC4]" />
                  </div>
                  {/* Layer 2 */}
                  <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#4ECDC4]/30">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#4ECDC4] flex items-center justify-center">
                        <Layers className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">GoSnel Meta-Layer</p>
                        <p className="text-sm text-gray-500">WhatsApp orders + Wallet system</p>
                      </div>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-[#4ECDC4]" />
                  </div>
                  {/* Layer 3 */}
                  <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                        <Store className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Restaurant&apos;s Own Delivery</p>
                        <p className="text-sm text-gray-500">They deliver within 1-7 km radius</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Asset-Light Wins</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Rocket,
                    title: "Rapid Scaling Without Capital Burn",
                    desc: "No motorcycles to buy, no riders to employ, no insurance overhead. Expand to new cities with minimal fixed cost.",
                  },
                  {
                    icon: Scale,
                    title: "Higher Margins, Faster Profitability",
                    desc: "Our 15% take rate becomes almost pure margin. No fleet management eating into revenue.",
                  },
                  {
                    icon: Network,
                    title: "Network Effects Compound",
                    desc: "More restaurants join because of fair terms. More users come for better AI suggestions. Virtuous cycle.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Operational Simplicity",
                    desc: "No driver disputes, no vehicle maintenance, no fuel costs. Focus on what matters: the platform.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4ECDC4]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#4ECDC4]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Prepaid Wallet System */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Revenue Model
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              The Prepaid Wallet: Instant Cash Flow
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Restaurants receive 100% cash from customers instantly. Our commission comes from 
              a prepaid wallet they top up — ensuring our revenue while solving their cash flow problem.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Flow Diagram */}
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {[
                {
                  step: "1",
                  icon: Wallet,
                  title: "Restaurant Tops Up",
                  desc: "Adds funds to their GoSnel wallet to stay active",
                  color: "bg-[#4ECDC4]",
                },
                {
                  step: "2",
                  icon: Smartphone,
                  title: "Customer Orders",
                  desc: "AI suggests meals, order goes to WhatsApp",
                  color: "bg-blue-500",
                },
                {
                  step: "3",
                  icon: Banknote,
                  title: "Cash Collected",
                  desc: "Restaurant receives 100% payment directly",
                  color: "bg-emerald-500",
                },
                {
                  step: "4",
                  icon: CircleDollarSign,
                  title: "15% Deducted",
                  desc: "Commission taken from prepaid wallet only",
                  color: "bg-amber-500",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", item.color)}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs font-bold text-gray-400 mb-1">STEP {item.step}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Example Calculation */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ChartNoAxesCombined className="w-6 h-6 text-[#4ECDC4]" />
                Unit Economics Example
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-4">Single Order: 27 AED Food + 5 AED Delivery</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Customer Pays Restaurant</span>
                      <span className="font-bold text-gray-900">32 AED</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">GoSnel Commission (15% of food)</span>
                      <span className="font-bold text-[#4ECDC4]">4 AED</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Restaurant Net Keeps</span>
                      <span className="font-bold text-emerald-500">28 AED</span>
                    </div>
                    <div className="flex justify-between items-center py-2 bg-[#4ECDC4]/5 rounded-lg px-3">
                      <span className="text-gray-700 font-medium">Restaurant Effective Rate</span>
                      <span className="font-bold text-[#4ECDC4]">87.5%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-4">Why This Model Works</h4>
                  <div className="space-y-3">
                    {[
                      "Restaurant has immediate cash — no waiting 7-14 days",
                      "Our revenue is secured upfront via prepaid wallet",
                      "Lower commission attracts more quality restaurants",
                      "No payment processing delays or chargebacks",
                      "Transparent system builds trust and retention",
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#4ECDC4] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triple Win Model */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Value Creation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              The Triple Win: Everyone Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlike traditional platforms where someone always loses, GoSnel creates genuine value 
              for all parties — building a sustainable ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Restaurant Wins */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center mb-6">
                <Store className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Restaurant Wins</h3>
              <ul className="space-y-3">
                {[
                  "Only 15% commission vs 25-30%",
                  "Cash in hand same day",
                  "Direct WhatsApp relationship",
                  "Control their own delivery",
                  "No inflated menu pricing",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Wins */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Wins</h3>
              <ul className="space-y-3">
                {[
                  "Real restaurant prices — no markup",
                  "AI solves decision fatigue",
                  "Perfect 4-item combos in 30 sec",
                  "Direct chat with restaurant",
                  "Cash on delivery option",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* GoSnel Wins */}
            <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-white rounded-3xl p-8 border border-[#4ECDC4]/20">
              <div className="w-14 h-14 rounded-2xl bg-[#4ECDC4] flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">GoSnel Wins</h3>
              <ul className="space-y-3">
                {[
                  "15% revenue with ~0 logistics cost",
                  "Prepaid wallet = guaranteed payment",
                  "Rapid city-by-city expansion",
                  "High margin, capital efficient",
                  "Network effects compound growth",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#4ECDC4] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Differentiation */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
                Technology Moat
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                AI That Actually Solves a Problem
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Traditional apps give you 100 options and call it &quot;choice.&quot; 
                Our AI understands your mood, preferences, and dietary needs — then delivers 
                the perfect Main + Side + Drink + Dessert combo in 30 seconds.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Mood-Based Discovery",
                    desc: "\"Something cheesy\" or \"healthy but filling\" — natural language that works.",
                  },
                  {
                    title: "Personalization Memory",
                    desc: "Learns preferences over time: no rice, extra spicy, high protein.",
                  },
                  {
                    title: "Curated 4-Item Combos",
                    desc: "Complete meals, not endless scrolling through individual items.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#4ECDC4]/20 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-4 h-4 text-[#4ECDC4]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Chat Header */}
                    <div className="bg-[#4ECDC4] px-6 py-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-bold">G</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">GoSnel AI</p>
                        <p className="text-white/70 text-xs">Online</p>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 space-y-4 min-h-[280px] bg-gray-50">
                      {/* User Message */}
                      <div className="flex justify-end">
                        <div className="bg-[#4ECDC4] text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-[80%]">
                          <p className="text-sm">Something healthy but filling!</p>
                        </div>
                      </div>

                      {/* AI Response */}
                      <div className="flex justify-start">
                        <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-sm max-w-[85%] shadow-sm">
                          <p className="text-sm text-gray-900 mb-3">Perfect! Here&apos;s your combo:</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs">M</span>
                              <span className="text-gray-900">Grilled Chicken Bowl</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs">S</span>
                              <span className="text-gray-900">Quinoa Salad</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs">D</span>
                              <span className="text-gray-900">Fresh Lemonade</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-xs">D</span>
                              <span className="text-gray-900">Greek Yogurt</span>
                            </div>
                          </div>
                          <p className="text-[#4ECDC4] font-semibold mt-3">42 AED Total</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Strategy */}
      <section id="opportunity" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Growth Strategy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Expansion Without the Baggage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Traditional delivery companies need millions per city — motorcycles, riders, insurance, 
              warehouses. GoSnel needs only restaurants with their own delivery and our platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Traditional vs GoSnel */}
            <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-red-500" />
                Traditional Platform Expansion
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Fleet acquisition", cost: "$500K - $2M" },
                  { label: "Rider recruitment & training", cost: "$200K - $500K" },
                  { label: "Warehouse/dark kitchens", cost: "$300K - $1M" },
                  { label: "Insurance & compliance", cost: "$100K - $300K" },
                  { label: "Time to profitability", cost: "3-5 years" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-red-100/50">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-semibold text-red-600">{item.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-3 bg-red-100/50 rounded-lg px-3">
                  <span className="font-bold text-gray-900">Per-City Cost</span>
                  <span className="font-bold text-red-600">$1M - $4M+</span>
                </div>
              </div>
            </div>

            <div className="bg-[#4ECDC4]/5 rounded-3xl p-8 border border-[#4ECDC4]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-[#4ECDC4]" />
                GoSnel Meta-Layer Expansion
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Fleet acquisition", cost: "$0" },
                  { label: "Rider recruitment", cost: "$0" },
                  { label: "Warehouse costs", cost: "$0" },
                  { label: "Insurance overhead", cost: "$0" },
                  { label: "Time to profitability", cost: "3-6 months" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-[#4ECDC4]/10">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-semibold text-[#4ECDC4]">{item.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-3 bg-[#4ECDC4]/10 rounded-lg px-3">
                  <span className="font-bold text-gray-900">Per-City Cost</span>
                  <span className="font-bold text-[#4ECDC4]">~$50K (marketing)</span>
                </div>
              </div>
            </div>
          </div>

          {/* UAE Map & Expansion */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UAE First, GCC Next</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We&apos;re live in Ajman, UAE — proving the model works. The UAE&apos;s dense urban areas 
                  and high smartphone penetration make it ideal for our meta-layer approach. 
                  Once proven, the same playbook expands across GCC markets.
                </p>
                <div className="space-y-3">
                  {[
                    { city: "Ajman", status: "Live", color: "bg-emerald-500" },
                    { city: "Sharjah", status: "Q2 2025", color: "bg-amber-500" },
                    { city: "Dubai", status: "Q3 2025", color: "bg-blue-500" },
                    { city: "Abu Dhabi", status: "Q4 2025", color: "bg-purple-500" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={cn("w-3 h-3 rounded-full", item.color)} />
                      <span className="font-medium text-gray-900">{item.city}</span>
                      <span className="text-sm text-gray-500">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800"
                  alt="Dubai skyline"
                  width={500}
                  height={300}
                  className="rounded-2xl object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold">UAE Market</p>
                  <p className="text-white/80 text-sm">10M+ population, 95% smartphone penetration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Ask */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#4ECDC4] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Investment Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Join the Food Delivery Revolution
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            GoSnel is raising capital to expand across the UAE and GCC. 
            Our asset-light model means faster scaling, better unit economics, and clearer path to profitability.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Target,
                title: "Use of Funds",
                items: ["Market expansion (UAE cities)", "AI/product development", "Restaurant acquisition"],
              },
              {
                icon: TrendingUp,
                title: "Key Metrics",
                items: ["15% take rate", "Near-zero logistics cost", "3-6 month city payback"],
              },
              {
                icon: Globe,
                title: "Vision",
                items: ["UAE market leader by 2026", "GCC expansion 2026-2027", "SE Asia opportunities"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#4ECDC4]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#4ECDC4]" />
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((point, j) => (
                    <li key={j} className="text-sm text-white/70 flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#4ECDC4]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white px-10 py-7 rounded-2xl font-bold text-lg shadow-xl shadow-[#4ECDC4]/25 hover:scale-105 transition-all"
          >
            <a href={`mailto:${CONTACT_EMAIL}?subject=GoSnel Investment Inquiry`}>
              <Mail className="w-6 h-6 mr-3" />
              Request Investor Deck
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4ECDC4] flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl">GoSnel</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="https://gosnel.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                gosnel.com
              </a>
              <a href="https://gosnel.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                About
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                {CONTACT_EMAIL}
              </a>
            </div>
            <p className="text-sm text-white/40">
              UAE-based Food Discovery Platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
