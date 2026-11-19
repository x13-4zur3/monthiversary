'use client'

import { useState } from 'react'
import { frenchPhrases } from '@/lib/site-content'
import { Reveal } from '@/components/reveal'

export function FrenchPhrases() {
  const [revealedIndex, setRevealedIndex] = useState<number | null>(null)

  return (
    <section className="mx-auto max-w-4xl px-5 py-24 sm:px-6 sm:py-28">
      <Reveal className="mb-14 text-center">
        <p className="text-xs font-medium tracking-[0.25em] text-[#c9a27e] uppercase">Just for you</p>
        <h2 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-[#f5ebe0] sm:text-6xl">
          The French you taught me
        </h2>
      </Reveal>
      <ul className="grid gap-4 sm:gap-5">
        {frenchPhrases.map((phrase, index) => {
          const isRevealed = revealedIndex === index
          return (
            <li key={phrase.french}>
              <Reveal delay={index * 120}>
                <button
                  type="button"
                  aria-expanded={isRevealed}
                  onClick={() => setRevealedIndex(isRevealed ? null : index)}
                  className="group w-full rounded-[2rem] border border-[#c9a27e]/40 bg-[#1c130e] px-7 py-6 text-left shadow-lg shadow-[#5c3d2e]/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5e3c] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-9"
                >
                  <p className="text-2xl font-semibold text-[#f5ebe0] transition group-hover:text-[#c9a27e] sm:text-3xl">
                    {phrase.french}
                  </p>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 motion-reduce:transition-none ${
                      isRevealed ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <p className="overflow-hidden text-[#cdb7a0]">
                      <span className="block pt-3">
                        {phrase.english} · <span className="italic">{phrase.pronunciation}</span>
                      </span>
                    </p>
                  </div>
                </button>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
