'use client'

import { useState, useEffect } from 'react'

const CYCLE_MS = 5000
const PAUSE_MS = 15000

type Capability = {
  num: string
  kicker: string
  title: string
  subtitle: string
  tags: string[]
  body: string
  cta: string
}

const capabilities: Capability[] = [
  {
    num: '01',
    kicker: 'Tech Advisory',
    title: 'Strategy for AI, Architecture for Scale',
    subtitle: 'Futures Studio · TechOffice Foundry',
    tags: ['AI Vision & Roadmap', 'Architecture-as-a-Service', 'AI Readiness', 'DBiz Canvas'],
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture, before a single line of code gets written.',
    cta: 'Get an AI readiness assessment',
  },
  {
    num: '02',
    kicker: 'Cloud',
    title: 'AI-Ready Infrastructure',
    subtitle: 'Multi-hyperscaler · Purpose-built',
    tags: ['DBiz Scoop', 'Multi-Hyperscaler', 'Sovereign Cloud', 'GPU Orchestration', 'FinOps'],
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments purpose-built for agents, data pipelines, and AI models, with governance, cost controls, and observability enterprise IT requires.',
    cta: 'Talk to a cloud architect',
  },
  {
    num: '03',
    kicker: 'Data & AI',
    title: 'The Intelligence Layer',
    subtitle: 'FactWeavers\u2122 · Domain Data Cloud',
    tags: ['FactWeavers\u2122', 'Domain Data Cloud', 'Data Mesh'],
    body: "Every AI initiative stalls on the same thing: the data isn\u2019t ready. FactWeavers\u2122 cleans, unifies, and activates enterprise data, pre-modelled for your industry, ready for agents from day one.",
    cta: 'See FactWeavers\u2122 in action',
  },
  {
    num: '04',
    kicker: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    subtitle: 'No rip and replace',
    tags: ['Salesforce', 'Dynamics 365', 'Boomi', 'MuleSoft'],
    body: "CRM, ERP, and platform investments don\u2019t need replacing, they need unlocking \u2014 for agents. We connect existing systems so agents can read, write, and act across your entire application landscape.",
    cta: 'Explore integration options',
  },
  {
    num: '05',
    kicker: 'Product & AI Engineering',
    title: 'Engineered with AI, Shipped Continuously',
    subtitle: 'Agent Studio \u00b7 Nexus \u00b7 Perpetual Engineering',
    tags: ['AI-Native Apps', 'Agent Studio', 'Nexus Platform', 'Perpetual Engineering'],
    body: 'AI-native applications built by AI-first teams. Agent Studio for multi-agent orchestration, Nexus as the dev platform, Perpetual Engineering across the SDLC.',
    cta: 'See what we\u2019ve built',
  },
  {
    num: '06',
    kicker: 'Research & Design',
    title: 'Designed for Humans, Trusted by Agents',
    subtitle: 'Research-led · Design engineering',
    tags: ['Agentic UX', 'Design Systems', 'DBiz Canvas', 'AI in Design Workflows'],
    body: 'Designing for humans in an increasingly agentic world is our core. We map human needs into design, iterate with AI-driven workflows, and turn requirements into shipped screens in days \u2014 structured enough to scale, human enough to trust.',
    cta: 'Explore our design practice',
  },
  {
    num: '07',
    kicker: 'Managed Services',
    title: 'AI-First Operations',
    subtitle: 'The team that built it runs it',
    tags: ['Monitoring', 'Governance', 'Continuous Improvement'],
    body: "AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.",
    cta: 'Learn about managed services',
  },
]


