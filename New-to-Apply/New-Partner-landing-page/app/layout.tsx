import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'GoSnel Partner Program | Join the UAE Restaurant Platform',
  description: 'Join GoSnel and grow your restaurant with 50% lower commissions, instant WhatsApp orders, and same-day payments. The smartest way to reach customers in UAE.',
  keywords: 'GoSnel, restaurant partner UAE, food delivery UAE, low commission delivery, WhatsApp orders, Ajman restaurants',
  openGraph: {
    title: 'GoSnel Partner Program | Join the UAE Restaurant Platform',
    description: 'Join GoSnel and grow your restaurant with 50% lower commissions, instant WhatsApp orders, and same-day payments.',
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
