import './theme.css'

export default function V13Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='v13-scope' data-theme='dark'>
      {children}
    </div>
  )
}
