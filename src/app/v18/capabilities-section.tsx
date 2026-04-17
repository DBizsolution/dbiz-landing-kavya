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
    kicker: 'Start here',
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
    tags: ['AWS', 'Azure', 'GCP', 'GPU Orchestration'],
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


/* ─── Stack Diagram SVG — Angled Exploded Isometric ─── */
function StackDiagram() {
  /* Angled exploded view matching the reference image */
  const svgH = 700

  // Define layers from bottom to top in isometric grid
  // Each layer moves up by 75px and right by 40px to maintain isometric alignment
  const baseX = 200
  const baseY = 580
  const verticalGap = 75
  const horizontalShift = 40

  const layers = [
    { label: 'STRATEGY', x: baseX, y: baseY, w: 220, h: 50, products: [
      { name: 'Futures Studio', desc: ['AI ambition, roadmap &', 'use case prioritisation'], side: 'left' },
      { name: 'TechOffice Foundry', desc: 'AI foundation & Well-Architected review', side: 'right' }
    ]},
    { label: 'ARCHITECTURE', x: baseX + horizontalShift, y: baseY - verticalGap, w: 240, h: 50, products: [
      { name: 'DBiz Adapt', desc: 'Architecting Secure and Sovereign AI', side: 'right' }
    ]},
    { label: 'CLOUD', x: baseX + horizontalShift * 2, y: baseY - verticalGap * 2, w: 260, h: 50, products: [
      { name: 'DBiz Scoop', desc: 'AI-Powered migration pipeline', side: 'right' }
    ]},
    { label: 'DEVELOPMENT', x: baseX + horizontalShift * 3, y: baseY - verticalGap * 3, w: 240, h: 50, products: [
      { name: 'Perpetual Engineering', desc: 'AI agents across the full SDLC', side: 'right' }
    ]},
    { label: 'PRODUCTIVITY', x: baseX + horizontalShift * 4, y: baseY - verticalGap * 4, w: 260, h: 50, products: [
      { name: 'Productivity Automation', desc: 'Claude Co-work & Copilot', side: 'left' }
    ]},
    { label: 'ORCHESTRATION', x: baseX + horizontalShift * 5, y: baseY - verticalGap * 5, w: 280, h: 50, products: [
      { name: 'Agent Studio', desc: 'Agentic AI & multi-agent orchestration', side: 'left' },
      { name: 'AI-Infused BizApps', desc: 'Autonomous agents for SaaS platforms', side: 'right' }
    ]},
    { label: 'DATA & INSIGHTS', x: baseX + horizontalShift * 6, y: baseY - verticalGap * 6, w: 300, h: 50, products: [
      { name: 'Factweavers.ai', desc: 'Domain data cloud & quick insights', side: 'left' },
      { name: 'DBiz Compass', desc: 'AI-infused data engineering', side: 'right' }
    ]},
  ]

  return (
    <svg
      viewBox='0 0 1000 700'
      xmlns='http://www.w3.org/2000/svg'
      className='v18-stack-diagram'
      aria-label='DBiz AI Transformation Stack — Exploded View'
    >
      <defs>
        <pattern id='v18-ex-dot' patternUnits='userSpaceOnUse' width='12' height='12'>
          <circle cx='1' cy='1' r='0.6' fill='var(--v18-ink-dot)' />
        </pattern>
        <filter id='v18-ex-glow'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
      </defs>

      {/* Frame + dot background */}
      <rect x='8' y='8' width='984' height='684' fill='url(#v18-ex-dot)' />
      <rect x='8' y='8' width='984' height='684' fill='none' stroke='var(--v18-ink-frame)' strokeWidth='1' />
      <g stroke='var(--v18-ink-corner)' strokeWidth='2'>
        <line x1='8' y1='8' x2='26' y2='8' /><line x1='8' y1='8' x2='8' y2='26' />
        <line x1='992' y1='8' x2='974' y2='8' /><line x1='992' y1='8' x2='992' y2='26' />
        <line x1='8' y1='692' x2='26' y2='692' /><line x1='8' y1='692' x2='8' y2='674' />
        <line x1='992' y1='692' x2='974' y2='692' /><line x1='992' y1='692' x2='992' y2='674' />
      </g>

      {/* Drawing label + annotations */}
      <text x='50' y='28' fontFamily='var(--font-mono)' fontSize='7.5' fill='var(--v18-ink-label-strong)' letterSpacing='2'>SCALE 1:1</text>
      <text x='500' y='28' fontFamily='var(--font-mono)' fontSize='7.5' fill='var(--v18-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·STACK-01 &nbsp; EXPLODED VIEW</text>
      <text x='950' y='28' fontFamily='var(--font-mono)' fontSize='7.5' fill='var(--v18-accent)' textAnchor='end' letterSpacing='1'>SHEET A1</text>

      {/* Layers — angled exploded isometric */}
      {layers.map((layer, i) => {
        // Draw 3D box: front face, top face, right side
        const x1 = layer.x
        const y1 = layer.y
        const w = layer.w
        const h = layer.h

        // Points for isometric projection - matching reference image
        const topSkewX = 50
        const topSkewY = 25
        const sideSkewX = 50
        const sideSkewY = 25

        return (
          <g key={i} className='v18-stack-layer' style={{ '--layer-index': i } as React.CSSProperties}>
            {/* Top face */}
            <polygon
              points={`${x1},${y1} ${x1 + topSkewX},${y1 - topSkewY} ${x1 + w + topSkewX},${y1 - topSkewY} ${x1 + w},${y1}`}
              fill='var(--v18-ink-layer-fill)'
              stroke='var(--v18-ink-corner)'
              strokeWidth='1.2'
            />

            {/* Front face */}
            <rect
              x={x1}
              y={y1}
              width={w}
              height={h}
              fill='var(--v18-ink-layer-fill)'
              stroke='var(--v18-ink-corner)'
              strokeWidth='1.2'
            />

            {/* Right side */}
            <polygon
              points={`${x1 + w},${y1} ${x1 + w + sideSkewX},${y1 - sideSkewY} ${x1 + w + sideSkewX},${y1 + h - sideSkewY} ${x1 + w},${y1 + h}`}
              fill='var(--v18-ink-layer-right)'
              stroke='var(--v18-ink-corner)'
              strokeWidth='1.2'
            />

            {/* Layer label */}
            <text x={x1 + w / 2} y={y1 + h / 2 + 5} fontFamily='var(--font-sans)' fontSize='12' fontWeight='700' fill='#ffffff' textAnchor='middle' letterSpacing='2'>{layer.label}</text>

            {/* Product callouts with right-angled lines */}
            {layer.products.map((prod, pIdx) => {
              const isLeft = prod.side === 'left'

              // Dot position at middle of box edge
              const dotX = isLeft ? x1 : x1 + w + sideSkewX
              const dotY = y1 + h / 2 - sideSkewY / 2

              // For multiple products, stack them vertically
              const productOffset = (layer.products.length > 1) ? (pIdx - 0.5) * 30 : 0
              const textY = dotY + productOffset

              // Right-angled line: horizontal then vertical
              const horizontalLength = 60
              const cornerX = isLeft ? dotX - horizontalLength : dotX + horizontalLength
              const lineEndX = isLeft ? x1 - 80 : x1 + w + sideSkewX + 80

              // Text positioned at end
              const textX = isLeft ? x1 - 85 : x1 + w + sideSkewX + 85
              const textAnchor = isLeft ? 'end' : 'start'

              return (
                <g key={pIdx}>
                  {/* Horizontal segment from box */}
                  <line x1={dotX} y1={dotY} x2={cornerX} y2={dotY} stroke='var(--v18-ink-callout)' strokeWidth='0.8' strokeDasharray='3 2' className='v18-stack-connector' />
                  {/* Vertical segment to text level */}
                  <line x1={cornerX} y1={dotY} x2={cornerX} y2={textY} stroke='var(--v18-ink-callout)' strokeWidth='0.8' strokeDasharray='3 2' className='v18-stack-connector' />
                  {/* Horizontal segment to text */}
                  <line x1={cornerX} y1={textY} x2={lineEndX} y2={textY} stroke='var(--v18-ink-callout)' strokeWidth='0.8' strokeDasharray='3 2' className='v18-stack-connector' />
                  <circle cx={dotX} cy={dotY} r='2.5' fill='#F07B2F' className='v18-stack-dot' />
                  <text x={textX} y={textY - 5} fontFamily='var(--font-sans)' fontSize='11' fontWeight='700' fill='#F07B2F' textAnchor={textAnchor}>{prod.name}</text>
                  {Array.isArray(prod.desc) ? (
                    <>
                      <text x={textX} y={textY + 10} fontFamily='var(--font-sans)' fontSize='7.5' fill='var(--v18-ink-label-strong)' textAnchor={textAnchor}>{prod.desc[0]}</text>
                      <text x={textX} y={textY + 20} fontFamily='var(--font-sans)' fontSize='7.5' fill='var(--v18-ink-label-strong)' textAnchor={textAnchor}>{prod.desc[1]}</text>
                    </>
                  ) : (
                    <text x={textX} y={textY + 10} fontFamily='var(--font-sans)' fontSize='7.5' fill='var(--v18-ink-label-strong)' textAnchor={textAnchor}>{prod.desc}</text>
                  )}
                </g>
              )
            })}

            {/* Connecting dots between layers */}
            {i < layers.length - 1 && (
              <>
                <circle cx={x1 + w / 2 - 20} cy={y1 + h + 10} r='2' fill='#F07B2F' className='v18-stack-blob' style={{ '--blob-delay': `${i * 0.7}s` } as React.CSSProperties} filter='url(#v18-ex-glow)' />
                <circle cx={x1 + w / 2 + 30} cy={y1 + h + 15} r='1.5' fill='#F07B2F' className='v18-stack-blob' style={{ '--blob-delay': `${i * 0.7 + 0.35}s` } as React.CSSProperties} filter='url(#v18-ex-glow)' />
              </>
            )}
          </g>
        )
      })}

      {/* Bottom annotation */}
      <text x='500' y='680' fontFamily='var(--font-mono)' fontSize='7.5' fill='var(--v18-ink-dim)' textAnchor='middle' letterSpacing='2'>FULL STACK · NO CAPABILITY GAPS · NO VENDOR LOCK-IN</text>
    </svg>
  )
}

