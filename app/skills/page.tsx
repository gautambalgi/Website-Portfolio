"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";

const colorPalette = [
  { bg: "bg-coral", text: "text-cream", hover: "hover:bg-coral/90" },
  { bg: "bg-violet", text: "text-cream", hover: "hover:bg-violet/90" },
  { bg: "bg-amber", text: "text-ink", hover: "hover:bg-amber/90" },
  { bg: "bg-moss", text: "text-cream", hover: "hover:bg-moss/90" },
  { bg: "bg-ink", text: "text-cream", hover: "hover:bg-ink/90" },
  { bg: "bg-bone", text: "text-ink", hover: "hover:bg-bone/90" },
];

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-1 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-6">
            §04 — Toolkit
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl lg:text-9xl leading-[0.9]"
          >
            The <span className="italic text-amber">stack</span>
            <br />
            I work in.
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-ink/70">
            Tools, frameworks, and platforms I reach for daily — from low-level
            CUDA inference work to building full-stack RAG applications and
            stakeholder dashboards.
          </p>
        </div>
      </section>

      {/* Skills grid */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-px bg-ink/10">
            {categories.map(([category, items], i) => {
              const palette = colorPalette[i % colorPalette.length];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-cream grid lg:grid-cols-12 gap-6 p-8 lg:p-10"
                >
                  <div className="lg:col-span-3">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-ink/40 mb-2">
                      0{i + 1}
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl leading-tight">
                      {category}
                    </h2>
                  </div>
                  <div className="lg:col-span-9 flex flex-wrap gap-3 items-start">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className={`${palette.bg} ${palette.text} ${palette.hover} px-4 py-2 text-sm font-mono cursor-default transition-all hover:-translate-y-0.5`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology section */}
      <section className="py-24 lg:py-32 bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-4">
            How I work
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-16">
            <span className="italic">Principles</span> over patterns.
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-ink/10">
            {[
              {
                num: "01",
                title: "Measure first",
                body: "Every model lives inside a pipeline. Before optimizing, I instrument — latency, memory, accuracy, throughput. You can't improve what you can't see.",
              },
              {
                num: "02",
                title: "Ship the simplest thing",
                body: "Calibrated XGBoost beats half-tuned transformers. I prefer the smallest model that meets the spec, then layer complexity only where the data demands it.",
              },
              {
                num: "03",
                title: "Responsible by construction",
                body: "Ethics filtering, evaluation harnesses, human-in-the-loop benchmarks. Building responsible AI isn't a final review — it's part of the architecture.",
              },
            ].map((principle) => (
              <div key={principle.num} className="bg-bone p-8 lg:p-10">
                <div className="font-display text-7xl text-coral leading-none">
                  {principle.num}
                </div>
                <h3 className="font-display text-2xl mt-6 mb-3">{principle.title}</h3>
                <p className="text-ink/70 leading-relaxed">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
