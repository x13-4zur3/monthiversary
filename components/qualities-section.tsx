import { Reveal } from '@/components/reveal'
import { qualities, qualitiesBonus, qualitiesIntro } from '@/lib/site-content'

export function QualitiesSection() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 sm:px-6">
      <Reveal>
        <header className="text-center">
          <p className="text-xs font-medium tracking-[0.25em] text-[#c9a27e] uppercase">{qualitiesIntro.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#f5ebe0] text-balance sm:text-5xl">
            {qualitiesIntro.title}
          </h2>
        </header>
      </Reveal>

      <ol className="mt-12 grid gap-3 sm:gap-4">
        {qualities.map((quality, index) => (
          <Reveal key={quality} delay={Math.min(index, 5) * 80}>
            <li className="flex gap-4 rounded-3xl border border-[#c9a27e]/25 bg-[#1c130e] p-5 shadow-sm shadow-[#5c3d2e]/5 sm:p-6">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#8b5e3c] text-sm font-semibold text-[#fbf5ee]"
              >
                {index + 1}
              </span>
              <p className="leading-relaxed text-[#e9d8c6]">{quality}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12">
        <p className="text-center text-xl font-light italic text-[#e9d8c6] text-balance sm:text-2xl">{qualitiesBonus}</p>
      </Reveal>
    </section>
  )
}
