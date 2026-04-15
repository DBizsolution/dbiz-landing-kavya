'use client'

import { useState, useEffect, useCallback } from 'react'
import { frameworkLayers } from '../_content/frameworkLayers'

type FocusIndex = 0 | 1 | 2 | 3 | null

const SLAB_W = 240
const SLAB_H = 340
const SLAB_GAP = 48
const SLAB_Y = 140
const DIAGRAM_W = 4 * SLAB_W + 3 * SLAB_GAP + 80
const DIAGRAM_H = 560

export const AiFrameworkDiagram = () => {
  const [focus, setFocus] = useState<FocusIndex>(null)

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (focus === null) return
      if (e.key === 'Escape') {
        setFocus(null)
        return
      }
      if (e.key === 'ArrowRight')
        setFocus((f) => (f === null ? 0 : Math.min(3, f + 1)) as FocusIndex)
      if (e.key === 'ArrowLeft')
        setFocus((f) => (f === null ? 0 : Math.max(0, f - 1)) as FocusIndex)
    },
    [focus],
  )

  useEffect(() => {
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onKey])

  return (
    <div className='relative'>
      <div className='grid gap-10 xl:grid-cols-[1fr_320px] items-start'>
        <div className='relative w-full'>
          <svg
            viewBox={`0 0 ${DIAGRAM_W} ${DIAGRAM_H}`}
            width='100%'
            style={{ display: 'block', height: 'auto' }}
            preserveAspectRatio='xMidYMid meet'
            role='group'
            aria-label='AI Transformation Framework — four layers left to right'
          >
            <text
              x='40'
              y='32'
              fontFamily='var(--font-mono)'
              fontSize='10'
              letterSpacing='2'
              fill='var(--bp-ink-3)'
            >
              FIG·05 · FRAMEWORK
            </text>
            <text
              x={DIAGRAM_W - 40}
              y='32'
              fontFamily='var(--font-mono)'
              fontSize='10'
              letterSpacing='2'
              fill='var(--bp-ink-3)'
              textAnchor='end'
            >
              4 LAYERS · REV 2026-04-15
            </text>

            <g>
              <line
                x1={40 + SLAB_W + SLAB_W / 2}
                y1={80}
                x2={40 + 2 * SLAB_W + SLAB_GAP + SLAB_W / 2}
                y2={80}
                stroke='var(--bp-ink-hair)'
                strokeDasharray='3 4'
              />
              <text
                x={40 + SLAB_W + SLAB_GAP + SLAB_W / 2}
                y='72'
                fontFamily='var(--font-mono)'
                fontSize='10'
                letterSpacing='1.5'
                fill='var(--bp-accent)'
                textAnchor='middle'
              >
                NEXUS PLATFORM
              </text>

              <text
                x={40 + 2 * (SLAB_W + SLAB_GAP) + SLAB_W / 2}
                y='108'
                fontFamily='var(--font-mono)'
                fontSize='10'
                letterSpacing='1.5'
                fill='var(--bp-accent)'
                textAnchor='middle'
              >
                PERPETUAL ENGINEERING
              </text>
              <line
                x1={40 + 2 * (SLAB_W + SLAB_GAP) + SLAB_W / 2}
                y1={112}
                x2={40 + 2 * (SLAB_W + SLAB_GAP) + SLAB_W / 2}
                y2={SLAB_Y - 4}
                stroke='var(--bp-ink-hair)'
                strokeDasharray='3 4'
              />
            </g>

            {frameworkLayers.map((layer, i) => {
              const x = 40 + i * (SLAB_W + SLAB_GAP)
              const isFocused = focus === i
              const isDimmed = focus !== null && !isFocused
              const groupOpacity = isDimmed ? 0.35 : 1
              const strokeColor = isFocused ? 'var(--bp-accent)' : 'var(--bp-ink-frame)'
              return (
                <g
                  key={layer.coord}
                  role='button'
                  tabIndex={0}
                  aria-label={`${layer.coord} — ${layer.title}`}
                  aria-pressed={isFocused}
                  style={{
                    cursor: 'pointer',
                    opacity: groupOpacity,
                    transition: 'opacity 300ms var(--v11-ease)',
                    filter: isFocused ? 'drop-shadow(0 0 8px rgba(232,106,42,0.4))' : undefined,
                  }}
                  onMouseEnter={() => setFocus(i as FocusIndex)}
                  onMouseLeave={() => setFocus(null)}
                  onFocus={() => setFocus(i as FocusIndex)}
                  onBlur={() => setFocus(null)}
                  onClick={() => setFocus(i as FocusIndex)}
                >
                  {[6, 12, 18].map((d) => (
                    <rect
                      key={d}
                      x={x + d}
                      y={SLAB_Y - d}
                      width={SLAB_W}
                      height={SLAB_H}
                      fill='none'
                      stroke='var(--bp-ink-measure)'
                      strokeWidth='1'
                      opacity={isDimmed ? 0.2 : 0.6}
                    />
                  ))}
                  <rect
                    x={x}
                    y={SLAB_Y}
                    width={SLAB_W}
                    height={SLAB_H}
                    fill='rgba(255,255,255,0.02)'
                    stroke={strokeColor}
                    strokeWidth='1'
                  />
                  <text
                    x={x + 14}
                    y={SLAB_Y + 22}
                    fontFamily='var(--font-mono)'
                    fontSize='10'
                    letterSpacing='2'
                    fill='var(--bp-accent)'
                  >
                    {layer.coord}
                  </text>
                  <text
                    x={x + 14}
                    y={SLAB_Y + 46}
                    fontFamily='var(--font-sans)'
                    fontSize='15'
                    fontWeight='700'
                    fill='var(--bp-ink)'
                  >
                    {layer.title}
                  </text>
                  <line
                    x1={x + 14}
                    y1={SLAB_Y + 60}
                    x2={x + SLAB_W - 14}
                    y2={SLAB_Y + 60}
                    stroke='var(--bp-ink-frame)'
                    strokeDasharray='3 4'
                  />

                  {layer.tiles.map((tile, t) => (
                    <g key={tile.label}>
                      <rect
                        x={x + 14}
                        y={SLAB_Y + 78 + t * 42}
                        width={SLAB_W - 28}
                        height='34'
                        fill='none'
                        stroke={isFocused ? 'var(--bp-orange-hair)' : 'var(--bp-ink-measure)'}
                        strokeWidth='1'
                      />
                      <text
                        x={x + 26}
                        y={SLAB_Y + 100 + t * 42}
                        fontFamily='var(--font-mono)'
                        fontSize='10'
                        letterSpacing='1.5'
                        fill='var(--bp-ink-2)'
                      >
                        {tile.label.toUpperCase()}
                      </text>
                    </g>
                  ))}

                  <text
                    x={x + 14}
                    y={SLAB_Y + SLAB_H - 14}
                    fontFamily='var(--font-mono)'
                    fontSize='9'
                    letterSpacing='1.5'
                    fill='var(--bp-ink-3)'
                  >
                    {layer.theme.toUpperCase()}
                  </text>
                </g>
              )
            })}

            {[0, 1, 2].map((i) => {
              const x = 40 + i * (SLAB_W + SLAB_GAP) + SLAB_W
              const y = SLAB_Y + SLAB_H / 2
              return (
                <g key={i}>
                  <line
                    x1={x + 6}
                    y1={y}
                    x2={x + SLAB_GAP - 6}
                    y2={y}
                    stroke='var(--bp-accent)'
                    strokeWidth='1'
                  />
                  <polyline
                    points={`${x + SLAB_GAP - 12},${y - 4} ${x + SLAB_GAP - 6},${y} ${x + SLAB_GAP - 12},${y + 4}`}
                    fill='none'
                    stroke='var(--bp-accent)'
                    strokeWidth='1'
                  />
                  <text
                    x={x + SLAB_GAP / 2}
                    y={y - 10}
                    fontFamily='var(--font-mono)'
                    fontSize='9'
                    letterSpacing='1.5'
                    fill='var(--bp-accent)'
                    textAnchor='middle'
                  >
                    {['HAND·OFF', 'DEPLOY', 'OPERATE'][i]}
                  </text>
                </g>
              )
            })}

            <line
              x1='40'
              y1={SLAB_Y + SLAB_H + 42}
              x2={DIAGRAM_W - 40}
              y2={SLAB_Y + SLAB_H + 42}
              stroke='var(--bp-ink-frame)'
            />
            {['HUMAN-LED', 'AGENT-OPERATED', 'DATA-POWERED'].map((label, i) => {
              const x = 40 + (i + 0.5) * ((DIAGRAM_W - 80) / 3)
              return (
                <g key={label}>
                  <line
                    x1={x}
                    y1={SLAB_Y + SLAB_H + 38}
                    x2={x}
                    y2={SLAB_Y + SLAB_H + 46}
                    stroke='var(--bp-accent)'
                  />
                  <text
                    x={x}
                    y={SLAB_Y + SLAB_H + 62}
                    fontFamily='var(--font-mono)'
                    fontSize='10'
                    letterSpacing='2'
                    fill='var(--bp-ink-2)'
                    textAnchor='middle'
                  >
                    {label}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        <FocusPanel focus={focus} />
      </div>
    </div>
  )
}

const FocusPanel = ({ focus }: { focus: FocusIndex }) => {
  const layer =
    focus !== null && focus >= 0 && focus < frameworkLayers.length
      ? frameworkLayers[focus]
      : null

  return (
    <div className='bp-card' style={{ maxWidth: 'none', minHeight: 320 }}>
      <div className='hd'>
        <span>Layer detail</span>
        <span className='k'>{layer ? layer.coord : 'L·00'}</span>
      </div>
      {layer ? (
        <>
          <h3>{layer.title}</h3>
          <p className='bp-mono-accent' style={{ marginBottom: 14 }}>
            {layer.theme.toUpperCase()}
          </p>
          <p style={{ marginBottom: 16 }}>{layer.description}</p>
          <p className='bp-mono' style={{ marginBottom: 12 }}>
            TILES
          </p>
          <ul className='flex flex-col gap-2'>
            {layer.tiles.map((tile) => (
              <li key={tile.label} className='bp-mono' style={{ color: 'var(--bp-ink-2)' }}>
                · {tile.label}
              </li>
            ))}
          </ul>
          <p className='bp-mono' style={{ marginTop: 18, color: 'var(--bp-ink-3)' }}>
            {layer.caption}
          </p>
        </>
      ) : (
        <>
          <h3 style={{ color: 'var(--bp-ink-3)' }}>Hover a layer to inspect</h3>
          <p>
            Four layers, one continuous system. Point at Strategy to see entry
            practices; at Development to see build tooling; at Productivity to
            see decision intelligence. Keyboard: arrow keys move focus,
            Escape clears.
          </p>
        </>
      )}
    </div>
  )
}
