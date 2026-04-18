"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ischoolMeta,
  track,
  learningOutcomes,
  ischoolProjects,
  blogPost,
  ethicsStatement,
} from "@/lib/ischool-data";
import {
  BookOpen,
  Video,
  Target,
  Compass,
  ArrowUpRight,
  Github,
  Play,
} from "lucide-react";

export default function ISchool() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden bg-ink text-cream">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #faf7f2 1px, transparent 1px), linear-gradient(to bottom, #faf7f2 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-32 right-20 w-64 h-64 bg-amber/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-coral/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber text-ink text-xs font-mono uppercase tracking-wider mb-6">
            {ischoolMeta.course}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl lg:text-[10rem] leading-[0.85]"
          >
            <span className="italic text-amber">i</span>School
            <br />
            Portfolio
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg text-cream/80">
            A retrospective on my {ischoolMeta.programTitle} at {ischoolMeta.school}, synthesizing the program learning outcomes through projects, reflection, and presentation.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl">
            <a href="#blog" className="paper border border-cream/20 bg-ink/50 backdrop-blur p-4 hover:border-amber transition-colors">
              <BookOpen size={20} className="text-amber mb-2" />
              <div className="font-display text-lg leading-tight text-cream">Reflection blog</div>
              <div className="text-xs text-cream/60 mt-1">{blogPost.readTime}</div>
            </a>
            <a href="#outcomes" className="paper border border-cream/20 bg-ink/50 backdrop-blur p-4 hover:border-coral transition-colors">
              <Target size={20} className="text-coral mb-2" />
              <div className="font-display text-lg leading-tight text-cream">6 learning outcomes</div>
              <div className="text-xs text-cream/60 mt-1">Mapped to projects</div>
            </a>
            <a href="#video" className="paper border border-cream/20 bg-ink/50 backdrop-blur p-4 hover:border-violet transition-colors">
              <Video size={20} className="text-violet mb-2" />
              <div className="font-display text-lg leading-tight text-cream">1 to 2 min video</div>
              <div className="text-xs text-cream/60 mt-1">Program reflection</div>
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
            Overview
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-8">
            About this <span className="italic text-coral">portfolio</span>.
          </h2>
          <div className="space-y-6 text-lg text-ink/80 leading-relaxed">
            <p>
              The Master of Science in Applied Data Science at the Syracuse University School of Information Studies is built around the philosophy that data science only matters when it generates actionable insight. The curriculum pairs theoretical depth with project-driven application across business, societal, and political contexts.
            </p>
            <p>
              This portfolio, required by IST 782, exists to demonstrate not just mastery of individual outcomes but the synthesis of those outcomes into a coherent professional practice. Below you will find my reflection on the six program learning outcomes, deep-dives on the projects I selected, my track choice with rationale, the recorded program presentation, and a longer-form blog reflecting on two years in the program.
            </p>
          </div>
        </div>
      </section>

      {/* TRACK */}
      <section id="track" className="py-24 lg:py-32 bg-bone relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-1 opacity-40 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
                Section 01 / Track selection
              </div>
              <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-6">
                The <span className="italic text-coral">{track.name}</span>.
              </h2>
              <Compass className="text-coral" size={48} />
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="text-lg text-ink/80 leading-relaxed">
                {track.rationale}
              </p>

              <div className="space-y-4">
                {track.courses.map((course) => (
                  <div key={course.code} className="paper hard-border p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-xs font-mono uppercase tracking-wider text-ink/50 shrink-0 pt-1">
                        {course.credits} cr
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-mono text-coral mb-1">{course.code}</div>
                        <h3 className="font-display text-2xl leading-tight">{course.title}</h3>
                        <p className="mt-3 text-ink/75 leading-relaxed">{course.takeaway}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="paper border-l-4 border-amber bg-cream p-6">
                <div className="text-xs font-mono uppercase tracking-wider text-ink/50 mb-2">
                  What the track taught me
                </div>
                <p className="text-ink/85 leading-relaxed">{track.whatILearned}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING OUTCOMES */}
      <section id="outcomes" className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
            Section 02 / Program learning outcomes
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-16">
            The six <span className="italic text-violet">outcomes</span>, in my own words.
          </h2>

          <div className="space-y-px bg-ink/10">
            {learningOutcomes.map((outcome, i) => (
              <motion.div
                key={outcome.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-cream p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-2">
                    <div className="font-display text-7xl text-coral leading-none number-tag">
                      0{outcome.number}
                    </div>
                  </div>
                  <div className="lg:col-span-10">
                    <h3 className="font-display text-2xl lg:text-3xl leading-tight">
                      {outcome.short}
                    </h3>
                    <p className="text-sm font-mono text-ink/50 mt-2 italic">
                      Official: {outcome.full}
                    </p>

                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.2em] text-ink/50 mb-2">
                          In my words
                        </div>
                        <p className="text-ink/80 leading-relaxed">{outcome.inMyWords}</p>
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.2em] text-ink/50 mb-2">
                          How I demonstrated it
                        </div>
                        <p className="text-ink/80 leading-relaxed">{outcome.howIDemonstrated}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {outcome.projects.map((p) => (
                        <span
                          key={p}
                          className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-bone border border-ink/15"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 lg:py-32 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
            Section 03 / Featured projects
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-16">
            Projects mapped to <span className="italic text-coral">courses</span>.
          </h2>

          <div className="space-y-12">
            {ischoolProjects.map((project, i) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="paper hard-border p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-3">
                    <div className="font-display text-6xl text-violet leading-none number-tag mb-3">
                      0{i + 1}
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-ink/60">
                      {project.period}
                    </div>
                    <div className="mt-2 text-xs font-mono text-coral">
                      {project.course}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {project.outcomesDemonstrated.map((n) => (
                        <span
                          key={n}
                          className="text-[10px] font-mono w-7 h-7 flex items-center justify-center bg-amber/40 border border-ink/20"
                          title={`Demonstrates Learning Outcome ${n}`}
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h3 className="font-display text-3xl lg:text-4xl leading-tight">
                      {project.title}
                    </h3>

                    <div className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-5">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.2em] text-ink/50 mb-1">
                          Project goals
                        </div>
                        <p className="text-ink/80 text-sm leading-relaxed">{project.goals}</p>
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.2em] text-ink/50 mb-1">
                          My contribution
                        </div>
                        <p className="text-ink/80 text-sm leading-relaxed">{project.contribution}</p>
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.2em] text-ink/50 mb-1">
                          Technologies
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t) => (
                            <span key={t} className="text-[11px] font-mono px-2 py-0.5 bg-bone border border-ink/15">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.2em] text-ink/50 mb-1">
                          Actionable insight
                        </div>
                        <p className="text-ink/80 text-sm leading-relaxed">{project.insight}</p>
                      </div>
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider hover-underline"
                      >
                        <Github size={14} /> View on GitHub <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ETHICS STATEMENT */}
      <section id="ethics" className="py-24 lg:py-32 bg-ink text-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-cream/50 mb-4">
            Section 04 / Responsible AI
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-tight mb-8">
            {ethicsStatement.heading}
          </h2>
          <p className="text-lg lg:text-xl text-cream/85 leading-relaxed">
            {ethicsStatement.body}
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="py-24 lg:py-32 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
            Section 05 / Recorded presentation
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-12">
            Two minutes on the <span className="italic text-violet">program</span>.
          </h2>

          {ischoolMeta.videoUrl ? (
            <div className="aspect-video bg-ink hard-border overflow-hidden">
              <iframe
                src={`https://www.loom.com/embed/${ischoolMeta.videoEmbedId}`}
                className="w-full h-full"
                title="Program reflection"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video paper hard-border bg-bone flex flex-col items-center justify-center text-center p-10">
              <div className="w-20 h-20 bg-coral text-cream rounded-full flex items-center justify-center mb-6">
                <Play size={32} fill="currentColor" />
              </div>
              <div className="font-display text-2xl lg:text-3xl mb-2">Video coming soon</div>
              <div className="text-sm text-ink/60 max-w-md">
                A 1 to 2 minute reflection on the MS in Applied Data Science program. Recording in progress.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 lg:py-32 bg-bone">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
            Section 06 / Long-form reflection
          </div>

          <header className="mb-16">
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-4">
              {blogPost.title}
            </h2>
            <p className="text-xl text-ink/70 italic">{blogPost.subtitle}</p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-ink/50">
              <span>{blogPost.publishedDate}</span>
              <span>·</span>
              <span>{blogPost.readTime}</span>
            </div>
          </header>

          <article className="space-y-12">
            {blogPost.sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-3xl lg:text-4xl leading-tight mb-6 text-ink">
                  <span className="text-coral mr-3 number-tag text-2xl">0{i + 1}</span>
                  {section.heading}
                </h3>
                <div className="space-y-5">
                  {section.paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className={`text-lg text-ink/85 leading-relaxed ${
                        i === 0 && j === 0
                          ? "first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-coral"
                          : ""
                      }`}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </article>

          <footer className="mt-20 pt-10 border-t border-ink/15 text-center">
            <p className="font-display text-2xl lg:text-3xl italic text-ink/60 mb-2">
              Thanks for reading.
            </p>
            <p className="text-sm font-mono uppercase tracking-wider text-ink/40">
              Gautam Balgi / Spring 2026
            </p>
          </footer>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-display text-2xl text-ink/60 mb-6">
            Continue exploring my work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/projects"
              className="hard-border bg-ink text-cream px-6 py-3 font-mono uppercase text-sm tracking-wider"
            >
              See projects
            </Link>
            <Link
              href="/experience"
              className="hard-border bg-cream text-ink px-6 py-3 font-mono uppercase text-sm tracking-wider"
            >
              See experience
            </Link>
            <Link
              href="/contact"
              className="hard-border bg-amber text-ink px-6 py-3 font-mono uppercase text-sm tracking-wider"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
