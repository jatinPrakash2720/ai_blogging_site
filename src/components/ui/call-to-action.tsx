import { MoveRight, PhoneCall } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function CTA() {
  return (
    <div className="w-full py-12 lg:py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center bg-black dark:bg-black rounded-md p-4 lg:p-14 gap-8 items-center transition-colors duration-300">
          <div>
            <Badge className="bg-white dark:bg-white text-black dark:text-black transition-colors duration-300">
              Get started
            </Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-white dark:text-white transition-colors duration-300">
              Try BlogLikho today!
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-white/70 dark:text-white/70 max-w-xl transition-colors duration-300">
              Transform your content creation process with AI-powered writing
              tools. Join thousands of bloggers who trust BlogLikho to create
              engaging, SEO-optimized content that drives results.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button
              className="gap-4 bg-transparent border border-white/30 dark:border-white/30 text-white/80 dark:text-white/80 hover:bg-white/10 dark:hover:bg-white/10 transition-colors duration-300"
              variant="outline"
            >
              Schedule Demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button className="gap-4 bg-white dark:bg-white text-black dark:text-black hover:bg-white/90 dark:hover:bg-white/90 transition-colors duration-300">
              Start Free Trial <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CTA }