/* ─── Stack Diagram SVG — Deconstructed Assembly (machine reference) ─── */
function StackDiagram() {
  const svgW = 1400
  const svgH = 720

  const shaftY = 360
  const discR = 68
  // 7 discs evenly spaced along the horizontal shaft
  const discCenters = [180, 340, 500, 660, 820, 980, 1140]

  type Side = { name: string; desc: string }
  // Order: left-to-right — Strategy (01) first, Data (07) last
  const layers: { n: string; label: string; top: Side; bottom: Side }[] = [
    { n: '01', label: 'STRATEGY',
      top:    { name: 'Futures Studio', desc: 'AI ambition, roadmap & use-case prioritisation' },
      bottom: { name: 'DBiz Canvas',    desc: 'Concept to code in days' } },
    { n: '02', label: 'ARCHITECTURE',
      top:    { name: 'TechOffice Foundry', desc: 'AI foundation & Well-Architected review' },
      bottom: { name: 'DBiz Adapt',         desc: 'Architecting Secure and Sovereign AI' } },
    { n: '03', label: 'CLOUD',
      top:    { name: 'Multi-Cloud AI Foundation', desc: 'Enterprise AI Foundation rollout' },
      bottom: { name: 'DBiz Scoop',                desc: 'AI-Powered migration pipeline' } },
    { n: '04', label: 'DEVELOPMENT',
      top:    { name: 'Perpetual Engineering', desc: 'AI agents across the full SDLC' },
      bottom: { name: 'Nexus Platform',        desc: 'Enterprise AI dev environment' } },
    { n: '05', label: 'PRODUCTIVITY',
      top:    { name: 'AI-Infused BizApps',     desc: 'Autonomous agents for SaaS platforms' },
      bottom: { name: 'Productivity Automation', desc: 'Claude Co-work & Copilot' } },
    { n: '06', label: 'ORCHESTRATION',
      top:    { name: 'Agent Studio',     desc: 'Agentic AI & multi-agent orchestration' },
      bottom: { name: 'Nexus iConnector', desc: 'No rip & replace integration' } },
    { n: '07', label: 'DATA & INSIGHTS',
      top:    { name: 'DBiz Compass',    desc: 'AI-infused data engineering' },
      bottom: { name: 'Factweavers.ai',  desc: 'Domain data cloud & quick insights' } },
  ]

  // Per-layer inner shape renderer — duotone: grey structure + orange accents
  const renderShape = (i: number, cx: number, cy: number) => {
    const acc = 'var(--v19-accent)'
    const ink = 'rgba(255,255,255,0.38)'
    switch (i) {
      case 0: // 01 Strategy — concentric target rings + crosshair
        return (
          <g>
            <circle cx={cx} cy={cy} r='48' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' fill='none' />
            <circle cx={cx} cy={cy} r='34' stroke={ink} strokeWidth='1' fill='none' />
            <circle cx={cx} cy={cy} r='20' stroke={acc} strokeWidth='1.2' fill='none' />
            <circle cx={cx} cy={cy} r='8' stroke={acc} strokeWidth='1' fill='none' />
            <line x1={cx - 58} y1={cy} x2={cx - 42} y2={cy} stroke={ink} strokeWidth='0.8' />
            <line x1={cx + 42} y1={cy} x2={cx + 58} y2={cy} stroke={ink} strokeWidth='0.8' />
            <line x1={cx} y1={cy - 58} x2={cx} y2={cy - 42} stroke={ink} strokeWidth='0.8' />
            <line x1={cx} y1={cy + 42} x2={cx} y2={cy + 58} stroke={ink} strokeWidth='0.8' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      case 1: { // 02 Architecture — nested hexagons
        const hex = (r: number) => `${cx},${cy - r} ${cx + r * 0.866},${cy - r / 2} ${cx + r * 0.866},${cy + r / 2} ${cx},${cy + r} ${cx - r * 0.866},${cy + r / 2} ${cx - r * 0.866},${cy - r / 2}`
        return (
          <g>
            <polygon points={hex(46)} stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' fill='none' />
            <polygon points={hex(32)} stroke={ink} strokeWidth='1' fill='none' />
            <polygon points={hex(18)} stroke={acc} strokeWidth='1.3' fill='none' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      }
      case 2: // 03 Cloud — stacked cloud lamellae
        return (
          <g>
            <path d={`M ${cx - 44} ${cy + 18} L ${cx} ${cy - 2} L ${cx + 44} ${cy + 18} L ${cx} ${cy + 38} Z`} stroke={ink} strokeWidth='1' fill='none' />
            <path d={`M ${cx - 34} ${cy + 6} L ${cx} ${cy - 12} L ${cx + 34} ${cy + 6} L ${cx} ${cy + 24} Z`} stroke={ink} strokeWidth='1' fill='none' />
            <path d={`M ${cx - 24} ${cy - 6} L ${cx} ${cy - 22} L ${cx + 24} ${cy - 6} L ${cx} ${cy + 10} Z`} stroke={acc} strokeWidth='1.3' fill='none' />
            <line x1={cx} y1={cy - 22} x2={cx} y2={cy + 38} stroke={ink} strokeWidth='0.6' strokeDasharray='2 2' />
            <circle cx={cx} cy={cy - 14} r='2.5' fill={acc} />
          </g>
        )
      case 3: // 04 Development — gear teeth ring
        return (
          <g>
            <circle cx={cx} cy={cy} r='32' stroke={ink} strokeWidth='1' fill='none' />
            {Array.from({ length: 12 }).map((_, t) => {
              const a = (t / 12) * Math.PI * 2
              const x1 = cx + Math.cos(a) * 32
              const y1 = cy + Math.sin(a) * 32
              const x2 = cx + Math.cos(a) * 44
              const y2 = cy + Math.sin(a) * 44
              return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ink} strokeWidth='2' />
            })}
            <circle cx={cx} cy={cy} r='44' stroke={ink} strokeWidth='0.6' strokeDasharray='3 2' fill='none' />
            <circle cx={cx} cy={cy} r='22' stroke={acc} strokeWidth='1.2' fill='none' />
            <circle cx={cx} cy={cy} r='10' stroke={acc} strokeWidth='1' fill='none' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      case 4: // 05 Productivity — tri-orbital ellipses
        return (
          <g>
            <ellipse cx={cx} cy={cy} rx='46' ry='16' stroke={ink} strokeWidth='0.9' fill='none' />
            <ellipse cx={cx} cy={cy} rx='46' ry='16' stroke={ink} strokeWidth='0.9' fill='none' transform={`rotate(60 ${cx} ${cy})`} />
            <ellipse cx={cx} cy={cy} rx='46' ry='16' stroke={acc} strokeWidth='1.2' fill='none' transform={`rotate(120 ${cx} ${cy})`} />
            <circle cx={cx + 46} cy={cy} r='2.5' fill={acc} />
            <circle cx={cx - 46} cy={cy} r='2.5' fill={acc} />
            <circle cx={cx + 23} cy={cy - 40} r='2.5' fill={acc} opacity='0.7' />
            <circle cx={cx - 23} cy={cy + 40} r='2.5' fill={acc} opacity='0.7' />
            <circle cx={cx} cy={cy} r='5' fill={acc} />
          </g>
        )
      case 5: // 06 Orchestration — hub with 6 connected nodes
        return (
          <g>
            <circle cx={cx} cy={cy} r='46' stroke={ink} strokeWidth='0.6' strokeDasharray='3 2' fill='none' />
            {Array.from({ length: 6 }).map((_, nIdx) => {
              const a = (nIdx / 6) * Math.PI * 2 - Math.PI / 2
              const nx = cx + Math.cos(a) * 38
              const ny = cy + Math.sin(a) * 38
              return (
                <g key={nIdx}>
                  <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={ink} strokeWidth='0.8' strokeDasharray='2 2' />
                  <circle cx={nx} cy={ny} r='4.5' fill={acc} opacity='0.85' />
                </g>
              )
            })}
            <circle cx={cx} cy={cy} r='12' stroke={acc} strokeWidth='1.5' fill={acc} fillOpacity='0.15' />
            <circle cx={cx} cy={cy} r='3.5' fill={acc} />
          </g>
        )
      case 6: { // 07 Data & Insights — hexagonal data grid
        const hex = (r: number) => `${cx},${cy - r} ${cx + r * 0.866},${cy - r / 2} ${cx + r * 0.866},${cy + r / 2} ${cx},${cy + r} ${cx - r * 0.866},${cy + r / 2} ${cx - r * 0.866},${cy - r / 2}`
        return (
          <g>
            <polygon points={hex(48)} stroke={ink} strokeWidth='1' fill='none' />
            <polygon points={hex(24)} stroke={acc} strokeWidth='1.2' fill='none' />
            {[0, 60, 120, 180, 240, 300].map((a, idx) => {
              const r = (a - 90) * Math.PI / 180
              return <circle key={idx} cx={cx + Math.cos(r) * 36} cy={cy + Math.sin(r) * 36} r='2.2' fill={acc} />
            })}
            {[30, 90, 150, 210, 270, 330].map((a, idx) => {
              const r = (a - 90) * Math.PI / 180
              return <line key={idx} x1={cx} y1={cy} x2={cx + Math.cos(r) * 24} y2={cy + Math.sin(r) * 24} stroke={ink} strokeWidth='0.5' strokeDasharray='1.5 1.5' />
            })}
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      }
      default:
        return null
    }
  }

  const layerNameY = 452   // y of layer name (below disc)

  // Both connector lines 110px — frameworks + products equally close to discs
  // Top line: y=174 → y=284 (110px)
  // Bottom line: y=466 → y=576 (110px)
  // Order: name (orange) ABOVE desc (grey) on BOTH top and bottom callouts
  const tp = { name: 100, desc: 135, dot: 172 }
  const bp = { dot: 578,  name: 600, desc: 630 }

  // Soft-wrap helper — splits a string into up to 2 lines at a char limit
  const wrapDesc = (text: string, maxChars = 22): string[] => {
    if (text.length <= maxChars) return [text]
    const words = text.split(' ')
    let line1 = '', line2 = ''
    for (const w of words) {
      const next = (line1 ? line1 + ' ' : '') + w
      if (next.length <= maxChars && !line2) line1 = next
      else line2 = (line2 ? line2 + ' ' : '') + w
    }
    return line2 ? [line1, line2] : [line1]
  }

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      xmlns='http://www.w3.org/2000/svg'
      className='v19-stack-diagram'
      aria-label='DBiz Transformation Assembly — Exploded View'
    >
      <defs>
        <pattern id='v19-ex-dot' patternUnits='userSpaceOnUse' width='14' height='14'>
          <circle cx='1' cy='1' r='0.6' fill='var(--v19-ink-dot)' />
        </pattern>
        <radialGradient id='v19-disc-halo'>
          <stop offset='0%' stopColor='var(--v19-accent)' stopOpacity='0.85' />
          <stop offset='35%' stopColor='var(--v19-accent)' stopOpacity='0.45' />
          <stop offset='70%' stopColor='var(--v19-accent)' stopOpacity='0.15' />
          <stop offset='100%' stopColor='var(--v19-accent)' stopOpacity='0' />
        </radialGradient>
      </defs>

      {/* Frame + dot background */}
      <rect x='8' y='8' width={svgW - 16} height={svgH - 16} fill='url(#v19-ex-dot)' />
      <rect x='8' y='8' width={svgW - 16} height={svgH - 16} fill='none' stroke='var(--v19-ink-frame)' strokeWidth='1' />
      <g stroke='var(--v19-ink-corner)' strokeWidth='2'>
        <line x1='8' y1='8' x2='26' y2='8' /><line x1='8' y1='8' x2='8' y2='26' />
        <line x1={svgW - 8} y1='8' x2={svgW - 26} y2='8' /><line x1={svgW - 8} y1='8' x2={svgW - 8} y2='26' />
        <line x1='8' y1={svgH - 8} x2='26' y2={svgH - 8} /><line x1='8' y1={svgH - 8} x2='8' y2={svgH - 26} />
        <line x1={svgW - 8} y1={svgH - 8} x2={svgW - 26} y2={svgH - 8} /><line x1={svgW - 8} y1={svgH - 8} x2={svgW - 8} y2={svgH - 26} />
      </g>

      {/* Top strip — promise anchor (moved up from bottom) */}
      <text x='50' y='32' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v19-ink-label-strong)' letterSpacing='2'>SCALE 1:1</text>
      <line x1={svgW / 2 - 260} y1={44} x2={svgW / 2 + 260} y2={44} stroke='var(--v19-ink-corner)' strokeWidth='0.8' />
      <line x1={svgW / 2 - 260} y1={40} x2={svgW / 2 - 260} y2={48} stroke='var(--v19-ink-corner)' strokeWidth='0.8' />
      <line x1={svgW / 2 + 260} y1={40} x2={svgW / 2 + 260} y2={48} stroke='var(--v19-ink-corner)' strokeWidth='0.8' />
      <text x={svgW / 2} y='32' fontFamily='var(--font-mono)' fontSize='10' fill='var(--v19-ink-dim)' textAnchor='middle' letterSpacing='3'>FULL STACK  ·  NO CAPABILITY GAPS  ·  NO VENDOR LOCK-IN</text>
      <text x={svgW - 50} y='32' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v19-accent)' textAnchor='end' letterSpacing='1'>SHEET A1</text>

      {/* Central shaft — the spine connecting all components */}
      <line x1='80' y1={shaftY} x2={svgW - 80} y2={shaftY} stroke='var(--v19-ink-corner)' strokeWidth='1' />
      <line x1='80' y1={shaftY} x2='80' y2={shaftY - 8} stroke='var(--v19-ink-corner)' strokeWidth='1' />
      <line x1='80' y1={shaftY} x2='80' y2={shaftY + 8} stroke='var(--v19-ink-corner)' strokeWidth='1' />
      <line x1={svgW - 80} y1={shaftY} x2={svgW - 80} y2={shaftY - 8} stroke='var(--v19-ink-corner)' strokeWidth='1' />
      <line x1={svgW - 80} y1={shaftY} x2={svgW - 80} y2={shaftY + 8} stroke='var(--v19-ink-corner)' strokeWidth='1' />


      {/* Components */}
      {layers.map((layer, i) => {
        const cx = discCenters[i]
        const rotateReverse = i % 2 === 1   // alternating spin direction
        return (
          <g key={layer.n} className='v19-stack-layer' style={{ '--layer-index': i } as React.CSSProperties}>
            {/* Traveling halo — staggered via CSS delay, sweeps across all discs */}
            <circle cx={cx} cy={shaftY} r={discR + 28} fill='url(#v19-disc-halo)' className='v19-disc-halo' style={{ animationDelay: `${i * 1.4}s` } as React.CSSProperties} />

            {/* Outer housing — dashed ring (grey) */}
            <circle cx={cx} cy={shaftY} r={discR} stroke='rgba(255,255,255,0.22)' strokeWidth='0.8' strokeDasharray='4 3' fill='var(--v19-paper)' fillOpacity='0.85' />
            {/* Second housing ring — solid, slightly inset (grey) */}
            <circle cx={cx} cy={shaftY} r={discR - 6} stroke='rgba(255,255,255,0.16)' strokeWidth='0.6' fill='none' />
            {/* Inner groove — thin dashed */}
            <circle cx={cx} cy={shaftY} r={discR - 14} stroke='rgba(255,255,255,0.12)' strokeWidth='0.4' strokeDasharray='1.5 2' fill='none' />

            {/* Inner geometry — rotates slowly (alternating direction) */}
            <g>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from={`${rotateReverse ? 360 : 0} ${cx} ${shaftY}`}
                to={`${rotateReverse ? 0 : 360} ${cx} ${shaftY}`}
                dur='45s'
                repeatCount='indefinite'
              />
              {renderShape(i, cx, shaftY)}
            </g>

            {/* Shaft marker — orange dot where disc meets shaft (always on top, doesn't rotate) */}
            <circle cx={cx} cy={shaftY} r='2.5' fill='var(--v19-accent)' />

            {/* Layer number tag — just above disc */}
            <text x={cx - 14} y={shaftY - discR - 16} fontFamily='var(--font-mono)' fontSize='10' fontWeight='500' fill='rgba(255,255,255,0.5)' textAnchor='end' letterSpacing='2'>L{layer.n}</text>

            {/* Layer name — just below disc */}
            <text x={cx} y={layerNameY} fontFamily='var(--font-mono)' fontSize='10' fontWeight='500' fill='#ffffff' textAnchor='middle' letterSpacing='2.5'>{layer.label}</text>

            {/* Top callout — name (orange, emphasised) ABOVE, desc (grey) BELOW */}
            <line x1={cx} y1={tp.dot + 2} x2={cx} y2={shaftY - discR - 8} stroke='rgba(255,255,255,0.18)' strokeWidth='0.7' strokeDasharray='3 2' className='v19-stack-connector' />
            <circle cx={cx} cy={tp.dot} r='2.8' fill='var(--v19-accent)' className='v19-stack-dot' />
            {wrapDesc(layer.top.name.toUpperCase(), 15).map((line, li) => (
              <text key={li} x={cx} y={tp.name + li * 13} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='2' fill='var(--v19-accent)' textAnchor='middle'>{line}</text>
            ))}
            {wrapDesc(layer.top.desc).map((line, li) => (
              <text key={li} x={cx} y={tp.desc + li * 11} fontFamily='var(--font-sans)' fontSize='9' fill='rgba(255,255,255,0.38)' textAnchor='middle'>{line}</text>
            ))}

            {/* Bottom callout — name (orange, emphasised) ABOVE, desc (grey) BELOW */}
            <line x1={cx} y1={layerNameY + 14} x2={cx} y2={bp.dot - 2} stroke='rgba(255,255,255,0.18)' strokeWidth='0.7' strokeDasharray='3 2' className='v19-stack-connector' />
            <circle cx={cx} cy={bp.dot} r='2.8' fill='var(--v19-accent)' className='v19-stack-dot' />
            {wrapDesc(layer.bottom.name.toUpperCase(), 15).map((line, li) => (
              <text key={li} x={cx} y={bp.name + li * 13} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='2' fill='var(--v19-accent)' textAnchor='middle'>{line}</text>
            ))}
            {wrapDesc(layer.bottom.desc).map((line, li) => (
              <text key={li} x={cx} y={bp.desc + li * 11} fontFamily='var(--font-sans)' fontSize='9' fill='rgba(255,255,255,0.38)' textAnchor='middle'>{line}</text>
            ))}
          </g>
        )
      })}


      {/* Bottom strip — drawing metadata (moved down from top) */}
      <text x={svgW / 2} y={svgH - 26} fontFamily='var(--font-mono)' fontSize='9' fill='var(--v19-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG-STACK-01  ·  EXPLODED ASSEMBLY</text>
    </svg>
  )
}

