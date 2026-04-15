import { Icon } from '@/components/icon'

export const HeroSection = () => (
  <section className='bp-section' style={{ paddingTop: 'clamp(64px, 10vw, 120px)' }}>
    <div className='bp-container'>
      <div className='bp-meta' style={{ marginBottom: 40 }}>
        <span>dBiz · HOMEPAGE · REV <span className='k'>2026-04-15</span></span>
        <span>Sheet <span className='k'>01/01</span></span>
        <span>Scale <span className='k'>1:1</span></span>
      </div>

      <div className='grid gap-14 lg:grid-cols-[1.25fr_1fr] items-center'>
        <div>
          <span className='bp-eyebrow'>
            <span className='bar' />
            N·01 · The Frontier Organisation
          </span>
          <h1 className='bp-title' style={{ marginTop: 24 }}>
            Your enterprise.{' '}
            <em className='font-serif italic'>Agent-operated.</em>
            <br />
            Starting now.
          </h1>
          <p className='bp-mono-accent' style={{ marginBottom: 28 }}>
            Human-Led · Agent-Operated · Data-Powered
          </p>
          <p className='bp-lede' style={{ marginBottom: 36 }}>
            Most enterprises have tried AI. Most of it didn’t scale — not because
            the technology failed, but because no one connected the ambition to
            what actually got built. We close that gap. We call the result a
            Frontier Organisation: human-led, agent-operated, data-powered.
          </p>
          <div className='flex flex-wrap items-center gap-4'>
            <a href='#cta' className='bp-btn'>
              Talk to a lead <Icon icon='ph:arrow-right-bold' width={14} />
            </a>
            <a href='#framework' className='bp-btn-ghost'>
              Read the brief <Icon icon='ph:arrow-up-right-bold' width={12} />
            </a>
          </div>
        </div>

        <HeroDiagram />
      </div>
    </div>
  </section>
)

const HeroDiagram = () => (
  <div className='relative w-full aspect-square max-w-[480px] ml-auto'>
    <svg
      viewBox='0 0 400 400'
      width='100%'
      height='100%'
      style={{ display: 'block' }}
      aria-hidden
    >
      <rect x='8' y='8' width='384' height='384' fill='none' stroke='var(--bp-ink-frame)' strokeWidth='1' />
      {[
        [8, 8, 20, 8, 8, 20],
        [392, 8, 380, 8, 392, 20],
        [8, 392, 20, 392, 8, 380],
        [392, 392, 380, 392, 392, 380],
      ].map(([x1, y1, x2, y2, x3, y3], i) => (
        <g key={i} stroke='var(--bp-ink-corner)' strokeWidth='1' fill='none'>
          <line x1={x1} y1={y1} x2={x2} y2={y2} />
          <line x1={x1} y1={y1} x2={x3} y2={y3} />
        </g>
      ))}

      <line x1='200' y1='8' x2='200' y2='392' stroke='var(--bp-ink-crosshair)' strokeWidth='1' strokeDasharray='3 4' />
      <line x1='8' y1='200' x2='392' y2='200' stroke='var(--bp-ink-crosshair)' strokeWidth='1' strokeDasharray='3 4' />

      {[
        { y: 70, label: 'A·01  Strategy' },
        { y: 140, label: 'A·02  Cloud' },
        { y: 210, label: 'A·03  Data' },
        { y: 280, label: 'A·04  AI / Agents' },
      ].map((layer, i) => (
        <g key={i}>
          <rect
            x='60'
            y={layer.y}
            width='280'
            height='50'
            fill='none'
            stroke={i === 2 ? 'var(--bp-ink-corner)' : 'var(--bp-ink-frame)'}
            strokeWidth='1'
          />
          <text
            x='70'
            y={layer.y + 20}
            fontFamily='var(--font-mono)'
            fontSize='10'
            letterSpacing='2'
            fill='var(--bp-ink-3)'
          >
            {layer.label}
          </text>
          <rect
            x='70'
            y={layer.y + 28}
            width='260'
            height='1'
            fill='var(--bp-ink-measure)'
          />
        </g>
      ))}

      <circle cx='200' cy='200' r='28' fill='none' stroke='var(--bp-ink-corner)' strokeWidth='1' />
      <circle cx='200' cy='200' r='4' fill='var(--bp-accent)' />

      <text x='16' y='22' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.5' fill='var(--bp-ink-3)'>FIG·01 · STACK</text>
      <text x='336' y='386' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.5' fill='var(--bp-ink-3)' textAnchor='end'>Ø 4 LAYERS</text>
    </svg>
  </div>
)
