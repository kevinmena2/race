import type React from "react"
import "./globals.css"
import "./styles/animations.css"
import { Inter } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const TITLE = "Race Wonder LLC"
const DESCRIPTION =
  "Solo IT consultant in Dallas–Fort Worth helping medical and dental practices and startups with HIPAA compliance, security, and practical IT support."
const SITE_URL = "https://www.racewonder.online"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  generator: "v0.app",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Race Wonder LLC",
    images: [{ url: "/images/hero-medical-office.png", width: 1200, height: 630, alt: "Race Wonder LLC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero-medical-office.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistSans.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
