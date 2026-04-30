import { MessageSquare, Sparkles, Send } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell AI Your Mood",
    description: "Craving a burger? Eating healthy? Just type it. Our AI understands context instantly.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Get a 4-Item Combo",
    description: "We instantly build a cohesive combo (Main, Side, Drink, Dessert) from top-rated restaurants near you.",
  },
  {
    number: "03",
    icon: Send,
    title: "Order via WhatsApp",
    description: "One click sends your formatted order directly to the restaurant. No apps needed.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            How GoSnel Works
          </h2>
          <p className="mt-4 text-lg text-background/70">
            Three simple steps to your perfect meal.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative bg-background/5 backdrop-blur-sm border border-background/10 rounded-3xl p-8 hover:bg-background/10 transition-all">
                {/* Step Number */}
                <div className="text-6xl font-bold text-primary/20 absolute top-4 right-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-background/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
