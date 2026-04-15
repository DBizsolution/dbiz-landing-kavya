import type { SVGProps } from 'react'

const ORANGE = 'var(--v11-duotone-orange)'
const BLUE = 'var(--v11-duotone-blue)'

type IlloProps = SVGProps<SVGSVGElement>

const defaults: IlloProps = {
  viewBox: '0 0 200 120',
  width: '100%',
  height: '100%',
  fill: 'none',
  strokeWidth: 1.25,
  strokeLinecap: 'round',
}

export const ExpertiseIllo = (props: IlloProps) => (
  <svg {...defaults} {...props} aria-hidden>
    <circle cx='70' cy='60' r='34' stroke={ORANGE} />
    <circle cx='130' cy='60' r='34' stroke={BLUE} />
    <line x1='70' y1='60' x2='130' y2='60' stroke={BLUE} strokeDasharray='3 4' />
    <line x1='50' y1='30' x2='150' y2='90' stroke={BLUE} strokeDasharray='3 4' />
    <circle cx='70' cy='60' r='3' fill={ORANGE} stroke='none' />
    <circle cx='130' cy='60' r='3' fill={BLUE} stroke='none' />
  </svg>
)

export const ScaleIllo = (props: IlloProps) => (
  <svg {...defaults} {...props} aria-hidden>
    <rect x='20' y='30' width='160' height='60' stroke={ORANGE} />
    <rect x='36' y='40' width='128' height='40' stroke={BLUE} />
    <rect x='52' y='50' width='96' height='20' stroke={BLUE} />
    <g stroke={BLUE}>
      <line x1='14' y1='30' x2='20' y2='30' /><line x1='20' y1='24' x2='20' y2='30' />
      <line x1='186' y1='30' x2='180' y2='30' /><line x1='180' y1='24' x2='180' y2='30' />
      <line x1='14' y1='90' x2='20' y2='90' /><line x1='20' y1='96' x2='20' y2='90' />
      <line x1='186' y1='90' x2='180' y2='90' /><line x1='180' y1='96' x2='180' y2='90' />
    </g>
  </svg>
)

export const TimeboxIllo = (props: IlloProps) => (
  <svg {...defaults} {...props} aria-hidden>
    <line x1='20' y1='60' x2='180' y2='60' stroke={BLUE} />
    {[20, 60, 100, 140, 180].map((x) => (
      <line key={x} x1={x} y1='52' x2={x} y2='68' stroke={ORANGE} />
    ))}
    <line x1='20' y1='44' x2='60' y2='44' stroke={ORANGE} strokeDasharray='2 3' />
    <line x1='60' y1='44' x2='140' y2='44' stroke={ORANGE} />
    <line x1='140' y1='44' x2='180' y2='44' stroke={ORANGE} strokeDasharray='2 3' />
    <text x='20' y='86' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1' fill={BLUE}>5D</text>
    <text x='100' y='86' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1' fill={BLUE} textAnchor='middle'>15D</text>
    <text x='180' y='86' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1' fill={BLUE} textAnchor='end'>50D</text>
  </svg>
)

export const ProductionIllo = (props: IlloProps) => (
  <svg {...defaults} {...props} aria-hidden>
    <rect x='30' y='26' width='140' height='20' stroke={ORANGE} />
    <rect x='30' y='50' width='140' height='20' stroke={BLUE} />
    <rect x='30' y='74' width='140' height='20' stroke={BLUE} />
    <line x1='40' y1='36' x2='160' y2='36' stroke={ORANGE} strokeDasharray='2 3' />
    <line x1='40' y1='60' x2='160' y2='60' stroke={BLUE} strokeDasharray='2 3' />
    <line x1='40' y1='84' x2='160' y2='84' stroke={BLUE} strokeDasharray='2 3' />
    <line x1='30' y1='46' x2='170' y2='46' stroke={BLUE} strokeDasharray='4 3' />
    <line x1='30' y1='70' x2='170' y2='70' stroke={BLUE} strokeDasharray='4 3' />
  </svg>
)
