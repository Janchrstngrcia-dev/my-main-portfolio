'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { EXPERIENCE } from '@/data/about'

export function ExperienceSection() {
  return (
    <section className="py-20">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Career</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.role}
              variants={fadeInUp}
              custom={i}
              className="pl-8 relative"
            >
              {/* dot */}
              <div
                className={`absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center ${job.current ? 'border-primary bg-primary/10' : 'border-border bg-background'}`}
              >
                <div className={`w-2 h-2 rounded-full ${job.current ? 'bg-primary animate-pulse' : 'bg-muted-foreground/40'}`} />
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-heading font-bold text-base">{job.role}</h3>
                    <span className="text-primary text-sm font-medium">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">{job.period}</span>
                    {job.current && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">Current</span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}