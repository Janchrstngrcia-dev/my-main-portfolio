import {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NodeJsIcon,
  TailwindIcon,
  GitIcon,
  SupabaseIcon,
  VercelIcon,
  MongoDBIcon,
  AWSIcon,
  HTML5Icon,
  CSS3Icon,
  FirebaseIcon,
  ExpressJsIcon,
  MySQLIcon,
  PHPIcon,
  PHPMyAdminIcon,
  HostingerIcon,
  ReactNativeIcon,
  ExpoIcon,
} from "@/app/components/tech-icons";
import {
  Server,
  Database,
  Layers,
  Terminal,
  Cloud,
  Palette,
} from "lucide-react";

export const projects = [
  {
    title: "Personal Calculator",
    description: "A simple calculator application for personal use",
    image: "./calculator.png",
    tags: ["NextJS", "Tailwind CSS"],
    tech: ["NextJsIcon", "TailwindIcon"],
  },
  {
    title: "Fowl of Fury",
    description: "A web and mobile responsive with multiple features",
    image: "./fof-project.png",
    tags: ["NextJS", "Tailwind CSS", "NodeJS", "Firebase"],
    tech: ["NextJsIcon", "TailwindIcon", "NodeJsIcon", "FirebaseIcon"],
  },
  {
    title: "Unemployment Rate Analysis",
    description:
      "Data visualization tool for analyzing quezon unemployment rates",
    image: "./PESO.jpg",
    tags: ["NextJS", "Node.js", "MongoDB"],
    tech: ["NextJsIcon", "NodeJsIcon", "MongoDBIcon"],
  },
  {
    title: "Loreta's Cafe Management",
    description: "Enhanced some features for a coffee e-commerce platform",
    image: "./COFFEE.jpg",
    tags: ["C#", "SQLite", "WinUI"],
    tech: ["MySQLIcon"],
  },
  {
    title: "Web and Mobile App for Cargo Services",
    description: "A web and mobile application for a cargo services company",
    image: "./ink-tattoo.png",
    tags: ["NextJS", "NodeJS", "Tailwind CSS"],
    tech: ["NextJsIcon", "NodeJsIcon", "TailwindIcon"],
  },
  {
    title: "Web and Mobile App for Cargo Services",
    description: "A web and mobile application for a cargo services company",
    image: "./janfrans-image.jpg",
    tags: ["PHP", "React-Native", "PhpMyAdmin"],
    tech: ["PHPIcon", "ReactIcon", "PHPMyAdminIcon"],
  },
];

interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const cert: Certificate[] = [
  {
    id: 1,
    title: "JavaScript Fundamentals Course",
    description:
      "Learn JavaScript from scratch and become an advanced developer",
    image: "./JavaScript Fundamental Certificate.jpg",
  },
  {
    id: 2,
    title: "JavaScript and CSS Course",
    description:
      "JavaScript for Beginners: Learn JavaScript and Supercharge Your Web Design!",
    image: "./Java and css certificate.jpg",
  },
  {
    id: 3,
    title: "Big media PH Internship Graphic Designer",
    description: "Internship Certificate",
    image: "./CERTIFICATE-BIGMEDIAPH-INTERNSHIP-GRAPHICDESIGNER.jpg",
  },
  {
    id: 4,
    title: "JCBA Fullstack Web Developer",
    description: "Internship Certificate",
    image: "./JCBA-CERTIFICATES-WITH-SIGNATURE_page-0011.jpg",
  },
  {
    id: 5,
    title: "Web Development Training (PHP, JavaScript)",
    description: "Internship Certificate",
    image: "./JCBA-CERTIFICATES-WITH-SIGNATURE_page-0012.jpg",
  },
];

type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  category: string;
  icon?: string;
  skills: Skill[];
};

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextJsIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "React-Native", icon: ReactNativeIcon },
      { name: "HTML5", icon: HTML5Icon },
      { name: "CSS3", icon: CSS3Icon },
      { name: "JavaScript", icon: JavaScriptIcon },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", icon: PHPIcon },
      { name: "Node.js", icon: NodeJsIcon },
      { name: "Express", icon: ExpressJsIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "PHPMyAdmin", icon: MySQLIcon },
      { name: "Supabase", icon: SupabaseIcon },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git Bash", icon: GitIcon },
      { name: "Github", icon: GitIcon },
      { name: "AWS", icon: AWSIcon },
      { name: "Vercel", icon: VercelIcon },
      { name: "Firebase", icon: FirebaseIcon },
      { name: "Hostinger", icon: HostingerIcon },
      { name: "Expo Go", icon: ExpoIcon },
    ],
  },
];
