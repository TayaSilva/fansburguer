// Ilustração do hambúrguer usada no topo da página inicial.
export default function BurgerArt({ className = '' }) {
  return (
    <svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hambúrguer" className={className}>
      <path d="M40 100 C40 40 100 14 160 14 C220 14 280 40 280 100 Z" fill="#E9A23B" />
      <ellipse cx="120" cy="50" rx="7" ry="4" fill="#F7E3B5" />
      <ellipse cx="170" cy="38" rx="7" ry="4" fill="#F7E3B5" />
      <ellipse cx="215" cy="60" rx="7" ry="4" fill="#F7E3B5" />
      <path d="M28 104 Q52 126 76 106 Q100 126 124 106 Q148 126 172 106 Q196 126 220 106 Q244 126 268 106 Q282 118 292 104 L292 100 L28 100 Z" fill="#7BC96A" />
      <path d="M34 118 L286 118 L250 150 L226 128 L196 128 L34 128 Z" fill="#FFC53D" />
      <rect x="34" y="128" width="252" height="40" rx="18" fill="#5B3324" />
      <path d="M40 176 L280 176 L280 190 C280 208 262 216 244 216 L76 216 C58 216 40 208 40 190 Z" fill="#E9A23B" />
    </svg>
  )
}
