import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: 'Cafe Nova | Freshly Brewed Aromatic Coffee',
  description: 'Cafe Nova - Food, Music, Cozy Vibes & Perfect Hangout Spot in Rohru, Himachal Pradesh. Freshly brewed aromatic coffee and delicious food.',
  keywords: ['cafe', 'coffee', 'bakery', 'rohru', 'himachal pradesh', 'cafe nova'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
