"use client"

import { useState } from "react"
import { Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const demoConversation = [
  {
    type: "user",
    message: "I want something cheesy and filling for lunch!",
  },
  {
    type: "ai",
    message: "Perfect! I've got 3 great combos for you:",
    combos: [
      {
        items: ["Pizza Shawarma 🍕", "Cheese Salad 🥗", "Pepsi Cola 🥤", "Cheesecake 🍰"],
        price: "45 AED",
      },
      {
        items: ["Cheesy Burger 🍔", "Mozzarella Sticks 🧀", "Strawberry Milkshake 🥤", "Chocolate Brownie 🍫"],
        price: "50 AED",
      },
      {
        items: ["Four Cheese Pasta 🍝", "Garlic Bread 🥖", "Iced Tea 🍹", "Tiramisu 🍮"],
        price: "42 AED",
      },
    ],
    followUp: "Which one sounds good?",
  },
]

const quickPrompts = [
  "Something healthy",
  "Craving spicy food",
  "Quick lunch under 40 AED",
  "Comfort food vibes",
]

export function AiDemo() {
  const [selectedCombo, setSelectedCombo] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Live Demo</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            See GoSnel in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This is how easy it is to find your perfect meal.
          </p>
        </div>

        {/* Chat Demo */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
            {/* Chat Header */}
            <div className="bg-primary px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">GoSnel AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-white/70 text-xs">Online</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-6 min-h-[400px] bg-muted/20">
              {demoConversation.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.type === "user" ? (
                    <div className="flex items-end gap-2">
                      <div className="bg-primary text-white px-5 py-3 rounded-2xl rounded-br-md max-w-[85%]">
                        <p>{msg.message}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-end gap-2 w-full">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-card border border-border px-5 py-4 rounded-2xl rounded-bl-md max-w-[85%] shadow-sm">
                        <p className="text-foreground mb-4">{msg.message}</p>
                        
                        {msg.combos && (
                          <div className="space-y-3">
                            {msg.combos.map((combo, idx) => (
                              <button
                                key={idx}
                                onClick={() => setSelectedCombo(idx)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                                  selectedCombo === idx 
                                    ? "border-primary bg-primary/5" 
                                    : "border-border hover:border-primary/50"
                                }`}
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <span className="text-sm font-semibold text-primary">Option {idx + 1}</span>
                                  <span className="text-sm font-bold text-foreground">{combo.price}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {combo.items.map((item, itemIdx) => (
                                    <span key={itemIdx} className="text-sm text-muted-foreground">
                                      {item}{itemIdx < combo.items.length - 1 ? " +" : ""}
                                    </span>
                                  ))}
                                </div>
                              </button>
                            ))}
                          </div>
                        )}

                        {msg.followUp && (
                          <p className="text-foreground mt-4 font-medium">{msg.followUp}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Prompts */}
            <div className="px-6 py-4 border-t border-border bg-card">
              <p className="text-xs text-muted-foreground mb-3">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary text-sm text-muted-foreground transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="px-6 py-4 border-t border-border bg-card flex gap-3">
              <input
                type="text"
                placeholder="Type your craving..."
                className="flex-1 bg-muted rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="rounded-full w-12 h-12 p-0 bg-primary hover:bg-primary/90">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
