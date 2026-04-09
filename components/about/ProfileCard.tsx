'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Briefcase, Heart, Download } from 'lucide-react'

export function ProfileCard() {
  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="relative rounded-2xl overflow-hidden aspect-square border border-border">
          <Image
            src="/suite.jpg"
            alt="Jan Christian — Fullstack Developer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        {/* Quick info */}
        <div className="space-y-3 p-5 rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span className="text-muted-foreground">Caloocan City, Philippines</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Briefcase className="w-4 h-4 text-primary shrink-0" />
            <span className="text-muted-foreground">Open to freelance & full-time</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Heart className="w-4 h-4 text-primary shrink-0" />
            <span className="text-muted-foreground">Building meaningful products</span>
          </div>
          <a
            href="/CV - Jan Christian.pdf"
            className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.55 }}
        className="space-y-5 text-muted-foreground leading-relaxed"
      >
        <p className="text-lg text-foreground font-medium">
          I&apos;m a fullstack developer with 2+ years of experience
          turning ideas into production-ready products.
        </p>
        <p>
          My work lives at the intersection of design and engineering. I care deeply about the
          details — from the responsiveness of a layout to the milliseconds of a database query.
          I believe great software is built on empathy: for users, for teammates, and for the
          engineers who maintain the codebase in the future.
        </p>
        <p>
          Outside of work, I contribute to open-source, write about software architecture, and
          occasionally speak at local meetups about frontend performance and design systems.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See My Work <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </div>
  )
}