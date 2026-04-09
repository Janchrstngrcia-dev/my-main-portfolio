'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Field } from './Field'
import { INITIAL_FORM, type FormState, type Status } from '@/data/contact'

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/60 transition-colors'

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.')

      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-heading font-bold text-xl">Message sent!</h3>
        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
          Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm text-primary hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" id="name" required>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jan Christian"
            value={form.name}
            onChange={handleChange}
            required
            className={INPUT_CLASS}
          />
        </Field>
        <Field label="Email" id="email" required>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jan@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className={INPUT_CLASS}
          />
        </Field>
      </div>

      {/* Subject */}
      <Field label="Subject" id="subject" required>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className={INPUT_CLASS}
        >
          <option value="" disabled>Select a topic…</option>
          <option>Project Inquiry</option>
          <option>Freelance / Contract Work</option>
          <option>Full-time Opportunity</option>
          <option>Technical Consulting</option>
          <option>Other</option>
        </select>
      </Field>

      {/* Message */}
      <Field label="Message" id="message" required>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me about your project, timeline, and budget..."
          value={form.message}
          onChange={handleChange}
          required
          className={`${INPUT_CLASS} resize-none leading-relaxed`}
        />
      </Field>

      {/* Error alert */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-sm text-destructive"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMsg || 'Something went wrong. Please try again.'}</span>
        </motion.div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:scale-[1.01] active:scale-[0.99]"
      >
        {status === 'loading' ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-4 h-4" /> Send Message</>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        You&apos;ll receive an auto-reply confirming I got your message.
      </p>
    </form>
  )
}