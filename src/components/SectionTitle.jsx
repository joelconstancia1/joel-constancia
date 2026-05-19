export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-amarelo" />
          <span className="text-amarelo text-xs font-bold tracking-[0.25em] uppercase">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-amarelo" />
        </div>
      )}
      <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-[0.03em] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
