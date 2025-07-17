"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Loader2 } from "lucide-react"
import { useState } from "react"

type FormStatus = "idle" | "loading" | "success" | "error"

interface NewsletterSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  onSubscribe?: (email: string) => Promise<{ success: boolean; error?: string }>
  backgroundEffect?: boolean
}

export function NewsletterSection({
  title = "Stay Updated with AI Writing Tips",
  onSubscribe,
  backgroundEffect = true,
  className,
  ...props
}: NewsletterSectionProps) {
  const [formState, setFormState] = useState({
    email: "",
    status: "idle" as FormStatus,
    message: "",
  })

  const isLoading = formState.status === "loading"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!onSubscribe) {
      // Default behavior when no onSubscribe is provided
      setFormState((prev) => ({ ...prev, status: "loading", message: "" }))
      setTimeout(() => {
        setFormState({
          email: "",
          status: "success",
          message: "Thanks for subscribing!",
        })
      }, 1000)
      return
    }

    setFormState((prev) => ({ ...prev, status: "loading", message: "" }))

    try {
      const result = await onSubscribe(formState.email)
      if (!result.success) {
        setFormState((prev) => ({
          ...prev,
          status: "error",
          message: result.error || "",
        }))
      } else {
        setFormState({
          email: "",
          status: "success",
          message: "Thanks for subscribing!",
        })
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        status: "error",
        message: error instanceof Error ? error.message : "Failed to subscribe",
      }))
    }
  }

  return (
    <section
      className={cn(
        "relative bg-white dark:bg-black text-foreground transition-colors duration-300",
        "py-4 px-4 md:py-8 lg:py-10",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-black dark:bg-black px-4 py-10 sm:px-8 transition-colors duration-300">
          {backgroundEffect && <BackgroundEffect />}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-xl/[1.1] font-extrabold tracking-tight text-white md:text-2xl/[1.1]">
              {title}
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Get exclusive insights, writing tips, and AI-powered content
              strategies delivered straight to your inbox every week.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="inline-flex gap-2 max-w-md mx-auto w-full">
                  <Input
                    id="subscribe-form"
                    className="flex-1 border-white/30 bg-white/10 text-white placeholder:text-white/60 md:min-w-64"
                    placeholder="Your email address"
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    disabled={isLoading}
                    aria-label="Subscribe to the newsletter"
                    required
                  />
                  <Button
                    type="submit"
                    className="group relative bg-white text-black hover:bg-white/90 transition-colors duration-300"
                    disabled={isLoading}
                    data-loading={isLoading}
                  >
                    <span
                      className={cn(
                        "inline-flex items-center",
                        isLoading && "text-transparent"
                      )}
                    >
                      Subscribe
                      <ArrowRight
                        className="-me-1 ms-2 h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2
                          className="animate-spin"
                          size={16}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </Button>
                </div>
                {formState.message && (
                  <p
                    className={cn(
                      "mt-2 text-xs",
                      formState.status === "error"
                        ? "text-red-400"
                        : "text-green-400"
                    )}
                    role="alert"
                    aria-live="polite"
                  >
                    {formState.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function BackgroundEffect() {
  return (
    <div
      className="pointer-events-none absolute -right-64 -top-48"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="856"
        height="745"
        fill="none"
      >
        <g filter="url(#ill-a)">
          <path
            fill="url(#ill-b)"
            fillRule="evenodd"
            d="m56 88 344 212-166 188L56 88Z"
            clipRule="evenodd"
          />
        </g>
        <g filter="url(#ill-c)">
          <path
            fill="url(#ill-d)"
            fillRule="evenodd"
            d="m424 257 344 212-166 188-178-400Z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <linearGradient
            id="ill-b"
            x1="210.5"
            x2="210.5"
            y1="88"
            y2="467"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" stopOpacity="0.64" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="ill-d"
            x1="578.5"
            x2="578.5"
            y1="257"
            y2="636"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" stopOpacity="0.64" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <filter
            id="ill-a"
            width="520"
            height="576"
            x="-32"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_244_5"
              stdDeviation="44"
            />
          </filter>
          <filter
            id="ill-c"
            width="520"
            height="576"
            x="336"
            y="169"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_244_5"
              stdDeviation="44"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
