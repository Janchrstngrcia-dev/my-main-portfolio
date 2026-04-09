'use client'

import Link from 'next/link'
import { Github, Linkedin, Facebook, Mail, Code2 } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/Janchrstngrcia-dev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jan-christian-garcia-5b7525261/', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/Janchrstngrcia', label: 'Facebook' },
  { icon: Mail, href: 'mailto:janchrstn.dev@gmail.com', label: 'Email' },
]

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold tracking-tight">
                Jan Christian<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground text-center md:text-left max-w-xs leading-relaxed">
              Fullstack Developer building scalable products with clean code and thoughtful design.
            </p>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; 2023 Jan Christian. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with <span className="text-primary">Next.js</span> &amp; <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
