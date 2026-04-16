import Link from 'next/link'

type Capability = {
  num: string
  kicker: string
  title: string
  sub: string
  body: string
}

const capabilities: Capability[] = [
  {
    num: '01',
    kicker: 'Start here',
    title: 'Strategy & Architecture',
    sub: 'Futures Studio · TechOffice Foundry',
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture.',
  },
  {
    num: '02',
    kicker: 'Cloud',
    title: 'AI-Ready Infrastructure',
    sub: 'Multi-hyperscaler · Purpose-built',
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments for agents, data pipelines, and AI models — with governance, cost controls, and observability enterprise IT requires.',
  },
  {
    num: '03',
    kicker: 'Data & AI',
    title: 'The Intelligence Layer',
    sub: 'FactWeavers™ · Domain Data Cloud',
    body: 'Every AI initiative stalls on the same thing: the data isn\u2019t ready. FactWeavers™ cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one.',
  },
  {
    num: '04',
    kicker: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    sub: 'No rip and replace',
    body: 'CRM, ERP, and platform investments don\u2019t need replacing — they need unlocking. We connect existing systems so AI agents can read, write, and act across your entire application landscape.',
  },
  {
    num: '05',
    kicker: 'Product & Experience',
    title: 'What People Actually Use',
    sub: 'AI-native · Perpetual Engineering',
    body: 'AI-native applications, digital twins, and next-gen experiences that evolve with the business. Designed for the new interaction patterns between humans and agents.',
  },
  {
    num: '06',
    kicker: 'Managed Services',
    title: 'AI-First Operations',
    sub: 'The team that built it runs it',
    body: 'AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.',
  },
  {
    num: '07',
    kicker: 'Governance',
    title: 'Security & AI Risk',
    sub: 'Built in, not bolted on',
    body: 'Data sovereignty, AI governance frameworks, hallucination risk management, model drift monitoring, and compliance-ready architecture — embedded into every layer from day one.',
  },
]

type StackRow = {
  num: string
  label: string
  entries: { strong: string; desc: string }[]
}

const stack: StackRow[] = [
  {
    num: '01',
    label: 'Strategy',
    entries: [
      {
        strong: 'Futures Studio',
        desc: 'AI ambition, roadmap & use case prioritisation aligned to measurable business values.',
      },
    ],
  },
  {
    num: '02',
    label: 'Architecture',
    entries: [
      {
        strong: 'TechOffice Foundry',
        desc: 'AI architecture foundation, governance & standards, Well-Architected review with AI-pillars.',
      },
    ],
  },
  {
    num: '03',
    label: 'Cloud',
    entries: [
      { strong: 'Multi-Cloud AI Foundation', desc: 'AWS · Azure · GCP.' },
      { strong: 'DBiz Canvas', desc: 'Concept to code in days.' },
    ],
  },
  {
    num: '04',
    label: 'Development',
    entries: [
      { strong: 'Nexus Platform', desc: 'Enterprise AI development environment.' },
      { strong: 'Perpetual Engineering', desc: 'AI agents across the full SDLC.' },
    ],
  },
  {
    num: '05',
    label: 'Productivity',
    entries: [
      { strong: 'Claude Cowork & Copilot', desc: 'AI-automation for every role.' },
      { strong: 'AI-Infused BizApps', desc: 'Autonomous agents for business execution with SaaS platforms.' },
    ],
  },
  {
    num: '06',
    label: 'Orchestration',
    entries: [
      { strong: 'Agent Studio', desc: 'Agentic AI and multi-agent orchestration.' },
      { strong: 'Nexus iConnector', desc: 'MCP connectors via Boomi, MuleSoft, Workato — no rip & replace.' },
    ],
  },
  {
    num: '07',
    label: 'Data & Insights',
    entries: [
      { strong: 'FactWeavers.ai', desc: 'Data democratisation & quick insights with domain data cloud.' },
      { strong: 'DBiz Compass', desc: 'AI-infused data engineering.' },
    ],
  },
]

const partnerRoster = [
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
  { figure: '10+', label: 'Years enterprise delivery' },
  { figure: '50+', label: 'Enterprise clients' },
  { figure: '150+', label: 'AI solutions in production' },
  { figure: '11', label: 'Industries' },
  { figure: '6', label: 'Countries' },
]

