'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'
import { fadeInUp } from '@/components/page-transition'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project: p, index: i }: ProjectCardProps) {
  return (
    <motion.article
      layout
      variants={fadeInUp}
      custom={i}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative flex flex-col gap-4 p-6 rounded-2xl border transition-colors ${
        p.featured
          ? 'border-primary/40 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10'
          : 'border-border bg-card hover:border-primary/30'
      }`}
    >
      {p.featured && (
        <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
          Featured
        </div>
      )}
      <div className="flex items-start justify-between">
        <span className={`px-2 py-0.5 text-xs rounded-md font-medium ${p.accentBg} ${p.accent}`}>
          {p.category}
        </span>
        <div className="flex items-center gap-2">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className={`${p.accent} hover:opacity-70 transition-opacity`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-heading font-bold text-sm mb-2 leading-snug">{p.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{p.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {p.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground">
            {tag}
          </span>
        ))}
        {p.tags.length > 4 && (
          <span className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground">
            +{p.tags.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border">
        <span className="flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400" /> {p.stars}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="w-3 h-3" /> {p.forks}
        </span>
      </div>
    </motion.article>
  )
}
