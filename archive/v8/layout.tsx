import './theme.css'

export default function V8Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='v8-scope'>{children}</div>
}
