import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 text-blue-100"
              >
                Let&apos;s Connect
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-blue-200/80"
              >
                Available for web development roles and consulting
                opportunities. Let’s collaborate to build scalable,
                high-performance web solutions and drive innovation together.
              </motion.p>
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-background/40 backdrop-blur-sm p-8 rounded-lg border border-blue-900/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:janchrstn.dev@gmail.com"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-950/50 transition-colors"
                >
                  <Mail className="w-8 h-8 text-blue-400" />
                  <span className="font-medium text-blue-100">Email</span>
                  <span className="text-sm text-blue-300">
                    janchrstn.dev@gmail.com
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://github.com/Janchrstngrcia-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-950/50 transition-colors"
                >
                  <Github className="w-8 h-8 text-blue-400" />
                  <span className="font-medium text-blue-100">GitHub</span>
                  <span className="text-sm text-blue-300">Janchrstngrcia-dev</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://www.linkedin.com/in/jan-christian-garcia-5b7525261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-950/50 transition-colors"
                >
                  <Linkedin className="w-8 h-8 text-blue-400" />
                  <span className="font-medium text-blue-100">LinkedIn</span>
                  <span className="text-sm text-blue-300">
                    Jan Christian Garcia
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default ContactSection;