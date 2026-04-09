'use client'

import { motion } from 'framer-motion'
import { Award, BadgeCheck, Calendar } from 'lucide-react'
import { CERTS } from '@/data/certifications'

const STATS = [
  { icon: Award, label: 'Total Certifications', value: CERTS.length },
  { icon: BadgeCheck, label: 'Active & Valid', value: CERTS.length },
  { icon: Calendar, label: 'Latest Earned', value: 'Mar 2025' },
]

export function StatsBar() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap gap-4"
      >
        {STATS.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{label}</div>
              <div className="font-heading font-bold text-sm">{value}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}