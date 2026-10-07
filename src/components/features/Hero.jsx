import { useStore } from '../../context/StoreContext.jsx'
import { SITE } from '../../data/site.js'
import Ghost from '../brand/Ghost.jsx'
import BurgerArt from '../brand/BurgerArt.jsx'
import Button from '../ui/Button.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'

export default function Hero() {
  const { go } = useStore()
  return (
    <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-12 gap-y-6 px-6 pb-10 pt-2">
      <div className="flex min-w-0 flex-[1_1_460px] flex-col items-start gap-4">
        <Eyebrow>{SITE.slogan}</Eyebrow>
        <h1 className="m-0 font-display text-[clamp(44px,7vw,92px)] font-normal leading-[1.02]">
          Eu vejo gente com fome.
        </h1>
        <p className="m-0 max-w-[520px] text-xl text-mist">
          Smash burgers de outro mundo, feitos na chapa por quem nunca foi embora. Peça pelo site — a porta abre sozinha.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" onClick={() => go('menu')}>Fazer meu pedido</Button>
          <Button size="lg" variant="outline" href="#lenda">Conhecer a lenda</Button>
        </div>
      </div>
      <div className="flex min-w-0 flex-[1_1_360px] flex-col items-center">
        <Ghost mouth="open" className="-mb-5 w-[40%] max-w-[170px] animate-float motion-reduce:animate-none" />
        <BurgerArt className="w-full max-w-[340px]" />
      </div>
    </section>
  )
}
