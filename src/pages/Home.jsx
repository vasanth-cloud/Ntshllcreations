import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import ProductCard from '../components/ProductCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { products } from '../data/products.js';
import { projects } from '../data/projects.js';
import { services } from '../data/services.js';
import { buildWhatsAppUrl, siteConfig } from '../data/site.js';

const chooseUs = [
  'Beginner-friendly products with practical usage',
  'AI-first thinking for modern student and business needs',
  'Clean implementation, documentation, and handover focus',
  'Flexible support for products, services, and custom builds',
];

export default function Home() {
  const message = 'Hi NtShellcreations, I want to know more about your products and services.';

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="digital-hero-bg" />
        <div className="digital-light-sweep" />
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-br from-blue-50 via-white to-violet-50" />
        <div className="section-shell relative grid min-h-[calc(100vh-4rem)] gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Personal brand + products + services</p>
            <h1 className="heading-xl mt-4">
              {siteConfig.brandName}
              <span className="block bg-gradient-to-r from-electric via-violet to-cyan bg-clip-text text-transparent">
                {siteConfig.tagline}
              </span>
            </h1>
            <p className="body-lg mt-6 max-w-2xl">
              NtShellcreations builds digital products, AI project kits, automation tools, websites, and
              custom tech services for students, creators, and teams who want useful solutions without
              unnecessary complexity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="primary-button" to="/products">
                Explore Products <ArrowRight size={18} />
              </Link>
              <a className="secondary-button" href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Contact on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-glow">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-5">
                  <Sparkles className="text-cyan-300" />
                  <h2 className="mt-8 text-2xl font-black">Digital Product Lab</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Templates, source code, AI kits, and launch assets.</p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-electric to-violet p-5">
                  <Zap />
                  <h2 className="mt-8 text-2xl font-black">AI Services</h2>
                  <p className="mt-3 text-sm leading-7 text-blue-50">Chatbots, RAG systems, AI agents, and FastAPI builds.</p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-cyan to-blue-600 p-5 sm:col-span-2">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">Built to expand</p>
                  <h2 className="mt-3 text-3xl font-black">A modern website foundation for products, portfolio, and services.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Featured product</p>
              <h2 className="heading-lg mt-3">RDX AI Assistant for document QA</h2>
            </div>
            <Link className="secondary-button" to="/products">
              View all products <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-shell">
          <p className="eyebrow">Services preview</p>
          <h2 className="heading-lg mt-3">AI, backend, portfolio, and project support</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Portfolio preview</p>
            <h2 className="heading-lg mt-3">Project ideas with practical AI direction</h2>
            <p className="body-lg mt-4">Explore platforms, assistants, agents, and tools that show the type of work NtShellcreations can build and support.</p>
            <Link className="primary-button mt-7" to="/portfolio">
              View portfolio <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2 className="heading-lg mt-3">Clean, useful, and future-ready tech work</h2>
            <p className="body-lg mt-4">
              NtShellcreations focuses on practical solutions that are easy to understand, easy to use, and ready
              to grow into stronger products over time.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {chooseUs.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="text-electric" />
                <p className="mt-4 font-bold leading-7 text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
