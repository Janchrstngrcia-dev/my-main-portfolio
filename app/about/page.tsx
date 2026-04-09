'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { ProfileCard } from '@/components/about/ProfileCard'
import { SkillsSection } from '@/components/about/SkillsSection'
import { ExperienceSection } from '@/components/about/ExperienceSection'
import { EducationSection } from '@/components/about/EducationSection'
import { InterestsSection } from '@/components/about/InterestsSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <PageTransition>
          {/* Page Header */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-mono text-primary uppercase tracking-widest mb-3"
            >
              About Me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-balance"
            >
              Software Engineer.{' '}
              <span className="text-gradient-cyan">Problem Solver.</span>
            </motion.h1>
          </section>

          {/* Profile + Bio */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <ProfileCard />
          </section>

          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <InterestsSection />
        </PageTransition>
      </main>

      <Footer />
    </div>
  )
}