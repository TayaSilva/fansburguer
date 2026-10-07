// Botão do design system.
// variant: primary | outline | accentOutline | ember | dusk | link
// size: sm | md | lg        (com `href` vira um link <a> com a mesma aparência)
const VARIANTS = {
  primary: 'border-2 border-accent bg-accent font-extrabold text-night hover:brightness-110',
  outline: 'border-2 border-edge bg-transparent font-extrabold text-ghost hover:border-ghost',
  accentOutline: 'border-2 border-accent bg-transparent font-extrabold text-ghost hover:bg-panel-hi',
  ember: 'border-2 border-ember bg-ember font-extrabold text-white hover:brightness-110',
  dusk: 'border-2 border-dusk bg-dusk font-extrabold text-ghost hover:brightness-125',
  link: 'border-0 bg-transparent font-semibold text-ghost hover:text-accent-hi',
}

const SIZES = {
  sm: 'min-h-11 px-[18px] py-2',
  md: 'min-h-12 px-6 py-3',
  lg: 'min-h-[52px] px-8 py-3',
}

export default function Button({ variant = 'primary', size = 'md', className = '', href, type = 'button', ...props }) {
  const sizing = variant === 'link' ? 'min-h-11 px-1' : SIZES[size]
  const classes = `inline-flex items-center justify-center rounded-full no-underline transition ${sizing} ${VARIANTS[variant]} ${className}`
  if (href) return <a href={href} className={classes} {...props} />
  return <button type={type} className={classes} {...props} />
}
