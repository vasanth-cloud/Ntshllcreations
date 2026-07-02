import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/ntshellcreations-logo.png';
import { siteConfig } from '../data/site.js';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function navClass({ isActive }) {
  return `rounded-full px-3 py-2 text-sm font-semibold transition ${
    isActive ? 'bg-blue-50 text-electric' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
  }`;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="NtShellcreations logo"
            className="size-11 rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
          />
          <span className="text-lg font-black text-slate-950">{siteConfig.brandName}</span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <a
          href="/contact"
          className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-electric lg:inline-flex"
        >
          Start a Project
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navClass} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
