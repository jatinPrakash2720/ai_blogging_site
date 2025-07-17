import { Zap, Brain, Palette, Globe, Shield, Rocket } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Writing",
      description:
        "Advanced AI algorithms help you generate engaging content ideas and overcome writer's block instantly.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Generate high-quality blog posts in seconds, not hours. Boost your productivity like never before.",
    },
    {
      icon: Palette,
      title: "Style Customization",
      description:
        "Adapt your writing style for different audiences and niches with our intelligent tone adjustment.",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description:
        "Write in over 30 languages and reach a global audience with our advanced language models.",
    },
    {
      icon: Shield,
      title: "Plagiarism-Free",
      description:
        "Every piece of content is original and unique, ensuring your blog stands out from the crowd.",
    },
    {
      icon: Rocket,
      title: "SEO Optimization",
      description:
        "Built-in SEO suggestions help your content rank higher and attract more organic traffic.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block">Modern Bloggers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, optimize, and publish amazing blog
            content that engages readers and drives results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-black group-hover:bg-white rounded-lg mb-6 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-white group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-semibold text-lg">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features
