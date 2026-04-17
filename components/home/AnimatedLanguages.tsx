'use client'

import { motion } from 'framer-motion'

const LANGUAGES = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'CSS',
  'HTML',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'Docker',
  'Tailwind',
  'GraphQL',
  'REST API',
  'Web Design',
  'UI/UX',
  'Accessibility',
]

export function AnimatedLanguages() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {LANGUAGES.map((language, index) => (
          <motion.div
            key={`${language}-${index}`}
            initial={{
              opacity: 0,
              y: -20,
              x: Math.random() * 100 - 50,
            }}
            animate={{
              opacity: [0, 0.3, 0.2, 0],
              y: [
                Math.random() * -100 - 50,
                Math.random() * 100 + 50,
                Math.random() * -200 - 100,
              ],
              x: [
                Math.random() * 100 - 50,
                Math.random() * 200 - 100,
                Math.random() * 100 - 50,
              ],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.3,
            }}
            className="absolute text-xs sm:text-sm font-mono text-primary/20 dark:text-primary/10 whitespace-nowrap"
            style={{
              left: `${(index % 5) * 20}%`,
              top: `${(Math.floor(index / 5) * 25) - 50}%`,
            }}
          >
            {'<'} {language} {'>'}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
