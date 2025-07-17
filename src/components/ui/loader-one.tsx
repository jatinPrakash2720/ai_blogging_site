import React from "react"
import { motion } from "framer-motion"
import { PenTool } from "lucide-react"

const LoaderOne = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Logo */}
      <motion.div
        className="flex items-center space-x-3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <PenTool className="h-12 w-12 text-black dark:text-white" />
        </motion.div>
        <span className="text-3xl font-bold text-black dark:text-white">
          BlogLikho
        </span>
      </motion.div>

      {/* Loading dots */}
      <div className="flex items-center justify-center gap-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="h-3 w-3 rounded-full bg-black dark:bg-white"
            initial={{ y: 0 }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Loading text */}
      <motion.p
        className="text-sm text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading your AI writing assistant...
      </motion.p>
    </div>
  )
}

export default LoaderOne
