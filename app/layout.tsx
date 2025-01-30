import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react" // Added import for React
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "E-commerce Platform",
  description: "A fully responsive e-commerce website built with Next.js and Stripe integration.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#000000",
  manifest: "/manifest.json",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-svh flex-col antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={0}>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

