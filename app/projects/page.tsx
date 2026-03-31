"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/mockdata";
import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const [shapes, setShapes] = useState<{ size: number; x: number; y: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Reduce number of shapes for better performance
    setShapes(Array.from({ length: 3 }).map(() => ({
      size: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 2,
    })));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/10 will-change-transform"
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            animate={{
              y: [0, 100, 0],
              x: [0, 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      <main className="pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                My Projects
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                A collection of projects that showcase my skills and experience
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full mt-4"></div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  whileHover="hover"
                  className="group cursor-pointer"
                >
                  <div className="card overflow-hidden hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 sm:h-56 md:h-64 bg-secondary overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <span className="text-center">
                          <div className="text-3xl sm:text-4xl mb-2">📸</div>
                          <p className="text-xs sm:text-sm px-4">{project.title}</p>
                        </span>
                      </div>
                    </div>

                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-4 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 md:px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30 hover:bg-accent/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors text-sm"
                      >
                        View Project
                        <span>→</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
