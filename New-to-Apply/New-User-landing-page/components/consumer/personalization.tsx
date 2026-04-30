import { Leaf, Dumbbell, Sparkles } from "lucide-react"
import Image from "next/image"

const preferences = [
  {
    icon: Leaf,
    title: "Plant-Based",
    description: "Vegetarian or vegan meals, automatically selected",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Dumbbell,
    title: "Weight & Shape",
    description: "Balanced meals that fit your fitness goals",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Sparkles,
    title: "Smart Preferences",
    description: "No rice, not spicy, extra protein - you name it",
    color: "bg-purple-500/10 text-purple-600",
  },
]

export function Personalization() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop"
                  alt="Healthy food bowl"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>

              {/* Floating preference tags */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Vegan Mode</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg animate-float animation-delay-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">High Protein</span>
                  <span className="text-primary font-bold">+25g</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Personalized to You</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Tell me your preferences
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you&apos;re vegan, watching calories, or just avoiding certain ingredients - GoSnel remembers and adapts every suggestion to your taste.
              </p>
            </div>

            {/* Preference Cards */}
            <div className="space-y-4">
              {preferences.map((pref, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${pref.color}`}>
                    <pref.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{pref.title}</h3>
                    <p className="text-sm text-muted-foreground">{pref.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
