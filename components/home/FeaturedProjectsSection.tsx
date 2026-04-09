'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { FEATURED } from '@/data/home'

export function FeaturedProjectsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Work</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-balance">Featured Projects</h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium shrink-0"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border ${p.border} bg-gradient-to-br ${p.gradient} p-6 cursor-default`}
            >
              <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-md border border-border/60 bg-background/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}