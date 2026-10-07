import { useStore } from '../../context/StoreContext.jsx'
import { formatBRL } from '../../data/menu.js'
import Button from '../ui/Button.jsx'

const GHOST_VARIANTS = [
  'bottom-[6%] right-0 translate-x-[125%] group-hover/photo:translate-x-[18%] group-hover/photo:-rotate-12',
  'bottom-[6%] left-0 -translate-x-[125%] group-hover/photo:-translate-x-[18%] group-hover/photo:rotate-12',
  'top-0 left-[30%] -translate-y-[125%] group-hover/photo:translate-y-[18%] group-hover/photo:-rotate-12',
  'bottom-0 left-[30%] translate-y-[125%] group-hover/photo:-translate-y-[18%] group-hover/photo:rotate-12',
  'top-0 right-0 translate-x-[125%] -translate-y-[125%] group-hover/photo:translate-x-[18%] group-hover/photo:translate-y-[18%] group-hover/photo:-rotate-12',
  'top-0 left-0 -translate-x-[125%] -translate-y-[125%] group-hover/photo:-translate-x-[18%] group-hover/photo:translate-y-[18%] group-hover/photo:rotate-12',
  'bottom-0 right-0 translate-x-[125%] translate-y-[125%] group-hover/photo:translate-x-[18%] group-hover/photo:-translate-y-[18%] group-hover/photo:-rotate-12',
  'bottom-0 left-0 -translate-x-[125%] translate-y-[125%] group-hover/photo:-translate-x-[18%] group-hover/photo:-translate-y-[18%] group-hover/photo:rotate-12',
  'right-0 top-[34%] translate-x-[125%] group-hover/photo:translate-x-[18%] group-hover/photo:rotate-6',
  'left-0 top-[34%] -translate-x-[125%] group-hover/photo:-translate-x-[18%] group-hover/photo:-rotate-6',
  'top-0 left-[10%] -translate-y-[125%] group-hover/photo:translate-y-[18%] group-hover/photo:rotate-6',
  'bottom-0 right-[10%] translate-y-[125%] group-hover/photo:-translate-y-[18%] group-hover/photo:-rotate-6',
]

export const GHOST_VARIANT_COUNT = GHOST_VARIANTS.length

const STATE_CLASSES = {
  idle: 'border-line opacity-100 grayscale-0 shadow-none',
  focus: 'border-accent opacity-100 grayscale-0 shadow-[0_0_0_2px_var(--color-accent)]',
  ghost: 'border-line opacity-[0.15] grayscale animate-card-float motion-reduce:animate-none',
}

function PeekGhost({ variant }) {
  return (
    <svg
      viewBox="0 0 200 240"
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 w-[48%] max-w-[170px] opacity-40 transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${GHOST_VARIANTS[variant]}`}
    >
      <path
        d="M20 110 C20 50 60 14 100 14 C140 14 180 50 180 110 L180 220 Q166 236 153 220 Q140 204 127 220 Q113 236 100 220 Q87 204 73 220 Q60 236 47 220 Q33 204 20 220 Z"
        fill="#F1EEFF"
      />
      <ellipse cx="70" cy="98" rx="13" ry="18" fill="#15131F" />
      <ellipse cx="118" cy="98" rx="13" ry="18" fill="#15131F" />
    </svg>
  )
}

function ProductPhoto({ src, alt, variant, isFocused }) {
  return (
    <button
      type="button"
      aria-pressed={isFocused}
      aria-label={`Destacar ${alt}`}
      className="group/photo relative block aspect-[4/3] w-full overflow-hidden rounded-photo border-0 bg-transparent p-0 text-left"
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span className="flex h-full items-center justify-center border-2 border-dashed border-edge bg-night p-3 text-center text-[15px] font-semibold text-fog">
          [FOTO DO PRODUTO]
        </span>
      )}
      <PeekGhost variant={variant} />
    </button>
  )
}

// Card de um item do cardápio: foto, frase, descrição, ingredientes, preço e botão.
export default function MenuCard({ item, variant, state = 'idle' }) {
  const { cart, add } = useStore()
  const qty = cart[item.id] || 0
  const stateClass = STATE_CLASSES[state] ?? STATE_CLASSES.idle
  const style = state === 'ghost' ? { animationDelay: `${(variant ?? 0) * 140}ms` } : undefined

  return (
    <article
      data-card-id={item.id}
      style={style}
      className={`flex flex-col gap-3 rounded-card border-2 bg-panel p-7 transition-[opacity,filter,box-shadow] duration-300 ${stateClass}`}
    >
      <ProductPhoto src={item.image} alt={item.name} variant={variant ?? 0} isFocused={state === 'focus'} />
      <div className="text-[13px] font-extrabold tracking-[0.14em] text-accent">{item.tag}</div>
      <h3 className="m-0 font-display text-[26px] font-normal leading-[1.1]">{item.name}</h3>
      <p className="m-0 font-medium italic">{item.quote}</p>
      <p className="m-0 text-fog">{item.desc}</p>
      <div className="flex grow flex-col gap-1 border-t border-line pt-3">
        <div className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-mist">O que tem</div>
        <div className="text-base">{item.ing}</div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="font-display text-[22px]">{formatBRL(item.price)}</div>
        <Button
          variant="accentOutline"
          size="sm"
          data-add
          onClick={() => add(item.id, 1)}
        >
          {qty > 0 ? `Adicionar mais (${qty})` : 'Adicionar'}
        </Button>
      </div>
    </article>
  )
}
