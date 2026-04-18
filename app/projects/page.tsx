"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const accentBg: Record<string, string> = {
  coral: "bg-coral",
  violet: "bg-violet",
  amber: "bg-amber",
  moss: "bg-moss",
};

export default function Projects() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-2 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-6">
            Section 03 / Projects
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl lg:text-9xl leading-[0.9]"
          >
            Things I have
            <br />
            <span className="italic text-coral">built.</span>
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-ink/70">
            From a 2.7M-event sports betting ML system with a built-in ethics layer
            to YOLOv5 grocery detection. Each project pushed me into a new
            corner of the AI stack.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              id={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 scroll-mt-24"
            >
              <div className="lg:col-span-5">
                <div className={`aspect-[4/5] ${accentBg[project.accent]} relative overflow-hidden hard-border p-10 flex flex-col justify-between`}>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">
                      Project / 0{i + 1}
                    </div>
                    <div className="font-display text-[10rem] leading-none mt-4 text-ink/90">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {project.impact.map((item) => (
                      <div key={item} className="bg-cream/90 backdrop-blur px-3 py-2 text-sm font-mono">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-cream/20" />
                  <div className="absolute top-10 right-10 w-12 h-12 rotate-45 bg-cream/10" />
                </div>
              </div>

              <div className="lg:col-span-7 lg:pt-10">
                <div className="text-xs font-mono uppercase tracking-wider text-ink/50 mb-3">
                  {project.period}
                </div>
                <h2 className="font-display text-4xl lg:text-6xl leading-[0.95]">
                  {project.title}
                </h2>
                <p className="mt-6 text-lg text-ink/75 leading-relaxed">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs font-mono uppercase tracking-wider px-3 py-1 border border-ink/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-ink/15">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-ink/50 mb-4">
                    What I did
                  </div>
                  <ul className="space-y-3">
                    {project.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-ink/80 leading-relaxed">
                        <span className={`mt-2 w-1.5 h-1.5 ${accentBg[project.accent]} rounded-full shrink-0`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.github && (
                  <div className="mt-8">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hard-border bg-ink text-cream px-6 py-3 font-mono uppercase text-sm tracking-wider inline-flex items-center gap-2 group">
                      <Github size={16} />
                      View on GitHub
                      <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
