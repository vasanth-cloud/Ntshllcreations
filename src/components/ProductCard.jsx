import { MessageCircle, PlayCircle } from 'lucide-react';
import logo from '../assets/ntshellcreations-logo.png';
import { buildWhatsAppUrl } from '../data/site.js';
import GradientImage from './GradientImage.jsx';

function ProductVisual({ product }) {
  if (product.imageType !== 'logo') {
    return <GradientImage title={product.title} accent={product.accent} />;
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${product.accent}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.35),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.2),transparent_46%)]" />
      <div className="relative grid min-h-48 place-items-center p-6">
        <div className="rounded-full border border-white/40 bg-white p-3 shadow-xl">
          <img
            src={logo}
            alt="NtShellcreations logo"
            className="size-32 rounded-full object-contain sm:size-36"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ product }) {
  const message = `Hi NtShellcreations, I want to buy ${product.title}. Price: ₹${product.price}. Please share payment details.`;

  return (
    <article className="soft-card flex h-full flex-col">
      <ProductVisual product={product} />
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
          {product.demoVideoUrl ? (
            <a className="secondary-button w-full" href={product.demoVideoUrl} target="_blank" rel="noreferrer">
              <PlayCircle size={18} /> Demo Video
            </a>
          ) : (
            <button type="button" className="secondary-button w-full">
              <PlayCircle size={18} /> Demo Video
            </button>
          )}
          <a className="primary-button w-full" href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Buy on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
