export default function GradientImage({ title, accent = 'from-blue-600 via-violet-600 to-cyan-400', className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${accent} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.22),transparent_42%)]" />
      <div className="relative flex min-h-48 items-end p-5">
        <span className="max-w-[14rem] text-xl font-black leading-tight text-white">{title}</span>
      </div>
    </div>
  );
}
