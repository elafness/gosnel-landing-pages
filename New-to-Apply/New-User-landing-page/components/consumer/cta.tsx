import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ConsumerCta() {
  const whatsappUrl = "https://wa.me/971542503729?text=Hi%20GoSnel!%20I%20want%20to%20order%20food"

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop"
          alt="Delicious food spread"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/90 to-foreground/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <span className="text-sm font-medium text-primary">Ready to try?</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 text-balance">
            Your perfect meal is one message away
          </h2>

          <p className="text-xl text-background/70 mb-10 max-w-lg leading-relaxed">
            No app to download. No account to create. Just chat with GoSnel on WhatsApp and discover your next favorite meal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Start Chatting Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-background/50 text-sm">
            Join 1,000+ food lovers in Ajman who&apos;ve discovered their perfect meals with GoSnel
          </p>
        </div>
      </div>
    </section>
  )
}
