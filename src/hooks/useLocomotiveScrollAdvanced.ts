"use client"

import { useEffect, useRef, useCallback } from "react"

interface LocomotiveScrollOptions {
  smooth?: boolean
  ease?: number
  multiplier?: number
  touchMultiplier?: number
}

class LocomotiveScrollAdvanced {
  private element: HTMLElement
  private currentY = 0
  private targetY = 0
  private ease: number
  private multiplier: number
  private touchMultiplier: number
  private animationId: number | null = null
  private isTouch = false

  constructor(element: HTMLElement, options: LocomotiveScrollOptions = {}) {
    this.element = element
    this.ease = options.ease || 0.08
    this.multiplier = options.multiplier || 1
    this.touchMultiplier = options.touchMultiplier || 2
    this.init()
  }

  private init() {
    // Set up smooth scrolling container
    this.element.style.position = "fixed"
    this.element.style.top = "0"
    this.element.style.left = "0"
    this.element.style.width = "100%"
    this.element.style.willChange = "transform"

    // Update body height
    this.updateBodyHeight()

    // Add event listeners
    window.addEventListener("scroll", this.onScroll.bind(this))
    window.addEventListener("resize", this.updateBodyHeight.bind(this))
    window.addEventListener("wheel", this.onWheel.bind(this), { passive: false })
    window.addEventListener("touchstart", this.onTouchStart.bind(this))
    window.addEventListener("touchmove", this.onTouchMove.bind(this), { passive: false })

    // Start animation loop
    this.animate()
  }

  private updateBodyHeight() {
    const height = this.element.scrollHeight
    document.body.style.height = `${height}px`
  }

  private onScroll() {
    if (!this.isTouch) {
      this.targetY = -window.pageYOffset
    }
  }

  private onWheel(e: WheelEvent) {
    e.preventDefault()
    const delta = e.deltaY * this.multiplier
    window.scrollBy(0, delta)
  }

  private onTouchStart() {
    this.isTouch = true
  }

  private onTouchMove(e: TouchEvent) {
    // Allow native touch scrolling with enhanced smoothness
    this.targetY = -window.pageYOffset
  }

  private animate() {
    // Smooth interpolation
    this.currentY += (this.targetY - this.currentY) * this.ease

    // Apply transform
    this.element.style.transform = `translateY(${this.currentY}px)`

    // Continue animation
    this.animationId = requestAnimationFrame(() => this.animate())
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }

    // Remove event listeners
    window.removeEventListener("scroll", this.onScroll.bind(this))
    window.removeEventListener("resize", this.updateBodyHeight.bind(this))
    window.removeEventListener("wheel", this.onWheel.bind(this))
    window.removeEventListener("touchstart", this.onTouchStart.bind(this))
    window.removeEventListener("touchmove", this.onTouchMove.bind(this))

    // Reset styles
    this.element.style.position = ""
    this.element.style.top = ""
    this.element.style.left = ""
    this.element.style.width = ""
    this.element.style.transform = ""
    this.element.style.willChange = ""
    document.body.style.height = ""
  }
}

export function useLocomotiveScrollAdvanced(enabled = true, options: LocomotiveScrollOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const locomotiveRef = useRef<LocomotiveScrollAdvanced | null>(null)

  const initScroll = useCallback(() => {
    if (enabled && containerRef.current && !locomotiveRef.current) {
      const timer = setTimeout(() => {
        if (containerRef.current) {
          locomotiveRef.current = new LocomotiveScrollAdvanced(containerRef.current, options)
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [enabled, options])

  useEffect(() => {
    const cleanup = initScroll()
    return cleanup
  }, [initScroll])

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
