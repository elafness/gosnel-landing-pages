"use client"

import Link from "next/link"
import { MessageCircle, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#4ECDC4] flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="font-bold text-2xl text-white">GoSnel</span>
            </Link>
            <p className="text-white/70 max-w-md leading-relaxed mb-6">
              The AI-powered platform that connects hungry customers with local restaurants. 
              Lower commissions, instant payments, and full control over your business.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/971542503729?text=Hi%20I%20want%20to%20join%20as%20a%20partner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/971542503729"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#4ECDC4] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+971542503729"
                className="flex items-center gap-3 text-white/70 hover:text-[#4ECDC4] transition-colors"
              >
                <Phone className="w-5 h-5" />
                +971 54 250 3729
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5" />
                Ajman, UAE
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link
                href="https://gosnel.com"
                target="_blank"
                className="block text-white/70 hover:text-[#4ECDC4] transition-colors"
              >
                Customer App
              </Link>
              <Link
                href="https://user.gosnel.com"
                target="_blank"
                className="block text-white/70 hover:text-[#4ECDC4] transition-colors"
              >
                Partner Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} GoSnel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
