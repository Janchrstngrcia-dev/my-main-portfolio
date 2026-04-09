'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { STATS } from '@/data/home'

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border bg-card/30">
      <AnimatedSection>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeInUp}
              custom={i}
              className="text-center"
            >
              <div className="font-heading text-4xl font-extrabold text-primary mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}