import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Fira_Code } from 'next/font/google';

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });
const firaCode = Fira_Code({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-fira-code' });

export const metadata: Metadata = {
  title: 'Jan Christian | Full-Stack Developer',
  description: 'Portfolio of Jan Christian, a full-stack developer showcasing projects, skills, and experience',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
