"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/context/ThemeContext"
import { Navbar1 } from "@/components/ui/navbar-1"
import { HeroSection } from "@/components/ui/hero-section-6"
import { FeaturesSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid"
import HowItWorks from "@/components/HowItWorks"
import TestimonialSlider from "@/components/ui/testimonial-slider"
import { CTA } from "@/components/ui/call-to-action"
import { NewsletterSection } from "@/components/ui/newsletter-section"
import StickyFooterFixed from "@/components/ui/footer"
import LoaderOne from "@/components/ui/loader-one"
import { useLocomotiveScrollImproved } from "@/hooks/useLocomotiveScroll"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const scrollContainerRef = useLocomotiveScrollImproved(!isLoading)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen flex items-center justify-center min-h-screen">
        <LoaderOne />
      </div>
    )
  }

  return (
    <ThemeProvider>
      <div
        ref={scrollContainerRef}
        className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300"
      >
        <Navbar1 />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSectionWithBentoGrid />
          <HowItWorks />
          <TestimonialSlider />
          <CTA />
          <NewsletterSection />
        </main>
        <StickyFooterFixed />
      </div>
    </ThemeProvider>
  )
}

export default App
