'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { complimentLines } from '@/lib/site-content'

export function ComplimentJar() {
  const [count, setCount] = useState(0)
  const line = complimentLines[(count - 1 + complimentLines.length) % complimentLines.length]

  return (
    <div className="flex flex-col items-center gap-5 rounded-[2rem] border border-[#c9a27e]/30 bg-[#1c130e] p-8 text-center shadow-xl shadow-[#5c3d2e]/10">
      <p className="text-xs font-medium tracking-[0.25em] text-[#c9a27e] uppercase">Compliment jar</p>
      <p className="text-balance text-lg text-[#e9d8c6]">I love when you compliment me about my hands, my hair, my skin, literally anything.</p>
      <button
        type="button"
        onClick={() => setCount((value) => value + 1)}
        className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#8b5e3c] px-6 py-3 text-sm font-medium text-[#fbf5ee] transition duration-300 hover:-translate-y-0.5 hover:bg-[#a0704a] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5e3c] motion-reduce:transition-none"
      >
        <Heart aria-hidden="true" className="size-4 fill-[#c9a27e] text-[#c9a27e]" />
        Compliment Alish
      </button>
      <p aria-live="polite" className="min-h-12 max-w-sm text-pretty text-[#cdb7a0]">
        {count === 0 ? 'Every nice thing you say makes me happy.' : line}
      </p>
      {count > 0 ? <p className="text-xs text-[#c9a27e]">{count} {count === 1 ? 'compliment' : 'compliments'} so far</p> : null}
    </div>
  )
}
