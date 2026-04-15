export type Testimonial = {
  coord: string
  quote: string
  name: string
  role: string
  company: string
  placeholder?: boolean
}

export const testimonials: readonly Testimonial[] = [
  {
    coord: 'V·01',
    quote: 'DBiz didn\u2019t sell us a roadmap. They delivered one \u2014 with the system live in production while the rest of the market was still running POCs.',
    name: 'Priya Nair',
    role: 'Chief Data & AI Officer',
    company: 'Southern Cross Logistics',
  },
  {
    coord: 'V·02',
    quote: 'They didn\u2019t deliver a deck. They delivered a running agent and the org to run it.',
    name: 'CIO',
    role: 'Chief Information Officer',
    company: 'Fortune 200 Insurer',
    placeholder: true,
  },
  {
    coord: 'V·03',
    quote: 'The first consulting output we could actually run in production.',
    name: 'CTO',
    role: 'Chief Technology Officer',
    company: 'Global Reinsurer',
    placeholder: true,
  },
  {
    coord: 'V·04',
    quote: 'Five days to a plan our board could actually sign. Fifty days to the platform it pointed to.',
    name: 'CEO',
    role: 'Chief Executive',
    company: 'Regional retailer',
    placeholder: true,
  },
] as const
