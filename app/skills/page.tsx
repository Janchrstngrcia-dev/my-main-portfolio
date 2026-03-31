"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/mockdata";
import { useState, useEffect } from "react";

export default function SkillsPage() {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
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

      <main className="pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                My Skills
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                Technologies and tools I work with
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full mt-4"></div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="space-y-10 md:space-y-12"
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="card hover:border-accent/30 transition-colors duration-300"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 md:mb-8">
                    {category.category}
                  </h2>

                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        whileHover="hover"
                        className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-background/50 border border-secondary/50 hover:bg-background hover:border-accent/30 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                          {typeof skill.icon === 'string' ? skill.icon : '⚡'}
                        </div>
                        <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 md:mt-16 bg-gradient-to-r from-accent/20 to-accent/5 backdrop-blur border border-accent/30 rounded-lg p-6 md:p-8 text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Always Learning</h3>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                I&apos;m constantly expanding my skillset and staying up-to-date with the latest industry trends and technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
