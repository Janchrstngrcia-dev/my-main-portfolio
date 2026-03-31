"use client";

import { motion } from "framer-motion";
import { cert } from "@/lib/mockdata";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CertificatesPage() {
  const [shapes, setShapes] = useState<{ size: number; x: number; y: number; duration: number; delay: number }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const certVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.02,
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
                Certifications
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                Professional certifications and achievements
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full mt-4"></div>
            </motion.div>

            {cert.length > 0 && (
              <motion.div variants={itemVariants} className="mb-16 md:mb-20">
                <div className="relative">
                  <motion.div
                    variants={certVariants}
                    whileHover="hover"
                    className="card overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="bg-secondary/50 rounded-lg h-48 sm:h-64 md:h-72 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl md:text-6xl mb-4">🏆</div>
                          <p className="text-muted-foreground text-sm md:text-base">Certificate Image</p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between py-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">
                            {cert[currentIndex].title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground mb-4">
                            {cert[currentIndex].issuer}
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground mb-6">
                            {cert[currentIndex].date}
                          </p>
                          <p className="text-foreground text-sm md:text-base leading-relaxed">
                            {cert[currentIndex].description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <span className="text-xs md:text-sm text-muted-foreground">
                            {currentIndex + 1} / {cert.length}
                          </span>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handlePrevious}
                              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                              aria-label="Previous certificate"
                            >
                              <ChevronLeft size={20} className="text-accent" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleNext}
                              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                              aria-label="Next certificate"
                            >
                              <ChevronRight size={20} className="text-accent" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex gap-2 mt-6 justify-center flex-wrap">
                    {cert.map((_, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? "bg-accent" : "bg-secondary"
                        }`}
                        aria-label={`Go to certificate ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">
                All Certifications
              </h2>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {cert.map((certificate, index) => (
                  <motion.div
                    key={index}
                    variants={certVariants}
                    whileHover="hover"
                    onClick={() => setCurrentIndex(index)}
                    className="card cursor-pointer"
                  >
                    <div className="flex gap-4">
                      <div className="text-3xl md:text-4xl flex-shrink-0">🎓</div>
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-bold text-accent mb-2">
                          {certificate.title}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm mb-2">
                          {certificate.issuer}
                        </p>
                        <p className="text-muted-foreground text-xs md:text-sm">
                          {certificate.date}
                        </p>
                      </div>
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
