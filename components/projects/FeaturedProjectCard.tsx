'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'
import { fadeInUp } from '@/components/page-transition'
import type { Project } from '@/data/projects'

interface FeaturedProjectCardProps {
  project: Project
  index: number
}

export function FeaturedProjectCard({ project: p, index: i }: FeaturedProjectCardProps) {
  return (
    <motion.article
      key={p.title}
      variants={fadeInUp}
      custom={i}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group relative flex flex-col gap-4 p-6 rounded-2xl border border-border bg-gradient-to-br ${p.gradient} overflow-hidden`}
    >
      {/* Featured badge */}
      <span className={`absolute top-4 right-4 px-2 py-0.5 text-xs rounded-full font-medium ${p.accentBg} ${p.accent}`}>
        Featured
      </span>

      <div>
        <h3 className="font-heading font-bold text-base mb-2 pr-16 leading-snug">{p.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {p.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-md bg-background/50 border border-border/60 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border/60">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400" /> {p.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-3 h-3" /> {p.forks}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub for ${p.title}`}
            className="w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo for ${p.title}`}
            className={`w-8 h-8 rounded-lg flex items-center justify-center ${p.accentBg} ${p.accent} hover:opacity-80 transition-opacity`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}