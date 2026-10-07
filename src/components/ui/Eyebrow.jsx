// Rótulo pequeno em maiúsculas que fica acima dos títulos.
export default function Eyebrow({ children, className = 'text-accent' }) {
  return <div className={`text-sm font-extrabold uppercase tracking-[0.16em] ${className}`}>{children}</div>
}
