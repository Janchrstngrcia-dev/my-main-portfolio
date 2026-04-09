'use client'

import { motion } from 'framer-motion'

export function ContactHeader() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-mono text-primary uppercase tracking-widest mb-3"
      >
        Contact
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-balance"
      >
        {"Let's Build Something"}{' '}
        <span className="text-gradient-cyan">Together</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-xl leading-relaxed"
      >
        Have a project in mind, a question, or just want to say hello? Fill out the form and I&apos;ll
        get back to you within 24–48 hours.
      </motion.p>
    </section>
  )
}