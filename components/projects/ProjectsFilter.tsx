'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CATEGORIES, PROJECTS } from '@/data/projects'

interface ProjectsFilterProps {
  active: string
  onChange: (category: string) => void
}

export function ProjectsFilter({ active, onChange }: ProjectsFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-2 mb-10"
    >
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition-all',
            active === cat
              ? 'bg-primary text-primary-foreground'
              : 'border border-border text-muted-foreground hover:text-foreground hover:border-primary/40',
          )}
        >
          {cat}{' '}
          <span className="ml-1 text-xs opacity-60">
            ({cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length})
          </span>
        </button>
      ))}
    </motion.div>
  )
}