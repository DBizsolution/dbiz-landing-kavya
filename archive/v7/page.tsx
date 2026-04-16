type Capability = {
  num: string
  name: string
  title: string
  sub: string
  body: string
}

const capabilities: Capability[] = [
  {
    num: '01 — Start here',
    name: 'Strategy & Architecture',
    title: 'Strategy & Architecture',
    sub: 'Futures Studio · TechOffice Foundry',
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture.',
  },
  {
    num: '02 — Cloud',
    name: 'AI-Ready Infrastructure',
    title: 'AI-Ready Infrastructure',
    sub: 'Multi-hyperscaler · Purpose-built',
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments for agents, data pipelines, and AI models — with governance, cost controls, and observability enterprise IT requires.',
  },
  {
    num: '03 — Data & AI',
    name: 'The Intelligence Layer',
    title: 'The Intelligence Layer',
    sub: 'FactWeavers™ · Domain Data Cloud',
    body: 'Every AI initiative stalls on the same thing: the data isn’t ready. FactWeavers™ cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one.',
  },
  {
    num: '04 — Business Apps & Integration',
    name: 'Connected Systems, Not Silos',
    title: 'Connected Systems, Not Silos',
    sub: 'No rip and replace',
    body: 'CRM, ERP, and platform investments don’t need replacing — they need unlocking. We connect existing systems so AI agents can read, write, and act across your entire application landscape.',
  },
  {
    num: '05 — Product & Experience',
    name: 'What People Actually Use',
    title: 'What People Actually Use',
    sub: 'AI-native · Perpetual Engineering',
    body: 'AI-native applications, digital twins, and next-gen experiences that evolve with the business. Designed for the new interaction patterns between humans and agents.',
  },
  {
    num: '06 — Managed Services',
    name: 'AI-First Operations',
    title: 'AI-First Operations',
    sub: 'The team that built it runs it',
    body: 'AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that’s never seen the architecture.',
  },
  {
    num: '07 — Governance',
    name: 'Security & AI Risk',
    title: 'Security & AI Risk',
    sub: 'Built in, not bolted on',
    body: 'Data sovereignty, AI governance frameworks, hallucination risk management, model drift monitoring, and compliance-ready architecture — embedded into every layer from day one.',
  },
]

const stack = [
  {
    label: 'Strategy',
    items: [
      { b: 'Futures Studio', t: 'AI ambition, roadmap & use case prioritisation aligned to measurable business values' },
    ],
  },
  {
    label: 'Architecture',
    items: [
      { b: 'TechOffice Foundry', t: 'AI architecture foundation, governance & standards, Well-Architected review with AI-pillars' },
    ],
  },
  {
    label: 'Cloud',
    items: [
      { b: 'Multi-Cloud AI Foundation', t: 'AWS · Azure · GCP' },
      { b: 'DBiz Canvas', t: 'Concept to code in days' },
    ],
  },
  {
    label: 'Development',
    items: [
      { b: 'Nexus Platform', t: 'Enterprise AI dev environment' },
      { b: 'Perpetual Engineering', t: 'AI agents across the full SDLC' },
    ],
  },
  {
    label: 'Productivity',
    items: [
      { b: 'Claude Cowork & Copilot', t: 'AI-automation for every role' },
      { b: 'AI-Infused BizApps', t: 'Autonomous agents for business execution with SaaS platforms' },
    ],
  },
  {
    label: 'Orchestration',
    items: [
      { b: 'Agent Studio', t: 'Agentic AI and multi-agent orchestration' },
      { b: 'Nexus iConnector', t: 'MCP connectors via Boomi, MuleSoft, Workato — no rip & replace' },
    ],
  },
  {
    label: 'Data & Insights',
    items: [
      { b: 'FactWeavers.ai', t: 'Data democratisation & quick insights with domain data cloud' },
      { b: 'DBiz Compass', t: 'AI-infused data engineering' },
    ],
  },
]

const byIndustry = [
  {
    name: 'Financial Services',
    metric: '38% faster',
    title: 'Credit decisioning in hours, not weeks',
    body: 'Agent-driven risk models cut underwriting cycle time for a tier-1 lender across retail, SME, and corporate books.',
  },
  {
    name: 'Logistics & Fleet',
    metric: '$14M saved',
    title: 'Dispatch, rewritten nightly',
    body: 'A national fleet operator replaced static route planning with agentic scheduling across 12,000 vehicles.',
  },
  {
    name: 'Aged Care',
    metric: '6× throughput',
    title: 'Clinical documentation, automated',
    body: 'Care teams reclaimed hours per shift with voice-to-record agents compliant with regional reporting standards.',
  },
]

