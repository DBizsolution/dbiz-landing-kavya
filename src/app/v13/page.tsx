import { LayersSection } from './layers-section'

const stackLayers = [
  {
    coord: 'L·01',
    label: 'Strategy',
    items: [
      {
        head: 'Futures Studio',
        text: 'AI ambition, roadmap & use case prioritisation aligned to measurable business values',
      },
    ],
  },
  {
    coord: 'L·02',
    label: 'Architecture',
    items: [
      {
        head: 'TechOffice Foundry',
        text: 'AI architecture foundation, governance & standards, Well-Architected review with AI-pillars',
      },
    ],
  },
  {
    coord: 'L·03',
    label: 'Cloud',
    items: [
      {
        head: 'Multi-Cloud AI Foundation',
        text: 'AWS · Azure · GCP — deploy on the right cloud for each workload',
      },
      { head: 'DBiz Canvas', text: 'Concept to code in days' },
    ],
  },
  {
    coord: 'L·04',
    label: 'Development',
    items: [
      { head: 'Nexus Platform', text: 'Enterprise AI dev environment' },
      { head: 'Perpetual Engineering', text: 'AI agents across the full SDLC' },
    ],
  },
  {
    coord: 'L·05',
    label: 'Productivity',
    items: [
      { head: 'Claude Cowork & Copilot', text: 'AI-automation for every role' },
      {
        head: 'AI-Infused BizApps',
        text: 'Autonomous agents for business execution with SaaS platforms',
      },
    ],
  },
  {
    coord: 'L·06',
    label: 'Orchestration',
    items: [
      { head: 'Agent Studio', text: 'Agentic AI and multi-agent orchestration' },
      {
        head: 'Nexus iConnector',
        text: 'MCP connectors via Boomi, MuleSoft, Workato — no rip & replace',
      },
    ],
  },
  {
    coord: 'L·07',
    label: 'Data & Insights',
    items: [
      {
        head: 'FactWeavers.ai',
        text: 'Data democratisation & quick insights with domain data cloud',
      },
      { head: 'DBiz Compass', text: 'AI-infused data engineering' },
    ],
  },
]

const industries = [
  {
    metric: '38% FASTER',
    name: 'Financial Services',
    title: 'Credit decisioning in hours, not weeks',
    body: 'Agent-driven risk models cut underwriting cycle time for a tier-1 lender across retail, SME, and corporate books.',
  },
  {
    metric: '$14M SAVED',
    name: 'Logistics & Fleet',
    title: 'Dispatch, rewritten nightly',
    body: 'A national fleet operator replaced static route planning with agentic scheduling across 12,000 vehicles.',
  },
  {
    metric: '6× THROUGHPUT',
    name: 'Aged Care',
    title: 'Clinical documentation, automated',
    body: 'Care teams reclaimed hours per shift with voice-to-record agents compliant with regional reporting standards.',
  },
]

const solutions = [
  {
    metric: '11 DOMAINS',
    name: 'FactWeavers\u2122',
    title: 'Industry-ready data cloud',
    body: 'Pre-modelled data products shipped without a six-month clean-up phase.',
  },
  {
    metric: '40+ AGENTS',
    name: 'Agent Studio',
    title: 'Multi-agent orchestration at scale',
    body: 'Cross-system agents running order-to-cash for a Fortune 500 manufacturer.',
  },
  {
    metric: '5 DAYS',
    name: 'DBiz Canvas',
    title: 'Concept to working build',
    body: 'Product teams move from brief to production code inside a single sprint.',
  },
]

const tech = [
  {
    cat: 'Cloud & AI',
    list: 'AWS (Advanced) · Azure (Solutions) · GCP',
    note: '40+ AWS certified experts',
  },
  {
    cat: 'Data Platforms',
    list: 'Snowflake · Databricks · Fabric · BigQuery',
    note: 'FactWeavers\u2122 built on top',
  },
  {
    cat: 'Integration',
    list: 'Boomi · MuleSoft · Workato · n8n',
    note: 'No rip & replace',
  },
  {
    cat: 'Business Apps',
    list: 'Salesforce · Dynamics 365 · Power Platform',
    note: '200+ Microsoft certifications',
  },
]

const phases = [
  {
    days: '5',
    unit: 'DAYS',
    title: 'Align & Assess',
    body: 'Leadership aligned on AI ambition. Architecture assessed. Readiness gaps surfaced. A costed roadmap and evidence to make investment decisions.',
    outcome: 'Board-aligned AI roadmap',
  },
  {
    days: '15',
    unit: 'DAYS',
    title: 'Specify & Validate',
    body: 'System specification generated. Data foundations validated. Working system shipped and tested with real users in your environment.',
    outcome: 'Validated MVP in production',
  },
  {
    days: '90',
    unit: 'DAYS',
    title: 'Industrialise & Scale',
    body: 'Enterprise-grade system live. Agents deployed. Data democratised. Operations handed to the team that built it.',
    outcome: 'Frontier Organisation operational',
  },
]

