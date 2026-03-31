"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { projects } from "@/lib/mockdata";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProjectsPage() {
  const [shapes, setShapes] = useState<{ size: number; x: number; y: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    setShapes(Array.from({ length: 15 }).map(() => ({
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
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 -z-10">
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/10"
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

      <Navigation />

      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
                My Projects
              </h1>
              <p className="text-lg text-muted-foreground">
                A collection of projects that showcase my skills and experience
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full mt-4"></div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  whileHover="hover"
                  className="group cursor-pointer"
                >
                  <div className="bg-secondary/50 backdrop-blur border border-secondary rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300">
                    <div className="relative h-64 bg-secondary overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <span className="text-center">
                          <div className="text-4xl mb-2">📸</div>
                          <p className="text-sm">{project.title}</p>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30 hover:bg-accent/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors"
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
