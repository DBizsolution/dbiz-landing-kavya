'use client'

import { useState } from 'react'
import { Icon } from '@/components/icon'

const layers = [
  {
    num: '01',
    title: 'Strategy & Architecture',
    headline: 'Business priorities become an',
    headlineAccent: 'executable roadmap.',
    body: 'Readiness assessment, architecture blueprint, data governance and security posture — before a single line of code gets written. Investment alignment is the difference between experiment and execution.',
    tags: ['Futures Studio', 'Competitive Posture', 'AI Readiness', 'Well-Architected'],
    icon: 'ph:polygon',
  },
  {
    num: '02',
    title: 'AI-Ready Infrastructure',
    headline: 'Cloud built',
    headlineAccent: 'for agents,',
    headlineSuffix: 'not retrofitted for them.',
    body: 'Environments purpose-built for agents, data pipelines, and frontier models — with the governance, cost controls, and observability enterprise IT actually requires.',
    tags: ['AWS · Azure · GCP', 'AI-Optimised', 'Cost Controls', 'Fleet Compute'],
    icon: 'ph:hexagon',
  },
  {
    num: '03',
    title: 'The Intelligence Layer',
    headline: 'Every AI initiative stalls on',
    headlineAccent: 'the same thing.',
    body: 'The data isn\u2019t ready. FactWeavers\u2122 cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one.',
    tags: ['FactWeavers\u2122', 'Domain Models', 'Data Activation', 'Agent-Ready'],
    icon: 'ph:diamond',
  },
  {
    num: '04',
    title: 'Connected Systems',
    headline: 'Your systems don\u2019t need replacing —',
    headlineAccent: 'they need unlocking.',
    body: 'CRM, ERP, and platform investments connected so AI agents can read, write, and act across your entire application landscape. No rip and replace.',
    tags: ['CRM & ERP', 'Agent Studio', 'MCP Connectors', 'No Rip & Replace'],
    icon: 'ph:octagon',
  },
  {
    num: '05',
    title: 'Product & Experience',
    headline: 'Designed for the new interaction between',
    headlineAccent: 'humans and agents.',
    body: 'AI-native applications, digital twins, and next-gen experiences that evolve with the business. Perpetual engineering means the product never stops improving.',
    tags: ['Digital Twins', 'AI-Native Apps', 'Perpetual Engineering', 'Agent UX'],
    icon: 'ph:triangle',
  },
  {
    num: '06',
    title: 'AI-First Operations',
    headline: 'The team that built it',
    headlineAccent: 'runs it.',
    body: 'AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.',
    tags: ['24/7 Ops', 'Continuous Improvement', 'AI Governance', 'Drift Detection'],
    icon: 'ph:circle',
  },
]

export function LayersSection() {
  const [active, setActive] = useState(0)
  const current = layers[active]

  return (
    <section className='v13-section' id='solutions'>
      <div className='v13-container'>
        <div className='v13-section-head'>
          <div className='v13-kicker'>[B·01] What we do</div>
          <h2>
            Six layers. <em>One partner.</em> No handoff.
          </h2>
          <p className='lead'>
            Every enterprise transformation stalls at the seams between strategy,
            data, and delivery. We work across every layer — not within silos.
          </p>
        </div>

        <div className='v13-layers'>
          <nav className='v13-layers-nav'>
            {layers.map((layer, i) => (
              <button
                key={layer.num}
                className={`v13-layers-tab${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className='num'>{layer.num}</span>
                <span className='label'>{layer.title}</span>
              </button>
            ))}
          </nav>

          <div className='v13-layers-content' key={current.num}>
            <div className='v13-layers-detail'>
              <h3>
                {current.headline}{' '}
                <em>{current.headlineAccent}</em>
                {'headlineSuffix' in current && current.headlineSuffix ? ` ${current.headlineSuffix}` : ''}
              </h3>
              <p>{current.body}</p>
              <div className='v13-layers-tags'>
                {current.tags.map((tag) => (
                  <span key={tag} className='v13-layers-tag'>{tag}</span>
                ))}
              </div>
            </div>

            <div className='v13-layers-icon'>
              <div className='v13-layers-icon-ring'>
                <Icon icon={current.icon} width={64} />
              </div>
            </div>
          </div>
        </div>

        <div className='v13-caps-badge'>▲ The Frontier Organisation</div>
      </div>
    </section>
  )
}
