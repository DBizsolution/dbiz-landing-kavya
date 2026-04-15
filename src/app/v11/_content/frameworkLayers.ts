export type FrameworkLayer = {
  coord: string
  title: string
  theme: 'Human-led' | 'Neutral' | 'Agent-operated' | 'Data-powered'
  caption: string
  description: string
  tiles: readonly { label: string; icon: string }[]
}

export const frameworkLayers: readonly FrameworkLayer[] = [
  {
    coord: 'L·01',
    title: 'Strategy & Architecture',
    theme: 'Human-led',
    caption: 'Business strategy + enterprise architecture \u2014 the brief for everything downstream.',
    description:
      'Futures Studio frames ambition into costed bets; TechOffice Foundry translates them into enterprise architecture. Exit criteria are a board-aligned roadmap and a target reference architecture.',
    tiles: [
      { label: 'Futures Studio', icon: 'strategy' },
      { label: 'TechOffice Foundry', icon: 'align' },
      { label: 'Enterprise Architecture', icon: 'apps' },
      { label: 'Architecture-as-a-Service', icon: 'domain' },
    ],
  },
  {
    coord: 'L·02',
    title: 'Cloud Foundation',
    theme: 'Neutral',
    caption: 'Deploys on the right cloud for each workload \u00b7 hyperscaler-neutral.',
    description:
      'Cloud is the floor \u2014 compute, data, identity, network, governance. We deploy to the right cloud for each workload and refuse to pick favorites on the homepage.',
    tiles: [
      { label: 'Compute', icon: 'cloud' },
      { label: 'Data', icon: 'data' },
      { label: 'Identity', icon: 'governance' },
      { label: 'Network', icon: 'partnerships' },
      { label: 'Governance', icon: 'expertise' },
    ],
  },
  {
    coord: 'L·03',
    title: 'Development',
    theme: 'Agent-operated',
    caption: 'Spec-driven dev + agent tooling \u2014 software gets built, not scoped.',
    description:
      'DBiz Canvas and Agent Studio turn specs into running software. Spec-driven development and agent tooling make the engineering cycle short enough to stay in flow.',
    tiles: [
      { label: 'DBiz Canvas', icon: 'validate' },
      { label: 'Agent Studio', icon: 'product' },
      { label: 'Spec-driven Dev', icon: 'timeboxed' },
      { label: 'Dev Tooling', icon: 'transformation' },
    ],
  },
  {
    coord: 'L·04',
    title: 'Productivity / Platforms',
    theme: 'Data-powered',
    caption: 'Automation, orchestration, decision intelligence \u2014 where the system earns its keep.',
    description:
      'The top of the stack is where work gets done. Automation and orchestration carry business flow; data insights turn it into decisions.',
    tiles: [
      { label: 'Automation', icon: 'scale' },
      { label: 'Orchestration', icon: 'managed' },
      { label: 'Data Insights', icon: 'data' },
      { label: 'Decision Intelligence', icon: 'production' },
    ],
  },
] as const
