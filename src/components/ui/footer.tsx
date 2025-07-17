"use client"
import { motion } from "framer-motion"
import {
  PenTool,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

// Animation variants for reusability
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
}

const backgroundVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
}

// Footer data for better maintainability
const footerData = {
  sections: [
    {
      title: "Product",
      links: ["Features", "Pricing", "AI Writing Suggestion", "Templates"],
    },
    { title: "Company", links: ["About Us", "Blog", "Careers", "Press Kit"] },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "API Documentation", "Status Page"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
    },
  ],
  social: [
    { href: "#", label: "Twitter", icon: Twitter },
    { href: "#", label: "Facebook", icon: Facebook },
    { href: "#", label: "LinkedIn", icon: Linkedin },
    { href: "#", label: "Instagram", icon: Instagram },
  ],
  title: "BlogLikho",
  subtitle: "AI-Powered Writing",
  copyright: "©2025 BlogLikho. All rights reserved",
}

// Reusable components
const NavSection = ({
  title,
  links,
  index,
}: {
  title: string
  links: string[]
  index: number
}) => (
  <motion.div
    variants={itemVariants}
    custom={index}
    className="flex flex-col gap-2"
  >
    <motion.h3
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      className="mb-2 uppercase text-white/60 dark:text-white/60 text-xs font-semibold tracking-wider border-b border-white/20 dark:border-white/20 pb-1 hover:text-white dark:hover:text-white transition-colors duration-300"
    >
      {title}
    </motion.h3>
    {links.map((link, linkIndex) => (
      <motion.a
        key={linkIndex}
        variants={linkVariants}
        custom={linkIndex}
        href="#"
        whileHover={{
          x: 8,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="text-white/80 dark:text-white/80 hover:text-white dark:hover:text-white transition-colors duration-300 font-sans text-xs md:text-sm group relative"
      >
        <span className="relative">
          {link}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-white"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </span>
      </motion.a>
    ))}
  </motion.div>
)

const SocialLink = ({
  href,
  label,
  icon: Icon,
  index,
}: {
  href: string
  label: string
  icon: any
  index: number
}) => (
  <motion.a
    variants={socialVariants}
    custom={index}
    href={href}
    whileHover={{
      scale: 1.2,
      rotate: 12,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    }}
    whileTap={{ scale: 0.9 }}
    className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 hover:bg-gradient-to-r hover:from-white hover:to-white/70 flex items-center justify-center transition-colors duration-300 group"
    aria-label={label}
  >
    <motion.div
      className="text-white/80 group-hover:text-black"
      whileHover={{ scale: 1.1 }}
    >
      <Icon className="h-4 w-4" />
    </motion.div>
  </motion.a>
)

export default function StickyFooterFixed() {
  return (
    <footer className="relative mt-auto">
      {/* Spacer to push footer down */}
      <div className="h-[20vh]" />

      {/* Footer content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="bg-gradient-to-br from-black via-black to-black py-4 md:py-8 px-4 md:px-12 min-h-[70vh] w-full flex flex-col justify-between relative overflow-hidden transition-colors duration-300"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/20 to-transparent pointer-events-none" />

        <motion.div
          variants={backgroundVariants}
          className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-white/5 dark:bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          variants={backgroundVariants}
          className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-white/5 dark:bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Navigation Section */}
        <motion.div variants={containerVariants} className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 lg:gap-20">
            {footerData.sections.map((section, index) => (
              <NavSection
                key={section.title}
                title={section.title}
                links={section.links}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Footer Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end relative z-10 gap-4 md:gap-6 mt-6"
        >
          <div className="flex-1">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
              <PenTool className="h-8 w-8 text-white" />
              <motion.h1
                whileHover={{
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="text-4xl md:text-5xl lg:text-6xl leading-[0.8] font-serif bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent cursor-default"
              >
                {footerData.title}
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "auto" }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center gap-3 md:gap-4 mt-3 md:mt-4"
            >
              <motion.div
                className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-white to-white/70"
                animate={{
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="text-white/80 text-xs md:text-sm font-sans hover:text-white transition-colors duration-300"
              >
                {footerData.subtitle}
              </motion.p>

              {/* Contact Info */}
              <motion.div
                className="space-y-3 text-sm text-white/80 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
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
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-3 text-sm text-white/80 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="text-left md:text-right"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="text-white/80 text-xs md:text-sm mb-2 md:mb-3 hover:text-white transition-colors duration-300"
            >
              {footerData.copyright}
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 2, staggerChildren: 0.1 }}
              className="flex gap-2 md:gap-3"
            >
              {footerData.social.map((social, index) => (
                <SocialLink
                  key={social.label}
                  href={social.href}
                  label={social.label}
                  icon={social.icon}
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
