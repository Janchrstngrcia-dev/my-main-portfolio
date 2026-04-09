'use client'

import { motion } from 'framer-motion'
import { CERTS } from '@/data/certifications'

export function CertificationsHeader() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-mono text-primary uppercase tracking-widest mb-3"
      >
        Certifications
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-balance"
      >
        Verified{' '}
        <span className="text-gradient-cyan">Credentials</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-xl leading-relaxed"
      >
        {CERTS.length} certifications across  frontend, backend, security,
        and design — demonstrating commitment to continuous learning.
      </motion.p>
    </section>
  )
}