import { Mail, MapPin, Clock, Github, Linkedin, Twitter, Zap, MessageSquare, Calendar, Facebook, Code, Code2Icon } from 'lucide-react'

export type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

export type Status = 'idle' | 'loading' | 'success' | 'error'

export const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'janchrstn.dev@gmail.com', href: 'mailto:janchrstn.dev@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Caloocan City, Philippines', href: null },
  { icon: Clock, label: 'Response Time', value: 'Within 24–48 hours', href: null },
  { icon: Calendar, label: 'Availability', value: 'Open to new projects', href: null },
]

export const SOCIALS = [
  { icon: Github, href: 'https://github.com/Janchrstngrcia-dev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jan-christian-garcia-5b7525261/', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/Janchrstngrcia', label: 'Facebook' },
]

export const SERVICES = [
  {
    icon: Zap,
    title: 'MVP Development',
    desc: 'Rapid prototyping and full-stack product development from idea to deployment.',
  },
  {
    icon: Code2Icon,
    title: 'Custom Web Apps',
    desc: 'Tailored web applications built with React, Next.js, and Node.js to meet your unique needs.',
  },
  {
    icon: Code,
    title: 'Web App Maintenance',
    desc: 'Ongoing support, feature enhancements, and performance optimizations for existing apps.',
  },
]

export const FAQS = [
  {
    q: 'What is your typical project timeline?',
    a: 'Most MVP projects take 4–8 weeks from kickoff to launch. Larger platforms or complex integrations may take 2–4 months. I always provide a detailed roadmap upfront.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Absolutely. I work fully remotely with clients across the US, Europe, and Asia-Pacific. I adapt to different time zones for collaboration.',
  },
  {
    q: 'What does your development process look like?',
    a: 'I follow an agile, milestone-based process: discovery & scoping → design → development sprints → QA → deployment → handoff. You get full visibility at every stage.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes. I offer maintenance retainers and dedicated support packages to ensure your product stays healthy and evolves with your needs.',
  },
]