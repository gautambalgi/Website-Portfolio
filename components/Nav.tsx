"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/ischool", label: "iSchool", special: true },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/80 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-ink text-cream flex items-center justify-center font-display text-xl font-bold transition-transform group-hover:rotate-12">
            G
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-base leading-none">Gautam Balgi</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/60 mt-1">
              MS ADS · Syracuse
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            if (link.special) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`ml-3 px-4 py-2 text-sm font-mono uppercase tracking-wider border-2 border-ink transition-all ${
                    active
                      ? "bg-ink text-cream"
                      : "bg-amber text-ink hover:bg-ink hover:text-cream"
                  }`}
                >
                  {link.label} ↗
                </Link>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm relative ${
                  active ? "font-medium" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-ink" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-cream border-t border-ink/10">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 px-3 ${
                  link.special ? "bg-amber border-2 border-ink mt-2 font-mono uppercase text-sm tracking-wider" : ""
                } ${pathname === link.href ? "font-medium" : ""}`}
              >
                {link.label}{link.special && " ↗"}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
