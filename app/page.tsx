"use client";

import Link from "next/link";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { profile, stats, projects, experience } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 gradient-mesh-1 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-coral/20 rounded-full blur-3xl animate-blob -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet/20 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: "4s" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cream border border-ink/10 rounded-full text-xs font-mono uppercase tracking-wider mb-8"
          >
            <span className="w-2 h-2 bg-moss rounded-full animate-pulse" />
            Available for full-time roles · 2026
          </motion.div>

          {/* Massive editorial headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[14vw] lg:text-[10rem] xl:text-[12rem] leading-[0.85] tracking-tight"
          >
            Gautam
            <br />
            <span className="italic text-coral">Balgi</span>
            <span className="inline-block ml-4 w-4 h-4 lg:w-6 lg:h-6 bg-amber rounded-full align-middle animate-pulse" />
          </motion.h1>

          {/* Subheading */}
          <div className="grid lg:grid-cols-12 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <p className="text-2xl lg:text-3xl font-display leading-tight">
                AI & Machine Learning Engineer building{" "}
                <span className="gradient-text font-semibold">end-to-end intelligent systems</span> that
                translate research into real-world impact.
              </p>
              <p className="mt-6 text-ink/70 max-w-xl">
                MS Applied Data Science '26 at Syracuse University. Currently
                researching LLMs, RAG, and behavioral ML at NEXIS Labs after
                interning at HomeInheritance Inc.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/projects"
                  className="hard-border bg-ink text-cream px-6 py-3 font-mono uppercase text-sm tracking-wider inline-flex items-center gap-2"
                >
                  See projects <ArrowUpRight size={16} />
                </Link>
                <a
                  href="/resume/Gautam_Balgi_Resume.pdf"
                  download
                  className="hard-border bg-amber text-ink px-6 py-3 font-mono uppercase text-sm tracking-wider inline-flex items-center gap-2"
                >
                  <Download size={16} /> Resume
                </a>
              </div>
            </motion.div>

            {/* Side card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-5 lg:pl-10"
            >
              <div className="paper hard-border p-6 relative">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-ink/50 mb-4">
                  Currently
                </div>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-coral rounded-full mt-2 shrink-0" />
                    <div>
                      <div className="font-medium">Graduate Researcher · NEXIS Labs</div>
                      <div className="text-ink/60">NLP & behavioral analytics on the MindFeed app</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-violet rounded-full mt-2 shrink-0" />
                    <div>
                      <div className="font-medium">MS Applied Data Science</div>
                      <div className="text-ink/60">Syracuse University · CGPA 3.86 / 4.00</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber rounded-full mt-2 shrink-0" />
                    <div>
                      <div className="font-medium">Based in New York</div>
                      <div className="text-ink/60">Open to remote / hybrid / relocation</div>
                    </div>
                  </li>
                </ul>
                <Sparkles
                  size={32}
                  className="absolute -top-4 -right-4 text-amber rotate-12"
                  fill="currentColor"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS MARQUEE */}
      <section className="bg-ink text-cream divider-marquee py-6 overflow-hidden">
        <div className="marquee-track animate-marquee whitespace-nowrap font-display text-5xl lg:text-7xl">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-12 pr-12">
              <span>NLP</span>
              <span className="text-amber">★</span>
              <span className="italic">Large Language Models</span>
              <span className="text-coral">●</span>
              <span>RAG Systems</span>
              <span className="text-violet">◆</span>
              <span className="italic">Computer Vision</span>
              <span className="text-amber">★</span>
              <span>Behavioral ML</span>
              <span className="text-coral">●</span>
              <span className="italic">Responsible AI</span>
              <span className="text-violet">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* STATS GRID */}
      <section className="py-24 lg:py-32 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
            By the numbers
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-bone p-8 lg:p-10"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="font-display text-6xl lg:text-7xl number-tag">
                  {stat.value}
                  {stat.suffix && <span className="text-coral">{stat.suffix}</span>}
                </div>
                <div className="mt-3 text-sm text-ink/60 uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
                Selected work
              </div>
              <h2 className="font-display text-6xl lg:text-8xl leading-[0.9]">
                Projects that
                <br />
                <span className="italic text-coral">moved the needle.</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-mono uppercase tracking-wider hover-underline self-start"
            >
              View all projects ↗
            </Link>
          </div>

          <div className="space-y-px bg-ink/10">
            {projects.slice(0, 3).map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects#${project.slug}`}
                className="group block bg-cream p-8 lg:p-10 hover:bg-bone transition-colors"
              >
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-1 number-tag text-ink/40 text-2xl">
                    0{i + 1}
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="font-display text-3xl lg:text-5xl leading-tight group-hover:text-coral transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-ink/70 max-w-xl">{project.summary}</p>
                  </div>
                  <div className="lg:col-span-3 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-bone border border-ink/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="lg:col-span-1 flex justify-end">
                    <ArrowUpRight
                      size={32}
                      className="text-ink/30 group-hover:text-coral group-hover:rotate-45 transition-all"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="py-24 lg:py-32 bg-bone relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-2 opacity-40 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
                Where I've been
              </div>
              <h2 className="font-display text-5xl lg:text-7xl leading-[0.9]">
                Built across <span className="italic">research</span> &{" "}
                <span className="italic text-violet">industry</span>.
              </h2>
              <Link
                href="/experience"
                className="inline-block mt-8 text-sm font-mono uppercase tracking-wider hover-underline"
              >
                Full work history ↗
              </Link>
            </div>
            <div className="lg:col-span-8">
              <ol className="space-y-px">
                {experience.slice(0, 4).map((exp, i) => (
                  <li
                    key={`${exp.company}-${i}`}
                    className="grid grid-cols-12 gap-4 py-5 border-t border-ink/15 first:border-t-0 group"
                  >
                    <div className="col-span-3 text-xs font-mono uppercase tracking-wider text-ink/50 pt-1">
                      {exp.period}
                    </div>
                    <div className="col-span-9">
                      <div className="font-display text-2xl lg:text-3xl leading-tight">
                        {exp.role}
                      </div>
                      <div className="text-sm text-ink/60 mt-1">
                        {exp.company} · {exp.location}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-6">
            Let's build something
          </div>
          <h2 className="font-display text-6xl lg:text-9xl leading-[0.9]">
            Got an interesting
            <br />
            <span className="italic gradient-text">problem?</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-12 hard-border bg-coral text-cream px-8 py-4 font-mono uppercase text-base tracking-wider"
          >
            Get in touch <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
