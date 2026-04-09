'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { SERVICES } from '@/data/contact'

export function ServicesSection() {
  return (
    <section className="mt-24 py-20 border-t border-border bg-card/30">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Services</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-balance">
            How I can help
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={fadeInUp}
              custom={i}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svc.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}