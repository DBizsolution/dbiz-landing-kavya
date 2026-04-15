const phases = [
  {
    coord: 'P·01',
    days: '5',
    daysLabel: 'DAYS',
    title: 'Align & Assess',
    outcomes: ['Problem frame + north-star metrics', 'Capability + data readiness', 'Costed delivery plan'],
  },
  {
    coord: 'P·02',
    days: '15',
    daysLabel: 'DAYS',
    title: 'Specify & Validate',
    outcomes: ['Validated spec + MVP scope', 'Stakeholder signoff', 'Working slice in a test environment'],
  },
  {
    coord: 'P·03',
    days: '50',
    daysLabel: 'DAYS',
    title: 'Industrialise & Scale',
    outcomes: ['Live platform in production', 'Agents operating with oversight', 'Operational handover complete'],
  },
] as const

export const HowWeWork = () => (
  <section id='cadence' className='bp-section'>
    <div className='bp-container'>
      <div className='bp-section-head'>
        <div className='bp-kicker'>N·08 · Cadence</div>
        <h2>
          How we work. <em>Built for pace, not paperwork.</em>
        </h2>
        <p className='lead'>
          Every engagement is time-boxed. Milestones are fixed. Ambiguity gets
          eliminated early.
        </p>
      </div>

      <div className='relative'>
        <svg
          viewBox='0 0 1200 12'
          width='100%'
          height='12'
          preserveAspectRatio='none'
          className='hidden md:block'
          style={{ display: 'block', marginBottom: 16 }}
          aria-hidden
        >
          <line x1='40' y1='6' x2='1100' y2='6' stroke='var(--bp-accent)' strokeWidth='1' />
          <line x1='1100' y1='6' x2='1180' y2='6' stroke='var(--bp-orange-hair-soft)' strokeWidth='1' strokeDasharray='4 4' />
          {[0, 550, 1100].map((x) => (
            <g key={x}>
              <circle cx={x + 40} cy='6' r='3' fill='var(--bp-accent)' />
              <line x1={x + 40} y1='0' x2={x + 40} y2='12' stroke='var(--bp-accent)' strokeWidth='1' />
            </g>
          ))}
        </svg>

        <div className='grid gap-8 md:grid-cols-3'>
          {phases.map((p) => (
            <div key={p.coord} className='bp-card bp-frame-cell' style={{ maxWidth: 'none' }}>
              <span className='cell-bg' />
              <span className='cell-outline' />
              <div className='hd'>
                <span>Phase</span>
                <span className='k'>{p.coord}</span>
              </div>
              <div className='flex items-baseline gap-3 mb-2'>
                <span
                  style={{
                    fontSize: 'clamp(2.6rem, 4vw, 3.6rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: 'var(--bp-accent)',
                  }}
                >
                  {p.days}
                </span>
                <span className='bp-mono-accent'>{p.daysLabel}</span>
              </div>
              <h3>{p.title}</h3>
              <ul className='flex flex-col gap-2 mt-4'>
                {p.outcomes.map((o) => (
                  <li key={o} className='bp-mono' style={{ color: 'var(--bp-ink-2)' }}>
                    · {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className='bp-mono' style={{ marginTop: 40, textAlign: 'center' }}>
          PERPETUAL ENGINEERING CONTINUES ——— NOT A CLIFF
        </p>
      </div>
    </div>
  </section>
)
