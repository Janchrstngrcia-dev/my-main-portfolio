'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, BadgeCheck } from 'lucide-react'
import { fadeInUp } from '@/components/page-transition'

interface Cert {
  title: string
  issuer: string
  date: string
  credential: string
  category: string
  color: string
  border: string
  badge: string
  initials: string
}

interface CertCardProps {
  cert: Cert
  index: number
}

export function CertCard({ cert, index }: CertCardProps) {
  return (
    <motion.article
      layout
      variants={fadeInUp}
      custom={index}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative p-6 rounded-2xl border ${cert.border} bg-gradient-to-br ${cert.color} flex flex-col gap-4`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div
          className={`w-12 h-12 rounded-4xl flex items-center justify-center font-heading font-bold text-xs shrink-0 ${cert.badge}`}
        >
          {cert.initials}
        </div>
        {/* <a
          href={cert.credential}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View credential for ${cert.title}`}
          className="w-8 h-8 rounded-lg flex items-center justify-center border border-border/60 bg-background/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors opacity-0 group-hover:opacity-100"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a> */}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-heading font-bold text-sm leading-snug mb-1 text-balance">
          {cert.title}
        </h3>
        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {cert.date}
        </div>
        <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${cert.badge}`}>
          {cert.category}
        </span>
      </div>

      {/* Verified badge */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <BadgeCheck className="w-4 h-4 text-primary" />
      </div>
    </motion.article>
  )
}