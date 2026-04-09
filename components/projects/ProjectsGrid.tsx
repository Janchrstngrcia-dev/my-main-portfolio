'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import { ProjectCard } from './ProjectCard'
import { PROJECTS } from '@/data/projects'

interface ProjectsGridProps {
  active: string
}

export function ProjectsGrid({ active }: ProjectsGridProps) {
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-muted-foreground"
        >
          No projects in this category yet.
        </motion.div>
      )}
    </AnimatedSection>
  )
}