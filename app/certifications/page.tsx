'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { CertificationsHeader } from '@/components/certifications/CertificationsHeader'
import { StatsBar } from '@/components/certifications/StatsBar'
import { CategoryFilter } from '@/components/certifications/CategoryFilter'
import { CertificationsGrid } from '@/components/certifications/CertificationsGrid'
import { CertificationsCTA } from '@/components/certifications/CertificationsCTA'

export default function CertificationsPage() {
  const [active, setActive] = useState('All')

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <PageTransition>
          <CertificationsHeader />
          <StatsBar />
          <CategoryFilter active={active} onChange={setActive} />
          <CertificationsGrid active={active} />
          <CertificationsCTA />
        </PageTransition>
      </main>

      <Footer />
    </div>
  )
}