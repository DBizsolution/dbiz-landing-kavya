'use client'

import { useMemo, useRef, useState } from 'react'
import { Icon } from '@/components/icon'
import { cases } from '../_content/cases'
import { GeometricIcon } from './GeometricIcon'

const CARD_WIDTH = 380
const CARD_GAP = 40

const INDUSTRIES = ['All', ...Array.from(new Set(cases.map((c) => c.industry)))] as const
type Pill = (typeof INDUSTRIES)[number]

export const ProvenSection = () => {
  const [pill, setPill] = useState<Pill>('All')
  const scrollRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(1)

  const filtered = useMemo(
    () => (pill === 'All' ? [...cases] : cases.filter((c) => c.industry === pill)),
    [pill],
  )

  const scrollBy = (delta: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / (CARD_WIDTH + CARD_GAP))
    setPage(Math.min(filtered.length, idx + 1))
  }

  return (
    <section id='proven' className='bp-section'>
      <div className='bp-container'>
        <div className='bp-section-head'>
          <div className='bp-kicker'>N·07 · Proven where it matters</div>
          <h2>
            Proven where <em>it matters.</em>
          </h2>
          <p className='lead'>
            Evidence from the field. Eight industries, six countries, and
            hundreds of live agents.
          </p>
        </div>

        <div className='flex flex-wrap gap-2 mb-8'>
          {INDUSTRIES.map((p) => (
            <button
              key={p}
              className='bp-tag'
              data-active={pill === p}
              onClick={() => {
                setPill(p)
                scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
                setPage(1)
              }}
            >
              {p}
            </button>
          ))}
        </div>

        <div
          ref={scrollRef}
          onScroll={onScroll}
          className='overflow-x-auto'
          style={{
            scrollSnapType: 'x mandatory',
            scrollPaddingLeft: 0,
            overflowY: 'hidden',
            paddingBlock: 4,
          }}
        >
          <div className='flex' style={{ gap: CARD_GAP }}>
            {filtered.map((c) => (
              <div
                key={c.coord}
                className='bp-card bp-frame-cell'
                style={{
                  flex: `0 0 ${CARD_WIDTH}px`,
                  scrollSnapAlign: 'start',
                  minWidth: CARD_WIDTH,
                  maxWidth: CARD_WIDTH,
                  padding: 32,
                }}
              >
                <span className='cell-bg' />
                <span className='cell-outline' />
                <div className='hd'>
                  <span>{c.industry}</span>
                  <span className='k'>{c.coord}</span>
                </div>
                <GeometricIcon name={c.icon} className='w-16 h-16 mb-5 opacity-60' />
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <p className='bp-mono-accent' style={{ marginTop: 18 }}>
                  {c.metric}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-6 mt-10'>
          <button
            className='bp-btn-text'
            onClick={() => scrollBy(-(CARD_WIDTH + CARD_GAP))}
            aria-label='Previous case'
          >
            <Icon icon='ph:arrow-left-bold' width={12} /> PREV
          </button>
          <span className='bp-mono-accent'>
            {String(page).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
          </span>
          <button
            className='bp-btn-text'
            onClick={() => scrollBy(CARD_WIDTH + CARD_GAP)}
            aria-label='Next case'
          >
            NEXT <Icon icon='ph:arrow-right-bold' width={12} />
          </button>
        </div>
      </div>
    </section>
  )
}
