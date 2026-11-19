import { ComplimentJar } from '@/components/compliment-jar'
import { EasterEggs } from '@/components/easter-eggs'
import { FrenchPhrases } from '@/components/french-phrases'
import { Hero } from '@/components/hero'
import { LetterSection } from '@/components/letter-section'
import { NalaSection } from '@/components/nala-section'
import { PhotoGallery } from '@/components/photo-gallery'
import { QualitiesSection } from '@/components/qualities-section'
import { Reveal } from '@/components/reveal'
import { author, partner } from '@/lib/site-content'

export default function Page() {
  return (
    <main className="min-h-svh bg-black text-[#f5ebe0]">
      <Hero />
      <PhotoGallery />
      <LetterSection />
      <QualitiesSection />
      <section className="mx-auto max-w-2xl px-5 py-20 sm:px-6">
        <Reveal>
          <ComplimentJar />
        </Reveal>
      </section>
      <NalaSection />
      <FrenchPhrases />
      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-6">
        <Reveal>
          <EasterEggs />
        </Reveal>
      </section>
      <footer className="px-5 pb-20 pt-8 text-center sm:px-6">
        <Reveal>
          <p className="text-lg text-[#e9d8c6]">Je t’aime seulement {partner.name}. Always, and forever.</p>
          <p className="mt-2 text-sm text-[#c9a27e]">With love, {author.name}</p>
        </Reveal>
      </footer>
    </main>
  )
}
