'use client'

import { useState, useEffect } from 'react'

const reasons = [
  { idx: '01', label: 'EXPERTISE', title: 'Expertise that works together.', body: 'Strategy, cloud, data, platforms, product, design, operations — our teams work across every layer, not within silos.', angle: 0 },
  { idx: '02', label: 'SCALE', title: 'Transformation at scale.', body: '50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery — not a pitch deck.', angle: 60 },
  { idx: '03', label: 'DELIVERY', title: 'Time-boxed delivery.', body: 'Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don\u2019t allow it.', angle: 120 },
  { idx: '04', label: 'PLATFORMS', title: 'Production platforms.', body: 'NEXUS, Agent Studio, FactWeavers\u2122, DBiz Canvas — production systems deployed in enterprise environments.', angle: 180 },
  { idx: '05', label: 'PARTNERS', title: 'Certified at the highest tiers.', body: 'AWS Advanced, Azure Solutions, Salesforce, Dynamics 365, Snowflake, Databricks, Anthropic, Boomi, MuleSoft.', angle: 240 },
  { idx: '06', label: 'DOMAIN', title: 'Sector expertise, engineered.', body: 'Financial Services, Logistics, Real Estate, Aged Care, Automotive, Government — with FactWeavers\u2122 pre-built for every vertical.', angle: 300 },
]

