import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: 'PrepMaster - Your Exam Preparation Partner',
  description: 'AI-powered exam preparation platform for Indian competitive exams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClerkProvider>
          <div className="min-h-screen bg-gray-50">
            {children}
          </div>
        </ClerkProvider>
      </body>
    </html>
  )
}