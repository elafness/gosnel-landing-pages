import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GoSnel Partner Program | Lower Commissions, Same-Day Payments',
  description: 'Join GoSnel and grow your restaurant with only 15% commission, instant WhatsApp orders, and same-day cash payments. The smartest way for UAE restaurants to increase profits.',
  keywords: 'GoSnel, restaurant partner UAE, food delivery UAE, low commission delivery, WhatsApp orders, Ajman restaurants, same day payment',
  openGraph: {
    title: 'GoSnel Partner Program | Keep More of What You Earn',
    description: 'Only 15% commission. Same-day payments. Direct WhatsApp orders. Join the smartest delivery platform for UAE restaurants.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
