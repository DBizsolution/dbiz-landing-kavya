import type { IconName } from '../_components/GeometricIcon'

export type Case = {
  coord: string
  industry: string
  title: string
  body: string
  metric: string
  icon: IconName
}

export const cases: readonly Case[] = [
  { coord: 'C·01', industry: 'Financial Services', title: 'Global insurer modernization', body: '11 domains rebuilt on a shared data fabric; agents live in claims and underwriting.', metric: '38% faster cycle', icon: 'strategy' },
  { coord: 'C·02', industry: 'Logistics', title: 'Southern Cross Logistics', body: 'Agent-operated routing cut annual fuel and freight cost by $14M.', metric: '$14M saved', icon: 'transformation' },
  { coord: 'C·03', industry: 'Aged Care', title: 'National aged-care operator', body: 'Clinical ops throughput multiplied six-fold; staffing stable.', metric: '6× throughput', icon: 'managed' },
  { coord: 'C·04', industry: 'Banking', title: 'FactWeavers™ rollout', body: '11 banking domains on a single data-graph platform, zero lift-and-shift.', metric: '11 domains live', icon: 'data' },
  { coord: 'C·05', industry: 'Real Estate', title: 'Portfolio operations', body: '40+ production agents orchestrated through Nexus Platform.', metric: '40+ agents · prod', icon: 'apps' },
  { coord: 'C·06', industry: 'Retail', title: 'MVP in a working week', body: 'From zero to validated MVP in 5 days; live in 50. DBiz Canvas end-to-end.', metric: '5 days · MVP', icon: 'validate' },
  { coord: 'C·07', industry: 'Public Sector', title: 'Citizen-services modernization', body: 'FY26 H1 rollout; cycle time down 42% across 3 agencies.', metric: '42% faster · FY26 H1', icon: 'scale' },
] as const