/* Geometric SVG icons.navy strokes + orange accents */
function CapIcon({ index }: { index: number }) {
  const icons = [
    /* 0 Strategy.target */
    <svg key={0} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v18-ink-corner)' strokeWidth='1' strokeDasharray='4 3' className='v18-icon-circle-draw v18-icon-delay-1' />
      <circle cx='40' cy='40' r='24' stroke='var(--v18-ink-corner)' strokeWidth='1.2' className='v18-icon-circle-draw v18-icon-delay-2' />
      <circle cx='40' cy='40' r='14' stroke='var(--v18-accent)' strokeWidth='1.5' className='v18-icon-circle-draw v18-icon-delay-3' />
      <circle cx='40' cy='40' r='4' fill='var(--v18-accent)' className='v18-icon-scale-in v18-icon-delay-4' />
      <line x1='40' y1='3' x2='40' y2='15' stroke='var(--v18-ink-corner)' strokeWidth='0.8' className='v18-icon-line-draw v18-icon-delay-3' />
      <line x1='40' y1='65' x2='40' y2='77' stroke='var(--v18-ink-corner)' strokeWidth='0.8' className='v18-icon-line-draw v18-icon-delay-3' />
      <line x1='3' y1='40' x2='15' y2='40' stroke='var(--v18-ink-corner)' strokeWidth='0.8' className='v18-icon-line-draw v18-icon-delay-3' />
      <line x1='65' y1='40' x2='77' y2='40' stroke='var(--v18-ink-corner)' strokeWidth='0.8' className='v18-icon-line-draw v18-icon-delay-3' />
      <circle cx='40' cy='5' r='2' fill='var(--v18-accent)' className='v18-icon-pulse v18-icon-scale-in v18-icon-delay-5' />
    </svg>,
    /* 1 Cloud.layers */
    <svg key={1} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v18-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v18-icon-circle-draw v18-icon-delay-1' />
      <path d='M 20 48 L 40 38 L 60 48 L 40 58 Z' stroke='var(--v18-ink-corner)' strokeWidth='1.2' fill='none' className='v18-icon-polygon-draw v18-icon-delay-2' />
      <path d='M 24 40 L 40 32 L 56 40 L 40 48 Z' stroke='var(--v18-ink-corner)' strokeWidth='1.2' fill='none' className='v18-icon-polygon-draw v18-icon-delay-3' />
      <path d='M 28 32 L 40 26 L 52 32 L 40 38 Z' stroke='var(--v18-accent)' strokeWidth='1.5' fill='none' className='v18-icon-polygon-draw v18-icon-delay-4' />
      <line x1='40' y1='26' x2='40' y2='58' stroke='var(--v18-ink-corner)' strokeWidth='0.8' strokeDasharray='2 2' className='v18-icon-line-draw v18-icon-delay-5' />
      <circle cx='40' cy='29' r='2.5' fill='var(--v18-accent)' className='v18-icon-scale-in v18-icon-delay-6' />
      <circle cx='28' cy='32' r='1.5' fill='var(--v18-accent)' opacity='0.6' className='v18-icon-scale-in v18-icon-delay-6' />
      <circle cx='52' cy='32' r='1.5' fill='var(--v18-accent)' opacity='0.6' className='v18-icon-scale-in v18-icon-delay-6' />
    </svg>,
    /* 2 Data.hexagon */
    <svg key={2} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v18-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v18-icon-circle-draw v18-icon-delay-1' />
      <polygon points='40,8 68,23 68,57 40,72 12,57 12,23' stroke='var(--v18-ink-corner)' strokeWidth='1.2' fill='none' className='v18-icon-polygon-draw v18-icon-delay-2' />
      <polygon points='40,20 56,29 56,51 40,60 24,51 24,29' stroke='var(--v18-accent)' strokeWidth='1.5' fill='none' className='v18-icon-polygon-draw v18-icon-delay-3' />
      <circle cx='40' cy='40' r='6' fill='var(--v18-accent)' opacity='0.15' stroke='var(--v18-accent)' strokeWidth='1.2' className='v18-icon-fade-in-el v18-icon-delay-4' />
      <circle cx='40' cy='40' r='2.5' fill='var(--v18-accent)' className='v18-icon-scale-in v18-icon-delay-5' />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const r = (a - 90) * Math.PI / 180
        return <circle key={i} cx={40 + Math.cos(r) * 14} cy={40 + Math.sin(r) * 14} r='2' fill='var(--v18-accent)' opacity='0.6' className='v18-icon-scale-in' style={{ animationDelay: `${0.6 + i * 0.08}s` }} />
      })}
    </svg>,
    /* 3 Apps.nodes */
    <svg key={3} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v18-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v18-icon-circle-draw v18-icon-delay-1' />
      <line x1='20' y1='27' x2='32' y2='40' stroke='var(--v18-ink-corner)' strokeWidth='1' className='v18-icon-line-draw v18-icon-delay-3' />
      <line x1='60' y1='27' x2='48' y2='40' stroke='var(--v18-ink-corner)' strokeWidth='1' className='v18-icon-line-draw v18-icon-delay-3' />
      <line x1='20' y1='53' x2='32' y2='40' stroke='var(--v18-ink-corner)' strokeWidth='1' className='v18-icon-line-draw v18-icon-delay-4' />
      <line x1='60' y1='53' x2='48' y2='40' stroke='var(--v18-ink-corner)' strokeWidth='1' className='v18-icon-line-draw v18-icon-delay-4' />
      <rect x='12' y='19' width='16' height='16' stroke='var(--v18-ink-corner)' strokeWidth='1.2' fill='none' className='v18-icon-rect-draw v18-icon-delay-2' />
      <rect x='52' y='19' width='16' height='16' stroke='var(--v18-ink-corner)' strokeWidth='1.2' fill='none' className='v18-icon-rect-draw v18-icon-delay-2' />
      <rect x='12' y='45' width='16' height='16' stroke='var(--v18-ink-corner)' strokeWidth='1.2' fill='none' className='v18-icon-rect-draw v18-icon-delay-2' />
      <rect x='52' y='45' width='16' height='16' stroke='var(--v18-ink-corner)' strokeWidth='1.2' fill='none' className='v18-icon-rect-draw v18-icon-delay-2' />
      <circle cx='40' cy='40' r='8' stroke='var(--v18-accent)' strokeWidth='1.5' fill='none' className='v18-icon-circle-draw v18-icon-delay-5' />
      <circle cx='40' cy='40' r='3' fill='var(--v18-accent)' className='v18-icon-scale-in v18-icon-delay-6' />
    </svg>,
    /* 4 Product.orbital */
    <svg key={4} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v18-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v18-icon-circle-draw v18-icon-delay-1' />
      <circle cx='40' cy='40' r='26' stroke='var(--v18-ink-corner)' strokeWidth='1.2' className='v18-icon-circle-draw v18-icon-delay-2' />
      <circle cx='40' cy='40' r='17' stroke='var(--v18-accent)' strokeWidth='1.5' className='v18-icon-circle-draw v18-icon-delay-3' />
      <circle cx='40' cy='40' r='3' fill='var(--v18-accent)' className='v18-icon-scale-in v18-icon-delay-5' />
      <ellipse cx='40' cy='40' rx='35' ry='14' stroke='var(--v18-ink-corner)' strokeWidth='0.8' transform='rotate(30 40 40)' className='v18-icon-circle-draw v18-icon-delay-4' />
      <circle cx='62.5' cy='20' r='2.5' fill='var(--v18-accent)' className='v18-icon-pulse v18-icon-scale-in v18-icon-delay-6' />
    </svg>,
    /* 5 Ops.radar */
    <svg key={5} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v18-ink-corner)' strokeWidth='1.2' className='v18-icon-circle-draw v18-icon-delay-1' />
      <circle cx='40' cy='40' r='24' stroke='var(--v18-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v18-icon-circle-draw v18-icon-delay-2' />
      <circle cx='40' cy='40' r='13' stroke='var(--v18-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v18-icon-circle-draw v18-icon-delay-3' />
      <line x1='40' y1='5' x2='40' y2='75' stroke='var(--v18-ink-corner)' strokeWidth='0.6' className='v18-icon-line-draw v18-icon-delay-4' />
      <line x1='5' y1='40' x2='75' y2='40' stroke='var(--v18-ink-corner)' strokeWidth='0.6' className='v18-icon-line-draw v18-icon-delay-4' />
      <path d='M 40 40 L 40 5' stroke='var(--v18-accent)' strokeWidth='2' className='v18-icon-line-draw v18-icon-delay-5' />
      <circle cx='40' cy='40' r='3' fill='var(--v18-accent)' className='v18-icon-scale-in v18-icon-delay-6' />
      <circle cx='54' cy='22' r='2.5' fill='var(--v18-accent)' className='v18-icon-pulse v18-icon-scale-in v18-icon-delay-7' />
    </svg>,
    /* 6 Governance.shield */
    <svg key={6} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v18-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v18-icon-circle-draw v18-icon-delay-1' />
      <path d='M 40 6 L 70 21 L 70 51 L 40 74 L 10 51 L 10 21 Z' stroke='var(--v18-ink-corner)' strokeWidth='1.2' fill='none' className='v18-icon-polygon-draw v18-icon-delay-2' />
      <path d='M 40 16 L 60 27 L 60 49 L 40 62 L 20 49 L 20 27 Z' stroke='var(--v18-accent)' strokeWidth='1.5' fill='none' className='v18-icon-polygon-draw v18-icon-delay-3' />
      <line x1='40' y1='16' x2='40' y2='62' stroke='var(--v18-ink-corner)' strokeWidth='0.8' strokeDasharray='2 2' className='v18-icon-line-draw v18-icon-delay-4' />
      <line x1='20' y1='38' x2='60' y2='38' stroke='var(--v18-ink-corner)' strokeWidth='0.8' strokeDasharray='2 2' className='v18-icon-line-draw v18-icon-delay-4' />
      <circle cx='40' cy='38' r='6' fill='var(--v18-accent)' opacity='0.15' stroke='var(--v18-accent)' strokeWidth='1.2' className='v18-icon-fade-in-el v18-icon-delay-5' />
      <circle cx='40' cy='38' r='2.5' fill='var(--v18-accent)' className='v18-icon-scale-in v18-icon-delay-6' />
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
    <section className='v18-section' id='solutions'>
      <div className='v18-container'>
        <div className='v18-cap-head'>
          <div className='v18-cap-head-left'>
            <div className='num'>N°03 / What we do</div>
            <h2>Six layers. <span style={{ color: 'var(--v18-accent)' }}>One partner.</span>{' '}<span style={{ whiteSpace: 'nowrap' }}>No handoff.</span></h2>
            <p className='lead'>Every enterprise transformation stalls at the seams between strategy, data, and delivery. We work across every layer, not within silos.</p>
          </div>
          <div className='v18-cap-toggle'>
            <button
              className={`v18-toggle-btn ${view === 'capabilities' ? 'active' : ''}`}
              onClick={() => setView('capabilities')}
            >
              Our Capabilities
            </button>
            <button
              className={`v18-toggle-btn ${view === 'framework' ? 'active' : ''}`}
              onClick={() => setView('framework')}
            >
              AI Transformation Framework
            </button>
          </div>
        </div>

        {view === 'capabilities' ? (
          <div className='v18-cap-interactive'>
            {/* Desktop: left sidebar tab list */}
            <div className='v18-cap-tabs' role='tablist'>
              {capabilities.map((c, i) => (
                <button
                  key={c.num}
                  role='tab'
                  aria-selected={i === active}
                  className={`v18-cap-tab ${i === active ? 'active' : ''}`}
                  onClick={() => selectTab(i)}
                >
                  <span className='tab-num'>{c.num}</span>
                  <span className='tab-label'>
                    <span className='tab-title'>{c.title}</span>
                    <span className='tab-kicker'>{c.kicker}</span>
                  </span>
                  <span
                    className='v18-cap-tab-progress'
                    style={i === active ? { animationDuration: `${cycleMs}ms` } : undefined}
                  />
                </button>
              ))}
            </div>

            {/* Mobile: compact prev/next navigator */}
            <div className='v18-cap-mobile-nav'>
              <button
                className='v18-cap-arrow'
                onClick={() => selectTab((active - 1 + capabilities.length) % capabilities.length)}
                aria-label='Previous capability'
              >
                ←
              </button>
              <div className='v18-cap-mobile-label'>
                <span className='mob-num'>{cap.num}</span>
                <span className='mob-title'>{cap.title}</span>
                <span className='mob-dots'>
                  {capabilities.map((_, i) => (
                    <span key={i} className={`mob-dot ${i === active ? 'active' : ''}`} onClick={() => selectTab(i)} />
                  ))}
                </span>
              </div>
              <button
                className='v18-cap-arrow'
                onClick={() => selectTab((active + 1) % capabilities.length)}
                aria-label='Next capability'
              >
                →
              </button>
              <span className='v18-cap-mobile-progress' />
            </div>

            {/* Detail panel — content left, icon column right */}
            <div className='v18-cap-detail' role='tabpanel'>
              <div className='v18-cap-detail-content'>
                <div className='v18-cap-detail-meta'>
                  <span className='detail-kicker'>{cap.kicker}</span>
                  <h3>{cap.title}</h3>
                  <span className='detail-subtitle'>{cap.subtitle}</span>
                </div>
                <p>{cap.body}</p>
                <div className='v18-cap-pills'>
                  {cap.tags.map((tag) => (
                    <span key={tag} className='v18-cap-pill'>{tag}</span>
                  ))}
                </div>
                <a href='#cta' className='v18-cta-secondary'>
                  See our work <span className='arrow'>&rarr;</span>
                </a>
              </div>
              <div className='v18-cap-detail-icon'>
                <div className='v18-cap-icon-ring'>
                  <CapIcon index={active} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* AI Transformation Framework — animated schematic */
          <div className='v18-stack-diagram-wrap'>
            <StackDiagram />
          </div>
        )}
      </div>
    </section>
  )
}