/* Geometric SVG icons.navy strokes + orange accents */
function CapIcon({ index }: { index: number }) {
  const icons = [
    /* 0 Strategy.target */
    <svg key={0} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v19-ink-corner)' strokeWidth='1' strokeDasharray='4 3' className='v19-icon-circle-draw v19-icon-delay-1' />
      <circle cx='40' cy='40' r='24' stroke='var(--v19-ink-corner)' strokeWidth='1.2' className='v19-icon-circle-draw v19-icon-delay-2' />
      <circle cx='40' cy='40' r='14' stroke='var(--v19-accent)' strokeWidth='1.5' className='v19-icon-circle-draw v19-icon-delay-3' />
      <circle cx='40' cy='40' r='4' fill='var(--v19-accent)' className='v19-icon-scale-in v19-icon-delay-4' />
      <line x1='40' y1='3' x2='40' y2='15' stroke='var(--v19-ink-corner)' strokeWidth='0.8' className='v19-icon-line-draw v19-icon-delay-3' />
      <line x1='40' y1='65' x2='40' y2='77' stroke='var(--v19-ink-corner)' strokeWidth='0.8' className='v19-icon-line-draw v19-icon-delay-3' />
      <line x1='3' y1='40' x2='15' y2='40' stroke='var(--v19-ink-corner)' strokeWidth='0.8' className='v19-icon-line-draw v19-icon-delay-3' />
      <line x1='65' y1='40' x2='77' y2='40' stroke='var(--v19-ink-corner)' strokeWidth='0.8' className='v19-icon-line-draw v19-icon-delay-3' />
      <circle cx='40' cy='5' r='2' fill='var(--v19-accent)' className='v19-icon-pulse v19-icon-scale-in v19-icon-delay-5' />
    </svg>,
    /* 1 Cloud.layers */
    <svg key={1} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v19-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v19-icon-circle-draw v19-icon-delay-1' />
      <path d='M 20 48 L 40 38 L 60 48 L 40 58 Z' stroke='var(--v19-ink-corner)' strokeWidth='1.2' fill='none' className='v19-icon-polygon-draw v19-icon-delay-2' />
      <path d='M 24 40 L 40 32 L 56 40 L 40 48 Z' stroke='var(--v19-ink-corner)' strokeWidth='1.2' fill='none' className='v19-icon-polygon-draw v19-icon-delay-3' />
      <path d='M 28 32 L 40 26 L 52 32 L 40 38 Z' stroke='var(--v19-accent)' strokeWidth='1.5' fill='none' className='v19-icon-polygon-draw v19-icon-delay-4' />
      <line x1='40' y1='26' x2='40' y2='58' stroke='var(--v19-ink-corner)' strokeWidth='0.8' strokeDasharray='2 2' className='v19-icon-line-draw v19-icon-delay-5' />
      <circle cx='40' cy='29' r='2.5' fill='var(--v19-accent)' className='v19-icon-scale-in v19-icon-delay-6' />
      <circle cx='28' cy='32' r='1.5' fill='var(--v19-accent)' opacity='0.6' className='v19-icon-scale-in v19-icon-delay-6' />
      <circle cx='52' cy='32' r='1.5' fill='var(--v19-accent)' opacity='0.6' className='v19-icon-scale-in v19-icon-delay-6' />
    </svg>,
    /* 2 Data.hexagon */
    <svg key={2} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v19-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v19-icon-circle-draw v19-icon-delay-1' />
      <polygon points='40,8 68,23 68,57 40,72 12,57 12,23' stroke='var(--v19-ink-corner)' strokeWidth='1.2' fill='none' className='v19-icon-polygon-draw v19-icon-delay-2' />
      <polygon points='40,20 56,29 56,51 40,60 24,51 24,29' stroke='var(--v19-accent)' strokeWidth='1.5' fill='none' className='v19-icon-polygon-draw v19-icon-delay-3' />
      <circle cx='40' cy='40' r='6' fill='var(--v19-accent)' opacity='0.15' stroke='var(--v19-accent)' strokeWidth='1.2' className='v19-icon-fade-in-el v19-icon-delay-4' />
      <circle cx='40' cy='40' r='2.5' fill='var(--v19-accent)' className='v19-icon-scale-in v19-icon-delay-5' />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const r = (a - 90) * Math.PI / 180
        return <circle key={i} cx={40 + Math.cos(r) * 14} cy={40 + Math.sin(r) * 14} r='2' fill='var(--v19-accent)' opacity='0.6' className='v19-icon-scale-in' style={{ animationDelay: `${0.6 + i * 0.08}s` }} />
      })}
    </svg>,
    /* 3 Apps.nodes */
    <svg key={3} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v19-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v19-icon-circle-draw v19-icon-delay-1' />
      <line x1='20' y1='27' x2='32' y2='40' stroke='var(--v19-ink-corner)' strokeWidth='1' className='v19-icon-line-draw v19-icon-delay-3' />
      <line x1='60' y1='27' x2='48' y2='40' stroke='var(--v19-ink-corner)' strokeWidth='1' className='v19-icon-line-draw v19-icon-delay-3' />
      <line x1='20' y1='53' x2='32' y2='40' stroke='var(--v19-ink-corner)' strokeWidth='1' className='v19-icon-line-draw v19-icon-delay-4' />
      <line x1='60' y1='53' x2='48' y2='40' stroke='var(--v19-ink-corner)' strokeWidth='1' className='v19-icon-line-draw v19-icon-delay-4' />
      <rect x='12' y='19' width='16' height='16' stroke='var(--v19-ink-corner)' strokeWidth='1.2' fill='none' className='v19-icon-rect-draw v19-icon-delay-2' />
      <rect x='52' y='19' width='16' height='16' stroke='var(--v19-ink-corner)' strokeWidth='1.2' fill='none' className='v19-icon-rect-draw v19-icon-delay-2' />
      <rect x='12' y='45' width='16' height='16' stroke='var(--v19-ink-corner)' strokeWidth='1.2' fill='none' className='v19-icon-rect-draw v19-icon-delay-2' />
      <rect x='52' y='45' width='16' height='16' stroke='var(--v19-ink-corner)' strokeWidth='1.2' fill='none' className='v19-icon-rect-draw v19-icon-delay-2' />
      <circle cx='40' cy='40' r='8' stroke='var(--v19-accent)' strokeWidth='1.5' fill='none' className='v19-icon-circle-draw v19-icon-delay-5' />
      <circle cx='40' cy='40' r='3' fill='var(--v19-accent)' className='v19-icon-scale-in v19-icon-delay-6' />
    </svg>,
    /* 4 Product.orbital */
    <svg key={4} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v19-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v19-icon-circle-draw v19-icon-delay-1' />
      <circle cx='40' cy='40' r='26' stroke='var(--v19-ink-corner)' strokeWidth='1.2' className='v19-icon-circle-draw v19-icon-delay-2' />
      <circle cx='40' cy='40' r='17' stroke='var(--v19-accent)' strokeWidth='1.5' className='v19-icon-circle-draw v19-icon-delay-3' />
      <circle cx='40' cy='40' r='3' fill='var(--v19-accent)' className='v19-icon-scale-in v19-icon-delay-5' />
      <ellipse cx='40' cy='40' rx='35' ry='14' stroke='var(--v19-ink-corner)' strokeWidth='0.8' transform='rotate(30 40 40)' className='v19-icon-circle-draw v19-icon-delay-4' />
      <circle cx='62.5' cy='20' r='2.5' fill='var(--v19-accent)' className='v19-icon-pulse v19-icon-scale-in v19-icon-delay-6' />
    </svg>,
    /* 5 Ops.radar */
    <svg key={5} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v19-ink-corner)' strokeWidth='1.2' className='v19-icon-circle-draw v19-icon-delay-1' />
      <circle cx='40' cy='40' r='24' stroke='var(--v19-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v19-icon-circle-draw v19-icon-delay-2' />
      <circle cx='40' cy='40' r='13' stroke='var(--v19-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v19-icon-circle-draw v19-icon-delay-3' />
      <line x1='40' y1='5' x2='40' y2='75' stroke='var(--v19-ink-corner)' strokeWidth='0.6' className='v19-icon-line-draw v19-icon-delay-4' />
      <line x1='5' y1='40' x2='75' y2='40' stroke='var(--v19-ink-corner)' strokeWidth='0.6' className='v19-icon-line-draw v19-icon-delay-4' />
      <path d='M 40 40 L 40 5' stroke='var(--v19-accent)' strokeWidth='2' className='v19-icon-line-draw v19-icon-delay-5' />
      <circle cx='40' cy='40' r='3' fill='var(--v19-accent)' className='v19-icon-scale-in v19-icon-delay-6' />
      <circle cx='54' cy='22' r='2.5' fill='var(--v19-accent)' className='v19-icon-pulse v19-icon-scale-in v19-icon-delay-7' />
    </svg>,
    /* 6 Governance.shield */
    <svg key={6} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v19-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v19-icon-circle-draw v19-icon-delay-1' />
      <path d='M 40 6 L 70 21 L 70 51 L 40 74 L 10 51 L 10 21 Z' stroke='var(--v19-ink-corner)' strokeWidth='1.2' fill='none' className='v19-icon-polygon-draw v19-icon-delay-2' />
      <path d='M 40 16 L 60 27 L 60 49 L 40 62 L 20 49 L 20 27 Z' stroke='var(--v19-accent)' strokeWidth='1.5' fill='none' className='v19-icon-polygon-draw v19-icon-delay-3' />
      <line x1='40' y1='16' x2='40' y2='62' stroke='var(--v19-ink-corner)' strokeWidth='0.8' strokeDasharray='2 2' className='v19-icon-line-draw v19-icon-delay-4' />
      <line x1='20' y1='38' x2='60' y2='38' stroke='var(--v19-ink-corner)' strokeWidth='0.8' strokeDasharray='2 2' className='v19-icon-line-draw v19-icon-delay-4' />
      <circle cx='40' cy='38' r='6' fill='var(--v19-accent)' opacity='0.15' stroke='var(--v19-accent)' strokeWidth='1.2' className='v19-icon-fade-in-el v19-icon-delay-5' />
      <circle cx='40' cy='38' r='2.5' fill='var(--v19-accent)' className='v19-icon-scale-in v19-icon-delay-6' />
    </svg>,
  ]
  return icons[index] || icons[0]
}

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0)
  const [view, setView] = useState<'capabilities' | 'framework'>('capabilities')
  const [cycleMs, setCycleMs] = useState(CYCLE_MS)
  const cap = capabilities[active]

  // Auto-cycle through capabilities — honors extended pause after a manual click
  useEffect(() => {
    if (view !== 'capabilities') return
    const id = setTimeout(() => {
      setActive((i) => (i + 1) % capabilities.length)
      setCycleMs(CYCLE_MS)
    }, cycleMs)
    return () => clearTimeout(id)
  }, [active, view, cycleMs])

  const selectTab = (i: number) => {
    setCycleMs(PAUSE_MS)
    setActive(i)
  }

  return (
    <section className='v19-section' id='solutions'>
      <div className='v19-container'>
        <div className='v19-cap-head'>
          <div className='v19-cap-head-left'>
            <div className='num'>N°03 / What we do</div>
            <h2>Six layers. <span style={{ color: 'var(--v19-accent)' }}>One partner.</span>{' '}<span style={{ whiteSpace: 'nowrap' }}>No handoff.</span></h2>
            <p className='lead'>Every enterprise transformation stalls at the seams between strategy, data, and delivery. We work across every layer, not within silos.</p>
          </div>
          <div className='v19-cap-toggle'>
            <button
              className={`v19-toggle-btn ${view === 'capabilities' ? 'active' : ''}`}
              onClick={() => setView('capabilities')}
            >
              Our Capabilities
            </button>
            <button
              className={`v19-toggle-btn ${view === 'framework' ? 'active' : ''}`}
              onClick={() => setView('framework')}
            >
              Our AI Transformation Stack
            </button>
          </div>
        </div>

        {view === 'capabilities' ? (
          <div className='v19-cap-interactive'>
            {/* Desktop: left sidebar tab list */}
            <div className='v19-cap-tabs' role='tablist'>
              {capabilities.map((c, i) => (
                <button
                  key={c.num}
                  role='tab'
                  aria-selected={i === active}
                  className={`v19-cap-tab ${i === active ? 'active' : ''}`}
                  onClick={() => selectTab(i)}
                >
                  <span className='tab-num'>{c.num}</span>
                  <span className='tab-label'>
                    <span className='tab-title'>{c.title}</span>
                    <span className='tab-kicker'>{c.kicker}</span>
                  </span>
                  <span
                    className='v19-cap-tab-progress'
                    style={i === active ? { animationDuration: `${cycleMs}ms` } : undefined}
                  />
                </button>
              ))}
            </div>

            {/* Mobile: compact prev/next navigator */}
            <div className='v19-cap-mobile-nav'>
              <button
                className='v19-cap-arrow'
                onClick={() => selectTab((active - 1 + capabilities.length) % capabilities.length)}
                aria-label='Previous capability'
              >
                ←
              </button>
              <div className='v19-cap-mobile-label'>
                <span className='mob-num'>{cap.num}</span>
                <span className='mob-title'>{cap.title}</span>
                <span className='mob-dots'>
                  {capabilities.map((_, i) => (
                    <span key={i} className={`mob-dot ${i === active ? 'active' : ''}`} onClick={() => selectTab(i)} />
                  ))}
                </span>
              </div>
              <button
                className='v19-cap-arrow'
                onClick={() => selectTab((active + 1) % capabilities.length)}
                aria-label='Next capability'
              >
                →
              </button>
              <span className='v19-cap-mobile-progress' />
            </div>

            {/* Detail panel — content left, icon column right */}
            <div className='v19-cap-detail' role='tabpanel'>
              <div className='v19-cap-detail-content'>
                <div className='v19-cap-detail-meta'>
                  <span className='detail-kicker'>{cap.kicker}</span>
                  <h3>{cap.title}</h3>
                  <span className='detail-subtitle'>{cap.subtitle}</span>
                </div>
                <p>{cap.body}</p>
                <div className='v19-cap-pills'>
                  {cap.tags.map((tag) => (
                    <span key={tag} className='v19-cap-pill'>{tag}</span>
                  ))}
                </div>
              </div>
              <div className='v19-cap-detail-icon'>
                <div className='v19-cap-icon-ring'>
                  <CapIcon index={active} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* AI Transformation Framework — animated schematic */
          <div className='v19-stack-diagram-wrap'>
            <StackDiagram />
          </div>
        )}
      </div>
    </section>
  )
}
