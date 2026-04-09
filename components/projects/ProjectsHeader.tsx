'use client'

import { motion } from 'framer-motion'

export function ProjectsHeader() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-mono text-primary uppercase tracking-widest mb-3"
      >
        Projects
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-balance"
      >
        Things I&apos;ve{' '}
        <span className="text-gradient-cyan">Built</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-xl leading-relaxed"
      >
        A selection of open-source projects and commercial products — from real-time platforms to
        mobile apps and developer tooling.
      </motion.p>
    </section>
  )
}