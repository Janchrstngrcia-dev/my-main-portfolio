'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp } from '@/components/page-transition'
import { AnimatedSection } from './AnimatedSection'

export function CTABand() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeInUp}
          className="text-center rounded-3xl border border-primary/20 bg-primary/5 p-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Ready to build something great?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Whether it&apos;s a new product, a performance overhaul, or a design refresh — let&apos;s
            make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            Let&apos;s Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </AnimatedSection>
    </section>
  )
}