import Link from 'next/link'

export default function V1Page() {
  return (
    <main className='mx-auto max-w-[1240px] px-10 py-36'>
      <Link href='/' className='mono text-xs uppercase tracking-widest text-[var(--text-3)] hover:text-[var(--text)]'>
        ← index
      </Link>

      <section className='mt-16'>
        <p className='mono mb-5 text-xs uppercase tracking-[0.14em] text-[var(--orange)]'>
          v1 <span className='text-[var(--text-3)]'>/</span> editorial
        </p>
        <h1 className='max-w-[740px] text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-[1.06] tracking-[-0.035em]'>
          Your enterprise.
          <br />
          <span className='serif text-[var(--orange)]'>Agent-operated.</span>
          <br />
          Starting now.
        </h1>
        <p className='mt-6 max-w-[560px] text-[1.05rem] leading-[1.65] text-[var(--text-2)]'>
          Stub — swap in real content and build out sections. Theme tokens live in <code className='mono'>v1/theme.css</code>.
        </p>
      </section>
    </main>
  )
}
