// Grupo de opções: abas do cardápio, forma de entrega, forma de pagamento.
// shape: 'pill' (arredondado) | 'box' (retangular)
export default function PillGroup({ options, value, onChange, shape = 'pill', label }) {
  const radius = shape === 'pill' ? 'rounded-full' : 'rounded-photo'
  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label={label}>
      {options.map((opt) => {
        const active = opt.id === value
        return (
          <button
            key={opt.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt.id)}
            className={`min-h-12 border-2 px-6 py-2.5 font-extrabold text-ghost transition ${radius} ${
              active ? 'border-accent bg-panel-hi' : 'border-edge bg-transparent hover:border-ghost'
            }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
