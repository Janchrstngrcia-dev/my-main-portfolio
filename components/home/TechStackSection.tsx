'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { TECH } from '@/data/home'

export function TechStackSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Tech Stack</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-balance">
            Tools I work with
          </h2>
        </motion.div>
        <motion.div variants={fadeInUp} custom={1} className="flex flex-wrap justify-center gap-3">
          {TECH.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg border border-border bg-card text-sm font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </AnimatedSection>
    </section>
  )
}