import { Edit3, Sparkles, CheckCircle, Share2 } from "lucide-react"

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 transition-colors duration-300">
          How It Works
        </h2>
        <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto transition-colors duration-300">
          Unlock your financial potential in three simple steps. We provide the
          tools and resources you need to achieve your goals.
        </p>

        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-black/20 dark:bg-white/20 transform -translate-y-1/2 transition-colors duration-300"></div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-24 relative">
            {/* Step 1 */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center relative z-10 border border-black/10 dark:border-white/10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-bold mb-6 transition-colors duration-300">
                1
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-black/10 dark:bg-white/10 rounded-lg mx-auto mb-6 transition-colors duration-300">
                <Edit3
                  className="h-8 w-8 text-black dark:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">
                Input Your Ideas
              </h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed transition-colors duration-300">
                Access our comprehensive learning resources to understand the
                basics of finance and investment.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center relative z-10 border border-black/10 dark:border-white/10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-bold mb-6 transition-colors duration-300">
                2
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-black/10 dark:bg-white/10 rounded-lg mx-auto mb-6 transition-colors duration-300">
                <Sparkles
                  className="h-8 w-8 text-black dark:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">
                AI Magic Happens
              </h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed transition-colors duration-300">
                Start investing with confidence using our platform. Choose from
                a variety of investment options.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center relative z-10 border border-black/10 dark:border-white/10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-bold mb-6 transition-colors duration-300">
                3
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-black/10 dark:bg-white/10 rounded-lg mx-auto mb-6 transition-colors duration-300">
                <CheckCircle
                  className="h-8 w-8 text-black dark:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">
                Review & Edit
              </h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed transition-colors duration-300">
                Watch your investments grow over time. We provide tools to track
                your progress and manage your portfolio.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center relative z-10 border border-black/10 dark:border-white/10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-bold mb-6 transition-colors duration-300">
                4
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-black/10 dark:bg-white/10 rounded-lg mx-auto mb-6 transition-colors duration-300">
                <Share2
                  className="h-8 w-8 text-black dark:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">
                Publish & Share
              </h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed transition-colors duration-300">
                Share your masterpiece with the world and get feedback from
                others.
              </p>
            </div>
          </div>
        </div>

        <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl mt-16">
          Get Started Today
        </button>
      </div>
    </section>
  )
}

export default HowItWorks