const whys = [
  {
    coord: '[W·01]',
    title: 'Expertise that works together.',
    body: 'Strategy, cloud, data, platforms, product, design, operations — our teams work across every layer, not within silos. Your transformation is shaped by people who understand the full picture, not just their corner of it.',
  },
  {
    coord: '[W·02]',
    title: 'Transformation at scale.',
    body: '50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery — not a pitch deck.',
  },
  {
    coord: '[W·03]',
    title: 'Time-boxed delivery. Every engagement.',
    body: 'Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don\u2019t allow it.',
  },
  {
    coord: '[W·04]',
    title: 'Production platforms. Not presentations.',
    body: 'NEXUS, Agent Studio, FactWeavers\u2122, DBiz Canvas — production systems deployed in enterprise environments. We recommend what we\u2019ve already built.',
  },
]

const trust = [
  'AWS',
  'Azure',
  'Salesforce',
  'Snowflake',
  'Databricks',
  'Anthropic',
  'Boomi',
  'MuleSoft',
  'Microsoft',
]

const stats = [
  { coord: '[A·01]', val: '10+', lbl: 'Years enterprise delivery' },
  { coord: '[A·02]', val: '50+', lbl: 'Enterprise clients' },
  { coord: '[A·03]', val: '150+', lbl: 'AI solutions in production' },
  { coord: '[A·04]', val: '11', lbl: 'Industries' },
  { coord: '[A·05]', val: '6', lbl: 'Countries' },
]

function DataFlowDiagram() {
  return (
    <svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg' className='v13-mini-diagram'>
      <defs>
        <filter id='v13-mini-glow'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
        <pattern id='v13-mini-grid' patternUnits='userSpaceOnUse' width='20' height='20' x='10' y='10'>
          <path d='M 0 0 L 20 0 M 0 0 L 0 20' fill='none' stroke='var(--v13-ink-grid)' strokeWidth='0.5' />
        </pattern>
      </defs>

      {/* Background grid */}
      <rect x='10' y='10' width='320' height='220' fill='url(#v13-mini-grid)' />

      {/* Frame */}
      <rect x='10' y='10' width='320' height='220' fill='none' stroke='var(--v13-ink-frame)' strokeWidth='1.2' />
      <line x1='10' y1='10' x2='26' y2='10' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='10' x2='10' y2='26' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='314' y2='10' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='330' y2='26' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='26' y2='230' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='10' y2='214' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='314' y2='230' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='330' y2='214' stroke='var(--v13-ink-corner)' strokeWidth='2' />

      {/* Title */}
      <text x='170' y='32' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v13-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·D-01</text>

      {/* Data nodes - aligned to 20px grid */}
      <g className='v13-mini-node' style={{ '--node-delay': '0s' } as React.CSSProperties}>
        <rect x='30' y='50' width='80' height='40' fill='var(--v13-paper)' stroke='none' />
        <rect x='30' y='50' width='80' height='40' fill='var(--v13-ink-node-fill)' stroke='var(--v13-ink-corner)' strokeWidth='1.8' />
        <circle cx='38' cy='58' r='3.5' fill='var(--v13-paper)' />
        <circle cx='38' cy='58' r='2.5' fill='#e86a2a' />
        <text x='70' y='67' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v13-ink-label)' textAnchor='middle' letterSpacing='1'>INPUT</text>
        <text x='70' y='82' fontFamily='var(--font-mono)' fontSize='13' fill='#e86a2a' textAnchor='middle' letterSpacing='1' fontWeight='700'>SOURCE</text>
      </g>

      <g className='v13-mini-node' style={{ '--node-delay': '0.3s' } as React.CSSProperties}>
        <rect x='230' y='50' width='80' height='40' fill='var(--v13-paper)' stroke='none' />
        <rect x='230' y='50' width='80' height='40' fill='var(--v13-ink-node-fill)' stroke='var(--v13-ink-corner)' strokeWidth='1.8' />
        <circle cx='238' cy='58' r='3.5' fill='var(--v13-paper)' />
        <circle cx='238' cy='58' r='2.5' fill='#e86a2a' />
        <text x='270' y='67' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v13-ink-label)' textAnchor='middle' letterSpacing='1'>PROCESS</text>
        <text x='270' y='82' fontFamily='var(--font-mono)' fontSize='13' fill='#e86a2a' textAnchor='middle' letterSpacing='1' fontWeight='700'>AGENT</text>
      </g>

      <g className='v13-mini-node' style={{ '--node-delay': '0.6s' } as React.CSSProperties}>
        <rect x='130' y='150' width='80' height='40' fill='var(--v13-paper)' stroke='none' />
        <rect x='130' y='150' width='80' height='40' fill='var(--v13-ink-node-fill)' stroke='var(--v13-ink-corner)' strokeWidth='1.8' />
        <circle cx='138' cy='158' r='3.5' fill='var(--v13-paper)' />
        <circle cx='138' cy='158' r='2.5' fill='#e86a2a' />
        <text x='170' y='167' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v13-ink-label)' textAnchor='middle' letterSpacing='1'>RESULT</text>
        <text x='170' y='182' fontFamily='var(--font-mono)' fontSize='13' fill='#e86a2a' textAnchor='middle' letterSpacing='1' fontWeight='700'>OUTPUT</text>
      </g>

      {/* Connection lines with annotations - aligned to grid */}
      <g>
        <path d='M 110 70 L 230 70' stroke='var(--v13-ink-connector)' strokeWidth='1.8' strokeDasharray='5 4' className='v13-mini-line' />
        <text x='170' y='66' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v13-ink-text-accent)' textAnchor='middle'>API</text>
      </g>

      <g>
        <path d='M 70 90 L 170 150' stroke='var(--v13-ink-connector)' strokeWidth='1.8' strokeDasharray='5 4' className='v13-mini-line' />
        <text x='110' y='115' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v13-ink-text-accent)' textAnchor='middle' transform='rotate(-28 110 115)'>STREAM</text>
      </g>

      <g>
        <path d='M 270 90 L 170 150' stroke='var(--v13-ink-connector)' strokeWidth='1.8' strokeDasharray='5 4' className='v13-mini-line' />
        <text x='230' y='115' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v13-ink-text-accent)' textAnchor='middle' transform='rotate(28 230 115)'>SYNC</text>
      </g>

      {/* Data flow blobs */}
      <circle cx='170' cy='70' r='4.5' fill='var(--v13-paper)' />
      <circle cx='170' cy='70' r='3.5' fill='#e86a2a' className='v13-mini-blob' filter='url(#v13-mini-glow)' />
      <circle cx='120' cy='120' r='4' fill='var(--v13-paper)' />
      <circle cx='120' cy='120' r='3' fill='var(--v13-ink-blob)' className='v13-mini-blob' style={{ '--blob-delay': '0.5s' } as React.CSSProperties} />
      <circle cx='220' cy='120' r='4' fill='var(--v13-paper)' />
      <circle cx='220' cy='120' r='3' fill='var(--v13-ink-blob)' className='v13-mini-blob' style={{ '--blob-delay': '0.7s' } as React.CSSProperties} />

      {/* Measurements - aligned to grid */}
      <line x1='30' y1='210' x2='110' y2='210' stroke='var(--v13-ink-measure)' strokeWidth='0.5' />
      <line x1='30' y1='207' x2='30' y2='213' stroke='var(--v13-ink-measure)' strokeWidth='0.5' />
      <line x1='110' y1='207' x2='110' y2='213' stroke='var(--v13-ink-measure)' strokeWidth='0.5' />
      <text x='70' y='218' fontFamily='var(--font-mono)' fontSize='6' fill='var(--v13-ink-dim)' textAnchor='middle'>80px · 4 CELLS</text>
    </svg>
  )
}

