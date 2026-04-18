"use client";

import { experience } from "@/lib/data";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const accentMap: Record<string, string> = {
  coral: "border-coral bg-coral/5",
  violet: "border-violet bg-violet/5",
  amber: "border-amber bg-amber/5",
  moss: "border-moss bg-moss/5",
};

const dotMap: Record<string, string> = {
  coral: "bg-coral",
  violet: "bg-violet",
  amber: "bg-amber",
  moss: "bg-moss",
};

export default function Experience() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-1 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-6">
            §02 — Experience
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl lg:text-9xl leading-[0.9]"
          >
            Roles that
            <br />
            <span className="italic text-violet">shaped me.</span>
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-ink/70">
            Five years across research labs, AI startups, enterprise consulting,
            and even a stint diagnosing Mercedes-Benz engines. Each role layered a new
            way of thinking about systems, scale, and stakeholders.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.article
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`paper border-l-4 ${accentMap[exp.accent]} p-8 lg:p-10`}
              >
                <div className="grid lg:grid-cols-12 gap-6">
                  {/* Meta */}
                  <div className="lg:col-span-3 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 ${dotMap[exp.accent]} rounded-full`} />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink/60">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-ink/60 flex items-center gap-2">
                      <Calendar size={12} /> {exp.period}
                    </div>
                    <div className="text-xs font-mono text-ink/60 flex items-center gap-2">
                      <MapPin size={12} /> {exp.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-9">
                    <h2 className="font-display text-3xl lg:text-4xl leading-tight">
                      {exp.role}
                    </h2>
                    <div className="mt-1 text-base text-ink/60">{exp.company}</div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono uppercase tracking-wider px-2 py-1 bg-ink text-cream"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-6 space-y-3">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-3 text-ink/80 leading-relaxed">
                          <span className={`mt-2.5 w-1 h-1 ${dotMap[exp.accent]} rounded-full shrink-0`} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
