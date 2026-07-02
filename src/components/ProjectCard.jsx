import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="soft-card h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-950">{project.title}</h2>
          <p className="mt-2 text-sm font-bold text-electric">{project.stack}</p>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-700">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.features.map((feature) => (
          <span key={feature} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
            {feature}
          </span>
        ))}
      </div>
      <button type="button" className="secondary-button mt-6">
        View details <ArrowUpRight size={17} />
      </button>
    </article>
  );
}