export default function V6Page() {
  return (
    <>
      {/* ====== MASTHEAD ====== */}
      <header className='v8-masthead v8-container'>
        <div className='v8-masthead-top'>
          <div className='left'>Vol. I · Edition 01</div>
          <div className='center'>Enterprise Intelligence Quarterly</div>
          <div className='right'>Human-Led · Agent-Operated · Data-Powered</div>
        </div>
        <hr className='v8-rule' />
        <nav className='v8-nav'>
          <Link href='/' className='v8-logo'>
            dbiz<em>.ai</em>
          </Link>
          <ul className='v8-nav-links'>
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
          <a href='#contact' className='v8-nav-cta'>
            Get an assessment
          </a>
        </nav>
        <div className='v8-rule-triple'>
          <span />
        </div>
      </header>

      {/* ====== HERO ====== */}
      <section className='v8-hero v8-container'>
        <div className='v8-hero-kicker'>Human-Led · Agent-Operated · Data-Powered</div>
        <h1>
          Your enterprise. <em>Agent-operated.</em> Starting now.
        </h1>
        <div className='v8-hero-standfirst'>
          <p className='v8-hero-deck'>
            Most enterprises have tried AI. Most of it didn&rsquo;t scale — not because the
            technology failed, but because no one connected the ambition to what actually got
            built. We close that gap. We call the result a Frontier Organisation: human-led,
            agent-operated, data-powered.
          </p>
        </div>
        <div className='v8-hero-byline'>
          <a href='#contact' className='v8-btn v8-btn-accent'>
            Get an architecture assessment →
          </a>
          <a href='#contact' className='v8-link'>
            Or talk to our team
          </a>
        </div>
        <div className='v8-hero-caption'>Fig. 01 — The Frontier Organisation, front page</div>
      </section>

      {/* ====== TRUST STRIP ====== */}
      <section className='v8-container'>
        <div className='v8-trust'>
          <div className='v8-trust-label'>
            Trusted by 50+ enterprises across 6 countries
          </div>
          <div className='v8-trust-roster'>
            {partnerRoster.map((p, i) => (
              <span key={p}>
                {p}
                {i < partnerRoster.length - 1 && <span className='sep'>·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className='v8-container'>
        <div className='v8-stats'>
          {stats.map((s) => (
            <div key={s.label} className='v8-stat'>
              <div className='v8-stat-figure'>{s.figure}</div>
              <div className='v8-stat-label'>{s.label}</div>
            </div>
          ))}
        </div>
        <hr className='v8-rule' />
      </section>

      {/* ====== THE AI GAP ====== */}
      <section className='v8-section v8-feature v8-container' id='solutions'>
        <div className='v8-section-head'>
          <div>
            <div className='v8-kicker'>Feature · The AI Gap</div>
            <h2 className='v8-h2'>
              The AI gap every enterprise hits. <em>And how we close it.</em>
            </h2>
          </div>
          <p className='v8-dropcap'>
            We translate your priorities into an AI and technology roadmap. Then deliver
            against it — across every layer, with industry-leading partners at each step.
            Engage us for one capability or the full transformation.
          </p>
        </div>

        <div className='v8-cap-grid'>
          {capabilities.map((cap) => (
            <article key={cap.num} className='v8-cap-item'>
              <div className='v8-cap-num'>{cap.num}</div>
              <div className='v8-cap-body'>
                <span className='kicker'>{cap.kicker}</span>
                <h3>{cap.title}</h3>
                <span className='sub'>{cap.sub}</span>
                <p>{cap.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className='v8-feature-badge'>▲ The Frontier Organisation</div>
      </section>

      {/* ====== TRANSFORMATION STACK ====== */}
      <section className='v8-section v8-stack v8-container'>
        <div className='v8-section-head'>
          <div>
            <div className='v8-kicker'>Chart · The Transformation Stack</div>
            <h2 className='v8-h2'>
              No capability gaps. <em>No vendor lock-in.</em>
            </h2>
          </div>
        </div>

        <div className='v8-chart'>
          <div className='v8-chart-head'>
            <div>Layer</div>
            <div>Platforms & Capabilities</div>
          </div>
          {stack.map((row) => (
            <div key={row.num} className='v8-chart-row'>
              <div className='v8-chart-label'>
                <span className='num'>{row.num}</span>
                {row.label}
              </div>
              <div className='v8-chart-content'>
                {row.entries.map((e) => (
                  <div key={e.strong} className='v8-chart-entry'>
                    <strong>{e.strong}</strong>
                    <span>{e.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== PROVEN ====== */}
      <section className='v8-section v8-container' id='work'>
        <div className='v8-section-head'>
          <div>
            <div className='v8-kicker'>Evidence · Case Studies</div>
            <h2 className='v8-h2'>
              Proven <em>where it matters.</em>
            </h2>
            <p className='v8-lead' style={{ marginTop: 20 }}>
              50+ enterprise deployments across 11 industries. What follows is a short ledger of
              work delivered into production — by sector, by solution, and by technology stack.
            </p>
          </div>
        </div>

        {/* By industry */}
        <div className='v8-proven-group'>
          <div className='v8-proven-label'>By Industry</div>
          <div className='v8-case-grid'>
            <article className='v8-case'>
              <div className='v8-case-meta'>
                <span className='v8-case-sector'>Financial Services</span>
                <span className='v8-case-figure'>38% faster</span>
              </div>
              <h4>Credit decisioning in hours, not weeks</h4>
              <p>
                Agent-driven risk models cut underwriting cycle time for a tier-1 lender across
                retail, SME, and corporate books.
              </p>
            </article>
            <article className='v8-case'>
              <div className='v8-case-meta'>
                <span className='v8-case-sector'>Logistics & Fleet</span>
                <span className='v8-case-figure'>$14M saved</span>
              </div>
              <h4>Dispatch, rewritten nightly</h4>
              <p>
                A national fleet operator replaced static route planning with agentic scheduling
                across 12,000 vehicles.
              </p>
            </article>
            <article className='v8-case'>
              <div className='v8-case-meta'>
                <span className='v8-case-sector'>Aged Care</span>
                <span className='v8-case-figure'>6× throughput</span>
              </div>
              <h4>Clinical documentation, automated</h4>
              <p>
                Care teams reclaimed hours per shift with voice-to-record agents compliant with
                regional reporting standards.
              </p>
            </article>
          </div>
        </div>

        {/* By solution */}
        <div className='v8-proven-group'>
          <div className='v8-proven-label'>By Solution</div>
          <div className='v8-case-grid'>
            <article className='v8-case'>
              <div className='v8-case-meta'>
                <span className='v8-case-sector'>FactWeavers™</span>
                <span className='v8-case-figure'>11 domains</span>
              </div>
              <h4>Industry-ready data cloud</h4>
              <p>Pre-modelled data products shipped without a six-month clean-up phase.</p>
            </article>
            <article className='v8-case'>
              <div className='v8-case-meta'>
                <span className='v8-case-sector'>Agent Studio</span>
                <span className='v8-case-figure'>40+ agents</span>
              </div>
              <h4>Multi-agent orchestration at scale</h4>
              <p>Cross-system agents running order-to-cash for a Fortune 500 manufacturer.</p>
            </article>
            <article className='v8-case'>
              <div className='v8-case-meta'>
                <span className='v8-case-sector'>DBiz Canvas</span>
                <span className='v8-case-figure'>5 days</span>
              </div>
              <h4>Concept to working build</h4>
              <p>Product teams move from brief to production code inside a single sprint.</p>
            </article>
          </div>
        </div>

        {/* By technology */}
        <div className='v8-proven-group'>
          <div className='v8-proven-label'>By Technology</div>
          <div className='v8-case-grid cols-4'>
            <article className='v8-case'>
              <div className='v8-case-meta'>
                <span className='v8-case-sector'>Cloud & AI</span>
                <span className='v8-case-figure'>40+</span>
              </div>
              <h4>AWS · Azure · GCP</h4>
              <p>
                AWS Advanced, Azure Solutions, GCP. 40+ AWS certified experts across the
                practice.
              </p>
            </article>
            <article className='v8-case'>
              <div className='v8-case-meta'>
                <span className='v8-case-sector'>Data Platforms</span>
                <span className='v8-case-figure'>Core</span>
              </div>
              <h4>Snowflake · Databricks · Fabric · BigQuery</h4>
              <p>FactWeavers™ built on top of every modern data platform in the enterprise.</p>
            </article>
            <article className='v8-case'>
              <div className='v8-case-meta'>
                <span className='v8-case-sector'>Integration</span>
                <span className='v8-case-figure'>iPaaS</span>
              </div>
              <h4>Boomi · MuleSoft · Workato · n8n</h4>
              <p>No rip & replace. Connect existing platforms so agents can operate across them.</p>
            </article>
            <article className='v8-case'>
              <div className='v8-case-meta'>
                <span className='v8-case-sector'>Business Apps</span>
                <span className='v8-case-figure'>200+</span>
              </div>
              <h4>Salesforce · Dynamics 365 · Power Platform</h4>
              <p>200+ Microsoft certifications and deep Salesforce delivery experience.</p>
            </article>
          </div>

          <div className='v8-models-bar'>
            <div className='label'>AI Models</div>
            <div className='list'>
              Claude · GPT · Gemini · Bedrock · Azure OpenAI · Vertex AI
              <em>Multi-model by design — agents run on the best model for each task.</em>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PULL QUOTE ====== */}
      <section className='v8-pullquote'>
        <div className='v8-container'>
          <blockquote>
            DBiz didn&rsquo;t sell us a roadmap. They delivered one — with the system live in
            production while the rest of the market was still running POCs.
          </blockquote>
          <cite>Priya Nair · Chief Data & AI Officer, Southern Cross Logistics</cite>
        </div>
      </section>

      {/* ====== HOW WE WORK ====== */}
      <section className='v8-section v8-container'>
        <div className='v8-section-head'>
          <div>
            <div className='v8-kicker'>Cadence · How We Work</div>
            <h2 className='v8-h2'>
              How we work. <em>Built for pace, not paperwork.</em>
            </h2>
            <p className='v8-lead' style={{ marginTop: 20 }}>
              Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated
              early. Three horizons — five days, fifteen days, ninety days — each with a fixed
              outcome and a hand-off point.
            </p>
          </div>
        </div>

        <div className='v8-cadence-grid'>
          <div className='v8-cadence-step'>
            <div className='v8-cadence-days'>
              5<sup>Days</sup>
            </div>
            <h4>Align & Assess</h4>
            <p>
              Leadership aligned on AI ambition. Architecture assessed. Readiness gaps surfaced.
              A costed roadmap and evidence to make investment decisions.
            </p>
            <div className='outcome'>◇ Board-aligned AI roadmap</div>
          </div>
          <div className='v8-cadence-step'>
            <div className='v8-cadence-days'>
              15<sup>Days</sup>
            </div>
            <h4>Specify & Validate</h4>
            <p>
              System specification generated. Data foundations validated. Working system shipped
              and tested with real users in your environment.
            </p>
            <div className='outcome'>◇ Validated MVP in production</div>
          </div>
          <div className='v8-cadence-step'>
            <div className='v8-cadence-days'>
              90<sup>Days</sup>
            </div>
            <h4>Industrialise & Scale</h4>
            <p>
              Enterprise-grade system live. Agents deployed. Data democratised. Operations
              handed to the team that built it.
            </p>
            <div className='outcome'>◇ Frontier Organisation operational</div>
          </div>
        </div>
        <div className='v8-cadence-foot'>
          † Timelines are benchmarks based on 50+ enterprise engagements. Scope varies by
          environment.
        </div>
      </section>

      {/* ====== WHY DBIZ ====== */}
      <section className='v8-section v8-container' id='about'>
        <div className='v8-section-head'>
          <div>
            <div className='v8-kicker'>Op-ed · Why DBiz</div>
            <h2 className='v8-h2'>
              Why enterprises <em>choose DBiz.</em>
            </h2>
          </div>
        </div>

        <div className='v8-why-grid'>
          <div className='v8-why-item'>
            <h4>Expertise that works together.</h4>
            <p>
              Strategy, cloud, data, platforms, product, design, operations — our teams work
              across every layer, not within silos. Your transformation is shaped by people who
              understand the full picture, not just their corner of it.
            </p>
          </div>
          <div className='v8-why-item'>
            <h4>Transformation at scale.</h4>
            <p>
              50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of
              enterprise delivery — not a pitch deck.
            </p>
          </div>
          <div className='v8-why-item'>
            <h4>Time-boxed delivery. Every engagement.</h4>
            <p>
              Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we
              don&rsquo;t allow it.
            </p>
          </div>
          <div className='v8-why-item'>
            <h4>Production platforms. Not presentations.</h4>
            <p>
              NEXUS, Agent Studio, FactWeavers™, DBiz Canvas — production systems deployed in
              enterprise environments. We recommend what we&rsquo;ve already built.
            </p>
          </div>
        </div>

        <div className='v8-partners-row'>
          <div className='v8-partners-col'>
            <h5>Enterprise Partnerships</h5>
            <p>Certified at the highest tiers with the industry&rsquo;s leading technology providers.</p>
            <div className='list'>
              AWS Advanced<span className='sep'>·</span>Azure Solutions
              <span className='sep'>·</span>Salesforce<span className='sep'>·</span>Dynamics 365
              <span className='sep'>·</span>Snowflake<span className='sep'>·</span>Databricks
              <span className='sep'>·</span>Anthropic<span className='sep'>·</span>Boomi
              <span className='sep'>·</span>MuleSoft
            </div>
          </div>
          <div className='v8-partners-col'>
            <h5>Domain Depth</h5>
            <p>Deep sector expertise shaped by 150+ enterprise engagements.</p>
            <div className='list'>
              Financial Services<span className='sep'>·</span>Logistics & Fleet
              <span className='sep'>·</span>Real Estate<span className='sep'>·</span>Aged Care
              <span className='sep'>·</span>Automotive<span className='sep'>·</span>Government
              <span className='sep'>·</span>Retail<span className='sep'>·</span>Construction
              <span className='sep'>·</span>Manufacturing
            </div>
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className='v8-final' id='contact'>
        <div className='v8-container'>
          <h2>
            Your Frontier Organisation <em>starts with a conversation.</em>
          </h2>
          <p>One partner · Full stack · No handoff</p>
          <div className='v8-final-ctas'>
            <a href='#contact' className='v8-btn v8-btn-accent'>
              Contact us →
            </a>
            <a href='#contact' className='v8-link'>
              Or get an architecture assessment
            </a>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className='v8-footer' id='careers'>
        <div className='v8-container'>
          <div className='v8-foot-top'>
            <div className='v8-foot-brand'>
              <div className='v8-logo'>
                dbiz<em>.ai</em>
              </div>
              <p>Human-Led | Agent-Operated | Data-Powered</p>
              <div className='meta'>10 offices · 6 countries · 800+ people</div>
            </div>
            <div className='v8-foot-col'>
              <h6>Company</h6>
              <a href='#about'>About Us</a>
              <a href='#work'>Our Work</a>
              <a href='#careers'>Careers</a>
              <a href='#contact'>Contact Us</a>
              <a href='#'>Blog</a>
            </div>
            <div className='v8-foot-col'>
              <h6>Solutions</h6>
              <a href='#'>Strategy & Architecture</a>
              <a href='#'>Cloud</a>
              <a href='#'>Data & AI</a>
              <a href='#'>Business Apps & Integration</a>
              <a href='#'>Product & Experience</a>
              <a href='#'>Managed Services</a>
            </div>
            <div className='v8-foot-col'>
              <h6>Partners</h6>
              <a href='#'>AWS</a>
              <a href='#'>Microsoft Azure</a>
              <a href='#'>Salesforce</a>
              <a href='#'>Snowflake</a>
              <a href='#'>Databricks</a>
              <a href='#'>Boomi</a>
              <a href='#'>Anthropic</a>
            </div>
          </div>
          <div className='v8-foot-ack'>
            We acknowledge the Traditional Custodians of the lands on which we work and live, and
            pay our respects to Elders past, present, and emerging.
          </div>
          <div className='v8-foot-bottom'>
            <div>© 2026 DBiz.ai. All rights reserved.</div>
            <div>Privacy Policy · Legal · Terms of Use · Modern Slavery Statement</div>
          </div>
        </div>
      </footer>
    </>
  )
}
