import { CheckCircle2, Eye, Hammer, ShieldCheck, Target } from 'lucide-react';
import CTASection from '../components/CTASection.jsx';
import { siteConfig } from '../data/site.js';

const buildAreas = [
  'AI chatbots and RAG systems',
  'FastAPI backend foundations',
  'AI agent workflows',
  'Resume and portfolio websites',
  'Final year AI project kits',
  'Digital templates and product packs',
];

export default function About() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="heading-xl mt-4">About {siteConfig.brandName}</h1>
            <p className="body-lg mt-5">
              NtShellcreations is a tech-focused personal brand that creates digital products, AI solutions,
              project resources, and creative services for people who want practical technology with a clean
              learning curve.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-glow">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Brand direction</p>
            <h2 className="mt-4 text-3xl font-black">Build useful products, support real learners, and make AI more accessible.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The website is designed as a foundation for products, services, portfolio growth, and future
              expansion into more complete product experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="section-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="soft-card">
            <Target className="text-electric" />
            <h2 className="mt-5 text-xl font-black">Mission</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Create practical digital resources and AI services that help people build, learn, and launch faster.</p>
          </article>
          <article className="soft-card">
            <Eye className="text-violet" />
            <h2 className="mt-5 text-xl font-black">Vision</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Grow NtShellcreations into a trusted hub for AI products, project support, and creative tech solutions.</p>
          </article>
          <article className="soft-card">
            <Hammer className="text-cyan" />
            <h2 className="mt-5 text-xl font-black">What we build</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Digital packs, AI project systems, backend foundations, websites, automation tools, and documentation.</p>
          </article>
          <article className="soft-card">
            <ShieldCheck className="text-electric" />
            <h2 className="mt-5 text-xl font-black">Why trust us</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">The work stays clear, structured, beginner-friendly, and focused on real project outcomes.</p>
          </article>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">What we build</p>
            <h2 className="heading-lg mt-3">A flexible brand for products and services</h2>
            <p className="body-lg mt-4">
              NtShellcreations is intentionally built with room to expand into more product categories,
              deeper service pages, tutorials, case studies, and full product launches.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {buildAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-900">
                <CheckCircle2 className="shrink-0 text-electric" size={20} />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
