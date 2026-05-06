import Link from "next/link"
import { MessageCircle, Instagram, Phone, MapPin } from "lucide-react"

export function ConsumerFooter() {
  const whatsappUrl = "https://wa.me/971542503729?text=Hi%20GoSnel!%20I%20want%20to%20order%20food"

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold text-background">GoSnel</span>
            </Link>
            <p className="text-background/60 max-w-sm mb-6 leading-relaxed">
              Your AI food agent that cures menu fatigue. Get the perfect 4-item combo in 30 seconds, delivered via WhatsApp.
            </p>
            <div className="flex gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/gosnelapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#how-it-works" className="text-background/60 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-background/60 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#compare" className="text-background/60 hover:text-primary transition-colors">
                  Why GoSnel
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-background/60 hover:text-primary transition-colors">
                  For Restaurants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-background/60">
                <Phone className="w-4 h-4 text-primary" />
                <span>+971 56 565 1133</span>
              </li>
              <li className="flex items-center gap-3 text-background/60">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ajman, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            &copy; {new Date().getFullYear()} GoSnel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-background/40 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-background/40 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
