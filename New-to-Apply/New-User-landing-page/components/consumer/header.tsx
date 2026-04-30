"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ConsumerHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappUrl = "https://wa.me/971565651133?text=Hi%20GoSnel!%20I%20want%20to%20order%20food"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-foreground">GoSnel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              How It Works
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="#compare" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Why GoSnel
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Chat Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#how-it-works" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#features" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#compare" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Why GoSnel
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full mt-2">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat Now
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
