import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { ContactHeader } from '@/components/contact/ContactHeader'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactSidebar } from '@/components/contact/ContactSidebar'
import { ServicesSection } from '@/components/contact/ServicesSection'
import { FAQSection } from '@/components/contact/FAQSection'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <PageTransition>
          <ContactHeader />

          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-0">
            <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
              {/* Form panel */}
              <div className="order-2 lg:order-1 p-8 rounded-2xl border border-border bg-card">
                <ContactForm />
              </div>

              {/* Sidebar */}
              <ContactSidebar />
            </div>
          </section>

          <ServicesSection />
          <FAQSection />
        </PageTransition>
      </main>

      <Footer />
    </div>
  )
}