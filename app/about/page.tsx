"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutPage() {
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
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                About Me
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate full-stack developer with a love for creating beautiful, functional digital experiences. With expertise spanning frontend and backend technologies, I bring ideas to life through clean code and intuitive design.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                My journey in tech started with a curiosity about how things work on the web. Over the years, I&apos;ve built everything from small personal projects to enterprise-level applications, always with a focus on user experience and code quality.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className="card">
                <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">Experience</h3>
                <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold flex-shrink-0">▸</span>
                    <span>Full-Stack Web Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold flex-shrink-0">▸</span>
                    <span>Mobile App Development (React Native)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold flex-shrink-0">▸</span>
                    <span>UI/UX Design & Implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold flex-shrink-0">▸</span>
                    <span>Database Design & Optimization</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">Philosophy</h3>
                <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span>Write clean, maintainable code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span>Prioritize user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span>Continuous learning & improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span>Deliver quality over quantity</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-accent/20 to-accent/5 backdrop-blur border border-accent/30 rounded-lg p-6 md:p-8 text-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Let&apos;s Work Together</h3>
              <p className="text-muted-foreground text-sm md:text-base mb-6">
                I&apos;m always interested in hearing about new projects and opportunities.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-accent text-accent-foreground px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
