import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, SendHorizontal } from "lucide-react"
import { SplashCursor } from "@/components/ui/splash-cursor"
import { LavaLamp } from "@/components/ui/fluid-blob"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <SplashCursor />

      {/* Animated Fluid Background */}
      <div className="absolute inset-0 z-0">
        <LavaLamp />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-black/20" />

      <main className="relative z-10">
        <section className="min-h-screen overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 lg:pt-24">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="relative z-10 mx-auto max-w-4xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <a
                  href="/"
                  className="rounded-lg mx-auto flex w-fit items-center gap-2 border border-white/40 p-1 pr-3 lg:ml-0 bg-white/20 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white/30"
                >
                  <span className="bg-white text-black rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs font-medium">
                    New
                  </span>
                  <span className="text-sm text-white/90">
                    AI-Powered Writing Assistant
                  </span>
                  <span className="bg-white/30 block h-4 w-px"></span>
                  <ArrowRight className="size-4 text-white/70" />
                </a>

                <h1 className="mt-10 text-balance text-5xl font-bold md:text-6xl lg:text-7xl text-white leading-tight mix-blend-exclusion">
                  Write Better Blogs
                  <br />
                  <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                    With AI Magic
                  </span>
                </h1>
                <p className="mt-8 text-xl text-white/80 leading-relaxed mix-blend-exclusion">
                  Transform your ideas into engaging blog posts with our
                  advanced AI writing assistant. Create, edit, and publish
                  content that captivates your audience.
                </p>

                <div>
                  <form
                    action=""
                    className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto"
                  >
                    <div className="bg-white/20 backdrop-blur-md has-[input:focus]:ring-white relative grid grid-cols-[1fr_auto] items-center rounded-[1rem] border border-white/40 pr-1 shadow shadow-black/20 has-[input:focus]:ring-2">
                      <Mail className="text-white/60 pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                      <input
                        placeholder="Your email address"
                        className="h-14 w-full bg-transparent pl-12 text-white placeholder:text-white/50 focus:outline-none"
                        type="email"
                      />

                      <div className="md:pr-1.5 lg:pr-0">
                        <Button
                          aria-label="submit"
                          className="bg-white text-black hover:bg-white/90 transition-colors"
                        >
                          <span className="hidden md:block">Get Started</span>
                          <SendHorizontal
                            className="relative mx-auto size-5 md:hidden"
                            strokeWidth={2}
                          />
                        </Button>
                      </div>
                    </div>
                  </form>

                  <ul className="list-inside list-disc space-y-2 text-white/70 mix-blend-exclusion">
                    <li>Lightning Fast AI Generation</li>
                    <li>SEO Optimized Content</li>
                    <li>100% Original & Plagiarism-Free</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
