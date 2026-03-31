"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { cert } from "@/lib/mockdata";
import { useState, useEffect } from "react";

export default function CertificatesPage() {
  const [shapes, setShapes] = useState<{ size: number; x: number; y: number; duration: number; delay: number }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const certVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cert.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cert.length - 1 ? 0 : prev + 1));
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
                Certificates
              </h1>
              <p className="text-lg text-muted-foreground">
                Professional credentials and training certifications
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full mt-4"></div>
            </motion.div>

            {/* Featured Certificate Viewer */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="bg-secondary/50 backdrop-blur border border-secondary rounded-lg p-8 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="md:col-span-1 h-64 bg-background rounded-lg border border-secondary/50 flex items-center justify-center overflow-hidden"
                  >
                    <div className="text-center text-muted-foreground">
                      <div className="text-6xl mb-2">📜</div>
                      <p className="text-sm">Certificate Preview</p>
                    </div>
                  </motion.div>

                  <div className="md:col-span-2">
                    <motion.div
                      key={`details-${currentIndex}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {cert[currentIndex].title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {cert[currentIndex].description}
                      </p>

                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handlePrevious}
                          className="px-6 py-2 bg-secondary border border-secondary hover:border-accent/50 rounded-lg text-foreground transition-all duration-300"
                        >
                          ← Previous
                        </motion.button>

                        <span className="text-sm text-muted-foreground">
                          {currentIndex + 1} of {cert.length}
                        </span>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleNext}
                          className="px-6 py-2 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                        >
                          Next →
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certificate Grid */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">All Certificates</h2>
              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 gap-6"
              >
                {cert.map((certificate, index) => (
                  <motion.div
                    key={certificate.id}
                    variants={certVariants}
                    whileHover="hover"
                    onClick={() => setCurrentIndex(index)}
                    className={`cursor-pointer p-6 rounded-lg border transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-accent/20 border-accent"
                        : "bg-secondary/50 border-secondary hover:border-accent/30"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">📜</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground truncate">
                          {certificate.title}
                        </h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {certificate.description}
                        </p>
                      </div>
                      {currentIndex === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-accent text-xl flex-shrink-0"
                        >
                          ✓
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
