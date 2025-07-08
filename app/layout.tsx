import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tokiso - Cloud & Sercurity Enthusiast",
  description:
    "Final-year BSc in Information Technology student with a relentless passion for cloud computing and cybersecurity.",
  keywords: ["software developer", "cloud computing" , "CyberSecurity", "backend development", "AWS", "Docker", ],
  authors: [{ name: "Tokiso Malapane" }],
  openGraph: {
    title: "Tokiso Malapane - FullStack Developer",
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
