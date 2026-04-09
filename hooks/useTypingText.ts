'use client'

import { useEffect, useState } from 'react'

export function useTypingText(texts: string[], speed = 60, pause = 1600) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[idx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && display === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && display === '') {
      setDeleting(false)
      setIdx((i) => (i + 1) % texts.length)
    } else {
      timeout = setTimeout(() => {
        setDisplay(deleting ? current.slice(0, display.length - 1) : current.slice(0, display.length + 1))
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [display, deleting, idx, texts, speed, pause])

  return display
}