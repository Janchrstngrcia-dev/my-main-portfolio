import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("about");
    portfolioSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
          >
            Jan Christian Garcia
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8"
          >
            Full-stack Developer / Freelancer
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <a href="#about">
              <Button
                variant="default"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={scrollToPortfolio}
              >
                View Portfolio
              </Button>
            </a>
            <a href="./CV - Jan Christian.pdf" download>
              {" "}
              <Button
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-950/50"
              >
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
