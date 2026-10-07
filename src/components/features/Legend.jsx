import { useCallback, useState } from 'react'
import Button from '../ui/Button.jsx'
import { BulbIcon, BurgerIcon, FriesIcon } from '../brand/Icons.jsx'
import { Sparks, Swoosh } from '../brand/Doodles.jsx'
import StoryModal from './StoryModal.jsx'

const CARDS = [
  { Icon: FriesIcon, text: 'Aqui ninguém atravessa a parede sem antes pedir uma batata.' },
  { Icon: BulbIcon, text: 'Se as luzes piscarem, é só o seu pedido saindo.' },
  { Icon: BurgerIcon, text: 'Nossos burgers assombram você por semanas.' },
]

// Seção clara "A lenda": história da casa, frases e o botão da história de terror.
export default function Legend() {
  const [storyOpen, setStoryOpen] = useState(false)
  const closeStory = useCallback(() => setStoryOpen(false), [])

  return (
    <section id="lenda" className="bg-ghost text-night">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-12 gap-y-10 px-6 py-[88px]">
        <div className="relative flex min-w-0 flex-[1_1_400px] flex-col items-start gap-[18px]">
          <Sparks className="absolute -left-1.5 -top-[34px] h-9 w-11 -rotate-[20deg]" />
          <span className="rounded-full bg-lilac px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-[0.16em] text-plum">
            A lenda
          </span>
          <h2 className="m-0 font-display text-[clamp(32px,4.4vw,52px)] font-normal leading-[1.05]">
            Diga <span className="text-flame">“burger”</span> três vezes e ele aparece.
          </h2>
          <p className="m-0 max-w-[520px] text-ink">
            Dizem que o primeiro chapeiro da casa gostava tanto do ofício que nunca bateu o ponto de saída. Desde então a chapa acende sozinha, o queijo derrete no ponto e o sino da cozinha toca sem ninguém por perto.
          </p>
          <Button variant="dusk" size="lg" className="mt-1.5" onClick={() => setStoryOpen(true)}>
            Me conta sua história de terror
          </Button>
        </div>

        <div className="flex min-w-0 flex-[1_1_480px] flex-wrap items-center justify-center">
          <ul className="relative z-[1] m-0 flex max-w-[340px] flex-[1_1_280px] list-none flex-col gap-3.5 p-0">
            {CARDS.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-4 rounded-tile bg-night py-[18px] pl-5 pr-11 text-ghost">
                <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full bg-panel-hi">
                  <Icon className="h-7 w-7 text-accent-hi" />
                </span>
                <span className="text-[17px] leading-[1.4]">{text}</span>
              </li>
            ))}
          </ul>
          <div className="relative z-[2] -ml-6 mt-6 max-w-[380px] flex-[1_1_240px]">
            <Sparks className="absolute -top-[30px] right-0 h-[54px] w-16 rotate-[24deg]" />
            <img
              src="/img/burger.webp"
              alt="Hambúrguer com bacon, cheddar derretido, alface, tomate e cebola roxa"
              className="block h-auto w-full"
            />
            <Swoosh className="absolute -bottom-[22px] -left-5 h-10 w-[70px]" />
          </div>
        </div>
      </div>

      {storyOpen && <StoryModal onClose={closeStory} />}
    </section>
  )
}
