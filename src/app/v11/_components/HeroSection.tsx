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

const layers = [
  { label: 'STRATEGY', code: 'S·01' },
  { label: 'ARCHITECTURE', code: 'S·02' },
  { label: 'CLOUD', code: 'S·03' },
  { label: 'DATA', code: 'S·04' },
  { label: 'APPS', code: 'S·05' },
  { label: 'AGENTS', code: 'S·06' },
  { label: 'OPS', code: 'S·07' },
] as const

const HeroDiagram = () => (
  <div className='relative w-full max-w-[520px] ml-auto'>
    <svg
      viewBox='0 0 520 560'
      width='100%'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden
      role='img'
      style={{ display: 'block', height: 'auto' }}
    >
      <defs>
        <pattern id='v11-hero-hatch' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
          <line x1='0' y1='0' x2='0' y2='6' stroke='var(--bp-ink-hair)' strokeWidth='1' />
        </pattern>
        <pattern id='v11-hero-dot' patternUnits='userSpaceOnUse' width='10' height='10'>
          <circle cx='1' cy='1' r='0.8' fill='var(--bp-ink-frame)' />
        </pattern>
      </defs>

      {/* corner ticks */}
      <g stroke='var(--bp-ink-frame)' strokeWidth='0.8'>
        <line x1='20' y1='20' x2='40' y2='20' />
        <line x1='20' y1='20' x2='20' y2='40' />
        <line x1='500' y1='20' x2='480' y2='20' />
        <line x1='500' y1='20' x2='500' y2='40' />
        <line x1='20' y1='540' x2='40' y2='540' />
        <line x1='20' y1='540' x2='20' y2='520' />
        <line x1='500' y1='540' x2='480' y2='540' />
        <line x1='500' y1='540' x2='500' y2='520' />
      </g>

      {/* corner text labels */}
      <text x='48' y='28' fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1.5' fill='var(--bp-ink-3)'>
        DWG · FRONTIER-ORG-01
      </text>
      <text x='492' y='28' fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1.5' fill='var(--bp-ink-3)' textAnchor='end'>
        REV.01
      </text>
      <text x='48' y='534' fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1.5' fill='var(--bp-ink-3)'>
        SCALE 1:1
      </text>
      <text x='492' y='534' fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1.5' fill='var(--bp-ink-3)' textAnchor='end'>
        SHEET .01
      </text>

      {/* left ruler ticks */}
      <g stroke='var(--bp-ink-frame)' strokeWidth='0.6'>
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1='40' y1={60 + i * 32} x2={i % 2 === 0 ? 48 : 44} y2={60 + i * 32} />
        ))}
      </g>

      {/* dotted inner field */}
      <rect x='60' y='60' width='400' height='440' fill='url(#v11-hero-dot)' opacity='0.5' />

      {/* 7 isometric slabs */}
      {layers.map((layer, i) => {
        const y = 90 + i * 56
        const skew = 26
        return (
          <g key={layer.code}>
            {/* top face (parallelogram) */}
            <polygon
              points={`${140},${y} ${360},${y} ${360 + skew},${y - 14} ${140 + skew},${y - 14}`}
              fill='none'
              stroke='var(--bp-ink-corner)'
              strokeWidth='1'
            />
            {/* front face */}
            <rect
              x='140'
              y={y}
              width='220'
              height='32'
              fill={i === 3 ? 'url(#v11-hero-hatch)' : 'rgba(232,106,42,0.04)'}
              stroke='var(--bp-ink-corner)'
              strokeWidth='1'
            />
            {/* right face */}
            <polygon
              points={`${360},${y} ${360 + skew},${y - 14} ${360 + skew},${y + 18} ${360},${y + 32}`}
              fill='rgba(255,255,255,0.02)'
              stroke='var(--bp-ink-corner)'
              strokeWidth='1'
            />
            {/* layer label */}
            <text
              x='156'
              y={y + 20}
              fontFamily='var(--font-sans)'
              fontSize='10'
              fontWeight='700'
              letterSpacing='1.5'
              fill='var(--bp-ink)'
            >
              {layer.label}
            </text>
            {/* callout leader */}
            <line
              x1={360 + skew}
              y1={y + 8}
              x2='450'
              y2={y + 8}
              stroke='var(--bp-ink-hair)'
              strokeWidth='0.8'
              strokeDasharray='2 2'
            />
            <circle cx={360 + skew} cy={y + 8} r='1.6' fill='var(--bp-accent)' />
            <text
              x='454'
              y={y + 11}
              fontFamily='var(--font-mono)'
              fontSize='8.5'
              letterSpacing='1'
              fill='var(--bp-accent)'
            >
              {layer.code}
            </text>
          </g>
        )
      })}

      {/* vertical dimension spine (left) */}
      <g stroke='var(--bp-ink-hair)' strokeWidth='0.8'>
        <line x1='96' y1='76' x2='96' y2='484' />
        <line x1='92' y1='76' x2='100' y2='76' />
        <line x1='92' y1='484' x2='100' y2='484' />
      </g>
      <text
        x='80'
        y='284'
        fontFamily='var(--font-mono)'
        fontSize='8.5'
        letterSpacing='2'
        fill='var(--bp-accent)'
        transform='rotate(-90 80 284)'
        textAnchor='middle'
      >
        FRONTIER ORG · STACK
      </text>

      {/* bottom dimension rule */}
      <g stroke='var(--bp-ink-frame)' strokeWidth='0.6'>
        <line x1='140' y1='520' x2='360' y2='520' />
        <line x1='140' y1='516' x2='140' y2='524' />
        <line x1='360' y1='516' x2='360' y2='524' />
      </g>
      <text
        x='250'
        y='515'
        fontFamily='var(--font-mono)'
        fontSize='8'
        letterSpacing='1.5'
        fill='var(--bp-ink-3)'
        textAnchor='middle'
      >
        DIM: 7 × LAYER
      </text>
    </svg>
  </div>
)
