export type Version = {
  slug: string
  name: string
  tagline: string
  status: 'wip' | 'draft' | 'ready'
}

export const versions: Version[] = [
  {
    slug: 'v1',
    name: 'V1 — Editorial',
    tagline: 'Warm off-white, serif accents, minimal motion',
    status: 'wip',
  },
  {
    slug: 'v2',
    name: 'V2 — Signal',
    tagline: 'Dark institutional, canvas network hero, ambient motion',
    status: 'ready',
  },
  {
    slug: 'v3',
    name: 'V3 — Atelier',
    tagline: 'White/navy/orange sectioning, boxes and wells, duotone icons',
    status: 'wip',
  },
  {
    slug: 'v4',
    name: 'V4 — Swiss',
    tagline: 'International typographic style, grid-led precision',
    status: 'ready',
  },
  {
    slug: 'v5',
    name: 'V5 — Blueprint',
    tagline: 'Schematic navy paper with orange hairline annotations',
    status: 'ready',
  },
  {
    slug: 'v6',
    name: 'V6 — Broadsheet',
    tagline: 'Editorial broadsheet, Instrument Serif display, multi-column',
    status: 'ready',
  },
  {
    slug: 'v7',
    name: 'V7 — Monument',
    tagline: 'Architectural tiles, stacked display, Pentagram-scale type',
    status: 'ready',
  },
  {
    slug: 'v8',
    name: 'V8 — Broadsheet (Sans)',
    tagline: 'V6 broadsheet structure, rendered entirely in DM Sans',
    status: 'ready',
  },
  {
    slug: 'v9',
    name: 'V9 — Foundry',
    tagline: 'v5 illustrations, v4 content, navy/light handshake',
    status: 'draft',
  },
  {
    slug: 'v10',
    name: 'V10 — Dispatch',
    tagline: 'Blueprint ethos on v8 warm broadsheet — newsletter voice',
    status: 'draft',
  },
  {
    slug: 'v11',
    name: 'V11 — Frontier',
    tagline: 'V5 Blueprint ethos, V4 content, cycling capabilities, horizontal framework',
    status: 'draft',
  },
  {
    slug: 'v13',
    name: 'V13 — Blueprint',
    tagline: 'Clone of V5 Blueprint — schematic navy paper with orange hairline annotations',
    status: 'draft',
  },
  {
    slug: 'v14',
    name: 'V14 — Swiss Blueprint',
    tagline: 'V4 grid precision on V5 dark blueprint canvas',
    status: 'draft',
  },
]
