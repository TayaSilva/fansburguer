import { useStore } from '../context/StoreContext.jsx'
import Ghost from '../components/brand/Ghost.jsx'
import Button from '../components/ui/Button.jsx'

const STEPS = [
  { title: '1. Pedido recebido', note: 'O sino da cozinha tocou.', active: true },
  { title: '2. Na chapa', note: 'O chapeiro que ninguém vê está trabalhando.' },
  { title: '3. A caminho', note: 'Se baterem três vezes na porta, é o seu burger.' },
]

export default function Done() {
  const { go, orderId } = useStore()
  return (
    <main className="mx-auto flex w-full max-w-[640px] grow flex-col items-center gap-5 px-6 pb-24 pt-12 text-center">
      <Ghost mouth="smile" className="w-[140px] animate-float motion-reduce:animate-none" />
      <h1 className="m-0 font-display text-[clamp(34px,5vw,52px)] font-normal leading-[1.05]">Pedido invocado!</h1>
      <p className="m-0 text-xl text-mist">
        Pedido <strong className="text-ghost">{orderId}</strong> recebido. A chapa já acendeu sozinha.
      </p>
      <ol className="m-0 mt-3 flex w-full list-none flex-col gap-3 p-0 text-left">
        {STEPS.map((s) => (
          <li
            key={s.title}
            className={`rounded-tile bg-panel px-5 py-4 ${s.active ? 'border-2 border-accent' : 'border border-line'}`}
          >
            <strong>{s.title}</strong>
            <br />
            <span className="text-mist">{s.note}</span>
          </li>
        ))}
      </ol>
      <Button size="lg" className="mt-3" onClick={() => go('home')}>Voltar ao início</Button>
    </main>
  )
}