function NetworkDiagram() {
  const nodes = [
    { label: 'AWS', angle: 0 },
    { label: 'AZURE', angle: 60 },
    { label: 'DATA', angle: 120 },
    { label: 'API', angle: 180 },
    { label: 'AGENT', angle: 240 },
    { label: 'APP', angle: 300 },
  ]

  return (
    <svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg' className='v13-mini-diagram'>
      <defs>
        <pattern id='v13-net-grid' patternUnits='userSpaceOnUse' width='20' height='20' x='10' y='10'>
          <path d='M 0 0 L 20 0 M 0 0 L 0 20' fill='none' stroke='var(--v13-ink-grid)' strokeWidth='0.5' />
        </pattern>
        <filter id='v13-hub-glow'>
          <feGaussianBlur stdDeviation='3' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Background grid */}
      <rect x='10' y='10' width='320' height='220' fill='url(#v13-net-grid)' />

      {/* Frame */}
      <rect x='10' y='10' width='320' height='220' fill='none' stroke='var(--v13-ink-frame)' strokeWidth='1.2' />
      <line x1='10' y1='10' x2='26' y2='10' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='10' x2='10' y2='26' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='314' y2='10' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='330' y2='26' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='26' y2='230' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='10' y2='214' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='314' y2='230' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='330' y2='214' stroke='var(--v13-ink-corner)' strokeWidth='2' />

      {/* Title */}
      <text x='170' y='32' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v13-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·G-01</text>

      {/* Orbital circles - aligned to grid multiples */}
      <circle cx='170' cy='130' r='80' fill='none' stroke='var(--v13-ink-orbit)' strokeWidth='0.6' strokeDasharray='4 4' />
      <circle cx='170' cy='130' r='60' fill='none' stroke='var(--v13-ink-orbit)' strokeWidth='0.6' strokeDasharray='4 4' />
      <circle cx='170' cy='130' r='40' fill='none' stroke='var(--v13-ink-orbit)' strokeWidth='0.6' strokeDasharray='4 4' />

      {/* Central hub - grid aligned */}
      <circle cx='170' cy='130' r='24' fill='var(--v13-paper)' stroke='none' />
      <circle cx='170' cy='130' r='24' fill='var(--v13-ink-hub)' stroke='var(--v13-ink-corner)' strokeWidth='2.5' className='v13-mini-hub' />
      <circle cx='170' cy='130' r='12' fill='#e86a2a' className='v13-mini-hub-core' filter='url(#v13-hub-glow)' />
      <text x='170' y='135' fontFamily='var(--font-mono)' fontSize='8' fill='#fff' textAnchor='middle' fontWeight='700'>HUB</text>

      {/* Satellite nodes - aligned to grid */}
      {nodes.map((node, i) => {
        const angle = (node.angle - 90) * Math.PI / 180
        const x = 170 + Math.cos(angle) * 80
        const y = 130 + Math.sin(angle) * 80
        return (
          <g key={i}>
            <line x1='170' y1='130' x2={x} y2={y} stroke='var(--v13-ink-spoke)' strokeWidth='1.5' className='v13-mini-spoke' style={{ '--spoke-delay': `${i * 0.1}s` } as React.CSSProperties} />
            <circle cx={x} cy={y} r='8' fill='var(--v13-paper)' stroke='none' />
            <circle cx={x} cy={y} r='8' fill='var(--v13-ink-blob)' stroke='var(--v13-ink-corner)' strokeWidth='1.8' className='v13-mini-satellite' style={{ '--sat-delay': `${i * 0.15}s` } as React.CSSProperties} />
            <text x={x} y={y + (node.angle === 0 ? -14 : node.angle === 180 ? 20 : node.angle < 180 ? -12 : 18)} fontFamily='var(--font-mono)' fontSize='7' fill='var(--v13-ink-blob)' textAnchor='middle' letterSpacing='1'>{node.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

function ProcessDiagram() {
  const steps = [
    { num: 5, label: 'ALIGN', sublabel: 'ASSESS' },
    { num: 15, label: 'SPECIFY', sublabel: 'VALIDATE' },
    { num: 90, label: 'DEPLOY', sublabel: 'SCALE' },
  ]

  return (
    <svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg' className='v13-mini-diagram'>
      <defs>
        <marker id='v13-arrow' markerWidth='10' markerHeight='10' refX='9' refY='5' orient='auto'>
          <polygon points='0 0, 10 5, 0 10' fill='var(--v13-ink-text-accent)' />
        </marker>
        <pattern id='v13-proc-grid' patternUnits='userSpaceOnUse' width='20' height='20' x='10' y='10'>
          <path d='M 0 0 L 20 0 M 0 0 L 0 20' fill='none' stroke='var(--v13-ink-grid)' strokeWidth='0.5' />
        </pattern>
      </defs>

      {/* Background grid */}
      <rect x='10' y='10' width='320' height='220' fill='url(#v13-proc-grid)' />

      {/* Frame */}
      <rect x='10' y='10' width='320' height='220' fill='none' stroke='var(--v13-ink-frame)' strokeWidth='1.2' />
      <line x1='10' y1='10' x2='26' y2='10' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='10' x2='10' y2='26' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='314' y2='10' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='330' y2='26' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='26' y2='230' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='10' y2='214' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='314' y2='230' stroke='var(--v13-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='330' y2='214' stroke='var(--v13-ink-corner)' strokeWidth='2' />

      {/* Title */}
      <text x='170' y='32' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v13-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·F-01</text>

      {/* Timeline - grid aligned */}
      <line x1='30' y1='50' x2='310' y2='50' stroke='var(--v13-ink-divider-soft)' strokeWidth='1.2' strokeDasharray='5 5' />

      {/* Steps - aligned to 20px grid */}
      {steps.map((step, i) => (
        <g key={i} className='v13-mini-step' style={{ '--step-delay': `${i * 0.2}s` } as React.CSSProperties}>
          <rect x={30 + i * 100} y='70' width='80' height='100' fill='var(--v13-paper)' stroke='none' />
          <rect x={30 + i * 100} y='70' width='80' height='100' fill='var(--v13-ink-node-fill)' stroke='var(--v13-ink-corner)' strokeWidth='1.8' />

          {/* Day number at top */}
          <text x={70 + i * 100} y='98' fontFamily='var(--font-mono)' fontSize='24' fill='#e86a2a' textAnchor='middle' fontWeight='800'>{step.num}</text>
          <text x={70 + i * 100} y='112' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v13-ink-label)' textAnchor='middle' letterSpacing='1'>DAYS</text>

          {/* Divider - grid aligned */}
          <line x1={35 + i * 100} y1='120' x2={105 + i * 100} y2='120' stroke='var(--v13-ink-divider-soft)' strokeWidth='0.6' strokeDasharray='2 2' />

          {/* Labels */}
          <text x={70 + i * 100} y='138' fontFamily='var(--font-mono)' fontSize='10' fill='#e86a2a' textAnchor='middle' fontWeight='700' letterSpacing='1'>{step.label}</text>
          <text x={70 + i * 100} y='151' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v13-ink-label-strong)' textAnchor='middle' letterSpacing='0.5'>&</text>
          <text x={70 + i * 100} y='162' fontFamily='var(--font-mono)' fontSize='10' fill='#e86a2a' textAnchor='middle' fontWeight='700' letterSpacing='1'>{step.sublabel}</text>

          {/* Connection dot on timeline - grid aligned */}
          <circle cx={70 + i * 100} cy='50' r='4.5' fill='var(--v13-paper)' />
          <circle cx={70 + i * 100} cy='50' r='3.5' fill='#e86a2a' stroke='var(--v13-ink-corner)' strokeWidth='1.8' />
          <line x1={70 + i * 100} y1='54' x2={70 + i * 100} y2='70' stroke='var(--v13-ink-spoke)' strokeWidth='1.2' strokeDasharray='2 2' />

          {i < 2 && (
            <>
              <path d={`M ${110 + i * 100} 120 L ${130 + i * 100} 120`} stroke='var(--v13-ink-corner)' strokeWidth='2.5' markerEnd='url(#v13-arrow)' className='v13-mini-arrow' />
            </>
          )}
        </g>
      ))}

      {/* Total timeline annotation - grid aligned */}
      <line x1='30' y1='200' x2='310' y2='200' stroke='var(--v13-ink-measure)' strokeWidth='0.6' />
      <line x1='30' y1='196' x2='30' y2='204' stroke='var(--v13-ink-measure)' strokeWidth='0.6' />
      <line x1='310' y1='196' x2='310' y2='204' stroke='var(--v13-ink-measure)' strokeWidth='0.6' />
      <text x='170' y='215' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v13-ink-dim)' textAnchor='middle' letterSpacing='1'>110 DAYS · TOTAL</text>
    </svg>
  )
}

function HeroDiagram() {
  const layers = [
    { label: 'STRATEGY', code: 'S·01' },
    { label: 'ARCHITECTURE', code: 'S·02' },
    { label: 'CLOUD', code: 'S·03' },
    { label: 'DATA', code: 'S·04' },
    { label: 'APPS', code: 'S·05' },
    { label: 'AGENTS', code: 'S·06' },
    { label: 'OPS', code: 'S·07' },
  ]
  return (
    <svg viewBox='0 0 520 560' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' className='v13-hero-svg'>
      <defs>
        <pattern id='v13-hatch' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
          <line x1='0' y1='0' x2='0' y2='6' stroke='var(--v13-ink-hatch)' strokeWidth='1' />
        </pattern>
        <pattern id='v13-dot' patternUnits='userSpaceOnUse' width='10' height='10'>
          <circle cx='1' cy='1' r='0.8' fill='var(--v13-ink-dot)' />
        </pattern>
        <filter id='v13-glow'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* frame rule marks */}
      <g stroke='var(--v13-ink-frame)' strokeWidth='0.6'>
        <line x1='20' y1='20' x2='40' y2='20' />
        <line x1='20' y1='20' x2='20' y2='40' />
        <line x1='500' y1='20' x2='480' y2='20' />
        <line x1='500' y1='20' x2='500' y2='40' />
        <line x1='20' y1='540' x2='40' y2='540' />
        <line x1='20' y1='540' x2='20' y2='520' />
        <line x1='500' y1='540' x2='480' y2='540' />
        <line x1='500' y1='540' x2='500' y2='520' />
      </g>

      {/* ruler ticks left */}
      <g stroke='var(--v13-ink-frame)' strokeWidth='0.6'>
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1='40' y1={60 + i * 32} x2={i % 2 === 0 ? 48 : 44} y2={60 + i * 32} />
        ))}
      </g>

      {/* background dot fill */}
      <rect x='60' y='60' width='400' height='440' fill='url(#v13-dot)' />

      {/* 7 isometric stacked layers */}
      {layers.map((layer, i) => {
        const y = 90 + i * 56
        const skew = 26
        return (
          <g key={layer.code} className='v13-layer' style={{ '--layer-index': i } as React.CSSProperties}>
            {/* top face */}
            <polygon
              points={`${140},${y} ${360},${y} ${360 + skew},${y - 14} ${140 + skew},${y - 14}`}
              fill='none'
              stroke='var(--v13-ink-corner)'
              strokeWidth='1'
            />
            {/* front face */}
            <rect
              x='140'
              y={y}
              width='220'
              height='32'
              fill={i === 3 ? 'url(#v13-hatch)' : 'var(--v13-ink-layer-fill)'}
              stroke='var(--v13-ink-corner)'
              strokeWidth='1'
            />
            {/* right face */}
            <polygon
              points={`${360},${y} ${360 + skew},${y - 14} ${360 + skew},${y + 18} ${360},${y + 32}`}
              fill='var(--v13-ink-layer-right)'
              stroke='var(--v13-ink-corner)'
              strokeWidth='1'
            />
            {/* label on front face */}
            <text
              x='156'
              y={y + 20}
              fontFamily='var(--font-mono)'
              fontSize='10'
              letterSpacing='1.5'
              fill='#ffffff'
            >
              {layer.label}
            </text>
            {/* callout */}
            <line
              x1={360 + skew}
              y1={y + 8}
              x2='450'
              y2={y + 8}
              stroke='var(--v13-ink-callout)'
              strokeWidth='0.8'
              strokeDasharray='2 2'
              className='v13-callout-line'
            />
            <circle cx={360 + skew} cy={y + 8} r='1.6' fill='#e86a2a' className='v13-callout-dot' />
            <text
              x='454'
              y={y + 11}
              fontFamily='var(--font-mono)'
              fontSize='8.5'
              letterSpacing='1'
              fill='#e86a2a'
            >
              {layer.code}
            </text>
            {/* communication blobs between layers */}
            {i < layers.length - 1 && (
              <>
                <circle
                  cx='250'
                  cy={y + 38}
                  r='2.5'
                  fill='#e86a2a'
                  className='v13-comm-blob'
                  style={{ '--blob-delay': `${i * 0.8}s`, '--blob-index': i } as React.CSSProperties}
                  filter='url(#v13-glow)'
                />
                <circle
                  cx='200'
                  cy={y + 42}
                  r='1.8'
                  fill='var(--v13-ink-corner)'
                  className='v13-comm-blob'
                  style={{ '--blob-delay': `${i * 0.8 + 0.4}s`, '--blob-index': i } as React.CSSProperties}
                />
              </>
            )}
          </g>
        )
      })}

      {/* vertical spine dimension line */}
      <g stroke='var(--v13-ink-hair)' strokeWidth='0.8'>
        <line x1='96' y1='76' x2='96' y2='484' />
        <line x1='92' y1='76' x2='100' y2='76' />
        <line x1='92' y1='484' x2='100' y2='484' />
      </g>
      <text
        x='80'
        y='284'
        fontFamily='var(--font-mono)'
        fontSize='8.5'
        letterSpacing='1.5'
        fill='#e86a2a'
        transform='rotate(-90 80 284)'
      >
        FRONTIER ORG · STACK
      </text>

      {/* bottom dimension */}
      <g stroke='var(--v13-ink-dim)' strokeWidth='0.6'>
        <line x1='140' y1='520' x2='360' y2='520' />
        <line x1='140' y1='516' x2='140' y2='524' />
        <line x1='360' y1='516' x2='360' y2='524' />
      </g>
      <text
        x='250'
        y='534'
        fontFamily='var(--font-mono)'
        fontSize='8'
        letterSpacing='1.5'
        fill='var(--v13-ink-label-strong)'
        textAnchor='middle'
      >
        DIM: 7 × LAYER
      </text>
    </svg>
  )
}

