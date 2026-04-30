"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-[#4ECDC4] flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className={`font-bold text-xl ${scrolled ? "text-foreground" : "text-white"}`}>
            GoSnel
          </span>
        </Link>

        <a
          href="https://wa.me/971542503729?text=Hi%20I%20want%20to%20join%20as%20a%20partner"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Join Now</span>
        </a>
      </div>
    </header>
  )
}
