import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream relative overflow-hidden">
      {/* Top marquee */}
      <div className="border-y border-cream/20 py-4 overflow-hidden">
        <div className="marquee-track animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display text-3xl px-6 inline-flex items-center gap-6">
              Building intelligent systems
              <span className="text-coral">✦</span>
              Based in New York
              <span className="text-amber">✦</span>
              Open to opportunities 2026
              <span className="text-violet">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-4xl mb-4">Let's connect</div>
            <p className="text-cream/70 max-w-md">
              Currently seeking full-time opportunities in Data Science, AI/ML,
              and Software Engineering starting 2026.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-4">
              Reach out
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:balgigautam604@gmail.com"
                  className="group flex items-center gap-2 hover:text-amber"
                >
                  <Mail size={16} />
                  balgigautam604@gmail.com
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/gautam-balgi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 hover:text-amber"
                >
                  <Linkedin size={16} />
                  /in/gautam-balgi
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gautambalgi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 hover:text-amber"
                >
                  <Github size={16} />
                  /gautambalgi
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-4">
              Navigate
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-amber">About</Link></li>
              <li><Link href="/experience" className="hover:text-amber">Experience</Link></li>
              <li><Link href="/projects" className="hover:text-amber">Projects</Link></li>
              <li><Link href="/skills" className="hover:text-amber">Skills</Link></li>
              <li><Link href="/ischool" className="hover:text-amber">iSchool Portfolio</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono uppercase tracking-wider text-cream/50">
          <div>© {new Date().getFullYear()} Gautam Balgi · All rights reserved</div>
          <div>Designed & built with care · Deployed on Vercel</div>
        </div>
      </div>
    </footer>
  );
}
