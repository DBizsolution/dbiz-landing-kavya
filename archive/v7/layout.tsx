import './theme.css'

export default function V7Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='v7-scope'>{children}</div>
}
