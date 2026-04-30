import { X, Check, Clock, Frown, Search, Sparkles, Zap, Smile } from "lucide-react"

const traditionalApps = [
  { icon: Search, text: "Search 'burger' → 100 results" },
  { icon: Clock, text: "Scroll for 15+ minutes" },
  { icon: Frown, text: "Decision paralysis" },
]

const gosnelFeatures = [
  { icon: Sparkles, text: "AI suggests perfect combos" },
  { icon: Zap, text: "Decide in 30 seconds" },
  { icon: Smile, text: "Confidence & clarity" },
]

export function Comparison() {
  return (
    <section id="compare" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">The Difference</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            GoSnel vs Traditional Food Apps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop searching. Start discovering.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Apps */}
          <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden">
            {/* Subtle X pattern background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,currentColor_10px,currentColor_11px)]" />
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Traditional Apps</h3>
              </div>

              <div className="space-y-6">
                {traditionalApps.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GoSnel */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 relative overflow-hidden shadow-xl shadow-primary/20">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full blur-xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">GoSnel</h3>
              </div>

              <div className="space-y-6">
                {gosnelFeatures.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white/90 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
