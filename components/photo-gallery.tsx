
import { ourFirsts } from '@/lib/site-content'
import { Reveal } from '@/components/reveal'

export function PhotoGallery() {
  const photos = [
    {
      src: 'https://www.dropbox.com/scl/fi/qdfbqau1t4syhz1ogopyn/copy_08A96AB9-9673-4B0B-96EF-2494BEF22E78.jpeg?rlkey=b35zx2dbcwhbrw5h3lwmo9ai9&raw=1',
      alt: 'Memory 1',
    },
    {
      src: 'https://www.dropbox.com/scl/fi/9mx0vet5kz81hqxpf6x7f/copy_21CF66FA-FE2D-4282-8C03-EE43AC12EB2A.jpeg?rlkey=6kwu8b9li38ieapi5vyo4hpe4&raw=1',
      alt: 'Memory 2',
    },
    {
      src: 'https://www.dropbox.com/scl/fi/x671bxv4macoae3ajpabq/copy_897B9F83-29C4-4D32-99CC-8B6B412A71D7.jpeg?rlkey=proeg083nxg3cwsajizuw21h1&raw=1',
      alt: 'Memory 3',
    },
    {
      src: 'https://www.dropbox.com/scl/fi/jj29jhefkajjjj9nyab1e/IMG_1763.png?rlkey=3w9f3yuk7o8jcdcw2lhnyjhib&raw=1',
      alt: 'Memory 4',
    },
    {
      src: 'https://www.dropbox.com/scl/fi/zdblktqg4kh8aremeahpm/IMG_2046.png?rlkey=d7ywp6da48margv8ak9vy3and&raw=1',
      alt: 'Memory 5',
    },
    {
      src: 'https://www.dropbox.com/scl/fi/wnhfw56yh0cvroeh5lw8j/IMG_1624.png?rlkey=rlqtbr05ic5tix4jigdsllqyk&raw=1',
      alt: 'Memory 6',
    },
  ]

  const matchingPfps = [
    {
      src: 'https://www.dropbox.com/scl/fi/npso0rivirmt9oqeenolw/IMG_1949.jpeg?rlkey=pe91l4d8j3ix9ist2tfq9gbyj&raw=1',
      alt: 'Our first matching PFP',
    },
    {
      src: 'https://www.dropbox.com/scl/fi/3lfzj9hu6xady8l3ymcqh/IMG_1950.jpeg?rlkey=iz4nx1vjgwbg50ly6zxwquc1x&raw=1',
      alt: 'Our second matching PFP',
    },
  ]

  return (
    <section
      id="memories"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-28"
    >
      {/* Gallery heading */}
      <Reveal className="mb-12 text-center sm:mb-16">
        <p className="text-xs font-medium tracking-[0.25em] text-[#c9a27e] uppercase">
          Something sweet
        </p>

        <h2 className="mt-4 text-5xl font-semibold tracking-tight text-[#f5ebe0] sm:text-6xl">
          Something that makes me smile about us
        </h2>
      </Reveal>

      {/* Six memory photographs */}
      <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <li key={photo.src}>
            <Reveal
              from={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 80}
            >
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#3b2418] via-[#5c3d2e] to-[#c9a27e] shadow-xl shadow-[#5c3d2e]/10 transition duration-700 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-[2rem]">

                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />

                <span
                  className="absolute inset-0 bg-[#8b5e3c]/0 transition duration-700 group-hover:bg-[#8b5e3c]/10"
                  aria-hidden="true"
                />

              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Matching profile pictures */}
      <Reveal className="mt-16" from="scale">
        <p className="text-center text-xs tracking-[0.25em] text-[#c9a27e] uppercase">
          Our first matching PFPs
        </p>

        <ul className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-4">
          {matchingPfps.map((pfp) => (
            <li key={pfp.src}>
              <div className="aspect-square overflow-hidden rounded-full border border-dashed border-[#c9a27e] bg-[#1c130e]">
                <img
                  src={pfp.src}
                  alt={pfp.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Our firsts */}
      <Reveal className="mt-12" from="scale">
        <dl className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          {ourFirsts.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#c9a27e]/30 bg-[#1c130e] px-6 py-5"
            >
              <dt className="text-xs tracking-[0.2em] text-[#c9a27e] uppercase">
                {item.label}
              </dt>

              <dd className="mt-2 text-xl font-semibold text-[#f5ebe0]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}

