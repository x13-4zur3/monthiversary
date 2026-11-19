import { Heart } from 'lucide-react'
import { partner, relationshipStory } from '@/lib/site-content'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div
        aria-hidden="true"
        className="animate-float absolute -top-24 left-1/2 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#5c3d2e] to-[#c9a27e]/20 blur-3xl motion-reduce:animate-none"
      />
      <Heart
        aria-hidden="true"
        className="animate-float absolute top-28 left-[12%] size-6 fill-[#c9a27e]/60 text-[#c9a27e]/60 motion-reduce:animate-none"
      />
      <Heart
        aria-hidden="true"
        className="animate-float-delayed absolute right-[14%] bottom-32 size-10 fill-[#e9d8c6]/80 text-[#e9d8c6]/80 motion-reduce:animate-none"
      />
      <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9a27e]/50 bg-[#1c130e]/70 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-[#e9d8c6] uppercase backdrop-blur">
        <Heart className="animate-heartbeat size-3.5 fill-[#8b5e3c] text-[#c9a27e] motion-reduce:animate-none" aria-hidden="true" />
        {partner.anniversary}
      </p>
      <h1 className="animate-fade-up max-w-4xl text-balance text-6xl font-semibold tracking-tight text-[#f5ebe0] [animation-delay:120ms] sm:text-8xl">
        Happy one month, <span className="italic text-[#c9a27e]">{partner.name}</span>
      </h1>
      <p className="animate-fade-up mt-8 max-w-xl text-pretty text-lg leading-relaxed text-[#cdb7a0] [animation-delay:240ms]">
        Since {relationshipStory.startedOn}, every conversation has been my favorite part of the day.
      </p>
      <p className="animate-fade-up mt-4 text-sm tracking-wide text-[#c9a27e] [animation-delay:320ms]">
        {relationshipStory.cities}
      </p>
      <a
        href="#memories"
        className="animate-fade-up mt-12 rounded-full bg-[#8b5e3c] px-8 py-3.5 text-sm font-medium text-[#fbf5ee] shadow-xl shadow-[#3b2418]/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a0704a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5e3c] motion-reduce:transition-none motion-reduce:hover:translate-y-0 [animation-delay:420ms]"
      >
        Start our story
      </a>
    </section>
  )
}
