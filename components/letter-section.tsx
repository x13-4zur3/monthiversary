import { Heart } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { episodeNote, giftsFromYou, loveLetter, reassurances } from '@/lib/site-content'

export function LetterSection() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 sm:px-6">
      <Reveal>
        <article className="relative overflow-hidden rounded-[2rem] border border-[#c9a27e]/30 bg-gradient-to-b from-[#1c130e] to-[#2a1c15] p-6 shadow-2xl shadow-[#5c3d2e]/10 sm:rounded-[2.5rem] sm:p-14">
          <p className="text-xs font-medium tracking-[0.25em] text-[#c9a27e] uppercase">A letter</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#f5ebe0] sm:text-5xl">{loveLetter.title}</h2>
          <div className="mt-10 space-y-6 text-pretty text-lg leading-relaxed text-[#cdb7a0]">
            <p className="font-medium text-[#e9d8c6]">{loveLetter.greeting}</p>
            {loveLetter.paragraphs.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
            <p className="pt-4 text-[#e9d8c6]">{loveLetter.signoff}</p>
            <p className="font-semibold text-[#f5ebe0]">{loveLetter.signature}</p>
          </div>
        </article>
      </Reveal>

      <Reveal className="mt-12">
        <div className="rounded-[2rem] border border-[#c9a27e]/30 bg-[#1c130e] p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-[#f5ebe0]">{episodeNote.title}</h3>
          <p className="mt-3 leading-relaxed text-[#cdb7a0]">{episodeNote.body}</p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6">
        {giftsFromYou.map((gift, index) => (
          <Reveal key={gift.title} delay={index * 120}>
            <div className="h-full rounded-[2rem] bg-[#8b5e3c] p-6 text-[#fbf5ee] shadow-xl shadow-[#3b2418]/20 transition duration-500 hover:-translate-y-1 sm:p-8 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-[#c9a27e]/50 bg-[#4a3022] text-sm tracking-wide text-[#e9d8c6]">
                {`Photo ${index + 1}: ${gift.item}`}
              </div>
              <Heart className="mt-5 size-6 fill-[#c9a27e] text-[#c9a27e]" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-semibold">{gift.title}</h3>
              <p className="mt-3 leading-relaxed text-[#e9d8c6]">{gift.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <ul className="mt-20 flex flex-col items-center gap-6 text-center">
        {reassurances.map((line, index) => (
          <Reveal key={line} delay={index * 100}>
            <li className="text-xl font-light italic text-[#e9d8c6] text-balance sm:text-2xl">{line}</li>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