const bySolution = [
  {
    name: 'FactWeavers™',
    metric: '11 domains',
    title: 'Industry-ready data cloud',
    body: 'Pre-modelled data products shipped without a six-month clean-up phase.',
  },
  {
    name: 'Agent Studio',
    metric: '40+ agents',
    title: 'Multi-agent orchestration at scale',
    body: 'Cross-system agents running order-to-cash for a Fortune 500 manufacturer.',
  },
  {
    name: 'DBiz Canvas',
    metric: '5 days',
    title: 'Concept to working build',
    body: 'Product teams move from brief to production code inside a single sprint.',
  },
]

const byTechnology = [
  {
    name: 'Cloud & AI',
    metric: 'AWS · Azure · GCP',
    title: 'Advanced · Solutions · Partner',
    body: '40+ AWS certified experts across the practice.',
  },
  {
    name: 'Data Platforms',
    metric: 'Snowflake · Databricks',
    title: 'Fabric · BigQuery',
    body: 'FactWeavers™ built on top of modern data platforms.',
  },
  {
    name: 'Integration',
    metric: 'Boomi · MuleSoft',
    title: 'Workato · n8n',
    body: 'No rip & replace. Connect what already exists.',
  },
  {
    name: 'Business Apps',
    metric: 'Salesforce · D365',
    title: 'Power Platform',
    body: '200+ Microsoft certifications across the team.',
  },
]

const phases = [
  {
    days: '5 Days',
    title: 'Align & Assess',
    body: 'Leadership aligned on AI ambition. Architecture assessed. Readiness gaps surfaced. A costed roadmap and evidence to make investment decisions.',
    outcome: 'Board-aligned AI roadmap.',
  },
  {
    days: '15 Days',
    title: 'Specify & Validate',
    body: 'System specification generated. Data foundations validated. Working system shipped and tested with real users in your environment.',
    outcome: 'Validated MVP in production.',
  },
  {
    days: '90 Days',
    title: 'Industrialise & Scale',
    body: 'Enterprise-grade system live. Agents deployed. Data democratised. Operations handed to the team that built it.',
    outcome: 'Frontier Organisation operational.',
  },
]

const whyReasons = [
  {
    title: 'Expertise that works together.',
    body: 'Strategy, cloud, data, platforms, product, design, operations — our teams work across every layer, not within silos. Your transformation is shaped by people who understand the full picture, not just their corner of it.',
  },
  {
    title: 'Transformation at scale.',
    body: '50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery — not a pitch deck.',
  },
  {
    title: 'Time-boxed delivery. Every engagement.',
    body: 'Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don’t allow it.',
  },
  {
    title: 'Production platforms. Not presentations.',
    body: 'NEXUS, Agent Studio, FactWeavers™, DBiz Canvas — production systems deployed in enterprise environments. We recommend what we’ve already built.',
  },
]

