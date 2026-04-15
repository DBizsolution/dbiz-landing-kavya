import Link from 'next/link'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Framework', href: '#framework' },
      { label: 'Proven', href: '#proven' },
      { label: 'Cadence', href: '#cadence' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '#cta' },
    ],
  },
  {
    title: 'Practices',
    links: [
      { label: 'Futures Studio', href: '/futures-studio' },
      { label: 'TechOffice Foundry', href: '/techoffice-foundry' },
      { label: 'FactWeavers™', href: '/factweavers' },
      { label: 'Perpetual Engineering', href: '/perpetual-engineering' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  },
] as const

export const Footer = () => (
  <footer
    className='bp-section'
    style={{
      padding: '72px 0 48px',
      borderTop: '1px solid var(--bp-hair)',
      borderBottom: 'none',
    }}
  >
    <div className='bp-container'>
      <div className='grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]'>
        <div>
          <Link href='/v11' className='block mb-4'>
            <span className='text-xl font-bold' style={{ color: 'var(--bp-ink)' }}>
              dBiz
            </span>
            <span className='bp-mono-accent ml-1' style={{ fontSize: '0.62rem' }}>
              .ai
            </span>
          </Link>
          <p className='bp-lede' style={{ fontSize: '0.88rem', maxWidth: 280 }}>
            Human-Led · Agent-Operated · Data-Powered. The Frontier Organisation.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className='bp-mono-accent' style={{ marginBottom: 18 }}>
              {col.title}
            </div>
            <ul className='flex flex-col gap-2'>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className='bp-mono block'
                    style={{ fontSize: '0.78rem' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='bp-hatch' style={{ marginTop: 56, marginBottom: 20 }} />

      <div className='bp-meta' style={{ borderBottom: 'none' }}>
        <span>© dBiz.ai · All rights reserved</span>
        <span>REV <span className='k'>2026-04-15</span> · Sheet <span className='k'>01/01</span></span>
        <span>Human-Led · Agent-Operated · Data-Powered</span>
      </div>
    </div>
  </footer>
)
