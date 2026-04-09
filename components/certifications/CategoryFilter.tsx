'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CATEGORIES } from '@/data/certifications'

interface CategoryFilterProps {
  active: string
  onChange: (category: string) => void
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-2"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all',
              active === cat
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'border border-border text-muted-foreground hover:text-foreground hover:border-primary/40',
            )}
          >
            {cat}
          </button>
        ))}
      </motion.div>
    </section>
  )
}