import React, { useState } from "react"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 bg-black rounded-2xl mx-auto mb-8">
            <Mail className="h-8 w-8 text-white" />
          </div>

          {/* Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stay Updated with
            <span className="block">AI Writing Tips</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get exclusive insights, writing tips, and AI-powered content
            strategies delivered straight to your inbox every week.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="group bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </form>

          {/* Success Message */}
          {isSubscribed && (
            <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
              <CheckCircle className="h-5 w-5" />
              <span>Successfully subscribed! Welcome to our community.</span>
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Weekly writing tips</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>AI industry insights</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Exclusive tutorials</span>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-sm text-gray-500 mt-8">
            We respect your privacy. Unsubscribe at any time.
            <br />
            No spam, just valuable content for writers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
