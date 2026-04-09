'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function CertificationsCTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-3xl border border-primary/20 bg-primary/5"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
          Continuously learning, always growing.
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          I invest in ongoing education to stay ahead of industry trends and bring the best solutions to every project.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Work With Me
        </Link>
      </motion.div>
    </section>
  )
}