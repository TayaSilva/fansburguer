// Ícones de traço. A cor vem do texto (use text-*), o tamanho de h-* e w-*.
function Icon({ className = '', children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  )
}

export function FriesIcon(props) {
  return (
    <Icon {...props}>
      <path d="M6 11h12l-1.5 9h-9z" />
      <path d="M8 11V5M10.7 11V3.5M13.3 11V4.5M16 11V6" />
    </Icon>
  )
}

export function BulbIcon(props) {
  return (
    <Icon {...props}>
      <path d="M9 17h6M10 20h4" />
      <path d="M12 4a5.5 5.5 0 0 0-3.2 10c.5.4.8 1 .9 1.6h4.6c.1-.6.4-1.2.9-1.6A5.5 5.5 0 0 0 12 4z" />
      <path d="M12 1.5v.8M4.5 4.5l.6.6M19.5 4.5l-.6.6" />
    </Icon>
  )
}

export function BurgerIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 10a8 5.5 0 0 1 16 0z" />
      <path d="M3.5 13.5h17" />
      <path d="M5 17h14v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
    </Icon>
  )
}
