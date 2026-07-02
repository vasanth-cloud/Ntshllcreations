import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/ntshellcreations-logo.png';
import { siteConfig } from '../data/site.js';

const quickLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="dark-panel">
      <div className="section-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="NtShellcreations logo"
                className="size-12 rounded-full border border-white/10 bg-white object-contain p-1"
              />
              <span className="text-xl font-black">{siteConfig.brandName}</span>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Digital products, AI solutions, and creative tech services built for students, creators, and
              growing teams.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Quick Links</h2>
            <div className="mt-4 grid gap-3">
              {quickLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-slate-300 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Connect</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="secondary-button border-white/10 bg-white/10 text-white hover:border-white hover:text-white"
                href={`mailto:${siteConfig.email}`}
              >
                <Mail size={17} /> Email
              </a>
              <a
                className="secondary-button border-white/10 bg-white/10 text-white hover:border-white hover:text-white"
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>(c) {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          <Link to="/contact" className="inline-flex items-center gap-1 text-cyan-300 hover:text-white">
            Build with NtShellcreations <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
