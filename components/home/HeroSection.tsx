'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react'
import { PageTransition, fadeInUp } from '@/components/page-transition'
import { useTypingText } from '@/hooks/useTypingText'
import { ROLES } from '@/data/home'

export function HeroSection() {
  const role = useTypingText(ROLES)

  return (
    <PageTransition>
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-16">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden
        />
        {/* Cyan glow blob */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, oklch(0.78 0.155 196), transparent 70%)' }}
          aria-hidden
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tight mb-4 leading-none text-balance"
          >
            Hi, I&apos;m{' '}
            <span className="text-gradient-cyan">Jan Christian</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="h-10 flex items-center justify-center mb-6"
          >
            <span className="font-mono text-lg sm:text-xl text-muted-foreground">
              {'> '}
              <span className="text-foreground">{role}</span>
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            custom={3}
            className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 text-balance"
          >
            I design and build fast, accessible, and beautiful web experiences — from idea to
            production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            custom={4}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-transparent text-muted-foreground font-medium hover:text-foreground transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={fadeInUp}
            custom={5}
            className="flex items-center justify-center gap-4 mt-10"
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-muted-foreground">scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            className="w-0.5 h-8 bg-primary/40 rounded-full"
          />
        </motion.div>
      </section>
    </PageTransition>
  )
}