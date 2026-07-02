import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/site.js';

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  const message = `Hi NtShellcreations, I want to enquire about ${service.title}. Please share details.`;

  return (
    <article className="soft-card h-full">
      <div className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-electric">
        <Icon size={24} />
      </div>
      <h2 className="mt-5 text-xl font-black text-slate-950">{service.title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
      <a className="secondary-button mt-6 w-full" href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
        <MessageCircle size={18} /> Enquire on WhatsApp
      </a>
    </article>
  );
}
