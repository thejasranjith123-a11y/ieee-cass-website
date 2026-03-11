import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: 'IEEE CASS Kerala Chapter | Circuits and Systems Society',
  description: 'IEEE Circuits and Systems Society (CASS) Kerala Chapter - Promoting excellence in circuits and systems research, education, and professional development in Kerala.',
  keywords: ['IEEE', 'CASS', 'Kerala', 'Circuits', 'Systems', 'Electronics', 'Engineering'],
  openGraph: {
    title: 'IEEE CASS Kerala Chapter',
    description: 'Promoting excellence in circuits and systems research and education in Kerala',
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
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
