import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'GoSnel | Stop Scrolling. Start Eating. AI Food Agent',
  description: 'GoSnel is your AI food agent. Get the perfect 4-item combo (Main, Side, Drink, Dessert) in 30 seconds. No more menu fatigue. Just chat, confirm, and order via WhatsApp.',
  keywords: 'GoSnel, AI food ordering, meal suggestions UAE, food delivery UAE, WhatsApp food order, menu fatigue cure',
  openGraph: {
    title: 'GoSnel | Stop Scrolling. Start Eating.',
    description: 'Your AI food agent that builds the perfect meal combo in 30 seconds. Cure menu fatigue forever.',
    type: 'website',
    locale: 'en_AE',
  },
}

export const viewport: Viewport = {
  themeColor: '#4ECDC4',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
