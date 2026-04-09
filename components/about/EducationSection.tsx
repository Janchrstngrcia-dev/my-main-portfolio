'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { EDUCATION } from '@/data/about'

export function EducationSection() {
  return (
    <section className="py-20 border-t border-border bg-card/30">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Background</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              variants={fadeInUp}
              custom={i}
              className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base">{edu.degree}</h3>
                <p className="text-primary text-sm font-medium mb-1">{edu.school}</p>
                <p className="text-xs font-mono text-muted-foreground mb-2">{edu.period}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}