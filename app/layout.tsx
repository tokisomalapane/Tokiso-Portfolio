import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tokiso - Cloud & Backend Developer",
  description:
    "Software Developer specializing in cloud-native applications, backend development, and scalable infrastructure.",
  keywords: ["software developer", "cloud computing", "backend development", "AWS", "Docker", "Kubernetes"],
  authors: [{ name: "Tokiso" }],
  openGraph: {
    title: "Tokiso - Cloud & Backend Developer",
    description: "Software Developer specializing in cloud-native applications and backend development.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
