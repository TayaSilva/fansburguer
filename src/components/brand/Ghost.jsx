// Fantasma da marca. mouth: 'none' | 'open' | 'smile'. eyes: cor dos olhos (fundo atrás dele).
export default function Ghost({ mouth = 'none', eyes = '#15131F', className = '' }) {
  return (
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
      <path
        d="M20 110 C20 50 60 14 100 14 C140 14 180 50 180 110 L180 220 Q166 236 153 220 Q140 204 127 220 Q113 236 100 220 Q87 204 73 220 Q60 236 47 220 Q33 204 20 220 Z"
        fill="#F1EEFF"
      />
      <ellipse cx="74" cy="96" rx="13" ry="18" fill={eyes} />
      <ellipse cx="126" cy="96" rx="13" ry="18" fill={eyes} />
      {mouth === 'open' && <ellipse cx="100" cy="142" rx="12" ry="16" fill={eyes} />}
      {mouth === 'smile' && (
        <path d="M80 136 Q100 160 120 136" stroke={eyes} strokeWidth="8" fill="none" strokeLinecap="round" />
      )}
    </svg>
  )
}
