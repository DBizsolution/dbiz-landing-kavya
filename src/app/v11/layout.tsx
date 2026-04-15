import './theme.css'

export default function V11Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='v11-scope'>{children}</div>
}
