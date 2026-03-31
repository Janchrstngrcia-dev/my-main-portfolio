"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl w-full"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 md:w-20 md:h-20 border-2 border-accent/30 border-t-accent rounded-full"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 text-balance"
          >
            Hi, I&apos;m Jan Christian
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 text-balance max-w-2xl mx-auto"
          >
            A full-stack developer passionate about creating beautiful, functional digital experiences
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Get In Touch
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold border-2 border-accent text-accent hover:bg-accent/10 transition-colors"
              >
                View My Work
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
          >
            {navLinks.map((link, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={link.href}>
                  <div className="card cursor-pointer text-center hover:border-accent/50 transition-all">
                    <h3 className="text-lg md:text-xl font-semibold text-accent mb-2">{link.label}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {link.label === "About" && "Learn more about me"}
                      {link.label === "Projects" && "See my recent work"}
                      {link.label === "Skills" && "Explore my expertise"}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-secondary"
          >
            <p className="text-xs md:text-sm text-muted-foreground">
              Scroll down or navigate using the menu to explore more
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
