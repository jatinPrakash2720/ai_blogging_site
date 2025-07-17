"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, PenTool, Sun, Moon } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "About Us", href: "#about" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Blog", href: "#blog" },
    { name: "AI Writing Suggestion", href: "#ai-suggestion" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="flex justify-center w-full py-6 px-4">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full w-full max-w-6xl relative z-10 transition-all duration-500 ${
            isScrolled
              ? "bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl"
              : "bg-white/15 backdrop-blur-sm border border-white/20"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <PenTool className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">BlogLikho</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white transition-colors font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              className="p-2 rounded-lg hover:bg-white/10 transition-colors relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Sun className="h-5 w-5 text-white/80 transition-all duration-300" />
              ) : (
                <Moon className="h-5 w-5 text-white/80 transition-all duration-300" />
              )}
            </motion.button>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-2 text-sm text-black bg-white rounded-full hover:bg-white/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <motion.button
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Sun className="h-5 w-5 text-white/80 transition-all duration-300" />
              ) : (
                <Moon className="h-5 w-5 text-white/80 transition-all duration-300" />
              )}
            </motion.button>

            <motion.button className="flex items-center p-2" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
              <Menu className="h-6 w-6 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 pt-24 px-6 lg:hidden"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <motion.button
                className="absolute top-6 right-6 p-2"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <X className="h-6 w-6 text-white" />
              </motion.button>
              <div className="flex flex-col space-y-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <a href={item.href} className="text-base text-white font-medium" onClick={toggleMenu}>
                      {item.name}
                    </a>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="pt-6"
                >
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-black bg-white rounded-full hover:bg-white/90 transition-colors"
                    onClick={toggleMenu}
                  >
                    Get Started
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export { Navbar1 }
