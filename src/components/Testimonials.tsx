import { Star, Quote } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Marketing Manager",
      company: "TechCorp",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "BlogLikho has transformed our content creation process. What used to take hours now takes minutes, and the quality is consistently excellent.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Freelance Writer",
      company: "Independent",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "As a freelancer, BlogLikho helps me deliver high-quality content to my clients faster than ever. It's like having a writing partner who never sleeps.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Director",
      company: "Growth Agency",
      image:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "The SEO optimization features are incredible. Our blog traffic has increased by 300% since we started using BlogLikho for our content creation.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Startup Founder",
      company: "InnovateLab",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "BlogLikho helps us maintain a consistent blog schedule without hiring additional writers. The ROI has been phenomenal.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by Writers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of content creators who trust BlogLikho to produce
            exceptional blog content that drives results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-gray-400 mb-6" />

              {/* Content */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">
              Growth Agency
            </div>
            <div className="text-2xl font-bold text-gray-400">InnovateLab</div>
            <div className="text-2xl font-bold text-gray-400">StartupX</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
