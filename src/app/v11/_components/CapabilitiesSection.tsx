'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  capabilities,
  pillsByTab,
  type CapabilityTab,
} from '../_content/capabilities'
import { GeometricIcon } from './GeometricIcon'

const TABS: readonly { id: CapabilityTab; label: string }[] = [
  { id: 'industry', label: 'By Industry' },
  { id: 'solution', label: 'By Solution' },
  { id: 'technology', label: 'By Technology' },
] as const

const SPOTLIGHT_INTERVAL_MS = 4500
const RESUME_DELAY_MS = 2000

export const CapabilitiesSection = () => {
  const [tab, setTab] = useState<CapabilityTab>('industry')
  const [pill, setPill] = useState<string>('All')
  const [spotlight, setSpotlight] = useState<number>(0)
  const [paused, setPaused] = useState(false)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const filtered = useMemo(
    () =>
      capabilities.filter((c) => {
        if (c.tab !== tab) return false
        if (pill === 'All') return true
        return c.pill === pill
      }),
    [tab, pill],
  )

  const safeSpotlight = Math.min(spotlight, Math.max(0, filtered.length - 1))

  useEffect(() => {
    if (paused || filtered.length <= 1) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => {
      setSpotlight((s) => (s + 1) % filtered.length)
    }, SPOTLIGHT_INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, filtered.length])

  const triggerPause = () => {
    setPaused(true)
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY_MS)
  }

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }
  }, [])

  const currentTitle = filtered[safeSpotlight]?.title ?? ''

  return (
    <section
      id='capabilities'
      className='bp-section'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className='bp-container'>
        <div className='bp-section-head'>
          <div className='bp-kicker'>N·04 · Capabilities</div>
          <h2>
            The AI gap every enterprise hits.{' '}
            <em>And how we close it.</em>
          </h2>
          <p className='lead'>
            Scan by industry, solution, or technology. What we’ve shipped,
            what we build on, and what’s already live.
          </p>
        </div>

        <div role='tablist' className='flex gap-0 border border-[var(--bp-hair)] mb-12 w-fit'>
          {TABS.map((t) => (
            <button
              key={t.id}
              role='tab'
              aria-selected={tab === t.id}
              aria-controls='capability-grid'
              onClick={() => {
                setTab(t.id)
                setPill('All')
                setSpotlight(0)
                triggerPause()
              }}
              className='bp-mono'
              style={{
                padding: '12px 20px',
                background: tab === t.id ? 'var(--bp-accent)' : 'transparent',
                color:
                  tab === t.id ? 'var(--brand-navy-deep)' : 'var(--bp-ink-2)',
                borderRight: '1px solid var(--bp-hair)',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className='flex flex-wrap gap-2 mb-10'>
          {pillsByTab[tab].map((p) => (
            <button
              key={p}
              className='bp-tag'
              data-active={pill === p}
              onClick={() => {
                setPill(p)
                setSpotlight(0)
                triggerPause()
              }}
            >
              {p}
            </button>
          ))}
        </div>

        <div
          id='capability-grid'
          role='tabpanel'
          className='grid gap-0 sm:grid-cols-2 lg:grid-cols-4'
          style={{ border: '1px solid var(--bp-hair)' }}
        >
          {filtered.map((card, i) => (
            <div
              key={card.coord}
              className={
                'bp-card bp-frame-cell' + (i === safeSpotlight ? ' is-spotlight' : '')
              }
              style={{
                border: 0,
                borderRight: '1px solid var(--bp-hair)',
                borderBottom: '1px solid var(--bp-hair)',
                minWidth: 0,
                maxWidth: 'none',
                transition: 'all 300ms var(--v11-ease)',
              }}
              onClick={() => {
                setSpotlight(i)
                triggerPause()
              }}
            >
              <span className='cell-bg' />
              <span className='cell-outline' />
              <div className='hd'>
                <span>{card.pill}</span>
                <span className='k'>{card.coord}</span>
              </div>
              {card.image ? (
                <div className='cap-thumb'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt='' loading='lazy' />
                </div>
              ) : (
                <GeometricIcon
                  name={card.icon}
                  className='w-16 h-16 mb-4 opacity-60'
                />
              )}
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <p className='bp-mono-accent' style={{ marginTop: 14 }}>
                {card.meta}
              </p>
            </div>
          ))}
        </div>

        {filtered.length > 1 && (
          <div
            className='flex items-center gap-3 mt-8'
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.2em' }}
          >
            <span className='bp-mono'>FOCUS</span>
            {filtered.map((c, i) => (
              <button
                key={c.coord}
                aria-label={`Focus card ${i + 1}: ${c.title}`}
                onClick={() => {
                  setSpotlight(i)
                  triggerPause()
                }}
                style={{
                  color: i === safeSpotlight ? 'var(--bp-accent)' : 'var(--bp-ink-3)',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  fontSize: '0.9rem',
                }}
              >
                {i === safeSpotlight ? '◆' : '●'}
              </button>
            ))}
          </div>
        )}

        <div role='status' aria-live='polite' style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          Focused: {currentTitle}
        </div>
      </div>
    </section>
  )
}
