import { Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import CTASection from '../components/CTASection.jsx';
import { buildWhatsAppUrl, siteConfig } from '../data/site.js';

export default function Contact() {
  const message = 'Hi NtShellcreations, I want to contact you about products/services.';

  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <p className="eyebrow">Contact</p>
          <h1 className="heading-xl mt-4">Contact NtShellcreations easily</h1>
          <p className="body-lg mt-5 max-w-3xl">
            Reach out for digital products, service enquiries, custom AI projects, portfolio websites, or final
            year project support.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 pb-16 sm:pb-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4">
            <a className="soft-card flex items-center gap-4" href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
              <span className="grid size-12 place-items-center rounded-2xl bg-green-50 text-green-600">
                <MessageCircle size={24} />
              </span>
              <span>
                <span className="block font-black text-slate-950">WhatsApp</span>
                <span className="text-sm text-slate-600">Fastest way to enquire or buy products</span>
              </span>
            </a>
            <a className="soft-card flex items-center gap-4" href={`mailto:${siteConfig.email}`}>
              <span className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-electric">
                <Mail size={24} />
              </span>
              <span>
                <span className="block font-black text-slate-950">Email</span>
                <span className="text-sm text-slate-600">{siteConfig.email}</span>
              </span>
            </a>
            <a className="soft-card flex items-center gap-4" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
              <span className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet">
                <Linkedin size={24} />
              </span>
              <span>
                <span className="block font-black text-slate-950">LinkedIn</span>
                <span className="text-sm text-slate-600">https://www.linkedin.com/in/a-vasanth/</span>
              </span>
            </a>
          </div>

          <form className="soft-card">
            <h2 className="text-2xl font-black text-slate-950">Send a message</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">This is a frontend-only form UI. Connect it to a backend or form service later.</p>
            <div className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-slate-900">
                Name
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100" type="text" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-900">
                Email
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100" type="email" placeholder="your@email.com" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-900">
                Message
                <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-electric focus:ring-4 focus:ring-blue-100" placeholder="Tell us what you want to build or buy" />
              </label>
              <button className="primary-button w-full sm:w-fit" type="button">
                <Send size={18} /> Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <CTASection />
    </>
  );
}
