'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'
import { FeaturedProjectCard } from './FeaturedProjectCard'
import { PROJECTS } from '@/data/projects'

export function FeaturedProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured)

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <AnimatedSection>
        <motion.p
          variants={fadeInUp}
          className="text-xs font-mono text-primary uppercase tracking-widest mb-6"
        >
          Featured
        </motion.p>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <FeaturedProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}