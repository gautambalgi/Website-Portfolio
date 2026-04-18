"use client";

import { profile } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-2 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-ink/60 mb-6">
            §05 — Contact
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl lg:text-[10rem] leading-[0.85]"
          >
            Say
            <br />
            <span className="italic gradient-text">hello.</span>
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-ink/70">
            Whether you're hiring, collaborating, or just want to talk about
            LLM evaluation, RAG pipelines, or the best taqueria in Syracuse — my inbox is open.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Direct contact card */}
            <div className="lg:col-span-5 space-y-4">
              <button
                onClick={copyEmail}
                className="paper hard-border w-full p-6 text-left group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Mail size={24} className="text-coral" />
                  {copied ? (
                    <Check size={18} className="text-moss" />
                  ) : (
                    <Copy size={18} className="text-ink/40 group-hover:text-ink" />
                  )}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-ink/50 mb-1">
                  Email · click to copy
                </div>
                <div className="font-display text-xl break-all">
                  {profile.email}
                </div>
              </button>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="paper hard-border block p-6 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Linkedin size={24} className="text-violet" />
                  <ArrowUpRight size={18} className="text-ink/40 group-hover:text-ink group-hover:rotate-45 transition-all" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-ink/50 mb-1">
                  LinkedIn
                </div>
                <div className="font-display text-xl">/in/gautam-balgi</div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="paper hard-border block p-6 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Github size={24} className="text-ink" />
                  <ArrowUpRight size={18} className="text-ink/40 group-hover:text-ink group-hover:rotate-45 transition-all" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-ink/50 mb-1">
                  GitHub
                </div>
                <div className="font-display text-xl">/gautambalgi</div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <div className="paper p-5 border border-ink/10">
                  <Phone size={18} className="text-amber mb-2" />
                  <div className="text-xs font-mono uppercase tracking-wider text-ink/50 mb-1">
                    Phone
                  </div>
                  <div className="text-sm font-mono">{profile.phone}</div>
                </div>
                <div className="paper p-5 border border-ink/10">
                  <MapPin size={18} className="text-moss mb-2" />
                  <div className="text-xs font-mono uppercase tracking-wider text-ink/50 mb-1">
                    Based in
                  </div>
                  <div className="text-sm font-mono">{profile.location}</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <form
                action={`mailto:${profile.email}`}
                method="post"
                encType="text/plain"
                className="paper hard-border p-8 lg:p-10 space-y-6"
              >
                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.2em] text-ink/60 block mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent border-b-2 border-ink/20 focus:border-coral outline-none py-2 font-display text-2xl"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.2em] text-ink/60 block mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b-2 border-ink/20 focus:border-coral outline-none py-2 font-display text-2xl"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.2em] text-ink/60 block mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full bg-transparent border-b-2 border-ink/20 focus:border-coral outline-none py-2 font-display text-2xl appearance-none cursor-pointer"
                  >
                    <option>Full-time opportunity</option>
                    <option>Internship / contract</option>
                    <option>Collaboration / research</option>
                    <option>Just saying hi</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-[0.2em] text-ink/60 block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-transparent border-b-2 border-ink/20 focus:border-coral outline-none py-2 text-lg resize-none"
                    placeholder="Tell me what you're working on..."
                  />
                </div>

                <button
                  type="submit"
                  className="hard-border bg-ink text-cream px-6 py-3 font-mono uppercase text-sm tracking-wider inline-flex items-center gap-2"
                >
                  Send message <ArrowUpRight size={16} />
                </button>

                <p className="text-xs text-ink/50 font-mono">
                  Submitting opens your default mail client. Prefer LinkedIn? Use the card on the left.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Big footer text */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-display text-3xl lg:text-5xl leading-tight italic text-ink/40">
            "Looking for engineers who write code,
            <br />ship products, and answer email."
          </p>
          <p className="mt-4 text-xs font-mono uppercase tracking-wider text-ink/40">
            — me, probably
          </p>
        </div>
      </section>
    </>
  );
}
