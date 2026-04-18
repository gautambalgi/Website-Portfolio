"use client";

import { profile, education } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  "Principles of Computing (Part 2)",
  "An Introduction to Interactive Programming in Python (Part 1)",
  "Algorithmic Thinking (Part 1)",
];

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-2 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-6">
            §01 — About
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl lg:text-9xl leading-[0.9] tracking-tight"
          >
            Hello, I'm
            <br />
            <span className="italic gradient-text">Gautam</span>.
          </motion.h1>
        </div>
      </section>

      {/* Long bio */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="space-y-8 text-lg lg:text-xl leading-relaxed text-ink/85">
            {profile.longBio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={i === 0 ? "first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-coral" : ""}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 lg:py-32 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
                §02 — Education
              </div>
              <h2 className="font-display text-5xl lg:text-7xl leading-[0.9]">
                Trained at the <span className="italic text-coral">intersection</span> of theory & practice.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-px bg-ink/10">
                {education.map((edu, i) => (
                  <div key={edu.school} className="bg-bone p-8 lg:p-10">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="text-coral mt-1 shrink-0" size={28} />
                      <div className="flex-1">
                        <div className="text-xs font-mono uppercase tracking-wider text-ink/50 mb-2">
                          {edu.period}
                        </div>
                        <h3 className="font-display text-2xl lg:text-3xl leading-tight">
                          {edu.degree}
                        </h3>
                        <div className="mt-2 text-ink/70">
                          {edu.school} · {edu.location}
                        </div>
                        {edu.school_unit && (
                          <div className="text-sm text-ink/50">{edu.school_unit}</div>
                        )}
                        {edu.cgpa && (
                          <div className="mt-3 inline-block bg-amber/30 px-3 py-1 text-sm font-mono">
                            CGPA: {edu.cgpa}
                          </div>
                        )}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="text-xs px-2 py-1 border border-ink/15"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
            §03 — Certifications
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[0.9] mb-12">
            Continued <span className="italic">learning</span>.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="paper hard-border p-6 flex items-start gap-3"
              >
                <Award size={24} className="text-violet shrink-0 mt-1" />
                <div className="font-display text-lg leading-tight">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond work */}
      <section className="py-24 lg:py-32 bg-ink text-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-cream/50 mb-4">
            §04 — Beyond the keyboard
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-tight">
            Curious about <span className="italic text-amber">how things work</span> — from neural nets to combustion engines.
          </h2>
          <p className="mt-8 text-lg text-cream/70 leading-relaxed">
            My background in Automobile Engineering taught me to reason about
            systems end-to-end. That same instinct shapes how I think about ML
            today: every model lives inside a pipeline, every pipeline serves a
            user, and every decision needs to be measurable. Whether it's
            tuning a transformer or diagnosing an engine fault at Mercedes-Benz, the
            craft is the same — find the bottleneck, fix the root cause, ship
            the result.
          </p>
        </div>
      </section>
    </>
  );
}