export default function V5Page() {
  return (
    <>
      {/* NAV */}
      <nav className='v13-nav'>
        <div className='v13-logo'>
          dbiz<span className='dot'>.</span>
          <span className='suffix'>ai</span>
        </div>
        <ul className='v13-nav-links'>
          <li>
            <a href='#solutions'>Our Solutions</a>
          </li>
          <li>
            <a href='#work'>Our Work</a>
          </li>
          <li>
            <a href='#about'>About Us</a>
          </li>
          <li>
            <a href='#careers'>Careers</a>
          </li>
        </ul>
        <a href='#contact' className='v13-nav-cta'>
          Get an assessment
        </a>
      </nav>

      {/* HERO */}
      <section className='v13-hero'>
        <div className='v13-container'>
          <div className='v13-hero-grid'>
            <div>
              <div className='v13-eyebrow'>
                <span className='bar' />
                Human-Led | Agent-Operated | Data-Powered
              </div>
              <h1>
                Your enterprise. <span className='annotated'>Agent-operated.</span> Starting now.
              </h1>
              <p className='v13-hero-sub'>
                Most enterprises have tried AI. Most of it didn&rsquo;t scale — not because the
                technology failed, but because no one connected the ambition to what actually got
                built. We close that gap. We call the result a Frontier Organisation:
                human-led, agent-operated, data-powered.
              </p>
              <div className='v13-hero-ctas'>
                <a href='#contact' className='v13-btn'>
                  Get an architecture assessment →
                </a>
                <a href='#contact' className='v13-btn-ghost'>
                  Or talk to our team
                </a>
              </div>
            </div>

            <div className='v13-hero-diagram'>
              <div className='v13-hero-diagram-label'>
                <span>DWG · FRONTIER-ORG-01</span>
                <span>REV.01</span>
              </div>
              <HeroDiagram />
              <div className='v13-hero-diagram-foot'>
                <span>SCALE 1:1</span>
                <span>SHEET A1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className='v13-trust'>
        <div className='v13-container'>
          <div className='v13-trust-head'>
            <span className='v13-trust-label'>[T·01] Trusted by 50+ enterprises · 6 countries</span>
            <span className='line' />
            <span className='v13-trust-label'>PARTNERS · CERTIFIED</span>
          </div>
          <div className='v13-trust-roster'>
            {trust.map((name, i) => (
              <span key={name}>
                {name}
                {i < trust.length - 1 && <span className='sep'>·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className='v13-stats'>
        <div className='v13-container'>
          <div className='v13-stats-grid'>
            {stats.map((s) => (
              <div key={s.coord} className='v13-stat'>
                <span className='coord'>{s.coord}</span>
                <div className='val'>{s.val}</div>
                <div className='lbl'>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYERS / CAPABILITIES */}
      <LayersSection />

      {/* STACK DIAGRAM */}
      <section className='v13-section'>
        <div className='v13-container'>
          <div className='v13-section-head'>
            <div className='v13-kicker'>[C·01] Schematic</div>
            <h2>
              DBiz AI Transformation Stack. <em>No capability gaps. No vendor lock-in.</em>
            </h2>
          </div>

          <div className='v13-stack-frame'>
            <div className='v13-stack-meta'>
              <span>DWG · STACK-ARCH</span>
              <span>SHEET 02 / 04</span>
              <span>SCALE 1:1</span>
              <span>REV.01</span>
            </div>
            {stackLayers.map((layer) => (
              <div key={layer.coord} className='v13-stack-layer'>
                <div className='coord'>{layer.coord}</div>
                <div className='label'>{layer.label}</div>
                <div className='desc-group'>
                  {layer.items.map((it) => (
                    <div key={it.head} className='desc'>
                      <b>{it.head}</b>
                      {it.text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVEN */}
      <section className='v13-section' id='work'>
        <div className='v13-container'>
          <div className='v13-section-head v13-with-diagram'>
            <div>
              <div className='v13-kicker'>[D·01] Proof of delivery</div>
              <h2>
                Proven <em>where it matters.</em>
              </h2>
              <p className='lead'>50+ enterprise deployments across 11 industries.</p>
            </div>
            <div>
              <DataFlowDiagram />
            </div>
          </div>

          <div className='v13-proven-group'>
            <div className='v13-proven-head'>
              <span className='title'>By Industry</span>
              <span className='rule' />
              <span className='sig'>[D·02]</span>
            </div>
            <div className='v13-proven-grid'>
              {industries.map((c) => (
                <div key={c.name} className='v13-proven-card'>
                  <span className='metric'>{c.metric}</span>
                  <span className='name'>{c.name}</span>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='v13-proven-group'>
            <div className='v13-proven-head'>
              <span className='title'>By Solution</span>
              <span className='rule' />
              <span className='sig'>[D·03]</span>
            </div>
            <div className='v13-proven-grid'>
              {solutions.map((c) => (
                <div key={c.name} className='v13-proven-card'>
                  <span className='metric'>{c.metric}</span>
                  <span className='name'>{c.name}</span>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='v13-proven-group'>
            <div className='v13-proven-head'>
              <span className='title'>By Technology</span>
              <span className='rule' />
              <span className='sig'>[D·04]</span>
            </div>
            <div className='v13-tech-grid'>
              {tech.map((t) => (
                <div key={t.cat} className='v13-tech-cell'>
                  <span className='cat'>{t.cat}</span>
                  <div className='list'>{t.list}</div>
                  <span className='note'>{t.note}</span>
                </div>
              ))}
            </div>
            <div className='v13-ai-bar'>
              <span className='tag'>AI Models</span>
              <div className='models'>
                Claude · GPT · Gemini · Bedrock · Azure OpenAI · Vertex AI
              </div>
              <div className='desc'>
                Multi-model by design — agents run on the best model for each task.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className='v13-testimonial'>
        <div className='v13-container'>
          <div className='v13-quote-frame'>
            <div className='v13-quote-meta'>
              <span>[E·01] TESTIMONY</span>
              <span>SOUTHERN CROSS LOGISTICS</span>
            </div>
            <blockquote>
              DBiz didn&rsquo;t sell us a roadmap. They delivered one — with the system live in
              production while the rest of the market was still running POCs.
            </blockquote>
            <div className='v13-quote-attr'>
              — <b>Priya Nair</b> · Chief Data &amp; AI Officer · Southern Cross Logistics
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className='v13-section'>
        <div className='v13-container'>
          <div className='v13-section-head v13-with-diagram'>
            <div>
              <div className='v13-kicker'>[F·01] Cadence</div>
              <h2>
                How we work. <em>Built for pace, not paperwork.</em>
              </h2>
              <p className='lead'>
                Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated
                early.
              </p>
            </div>
            <div>
              <ProcessDiagram />
            </div>
          </div>

          <div className='v13-phases'>
            {phases.map((p) => (
              <div key={p.days} className='v13-phase'>
                <div className='marker' />
                <div className='days'>
                  {p.days}
                  <small>{p.unit}</small>
                </div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
                <div className='outcome'>→ {p.outcome}</div>
              </div>
            ))}
          </div>
          <div className='v13-phases-note'>
            NOTE · Timelines are benchmarks based on 50+ enterprise engagements. Scope varies by
            environment.
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className='v13-section' id='about'>
        <div className='v13-container'>
          <div className='v13-section-head v13-with-diagram'>
            <div>
              <div className='v13-kicker'>[G·01] Rationale</div>
              <h2>
                Why enterprises <em>choose DBiz.</em>
              </h2>
            </div>
            <div>
              <NetworkDiagram />
            </div>
          </div>

          <div className='v13-why-grid'>
            {whys.map((w) => (
              <div key={w.coord} className='v13-why'>
                <span className='coord'>{w.coord}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>

          <div className='v13-partners'>
            <div className='v13-partner-block'>
              <span className='cat'>[G·05] Enterprise Partnerships</span>
              <p className='desc'>
                Certified at the highest tiers with the industry&rsquo;s leading technology
                providers.
              </p>
              <div className='list'>
                AWS Advanced <span className='sep'>·</span> Azure Solutions{' '}
                <span className='sep'>·</span> Salesforce <span className='sep'>·</span> Dynamics
                365 <span className='sep'>·</span> Snowflake <span className='sep'>·</span>{' '}
                Databricks <span className='sep'>·</span> Anthropic <span className='sep'>·</span>{' '}
                Boomi <span className='sep'>·</span> MuleSoft
              </div>
            </div>
            <div className='v13-partner-block'>
              <span className='cat'>[G·06] Domain Depth</span>
              <p className='desc'>
                Deep sector expertise shaped by 150+ enterprise engagements.
              </p>
              <div className='list'>
                Financial Services <span className='sep'>·</span> Logistics &amp; Fleet{' '}
                <span className='sep'>·</span> Real Estate <span className='sep'>·</span> Aged
                Care <span className='sep'>·</span> Automotive <span className='sep'>·</span>{' '}
                Government <span className='sep'>·</span> Retail <span className='sep'>·</span>{' '}
                Construction <span className='sep'>·</span> Manufacturing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className='v13-final' id='contact'>
        <span className='v13-final-corner tl' />
        <span className='v13-final-corner tr' />
        <span className='v13-final-corner bl' />
        <span className='v13-final-corner br' />
        <div className='v13-container'>
          <div className='v13-final-meta'>[Z·01] NEXT STEP</div>
          <h2>
            Your Frontier Organisation starts with a <em>conversation.</em>
          </h2>
          <p>One partner. Full stack. No handoff.</p>
          <div className='v13-final-ctas'>
            <a href='#' className='v13-btn'>
              Contact us →
            </a>
            <a href='#' className='v13-btn-ghost'>
              Or get an architecture assessment
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='v13-footer' id='careers'>
        <div className='v13-container'>
          <div className='v13-foot-top'>
            <div className='v13-foot-brand'>
              <div className='v13-logo'>
                dbiz<span className='dot'>.</span>
                <span className='suffix'>ai</span>
              </div>
              <p className='tag'>
                <b>Human-Led | Agent-Operated | Data-Powered</b>
                <br />
                10 offices · 6 countries · 800+ people
              </p>
            </div>
            <div className='v13-foot-col'>
              <h5>Company</h5>
              <a href='#'>About Us</a>
              <a href='#'>Our Work</a>
              <a href='#'>Careers</a>
              <a href='#'>Contact Us</a>
              <a href='#'>Blog</a>
            </div>
            <div className='v13-foot-col'>
              <h5>Solutions</h5>
              <a href='#'>Strategy & Architecture</a>
              <a href='#'>Cloud</a>
              <a href='#'>Data & AI</a>
              <a href='#'>Business Apps & Integration</a>
              <a href='#'>Product & Experience</a>
              <a href='#'>Managed Services</a>
            </div>
            <div className='v13-foot-col'>
              <h5>Partners</h5>
              <a href='#'>AWS</a>
              <a href='#'>Microsoft Azure</a>
              <a href='#'>Salesforce</a>
              <a href='#'>Snowflake</a>
              <a href='#'>Databricks</a>
              <a href='#'>Boomi</a>
              <a href='#'>Anthropic</a>
            </div>
          </div>
          <div className='v13-foot-legal'>
            <div className='links'>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Legal</a>
              <a href='#'>Terms of Use</a>
              <a href='#'>Modern Slavery Statement</a>
            </div>
            <div>© 2026 DBiz.ai. All rights reserved.</div>
          </div>
          <p className='v13-foot-acknowledge'>
            We acknowledge the Traditional Custodians of the lands on which we work and live,
            and pay our respects to Elders past, present, and emerging.
          </p>
        </div>
      </footer>
    </>
  )
}
