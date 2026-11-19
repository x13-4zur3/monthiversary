import { matchingPfpSlots, ourFirsts, photoSlots } from '@/lib/site-content'
import { Reveal } from '@/components/reveal'

export function PhotoGallery() {
  return (
    <section id="memories" className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-28">
      <Reveal className="mb-12 text-center sm:mb-16">
        <p className="text-xs font-medium tracking-[0.25em] text-[#c9a27e] uppercase">Something sweet</p>
        <h2 className="mt-4 text-5xl font-semibold tracking-tight text-[#f5ebe0] sm:text-6xl">
          Something that makes me smile about us
        </h2>
      </Reveal>
      <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
        {photoSlots.map((number, index) => (
          <li key={number}>
            <Reveal from={index % 2 === 0 ? 'left' : 'right'} delay={index * 80}>
              <div className="group relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#3b2418] via-[#5c3d2e] to-[#c9a27e] shadow-xl shadow-[#5c3d2e]/10 transition duration-700 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-[2rem]">
                <span className="absolute inset-0 bg-[#8b5e3c]/0 transition duration-700 group-hover:bg-[#8b5e3c]/5" aria-hidden="true" />
                <p className="text-5xl font-semibold text-[#e9d8c6]/60 transition duration-700 group-hover:scale-110 sm:text-7xl motion-reduce:transition-none">
                  {number}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal className="mt-16" from="scale">
        <p className="text-center text-xs tracking-[0.25em] text-[#c9a27e] uppercase">Our first matching PFPs</p>
        <ul className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-4">
          {matchingPfpSlots.map((label) => (
            <li key={label} className="grid aspect-square place-items-center rounded-full border border-dashed border-[#c9a27e] bg-[#1c130e] text-center text-xs text-[#c9a27e]">
              {label}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal className="mt-12" from="scale">
        <dl className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          {ourFirsts.map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#c9a27e]/30 bg-[#1c130e] px-6 py-5">
              <dt className="text-xs tracking-[0.2em] text-[#c9a27e] uppercase">{item.label}</dt>
              <dd className="mt-2 text-xl font-semibold text-[#f5ebe0]">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
