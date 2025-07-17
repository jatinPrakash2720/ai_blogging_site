"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  name: string
  username: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "BlogLikho has completely transformed my content creation process. What used to take hours now takes minutes, and the quality is consistently excellent.",
    name: "Sarah Johnson",
    username: "@sarahjohnson",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    quote:
      "As a freelance writer, BlogLikho helps me deliver high-quality content to my clients faster than ever. It's like having a writing partner who never sleeps.",
    name: "Michael Chen",
    username: "@michaelchen",
    avatar:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    quote:
      "The SEO optimization features are incredible. Our blog traffic has increased by 300% since we started using BlogLikho for our content creation.",
    name: "Emily Rodriguez",
    username: "@emilyrodriguez",
    avatar:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    quote:
      "BlogLikho helps us maintain a consistent blog schedule without hiring additional writers. The ROI has been phenomenal for our startup.",
    name: "David Thompson",
    username: "@davidthompson",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    quote:
      "The AI writing suggestions are spot-on and help me overcome writer's block instantly. This tool is a game-changer for content creators.",
    name: "Lisa Park",
    username: "@lisapark",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
]

const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 3
  if (width >= 768) return 2
  return 1
}

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  )
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => {
      const newWidth = window.innerWidth
      setWindowWidth(newWidth)

      const oldVisibleCount = getVisibleCount(windowWidth)
      const newVisibleCount = getVisibleCount(newWidth)

      if (oldVisibleCount !== newVisibleCount) {
        const maxIndexForNewWidth = testimonials.length - newVisibleCount
        if (currentIndex > maxIndexForNewWidth) {
          setCurrentIndex(Math.max(0, maxIndexForNewWidth))
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [windowWidth, currentIndex])

  useEffect(() => {
    if (!isAutoPlaying) return

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const visibleCount = getVisibleCount(windowWidth)
        const maxIndex = testimonials.length - visibleCount

        if (currentIndex >= maxIndex) {
          setDirection(-1)
          setCurrentIndex((prev) => prev - 1)
        } else if (currentIndex <= 0) {
          setDirection(1)
          setCurrentIndex((prev) => prev + 1)
        } else {
          setCurrentIndex((prev) => prev + direction)
        }
      }, 4000)
    }

    startAutoPlay()

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex, windowWidth, direction])

  const visibleCount = getVisibleCount(windowWidth)
  const maxIndex = testimonials.length - visibleCount
  const canGoNext = currentIndex < maxIndex
  const canGoPrev = currentIndex > 0

  const goNext = () => {
    if (canGoNext) {
      setDirection(1)
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
      pauseAutoPlay()
    }
  }

  const goPrev = () => {
    if (canGoPrev) {
      setDirection(-1)
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
      pauseAutoPlay()
    }
  }

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const handleDragEnd = (event: any, info: any) => {
    const { offset } = info
    const swipeThreshold = 30

    if (offset.x < -swipeThreshold && canGoNext) {
      goNext()
    } else if (offset.x > swipeThreshold && canGoPrev) {
      goPrev()
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    pauseAutoPlay()
  }

  return (
    <div className="px-4 py-4 sm:py-6 bg-black dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 dark:bg-white/20 text-white dark:text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300">
            Testimonials
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/70 dark:from-white dark:to-white/70 bg-clip-text text-transparent mt-3 sm:mt-4 px-4">
            Loved by Writers Worldwide
          </h3>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-white to-white/70 dark:from-white dark:to-white/70 mx-auto mt-4 sm:mt-6 transition-colors duration-300"></div>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div className="flex justify-center sm:justify-end sm:absolute sm:-top-16 right-0 space-x-2 mb-4 sm:mb-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              disabled={!canGoPrev}
              className={`p-2 rounded-full transition-all duration-300 ${
                canGoPrev
                  ? "bg-white/20 dark:bg-white/20 shadow-md hover:bg-white/30 dark:hover:bg-white/30 text-white dark:text-white"
                  : "bg-black/50 dark:bg-black/50 text-white/50 cursor-not-allowed"
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              disabled={!canGoNext}
              className={`p-2 rounded-full transition-all duration-300 ${
                canGoNext
                  ? "bg-white/20 dark:bg-white/20 shadow-md hover:bg-white/30 dark:hover:bg-white/30 text-white dark:text-white"
                  : "bg-black/50 dark:bg-black/50 text-white/50 cursor-not-allowed"
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          <div className="overflow-hidden relative px-2 sm:px-0">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full ${
                    visibleCount === 3
                      ? "md:w-1/3"
                      : visibleCount === 2
                      ? "md:w-1/2"
                      : "w-full"
                  } p-2`}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98, cursor: "grabbing" }}
                  style={{ cursor: "grab" }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 shadow-lg shadow-black/20 dark:shadow-black/20 transition-colors duration-300"
                    whileHover={{
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="absolute -top-4 -left-4 opacity-20 dark:opacity-20">
                      <Quote
                        size={windowWidth < 640 ? 40 : 60}
                        className="text-white dark:text-white"
                      />
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      <p className="text-sm sm:text-base text-white/80 dark:text-white/80 font-medium mb-4 sm:mb-6 leading-relaxed transition-colors duration-300">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      <div className="mt-auto pt-3 sm:pt-4 border-t border-white/20 dark:border-white/20">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              width={48}
                              height={48}
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white/20 dark:border-white/20 shadow-sm"
                              onError={(e) => {
                                ;(e.target as HTMLImageElement).src =
                                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-full bg-white/20 dark:bg-white/20"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0, 0.3, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatDelay: 1,
                              }}
                            />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-bold text-sm sm:text-base text-white dark:text-white transition-colors duration-300">
                              {testimonial.name}
                            </h4>
                            <p className="text-white/60 dark:text-white/60 text-xs sm:text-sm transition-colors duration-300">
                              {testimonial.username}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8">
            {Array.from(
              { length: testimonials.length - visibleCount + 1 },
              (_: any, index: any) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative mx-1 focus:outline-none"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex
                        ? "bg-white dark:bg-white"
                        : "bg-white/40 dark:bg-white/40"
                    }`}
                    animate={{
                      scale: index === currentIndex ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat:
                        index === currentIndex ? Number.POSITIVE_INFINITY : 0,
                      repeatDelay: 1,
                    }}
                  />
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/30 dark:bg-white/30"
                      animate={{
                        scale: [1, 1.8],
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  )}
                </motion.button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider
