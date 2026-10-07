import { useStore } from '../context/StoreContext.jsx'
import { formatBRL } from '../data/menu.js'
import Button from '../components/ui/Button.jsx'
import OrderSummary from '../components/features/OrderSummary.jsx'

const STEP = 'h-11 w-11 rounded-full border-2 border-edge bg-transparent text-xl font-extrabold text-ghost hover:border-ghost'

export default function Cart() {
  const { go, lines, add, startCheckout } = useStore()

  return (
    <main className="mx-auto flex w-full max-w-[760px] grow flex-col gap-7 px-6 pb-24 pt-12">
      <h1 className="m-0 font-display text-[clamp(34px,5vw,48px)] font-normal leading-[1.05]">Seu carrinho</h1>

      {lines.length === 0 ? (
        <div className="flex flex-col items-start gap-4 rounded-card border border-line bg-panel px-7 py-9">
          <p className="m-0 text-xl">Vazio feito casa abandonada.</p>
          <p className="m-0 text-mist">Nenhuma aparição por aqui ainda. Escolha um burger no cardápio.</p>
          <Button onClick={() => go('menu')}>Ver cardápio</Button>
        </div>
      ) : (
        <>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {lines.map((line) => (
              <li
                key={line.id}
                className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 rounded-tile border border-line bg-panel px-5 py-[18px]"
              >
                <div className="flex min-w-0 flex-[1_1_200px] flex-col">
                  <strong className="text-lg">{line.name}</strong>
                  <span className="text-fog">{formatBRL(line.price)} cada</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <button type="button" className={STEP} aria-label={`Diminuir ${line.name}`} onClick={() => add(line.id, -1)}>−</button>
                  <span className="min-w-6 text-center text-lg font-extrabold">{line.qty}</span>
                  <button type="button" className={STEP} aria-label={`Aumentar ${line.name}`} onClick={() => add(line.id, 1)}>+</button>
                </div>
                <div className="min-w-24 text-right font-display text-xl">{formatBRL(line.total)}</div>
              </li>
            ))}
          </ul>

          <OrderSummary />

          <div className="flex flex-wrap justify-between gap-4">
            <Button variant="outline" size="lg" onClick={() => go('menu')}>Adicionar mais itens</Button>
            <Button size="lg" onClick={startCheckout}>Fechar pedido</Button>
          </div>
        </>
      )}
    </main>
  )
}
