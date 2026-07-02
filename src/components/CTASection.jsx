import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildWhatsAppUrl, siteConfig } from '../data/site.js';

export default function CTASection({
  title = 'Ready to build your next AI product, website, or digital asset?',
  description = 'Tell NtShellcreations what you want to create. We will help you turn the idea into a useful, polished tech solution.',
}) {
  const message = 'Hi NtShellcreations, I want to discuss a project/service. Please share details.';

  return (
    <section className="section-padding">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-glow sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">{siteConfig.brandName}</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a className="primary-button bg-white text-slate-950 hover:bg-cyan-100" href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Contact on WhatsApp
              </a>
              <Link className="secondary-button border-white/10 bg-white/10 text-white hover:border-white hover:text-white" to="/products">
                Explore Products <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
