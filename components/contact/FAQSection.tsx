'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { FAQS } from '@/data/contact'

export function FAQSection() {
  return (
    <section className="py-20">
      <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-balance">
            Common questions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {FAQS.map(({ q, a }, i) => (
            <motion.div
              key={q}
              variants={fadeInUp}
              custom={i}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <h3 className="font-heading font-semibold text-sm mb-2 text-balance">{q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}