// Rabiscos decorativos da seção "A lenda". Posicione com classes (absolute, top-*, rotate-*...).
export function Sparks({ className = '' }) {
  return (
    <svg viewBox="0 0 60 50" fill="none" strokeWidth="5" strokeLinecap="round" aria-hidden="true" className={`stroke-spark ${className}`}>
      <path d="M10 40 L4 22" />
      <path d="M28 34 L30 10" />
      <path d="M44 42 L56 26" />
    </svg>
  )
}

export function Swoosh({ className = '' }) {
  return (
    <svg viewBox="0 0 70 40" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`stroke-iris ${className}`}>
      <path d="M4 12 C14 38 40 38 60 16" />
      <path d="M46 14 L61 15 L58 30" />
    </svg>
  )
}
