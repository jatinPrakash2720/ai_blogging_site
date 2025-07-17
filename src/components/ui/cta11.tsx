import { Button } from "@/components/ui/button"

interface Cta11Props {
  heading?: string
  description?: string
  buttons?: {
    primary?: {
      text: string
      url: string
    }
    secondary?: {
      text: string
      url: string
    }
  }
}

const Cta11 = ({
  heading = "Ready to Transform Your Content Creation?",
  description = "Join thousands of content creators who have already revolutionized their blogging workflow with BlogLikho's AI-powered platform.",
  buttons = {
    primary: {
      text: "Start Free Trial",
      url: "#",
    },
    secondary: {
      text: "Schedule Demo",
      url: "#",
    },
  },
}: Cta11Props) => {
  return (
    <section className="py-32 bg-white dark:bg-black">
      <div className="container flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center rounded-lg bg-gray-50 dark:bg-gray-900 p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-gray-900 dark:text-white">
            {heading}
          </h3>
          <p className="mb-8 max-w-3xl text-gray-600 dark:text-gray-300 lg:text-lg">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button
                variant="outline"
                className="w-full sm:w-auto border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                asChild
              >
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button
                className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                asChild
              >
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta11
