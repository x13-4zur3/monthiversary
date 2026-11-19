'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { nalaPhotoSlot } from '@/lib/site-content'

export function NalaSection() {
  const [pets, setPets] = useState(0)

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#5c3d2e] to-[#3b2418] p-6 text-[#fbf5ee] shadow-2xl shadow-[#3b2418]/30 sm:rounded-[2.5rem] sm:p-14">
          <div aria-hidden="true" className="animate-float absolute -top-16 -right-16 size-64 rounded-full bg-[#c9a27e]/20 blur-2xl motion-reduce:animate-none" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div className="grid aspect-[4/5] place-items-center rounded-[1.5rem] border border-[#c9a27e]/30 bg-[#5c3d2e]/60 text-center sm:rounded-[2rem]">
              <p className="px-6 text-sm tracking-[0.2em] text-[#e9d8c6] uppercase">{nalaPhotoSlot}</p>
            </div>
            <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
              <p className="text-xs font-medium tracking-[0.25em] text-[#e9d8c6] uppercase">Meet Nala</p>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">Nala says hi</h2>
              <p className="max-w-md text-pretty leading-relaxed text-[#e9d8c6]">
                Thank you for sharing her with me, and for every walk, cuddle, and belly rub that made my week.
              </p>
              <div className="flex w-full flex-col items-center gap-4 md:items-start">
                <button
                  type="button"
                  onClick={() => setPets((count) => count + 1)}
                  className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#f5ebe0] px-7 py-3.5 text-sm font-medium text-[#1a0f0a] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#e9d8c6] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9d8c6] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <Heart aria-hidden="true" className="size-4 fill-[#8b5e3c] text-[#c9a27e]" />
                  Pet Nala
                </button>
                <p aria-live="polite" className="min-h-6 text-sm text-[#e9d8c6]">
                  {pets === 0
                    ? 'Tap to give her some love.'
                    : `You have given Nala ${pets} ${pets === 1 ? 'pet' : 'pets'}. She says thank you.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
