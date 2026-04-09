'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { SKILLS } from '@/data/about'

export function SkillsSection() {
  return (
    <section className="py-20 border-y border-border bg-card/30">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Expertise</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Technical Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              custom={i}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <h3 className="font-heading font-semibold text-sm text-primary uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}