function WhyDiagram({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  const cx = 220
  const cy = 220
  const r = 150
  const nodeR = 30
  const hubR = 36

  /* Compute node positions */
  const nodes = reasons.map((reason, i) => {
    const a = (reason.angle - 90) * Math.PI / 180
    return { ...reason, i, x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, a }
  })

  return (
    <svg viewBox='0 0 440 440' xmlns='http://www.w3.org/2000/svg' className='v14-why-diagram'>
      <defs>
        <filter id='v14-why-glow'>
          <feGaussianBlur stdDeviation='6' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
        <filter id='v14-why-glow-sm'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
        <radialGradient id='v14-why-hub-grad'>
          <stop offset='0%' stopColor='#E86A2A' stopOpacity='0.25' />
          <stop offset='60%' stopColor='#E86A2A' stopOpacity='0.06' />
          <stop offset='100%' stopColor='#E86A2A' stopOpacity='0' />
        </radialGradient>
        {/* Clip to keep everything inside the frame */}
        <clipPath id='v14-why-clip'><rect x='10' y='10' width='420' height='420' rx='4' /></clipPath>
      </defs>

      {/* Frame border */}
      <rect x='10' y='10' width='420' height='420' fill='none' stroke='#0D1B3E' strokeWidth='1.5' rx='4' />
      {/* Corner brackets */}
      <g stroke='#E86A2A' strokeWidth='2'>
        <line x1='10' y1='10' x2='30' y2='10' /><line x1='10' y1='10' x2='10' y2='30' />
        <line x1='430' y1='10' x2='410' y2='10' /><line x1='430' y1='10' x2='430' y2='30' />
        <line x1='10' y1='430' x2='30' y2='430' /><line x1='10' y1='430' x2='10' y2='410' />
        <line x1='430' y1='430' x2='410' y2='430' /><line x1='430' y1='430' x2='430' y2='410' />
      </g>

      <g clipPath='url(#v14-why-clip)'>
        {/* Subtle grid dots */}
        {Array.from({ length: 20 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) => (
            <circle key={`d${row}-${col}`} cx={22 + col * 21} cy={22 + row * 21} r='0.6' fill='rgba(13,27,62,0.08)' />
          ))
        )}

        {/* Orbit rings — orange */}
        <circle cx={cx} cy={cy} r={r + 30} fill='none' stroke='rgba(232,106,42,0.1)' strokeWidth='0.8' strokeDasharray='4 6' />
        <circle cx={cx} cy={cy} r={r} fill='none' stroke='rgba(232,106,42,0.2)' strokeWidth='1' strokeDasharray='5 4' className='v14-why-orbit' />
        <circle cx={cx} cy={cy} r={r - 50} fill='none' stroke='rgba(13,27,62,0.12)' strokeWidth='0.8' strokeDasharray='3 5' />

        {/* Hub glow */}
        <circle cx={cx} cy={cy} r='80' fill='url(#v14-why-hub-grad)' className='v14-why-hub-glow' />

        {/* Spokes — drawn from hub edge to node edge (not through circles) */}
        {nodes.map((node) => {
          const isActive = node.i === active
          /* Start spoke at hub border, end at node border */
          const sx = cx + Math.cos(node.a) * (hubR + 2)
          const sy = cy + Math.sin(node.a) * (hubR + 2)
          const ex = node.x - Math.cos(node.a) * (nodeR + 2)
          const ey = node.y - Math.sin(node.a) * (nodeR + 2)

          return (
            <g key={`spoke-${node.idx}`}>
              <line x1={sx} y1={sy} x2={ex} y2={ey} stroke='#E86A2A' strokeWidth={isActive ? 2.5 : 1.2} strokeDasharray={isActive ? 'none' : '6 4'} opacity={isActive ? 1 : 0.4} className='v14-why-spoke' />
              {/* Data pulse */}
              <circle r='2.5' fill='#E86A2A' opacity={isActive ? 1 : 0.3} filter='url(#v14-why-glow-sm)'>
                <animateMotion dur={`${2.5 + node.i * 0.2}s`} repeatCount='indefinite'>
                  <mpath xlinkHref={`#spoke-path-${node.i}`} />
                </animateMotion>
              </circle>
              <path id={`spoke-path-${node.i}`} d={`M ${sx} ${sy} L ${ex} ${ey}`} fill='none' stroke='none' />
            </g>
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = node.i === active
          return (
            <g key={node.idx} className={`v14-why-node ${isActive ? 'active' : ''}`} onClick={() => onSelect(node.i)} style={{ cursor: 'pointer' }}>
              {/* Outer ring for active */}
              {isActive && <circle cx={node.x} cy={node.y} r={nodeR + 6} fill='none' stroke='#E86A2A' strokeWidth='1' opacity='0.3' strokeDasharray='3 3' className='v14-why-active-ring' />}
              {/* Node */}
              <circle cx={node.x} cy={node.y} r={nodeR} fill={isActive ? '#E86A2A' : '#0D1B3E'} stroke={isActive ? '#E86A2A' : '#1A2D5A'} strokeWidth={isActive ? 2.5 : 2} filter={isActive ? 'url(#v14-why-glow)' : 'none'} className='v14-why-node-circle' />
              {/* Label */}
              <text x={node.x} y={node.y + 1} fontFamily='var(--font-mono)' fontSize='7' fontWeight='700' fill='#fff' textAnchor='middle' dominantBaseline='middle' letterSpacing='0.8'>{node.label}</text>
              {/* Index */}
              <text x={node.x + Math.cos(node.a) * (nodeR + 14)} y={node.y + Math.sin(node.a) * (nodeR + 14)} fontFamily='var(--font-mono)' fontSize='8' fontWeight='600' fill='#E86A2A' textAnchor='middle' dominantBaseline='middle'>{node.idx}</text>
            </g>
          )
        })}

        {/* Center hub */}
        <circle cx={cx} cy={cy} r={hubR} fill='#0D1B3E' stroke='#E86A2A' strokeWidth='2.5' />
        <circle cx={cx} cy={cy} r='20' fill='#E86A2A' filter='url(#v14-why-glow)' className='v14-why-hub-pulse' />
        <text x={cx} y={cy - 4} fontFamily='var(--font-mono)' fontSize='7' fontWeight='700' fill='#fff' textAnchor='middle' letterSpacing='1'>WHY</text>
        <text x={cx} y={cy + 8} fontFamily='var(--font-sans)' fontSize='10' fontWeight='800' fill='#fff' textAnchor='middle' letterSpacing='1'>DBIZ</text>
      </g>
    </svg>
  )
}

export default function WhySection() {
  const [active, setActive] = useState(0)
  const reason = reasons[active]

  /* Auto-rotate every 5s */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % reasons.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className='v14-section' id='about' data-surface='light'>
      <div className='v14-container'>
        <div className='v14-why-head'>
          <div className='num'>N°08 / Why DBiz</div>
          <h2>Why enterprises choose <em>DBiz.</em></h2>
          <p className='lead'>Six differentiators — all evidenced by delivery, not brochures.</p>
        </div>

        <div className='v14-why-interactive'>
          {/* Diagram — center */}
          <div className='v14-why-diagram-wrap'>
            <WhyDiagram active={active} onSelect={setActive} />
          </div>

          {/* Detail panel — right */}
          <div className='v14-why-detail' key={active}>
            <span className='v14-why-detail-idx'>{reason.idx}</span>
            <h3>{reason.title}</h3>
            <p>{reason.body}</p>
            <div className='v14-why-detail-nav'>
              {reasons.map((_, i) => (
                <button
                  key={i}
                  className={`v14-why-detail-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Reason ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
