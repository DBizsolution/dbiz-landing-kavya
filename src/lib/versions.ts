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
]
