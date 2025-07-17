"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { IconBrandYoutubeFilled } from "@tabler/icons-react"
import createGlobe from "cobe"

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "AI-Powered Content Generation",
      description:
        "Generate high-quality blog posts instantly with our advanced AI technology that understands your writing style.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-white/20 dark:border-white/20",
    },
    {
      title: "Smart Writing Assistant",
      description:
        "Get real-time suggestions and improvements as you write, powered by cutting-edge AI algorithms.",
      skeleton: <SkeletonTwo />,
      className:
        "col-span-1 md:col-span-2 lg:col-span-2 border-b border-white/20 dark:border-white/20",
    },
    {
      title: "Learn from AI Writing Experts",
      description:
        "Watch tutorials and masterclasses on how to leverage AI for better content creation and blogging success.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-white/20 dark:border-white/20",
    },
    {
      title: "Global Content Reach",
      description:
        "Create content that resonates worldwide with our multi-language AI writing capabilities and global SEO optimization.",
      skeleton: <SkeletonFour />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none border-white/20 dark:border-white/20",
    },
  ]

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-300">
      <div className="px-8">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white transition-colors duration-300"
        >
          Powerful Features for Modern Bloggers
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-black/70 dark:text-white/70 text-center font-normal transition-colors duration-300"
        >
          From AI content generation to SEO optimization, BlogLikho has
          everything you need to create engaging blog posts that captivate your
          audience and drive results.
        </motion.p>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 xl:border rounded-2xl border-white/20 dark:border-white/20 bg-black dark:bg-black overflow-hidden transition-colors duration-300"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              className={feature.className}
              index={index}
            >
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  children,
  className,
  index,
}: {
  children?: React.ReactNode
  className?: string
  index?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index || 0) * 0.1 }}
      className={cn(
        `p-4 sm:p-8 relative overflow-hidden hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300`,
        className
      )}
    >
      {children}
    </motion.div>
  )
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white dark:text-white text-xl md:text-2xl md:leading-snug transition-colors duration-300">
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-white/70 dark:text-white/70 text-center font-normal transition-colors duration-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  )
}

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white/10 dark:bg-white/10 shadow-lg group h-full rounded-xl border border-white/20 dark:border-white/20 transition-colors duration-300">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <img
            src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="AI Writing Interface"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-lg"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none transition-colors duration-300" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none transition-colors duration-300" />
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
          <img
            src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="AI Writing Tutorial"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-lg blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </a>
  )
}

export const SkeletonTwo = () => {
  const images = [
    "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/4050412/pexels-photo-4050412.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/4050300/pexels-photo-4050300.jpeg?auto=compress&cs=tinysrgb&w=500",
  ]

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  }
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 flex-shrink-0 overflow-hidden transition-colors duration-300"
          >
            <img
              src={image || "/placeholder.svg"}
              alt="AI generated content"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 flex-shrink-0 overflow-hidden transition-colors duration-300"
          >
            <img
              src={image || "/placeholder.svg"}
              alt="AI generated content"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black dark:from-black to-transparent h-full pointer-events-none transition-colors duration-300" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black dark:from-black to-transparent h-full pointer-events-none transition-colors duration-300" />
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  )
}

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [1, 1, 1],
      glowColor: [0.5, 0.5, 0.5],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  )
}
