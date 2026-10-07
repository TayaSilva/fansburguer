import { useStore } from '../../context/StoreContext.jsx'
import Button from '../ui/Button.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'

// Chamada para o cardápio na página inicial.
export default function MenuTeaser() {
  const { go } = useStore()
  return (
    <section className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-12 gap-y-6 px-6 py-24">
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-3">
        <Eyebrow>Em cartaz</Eyebrow>
        <h2 className="m-0 font-display text-[clamp(34px,4.6vw,56px)] font-normal leading-[1.05]">
          Lanches, porções e poções
        </h2>
        <p className="m-0 text-mist">
          Smashes com nome de filme, acompanhamentos que somem do prato e bebidas do além. Tudo no cardápio, com foto e ingredientes.
        </p>
      </div>
      <Button size="lg" onClick={() => go('menu')}>Abrir o cardápio</Button>
    </section>
  )
}
