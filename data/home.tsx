import { Layers, Zap, ShieldCheck, Sparkles } from "lucide-react";

export const ROLES = ["Fullstack Developer", "Mobile Developer", "Freelancer"];

export const TECH = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "PHP",
  "Express",
  "TailwindCSS",
  "GraphQL",
  "TensorFlow",
  "React Native",
  "Expo Go",
];

export const STATS = [
  { value: "2+", label: "Years of Experience" },
  { value: "5", label: "Projects Delivered" },
  { value: "5", label: "Certifications" },
  { value: "100%", label: "Client Satisfaction" },
];

export const FEATURED = [
  {
    title: "Janfrans Cargo Services",
    description:
      "End-to-end logistics platform with real-time tracking, route optimization, and automated billing.",
    tags: ["PHP", "React Native", "PhpMyAdmin"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
  },
  {
    title: "Loreta's Cafe Management",
    description:
      "Desktop app for cafe operations: inventory, sales, and employee management with intuitive UI.",
    tags: ["C#", "SQLite", "Visual Studio"],
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
  },
  {
    title: "Unemployment Rate Analysis",
    description:
      "Data visualization platform for analyzing unemployment trends and patterns across different demographics.",
    tags: ["Python", "Next.js", "MongoDB"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
  },
];

export const VALUES = [
  {
    icon: Layers,
    title: "Full Stack Mastery",
    desc: "From pixel-perfect UIs to scalable backend architectures — I own the full product lifecycle.",
  },
  {
    icon: Zap,
    title: "MVP-First Mindset",
    desc: "I deliver working prototypes fast, validating ideas before over-engineering solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade Code",
    desc: "Security, performance, and maintainability are never afterthoughts in my workflow.",
  },
  {
    icon: Sparkles,
    title: "Design-Driven Dev",
    desc: "I blend design intuition with engineering rigour to craft interfaces users love.",
  },
];
