import { MessageCircle, PlayCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/site.js';
import GradientImage from './GradientImage.jsx';

export default function ProductCard({ product }) {
  const message = `Hi NtShellcreations, I want to buy ${product.title}. Price: ₹${product.price}. Please share payment details.`;

  return (
    <article className="soft-card flex h-full flex-col">
      <GradientImage title={product.title} accent={product.accent} />
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet">{product.category}</p>
            <h2 className="mt-2 text-xl font-black text-slate-950">{product.title}</h2>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-black text-electric">₹{product.price}</span>
        </div>

        <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>

        <div className="mt-4">
          <p className="text-sm font-bold text-slate-900">Included</p>
          <ul className="mt-2 grid gap-2 text-sm text-slate-600">
            {product.includes.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-cyan" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="secondary-button w-full">
            <PlayCircle size={18} /> Demo Video
          </button>
          <a className="primary-button w-full" href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Buy on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
