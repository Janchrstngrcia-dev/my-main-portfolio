'use client'

import { motion } from 'framer-motion'
import { CONTACT_INFO, SOCIALS } from '@/data/contact'

export function ContactSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.55 }}
      className="order-1 lg:order-2 flex flex-col gap-6"
    >
      {/* Contact info card */}
      <div className="p-6 rounded-2xl border border-border bg-card">
        <h2 className="font-heading font-bold text-base mb-5">Contact Info</h2>
        <div className="flex flex-col gap-4">
          {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                {href ? (
                  <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social links */}
      <div className="p-6 rounded-2xl border border-border bg-card">
        <h2 className="font-heading font-bold text-base mb-4">Connect Online</h2>
        <div className="flex gap-3">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl border border-border text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all text-xs font-medium"
            >
              <Icon className="w-5 h-5" />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Availability badge */}
      <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary">Currently Available</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          I&apos;m taking on new freelance and consulting projects. If you have something
          interesting, I&apos;d love to hear about it.
        </p>
      </div>
    </motion.div>
  )
}