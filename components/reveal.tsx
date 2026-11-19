'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealFrom = 'up' | 'left' | 'right' | 'scale'

const hiddenStates: Record<RevealFrom, string> = {
  up: 'translate-y-10 opacity-0',
  left: '-translate-x-16 opacity-0',
  right: 'translate-x-16 opacity-0',
  scale: 'scale-95 opacity-0',
}

export function Reveal({
  children,
  delay = 0,
  from = 'up',
  className = '',
}: {
  children: ReactNode
  delay?: number
  from?: RevealFrom
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : hiddenStates[from]
      } ${className}`}
    >
      {children}
    </div>
  )
}
