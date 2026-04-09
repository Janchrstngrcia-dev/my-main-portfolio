'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import { CertCard } from './CertCard'
import { CERTS } from '@/data/certifications'

interface CertificationsGridProps {
  active: string
}

export function CertificationsGrid({ active }: CertificationsGridProps) {
  const filtered = active === 'All' ? CERTS : CERTS.filter((c) => c.category === active)

  return (
    <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-muted-foreground"
        >
          No certifications in this category yet.
        </motion.div>
      )}
    </AnimatedSection>
  )
}