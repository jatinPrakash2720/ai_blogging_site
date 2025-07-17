"use client"

import { useEffect, useRef } from "react"

// Improved Locomotive Scroll implementation
class LocomotiveScroll {
  private element: HTMLElement
  private currentY = 0
  private targetY = 0
  private ease = 0.1
  private animationId: number | null = null

  constructor(element: HTMLElement) {
    this.element = element
    this.init()
  }

  private init() {
    // Set up smooth scrolling container
    this.element.style.position = "fixed"
    this.element.style.top = "0"
    this.element.style.left = "0"
    this.element.style.width = "100%"
    this.element.style.willChange = "transform"
    this.element.style.backfaceVisibility = "hidden"

    // Update body height to match content
    this.updateBodyHeight()

    // Add event listeners
    window.addEventListener("scroll", this.onScroll.bind(this))
    window.addEventListener("resize", this.updateBodyHeight.bind(this))

    // Start animation loop
    this.animate()
  }

  private updateBodyHeight() {
    // Use a more reliable method to calculate content height
    const height = this.element.scrollHeight
    document.body.style.height = `${height}px`

    // Ensure the footer is properly positioned
    const footer = this.element.querySelector("footer")
    if (footer) {
      // Force a reflow to ensure proper positioning
      footer.offsetHeight
    }
  }

  private onScroll() {
    this.targetY = -window.pageYOffset
  }

  private animate() {
    // Smooth interpolation
    this.currentY += (this.targetY - this.currentY) * this.ease

    // Apply transform with better performance
    this.element.style.transform = `translate3d(0, ${this.currentY}px, 0)`

    // Continue animation
    this.animationId = requestAnimationFrame(() => this.animate())
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    window.removeEventListener("scroll", this.onScroll.bind(this))
    window.removeEventListener("resize", this.updateBodyHeight.bind(this))

    // Reset styles
    this.element.style.position = ""
    this.element.style.top = ""
    this.element.style.left = ""
    this.element.style.width = ""
    this.element.style.transform = ""
    this.element.style.willChange = ""
    this.element.style.backfaceVisibility = ""
    document.body.style.height = ""
  }
}

export function useLocomotiveScrollImproved(enabled = true) {
  const containerRef = useRef<HTMLDivElement>(null)
  const locomotiveRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (enabled && containerRef.current && !locomotiveRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        if (containerRef.current) {
          locomotiveRef.current = new LocomotiveScroll(containerRef.current)
        }
      }, 100)

      return () => clearTimeout(timer)
    }

    return () => {
      if (locomotiveRef.current) {
        locomotiveRef.current.destroy()
        locomotiveRef.current = null
      }
    }
  }, [enabled])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (locomotiveRef.current) {
        locomotiveRef.current.destroy()
      }
    }
  }, [])

  return containerRef
}
