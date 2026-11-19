'use client'

import { useState } from 'react'
import { easterEggs } from '@/lib/site-content'

export function EasterEggs() {
  const [openId, setOpenId] = useState<string | null>(null)
  const active = easterEggs.find((egg) => egg.id === openId)

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm text-[#c9a27e]">Hidden little notes. Tap to find them.</p>
      <div className="flex flex-wrap justify-center gap-3">
        {easterEggs.map((egg) => (
          <button
            key={egg.id}
            type="button"
            aria-expanded={openId === egg.id}
            onClick={() => setOpenId(openId === egg.id ? null : egg.id)}
            className="min-h-11 rounded-full border border-[#c9a27e]/50 bg-[#1c130e] px-5 py-2.5 text-sm text-[#e9d8c6] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2a1c15] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5e3c] motion-reduce:transition-none"
          >
            {egg.prompt}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="min-h-16 max-w-md text-pretty text-center text-lg italic text-[#e9d8c6]">
        {active ? active.reveal : ''}
      </p>
    </div>
  )
}
