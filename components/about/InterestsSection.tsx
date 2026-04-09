'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { INTERESTS } from '@/data/about'

export function InterestsSection() {
  return (
    <section className="py-20">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="mb-8">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Personal</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Interests</h2>
        </motion.div>

        <motion.div variants={fadeInUp} custom={1} className="flex flex-wrap gap-3">
          {INTERESTS.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-xl border border-border bg-card text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </AnimatedSection>
    </section>
  )
}