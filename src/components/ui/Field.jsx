// Campo de formulário com rótulo. Repassa qualquer atributo de <input>.
export const FIELD_INPUT =
  'w-full rounded-field border-2 border-edge bg-night px-3.5 py-3 text-[17px] font-normal text-ghost placeholder:text-haze focus:border-accent focus:outline-none'

export default function Field({ label, className = '', ...inputProps }) {
  return (
    <label className={`flex flex-col gap-1.5 text-[15px] font-semibold ${className}`}>
      {label}
      <input className={`min-h-12 ${FIELD_INPUT}`} {...inputProps} />
    </label>
  )
}
