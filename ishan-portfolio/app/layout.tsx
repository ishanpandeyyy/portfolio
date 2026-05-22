import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ishan Pandey - AI/ML Developer & Linux Enthusiast",
  description:
    "Passionate software developer specializing in AI/ML, algorithmic trading, and intelligent automation. Expert in Python, C++, Linux systems, and ethical hacking.",
  keywords:
    "AI/ML Developer, Python, C++, Linux, Algorithmic Trading, Machine Learning, Deep Learning, NLP, Cybersecurity",
  authors: [{ name: "Ishan Pandey" }],
  openGraph: {
    title: "Ishan Pandey - AI/ML Developer & Linux Enthusiast",
    description:
      "Passionate software developer specializing in AI/ML, algorithmic trading, and intelligent automation.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-900`}>{children}</body>
    </html>
  )
}
