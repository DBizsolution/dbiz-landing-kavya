import type { IconName } from '../_components/GeometricIcon'

export type CapabilityTab = 'industry' | 'solution' | 'technology'

export type CapabilityCard = {
  coord: string
  tab: CapabilityTab
  pill: string
  title: string
  icon: IconName
  body: string
  meta: string
  image?: string
}

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=60`

export const pillsByTab: Record<CapabilityTab, readonly string[]> = {
  industry: ['All', 'Financial Services', 'Logistics', 'Real Estate', 'Aged Care', 'Retail', 'Public Sector', 'Banking', 'Insurance'],
  solution: ['All', 'Data Platform', 'Agentic AI', 'Delivery', 'Navigation', 'Orchestration', 'Managed'],
  technology: ['All', 'Cloud', 'Data Platforms', 'Integration', 'Business Apps', 'AI Models', 'Security'],
} as const

export const capabilities: readonly CapabilityCard[] = [
  { coord: 'K·01', tab: 'industry', pill: 'Financial Services', title: 'Financial Services', icon: 'strategy', body: '11 domains modernized across a global insurer, cycle times down 38%.', meta: '38% faster cycle time', image: unsplash('1642543492481-44e81e3914a7') },
  { coord: 'K·02', tab: 'industry', pill: 'Logistics', title: 'Logistics & Fleet', icon: 'transformation', body: '$14M saved in year one through agent-operated routing.', meta: '$14M saved · Southern Cross', image: unsplash('1494412651409-8963ce7935a7') },
  { coord: 'K·03', tab: 'industry', pill: 'Real Estate', title: 'Real Estate', icon: 'align', body: '40+ agents deployed across portfolio operations.', meta: '40+ agents in production', image: unsplash('1487958449943-2429e8be8625') },
  { coord: 'K·04', tab: 'industry', pill: 'Aged Care', title: 'Aged Care', icon: 'managed', body: '6× throughput in clinical operations.', meta: '6× throughput', image: unsplash('1517077304055-6e89abbf09b0') },
  { coord: 'K·05', tab: 'industry', pill: 'Retail', title: 'Retail', icon: 'validate', body: '5-day validated MVP, production in 50 days.', meta: '5 days to MVP', image: unsplash('1441984904996-e0b6ba687e04') },
  { coord: 'K·06', tab: 'industry', pill: 'Public Sector', title: 'Public Sector', icon: 'scale', body: '42% cycle-time reduction in FY26 H1.', meta: '42% faster · FY26 H1', image: unsplash('1529154036614-a60975f5c760') },
  { coord: 'K·07', tab: 'industry', pill: 'Banking', title: 'High-street Banking', icon: 'domain', body: 'Core modernization plus agent rollout on legacy platforms.', meta: 'Core + agents', image: unsplash('1526304640581-d334cdbbf45e') },
  { coord: 'K·08', tab: 'industry', pill: 'Insurance', title: 'Insurance', icon: 'partnerships', body: 'Claims-triage automation, CSAT up 24 points.', meta: '+24 CSAT', image: unsplash('1507679799987-c73779587ccf') },
  { coord: 'K·09', tab: 'solution', pill: 'Data Platform', title: 'Data Platform', icon: 'data', body: 'Fact-graph data fabric across every domain.', meta: 'FactWeavers™' },
  { coord: 'K·10', tab: 'solution', pill: 'Agentic AI', title: 'Agentic AI', icon: 'product', body: 'Production-grade agents, not demos.', meta: 'Agent Studio' },
  { coord: 'K·11', tab: 'solution', pill: 'Delivery', title: 'Delivery Accelerator', icon: 'expertise', body: 'Spec-driven dev on a shared design surface.', meta: 'DBiz Canvas' },
  { coord: 'K·12', tab: 'solution', pill: 'Navigation', title: 'Navigation', icon: 'timeboxed', body: 'Maturity assessment + roadmap in 5 days.', meta: 'DBiz Compass' },
  { coord: 'K·13', tab: 'solution', pill: 'Orchestration', title: 'Orchestration', icon: 'apps', body: 'Platform substrate that holds the system together.', meta: 'Nexus Platform' },
  { coord: 'K·14', tab: 'solution', pill: 'Managed', title: 'Managed Operations', icon: 'production', body: 'Ongoing evolution, not maintenance.', meta: 'Perpetual Engineering' },
  { coord: 'K·15', tab: 'technology', pill: 'Cloud', title: 'Cloud', icon: 'cloud', body: 'Hyperscaler-neutral. Deploys on the right cloud per workload.', meta: 'Neutral · multi-cloud' },
  { coord: 'K·16', tab: 'technology', pill: 'Data Platforms', title: 'Data Platforms', icon: 'data', body: 'Snowflake, Databricks, Microsoft Fabric, BigQuery.', meta: '4 platforms · depth' },
  { coord: 'K·17', tab: 'technology', pill: 'Integration', title: 'Integration', icon: 'partnerships', body: 'Boomi, MuleSoft, Workato, n8n.', meta: '4 stacks · production' },
  { coord: 'K·18', tab: 'technology', pill: 'Business Apps', title: 'Business Apps', icon: 'apps', body: 'Salesforce, Dynamics 365, Power Platform.', meta: '3 suites · deep' },
  { coord: 'K·19', tab: 'technology', pill: 'AI Models', title: 'AI Models', icon: 'product', body: 'Claude, GPT, Gemini, Bedrock, Azure OpenAI, Vertex.', meta: '6 families · proven' },
  { coord: 'K·20', tab: 'technology', pill: 'Security', title: 'Security & Governance', icon: 'governance', body: 'Posture + supply-chain + AI risk frameworks for agent-built software.', meta: 'DevSecOps · sovereign' },
] as const
