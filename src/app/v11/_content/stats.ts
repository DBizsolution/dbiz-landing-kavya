export type Stat = {
  coord: string
  value: number
  suffix: string
  label: string
}

export const stats: readonly Stat[] = [
  { coord: 'S·01', value: 50, suffix: '+', label: 'Enterprise clients' },
  { coord: 'S·02', value: 150, suffix: '+', label: 'Solutions in production' },
  { coord: 'S·03', value: 6, suffix: '', label: 'Countries' },
  { coord: 'S·04', value: 500, suffix: '+', label: 'Engineers' },
] as const
