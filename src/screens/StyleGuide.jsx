import { useEffect, useState } from 'react'
import { useStore } from '../context/StoreContext.jsx'
import { COLOR_GROUPS, RADII, TYPE_SCALE } from '../design/tokens.js'
import Button from '../components/ui/Button.jsx'
import Field from '../components/ui/Field.jsx'
import PillGroup from '../components/ui/PillGroup.jsx'
import Eyebrow from '../components/ui/Eyebrow.jsx'
import Ghost from '../components/brand/Ghost.jsx'
import { BulbIcon, BurgerIcon, FriesIcon } from '../components/brand/Icons.jsx'

// Lê o valor atual de uma variável do tema (definida em src/index.css).
function useThemeValue(variable) {
  const [value, setValue] = useState('')
  useEffect(() => {
    setValue(getComputedStyle(document.documentElement).getPropertyValue(variable).trim())
  }, [variable])
  return value
}

function Swatch({ name, use }) {
  const hex = useThemeValue(`--color-${name}`)
  return (
    <div className="overflow-hidden rounded-tile border border-line bg-panel">
      <div className="h-20 border-b border-line" style={{ background: `var(--color-${name})` }} />
      <div className="flex flex-col gap-0.5 p-3">
        <strong>{name}</strong>
        <code className="text-[15px] uppercase text-mist">{hex}</code>
        <span className="text-[15px] text-fog">{use}</span>
      </div>
    </div>
  )
}

function Radius({ name, use }) {
  const px = useThemeValue(`--radius-${name}`)
  return (
    <div className="flex flex-col gap-2">
      <div className="h-20 border-2 border-accent bg-panel" style={{ borderRadius: `var(--radius-${name})` }} />
      <div className="flex flex-col">
        <strong>{name} · {px}</strong>
        <span className="text-[15px] text-fog">{use}</span>
      </div>
    </div>
  )
}

function Block({ title, children }) {
  return (
    <section className="flex flex-col gap-5 border-t border-line pt-8">
      <h2 className="m-0 font-display text-[32px] font-normal leading-[1.1]">{title}</h2>
      {children}
    </section>
  )
}

const DEMO_TABS = [
  { id: 'a', label: 'Lanches' },
  { id: 'b', label: 'Porções' },
  { id: 'c', label: 'Bebidas' },
]

// Tela de referência do design system: cores, tipografia e componentes vivos.
export default function StyleGuide() {
  const { go } = useStore()
  const [tab, setTab] = useState('a')

  return (
    <main className="mx-auto flex w-full max-w-[1200px] grow flex-col gap-10 px-6 pb-24 pt-12">
      <div className="flex flex-col gap-2">
        <Eyebrow>Design system</Eyebrow>
        <h1 className="m-0 font-display text-[clamp(34px,4.6vw,56px)] font-normal leading-[1.05]">A cara do Fansburguer</h1>
        <p className="m-0 max-w-[680px] text-mist">
          Cores, letras e peças que montam o site. Os valores vêm de <code>src/index.css</code>; mude lá e tudo aqui acompanha.
        </p>
      </div>

      <Block title="Cores">
        {COLOR_GROUPS.map((group) => (
          <div key={group.title} className="flex flex-col gap-3">
            <h3 className="m-0 text-[13px] font-extrabold uppercase tracking-[0.14em] text-accent">{group.title}</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
              {group.items.map((c) => (
                <Swatch key={c.name} {...c} />
              ))}
            </div>
          </div>
        ))}
      </Block>

      <Block title="Tipografia">
        <p className="m-0 text-mist">
          <strong className="text-ghost">Bowlby One</strong> para títulos, preços e logo. <strong className="text-ghost">Figtree</strong> para todo o resto.
        </p>
        <div className="flex flex-col gap-6">
          {TYPE_SCALE.map((t) => (
            <div key={t.label} className="flex flex-col gap-1">
              <span className="text-[15px] text-fog">{t.label}</span>
              <div className={t.className}>{t.sample}</div>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Botões">
        <div className="flex flex-wrap items-center gap-4">
          <Button>primary</Button>
          <Button variant="outline">outline</Button>
          <Button variant="accentOutline">accentOutline</Button>
          <Button variant="link">link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4 rounded-card bg-ghost p-6">
          <Button variant="ember">ember</Button>
          <Button variant="dusk">dusk</Button>
          <span className="text-ink">Sobre fundo claro</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">sm</Button>
          <Button size="md">md</Button>
          <Button size="lg">lg</Button>
        </div>
      </Block>

      <Block title="Campos e seleção">
        <div className="grid max-w-[720px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          <Field label="Campo de texto" name="demo-texto" placeholder="Texto de exemplo" />
          <Field label="E-mail" type="email" name="demo-email" placeholder="voce@email.com" />
        </div>
        <PillGroup label="Exemplo de abas" options={DEMO_TABS} value={tab} onChange={setTab} />
        <PillGroup label="Exemplo de opções" options={DEMO_TABS} value={tab} onChange={setTab} shape="box" />
      </Block>

      <Block title="Raios">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6">
          {RADII.map((r) => (
            <Radius key={r.name} {...r} />
          ))}
        </div>
      </Block>

      <Block title="Marca e ícones">
        <div className="flex flex-wrap items-end gap-8">
          <Ghost className="w-16" />
          <Ghost mouth="open" className="w-16" />
          <Ghost mouth="smile" className="w-16 animate-float motion-reduce:animate-none" />
          <FriesIcon className="h-10 w-10 text-accent-hi" />
          <BulbIcon className="h-10 w-10 text-accent-hi" />
          <BurgerIcon className="h-10 w-10 text-accent-hi" />
        </div>
      </Block>

      <div>
        <Button variant="outline" onClick={() => go('home')}>Voltar ao início</Button>
      </div>
    </main>
  )
}
