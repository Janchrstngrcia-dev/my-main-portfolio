"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { projects } from "@/lib/mockdata"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import * as TechIcons from "@/app/components/tech-icons"

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0)

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-blue-950/20 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">Explore my latest work and creative solutions</p>
        </motion.div>

        <div className="relative w-full mx-auto">
         {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-50 flex justify-between pointer-events-none px-4">
            <Button
              onClick={handlePrevious}
              disabled={isAnimating}
              variant="outline"
              size="icon"
              className="pointer-events-auto h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400 transition-all disabled:opacity-50 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-blue-200" />
            </Button>
            <Button
              onClick={handleNext}
              disabled={isAnimating}
              variant="outline"
              size="icon"
              className="pointer-events-auto h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400 transition-all disabled:opacity-50 shadow-lg"
            >
              <ChevronRight className="h-6 w-6 text-blue-200" />
            </Button>
          </div>

          {/* Carousel Container */}
          <div className="relative h-[600px] md:h-[500px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute w-full max-w-4xl"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <motion.div
                    className="relative h-80 md:h-96 rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={currentProject.image || "/placeholder.svg"}
                      alt={currentProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-900/20 to-transparent" />
                  </motion.div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl font-bold text-blue-100 mb-3"
                      >
                        {currentProject.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-blue-200/80 text-lg leading-relaxed"
                      >
                        {currentProject.description}
                      </motion.p>
                    </div>

                    {/* Tags with Icons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="flex flex-wrap gap-2"
                    >
                      {currentProject.tags.map((tag: string, idx: number) => {
                        const iconName = currentProject.tech?.[idx]
                        const IconComponent = iconName ? TechIcons[iconName as keyof typeof TechIcons] : null
                        
                        return (
                          <span
                            key={tag}
                            className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30 backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-400 transition-all flex items-center gap-2"
                          >
                            {IconComponent && (
                              <span className="w-5 h-5 flex items-center justify-center">
                                <IconComponent />
                              </span>
                            )}
                            {tag}
                          </span>
                        )
                      })}
                    </motion.div>

                    {/* Private Client Badge */}
                    {/* <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="bg-blue-500/20 text-blue-300/60 px-6 py-3 rounded-lg font-semibold border border-blue-500/30 inline-flex items-center">
                        Private Client Project
                      </div>
                    </motion.div> */}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating && idx !== currentIndex) {
                    setIsAnimating(true)
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                    setTimeout(() => setIsAnimating(false), 500)
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-12 bg-blue-400" : "w-2 bg-blue-500/30 hover:bg-blue-500/50"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <p className="text-blue-200/60 text-sm">
              <span className="text-blue-300 font-semibold text-lg">{currentIndex + 1}</span> / {projects.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection