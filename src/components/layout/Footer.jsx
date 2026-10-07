import { useStore } from '../../context/StoreContext.jsx'
import { SITE } from '../../data/site.js'
import Button from '../ui/Button.jsx'
import BrandLogo from '../brand/BrandLogo.jsx'

const HEADING = 'text-[13px] font-extrabold uppercase tracking-[0.14em] text-accent'
const NAV_LINK = 'min-h-11 border-0 bg-transparent p-0 text-left text-ghost hover:text-accent-hi'
const SMALL_LINK = 'min-h-11 border-0 bg-transparent p-0 text-mist underline hover:text-accent-hi'

export default function Footer({ onReplayIntro }) {
  const { go, openLegal } = useStore()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-crypt">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-x-12 gap-y-10 px-6 pb-10 pt-14">
        <div className="flex flex-col gap-3">
          <BrandLogo />
          <div className="text-lg font-semibold">{SITE.slogan}.</div>
          <div className="text-fog">Smash burgers de outro mundo. Nenhum fantasma foi maltratado na chapa.</div>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col items-start">
          <div className={HEADING}>Navegar</div>
          <button type="button" className={NAV_LINK} onClick={() => go('home')}>Início</button>
          <button type="button" className={NAV_LINK} onClick={() => go('menu')}>Cardápio</button>
          <button type="button" className={NAV_LINK} onClick={() => go('cart')}>Meu carrinho</button>
          <button type="button" className={NAV_LINK} onClick={() => go('login')}>Entrar ou criar conta</button>
        </nav>

        <div className="flex flex-col gap-2.5">
          <div className={HEADING}>Fale com a casa</div>
          <div>{SITE.address}</div>
          <div>{SITE.hours}</div>
          <div>{SITE.whatsapp}</div>
          <div>{SITE.email}</div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className={HEADING}>Siga os tasmas</div>
          <div className="flex flex-wrap gap-2.5">
            {SITE.socials.map((s) => (
              <Button key={s.name} href={s.href} variant="outline" size="sm">{s.name}</Button>
            ))}
          </div>
          <div className="text-fog">{SITE.handle}</div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-5">
          <div className="flex flex-col gap-0.5 text-[15px] text-fog">
            <span>© {year} {SITE.name}. Todos os direitos reservados.</span>
            <span>{SITE.legalName} · CNPJ {SITE.cnpj}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[15px]">
            <button type="button" className={SMALL_LINK} onClick={() => openLegal('terms')}>Termos de uso</button>
            <button type="button" className={SMALL_LINK} onClick={() => openLegal('privacy')}>Política de privacidade</button>
            <button type="button" className={SMALL_LINK} onClick={() => go('styleguide')}>Design system</button>
            <Button variant="outline" size="sm" onClick={onReplayIntro}>Rever a abertura</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
