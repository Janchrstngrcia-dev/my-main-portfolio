'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { VALUES } from '@/data/home'

export function ValuePropsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
      <AnimatedSection className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Why Me</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-balance">
            What I bring to the table
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeInUp}
              custom={i}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}