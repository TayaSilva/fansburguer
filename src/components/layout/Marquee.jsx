const PHRASES = [
  'BUUU-RGER',
  'SMASH DE OUTRO MUNDO',
  'ABERTO ATÉ A HORA MORTA',
  'DE ARREPIAR A FOME',
  'O PÃO É DE VERDADE, O CHAPEIRO NEM TANTO',
]

function Run({ hidden }) {
  return PHRASES.map((p) => (
    <span key={p} aria-hidden={hidden} className="flex gap-12">
      <span>{p}</span>
      <span>·</span>
    </span>
  ))
}

// Faixa de frases correndo. O conteúdo é duplicado para o loop não ter emenda.
export default function Marquee() {
  return (
    <div className="overflow-hidden bg-accent py-[18px] text-night">
      <div className="flex w-max animate-slide gap-12 whitespace-nowrap font-display text-[22px] tracking-[0.04em] motion-reduce:animate-none">
        <Run />
        <Run hidden />
      </div>
    </div>
  )
}