const trustRoster = [
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

export default function V7Page() {
  return (
    <>
      <nav className='v7-nav'>
        <div className='v7-logo'>
          dbiz<span>.ai</span>
        </div>
        <ul className='v7-nav-links'>
          <li><a href='#solutions'>Our Solutions</a></li>
          <li><a href='#work'>Our Work</a></li>
          <li><a href='#about'>About Us</a></li>
          <li><a href='#careers'>Careers</a></li>
        </ul>
        <a href='#contact' className='v7-nav-cta'>Get an assessment</a>
      </nav>

      {/* HERO */}
      <section className='v7-tile navy v7-hero'>
        <span className='v7-plaque'>Sec. 01 / Monument</span>
        <span className='v7-plaque-r'>DBiz.ai — MMXXVI</span>
        <div>
          <div className='v7-hero-kicker'>Human-Led · Agent-Operated · Data-Powered</div>
          <h1 className='v7-hero-display'>
            <span className='line'>Your enterprise.</span>
            <span className='line italic'>Agent-operated.</span>
            <span className='line'>Starting now.</span>
          </h1>
        </div>
        <div className='v7-hero-foot'>
          <p className='v7-hero-body'>
            Most enterprises have tried AI. Most of it didn’t scale — not because the technology failed, but because no one connected the ambition to what actually got built. We close that gap. We call the result a Frontier Organisation: human-led, agent-operated, data-powered.
          </p>
          <div className='v7-hero-ctas'>
            <a href='#contact' className='v7-btn'>
              Get an architecture assessment →
            </a>
            <a href='#contact' className='v7-textlink'>Or talk to our team</a>
          </div>
        </div>
        <span className='v7-plaque-br'>Plate 01 / 10</span>
      </section>

      {/* TRUST */}
      <section className='v7-tile warm v7-trust'>
        <span className='v7-plaque'>Sec. 02 / Roster</span>
        <span className='v7-plaque-r'>50+ / 6</span>
        <div className='v7-trust-lead'>Trusted by 50+ enterprises across 6 countries</div>
        <div className='v7-trust-roster'>
          {trustRoster.map((name, i) => (
            <span key={name}>
              {name}
              {i < trustRoster.length - 1 ? ' ·' : ''}
            </span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className='v7-tile orange'>
        <span className='v7-plaque'>Sec. 03 / Numbers</span>
        <span className='v7-plaque-r'>In Figures</span>
        <div className='v7-stats-title'>By the numbers</div>
        <div className='v7-stats-grid'>
          <div className='v7-stat'>
            <div className='num'>10+</div>
            <div className='label'>Years enterprise delivery</div>
          </div>
          <div className='v7-stat'>
            <div className='num'>50+</div>
            <div className='label'>Enterprise clients</div>
          </div>
          <div className='v7-stat'>
            <div className='num'>150+</div>
            <div className='label'>AI solutions in production</div>
          </div>
          <div className='v7-stat'>
            <div className='num'>11</div>
            <div className='label'>Industries</div>
          </div>
          <div className='v7-stat'>
            <div className='num'>6</div>
            <div className='label'>Countries</div>
          </div>
        </div>
      </section>

      {/* AI GAP */}
      <section className='v7-tile navy' id='solutions'>
        <span className='v7-plaque'>Sec. 04 / The Gap</span>
        <span className='v7-plaque-r'>7 Capabilities</span>
        <h2 className='v7-head'>
          The AI gap every enterprise hits.
          <em>And how we close it.</em>
        </h2>
        <p className='v7-lead'>
          We translate your priorities into an AI and technology roadmap. Then deliver against it — across every layer, with industry-leading partners at each step. Engage us for one capability or the full transformation.
        </p>
        <div className='v7-cap-grid'>
          {capabilities.map((cap) => (
            <div key={cap.num} className='v7-cap'>
              <div className='num'>{cap.num}</div>
              <h3>{cap.title}</h3>
              <div className='sub'>{cap.sub}</div>
              <p>{cap.body}</p>
            </div>
          ))}
        </div>
        <div className='v7-frontier-badge'>▲ The Frontier Organisation</div>
      </section>

      {/* STACK */}
      <section className='v7-tile warm'>
        <span className='v7-plaque'>Sec. 05 / Stack</span>
        <span className='v7-plaque-r'>No gaps</span>
        <h2 className='v7-head'>
          DBiz AI Transformation Stack
          <em>No capability gaps. No vendor lock-in.</em>
        </h2>
        <div className='v7-stack-rows'>
          {stack.map((row) => (
            <div key={row.label} className='v7-stack-row'>
              <div className='label'>{row.label}</div>
              <div className='items'>
                {row.items.map((item, i) => (
                  <div key={i}>
                    <b>{item.b}</b>
                    {item.t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROVEN */}
      <section className='v7-tile navy' id='work'>
        <span className='v7-plaque'>Sec. 06 / Proven</span>
        <span className='v7-plaque-r'>50+ deployments</span>
        <h2 className='v7-head'>
          Proven
          <em>where it matters.</em>
        </h2>
        <p className='v7-lead'>50+ enterprise deployments across 11 industries.</p>

        <div className='v7-proven-group'>
          <h4>By Industry</h4>
          <div className='v7-proven-grid'>
            {byIndustry.map((c) => (
              <div key={c.name} className='v7-proven-card'>
                <div className='name'>{c.name}</div>
                <div className='metric'>{c.metric}</div>
                <h5>{c.title}</h5>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='v7-proven-group'>
          <h4>By Solution</h4>
          <div className='v7-proven-grid'>
            {bySolution.map((c) => (
              <div key={c.name} className='v7-proven-card'>
                <div className='name'>{c.name}</div>
                <div className='metric'>{c.metric}</div>
                <h5>{c.title}</h5>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='v7-proven-group'>
          <h4>By Technology</h4>
          <div className='v7-proven-grid four'>
            {byTechnology.map((c) => (
              <div key={c.name} className='v7-proven-card'>
                <div className='name'>{c.name}</div>
                <div className='metric'>{c.metric}</div>
                <h5>{c.title}</h5>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
          <div className='v7-ai-bar'>
            <div className='title'>AI Models</div>
            <div className='models'>Claude · GPT · Gemini · Bedrock · Azure OpenAI · Vertex AI</div>
            <span className='tag'>Multi-model by design — agents run on the best model for each task.</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className='v7-tile orange v7-testimonial'>
        <span className='v7-plaque'>Sec. 07 / Voice</span>
        <span className='v7-plaque-r'>Client</span>
        <span className='v7-quote-mark'>“</span>
        <p className='v7-quote'>
          DBiz didn’t sell us a roadmap. They delivered one — with the system live in production while the rest of the market was still running POCs.
        </p>
        <div className='v7-attrib'>
          <b>Priya Nair</b> — Chief Data & AI Officer, Southern Cross Logistics
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className='v7-tile navy'>
        <span className='v7-plaque'>Sec. 08 / Cadence</span>
        <span className='v7-plaque-r'>Time-boxed</span>
        <h2 className='v7-head'>
          How we work.
          <em>Built for pace, not paperwork.</em>
        </h2>
        <p className='v7-lead'>
          Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated early.
        </p>
        <div className='v7-phases'>
          {phases.map((p) => (
            <div key={p.days} className='v7-phase'>
              <div className='days'>{p.days}</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
              <div className='outcome'>{p.outcome}</div>
            </div>
          ))}
        </div>
        <div className='v7-phases-foot'>
          Timelines are benchmarks based on 50+ enterprise engagements. Scope varies by environment.
        </div>
      </section>

      {/* WHY DBIZ */}
      <section className='v7-tile warm' id='about'>
        <span className='v7-plaque'>Sec. 09 / Why DBiz</span>
        <span className='v7-plaque-r'>Partners & Depth</span>
        <h2 className='v7-head'>
          Why enterprises
          <em>choose DBiz.</em>
        </h2>
        <div className='v7-why-grid'>
          {whyReasons.map((r) => (
            <div key={r.title} className='v7-why'>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
        <div className='v7-partner-row'>
          <div>
            <h4>Enterprise Partnerships</h4>
            <p>Certified at the highest tiers with the industry’s leading technology providers.</p>
            <div className='list'>
              AWS Advanced · Azure Solutions · Salesforce · Dynamics 365 · Snowflake · Databricks · Anthropic · Boomi · MuleSoft
            </div>
          </div>
          <div>
            <h4>Domain Depth</h4>
            <p>Deep sector expertise shaped by 150+ enterprise engagements.</p>
            <div className='list'>
              Financial Services · Logistics & Fleet · Real Estate · Aged Care · Automotive · Government · Retail · Construction · Manufacturing
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className='v7-tile navy v7-final' id='contact'>
        <span className='v7-plaque'>Sec. 10 / Contact</span>
        <span className='v7-plaque-r'>Start here</span>
        <h2>
          Your Frontier Organisation
          <em>starts with a conversation.</em>
        </h2>
        <p>One partner. Full stack. No handoff.</p>
        <div className='v7-final-ctas'>
          <a href='#' className='v7-btn'>Contact us →</a>
          <a href='#' className='v7-textlink'>Or get an architecture assessment</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='v7-footer'>
        <div className='v7-foot-top'>
          <div className='v7-foot-brand'>
            <div className='v7-logo'>
              dbiz<span>.ai</span>
            </div>
            <div className='tag'>Human-Led | Agent-Operated | Data-Powered</div>
            <div className='meta'>10 offices · 6 countries · 800+ people</div>
          </div>
          <div className='v7-foot-col'>
            <h5>Company</h5>
            <a href='#'>About Us</a>
            <a href='#'>Our Work</a>
            <a href='#'>Careers</a>
            <a href='#'>Contact Us</a>
            <a href='#'>Blog</a>
          </div>
          <div className='v7-foot-col'>
            <h5>Solutions</h5>
            <a href='#'>Strategy & Architecture</a>
            <a href='#'>Cloud</a>
            <a href='#'>Data & AI</a>
            <a href='#'>Business Apps & Integration</a>
            <a href='#'>Product & Experience</a>
            <a href='#'>Managed Services</a>
          </div>
          <div className='v7-foot-col'>
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
        <div className='v7-foot-legal'>
          <div>Privacy Policy · Legal · Terms of Use · Modern Slavery Statement</div>
          <div>© 2026 DBiz.ai. All rights reserved.</div>
        </div>
        <div className='v7-foot-ack'>
          We acknowledge the Traditional Custodians of the lands on which we work and live, and pay our respects to Elders past, present, and emerging.
        </div>
      </footer>
    </>
  )
}
