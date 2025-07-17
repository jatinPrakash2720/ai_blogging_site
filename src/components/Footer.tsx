import {
  PenTool,
  Twitter,
  Facebook,
  Linkedin as LinkedIn,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "AI Writing Suggestion", href: "#ai-suggestion" },
      { name: "Templates", href: "#templates" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "API Documentation", href: "#api" },
      { name: "Status Page", href: "#status" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#twitter", name: "Twitter" },
    { icon: Facebook, href: "#facebook", name: "Facebook" },
    { icon: LinkedIn, href: "#linkedin", name: "LinkedIn" },
    { icon: Instagram, href: "#instagram", name: "Instagram" },
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <PenTool className="h-8 w-8 text-black" />
                <span className="text-2xl font-bold text-black">BlogLikho</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                Empowering writers with AI-driven tools to create exceptional
                blog content. Transform your ideas into engaging stories that
                captivate your audience.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4" />
                  <span>hello@bloglikho.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap items-center gap-6">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © 2025 BlogLikho. All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              Made with ❤️ for writers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
