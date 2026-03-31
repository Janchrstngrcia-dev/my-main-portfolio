"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Link from "next/link";

export default function Home() {
  const [shapes, setShapes] = useState<{ size: number; x: number; y: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    setShapes(Array.from({ length: 20 }).map(() => ({
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

  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col">
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

      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full bg-gradient-to-r from-accent to-accent/50 p-1 mb-6"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
          >
            Jan Christian
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-accent mb-4 font-semibold"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting beautiful, functional digital experiences with modern technologies. 
            Specializing in web development, mobile apps, and everything in between.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="inline-block bg-accent text-background px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                View My Work
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block bg-secondary border border-secondary text-foreground px-8 py-4 rounded-lg font-semibold hover:border-accent/50 hover:bg-secondary/80 transition-all"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-muted-foreground">
              Scroll to explore or use the navigation menu
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      {/* Quick Navigation Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="relative z-10 mb-20 px-4"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "About", href: "/about", icon: "👤" },
              { label: "Projects", href: "/projects", icon: "💼" },
              { label: "Skills", href: "/skills", icon: "⚡" },
              { label: "Certificates", href: "/certificates", icon: "🎓" },
            ].map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.href}
                  className="block text-center p-4 bg-secondary/50 backdrop-blur border border-secondary rounded-lg hover:border-accent/50 hover:bg-secondary/70 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-foreground font-semibold group-hover:text-accent transition-colors">
                    {item.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
