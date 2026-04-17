"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <PageTransition>
          <ProjectsHeader />
          <FeaturedProjectsSection />
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsFilter active={active} onChange={setActive} />
            <ProjectsGrid active={active} />
          </section>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
