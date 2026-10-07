import { useStore } from '../context/StoreContext.jsx'
import { LEGAL_UPDATED_AT, PRIVACY, TERMS } from '../data/legal.js'
import PillGroup from '../components/ui/PillGroup.jsx'
import Button from '../components/ui/Button.jsx'
import Eyebrow from '../components/ui/Eyebrow.jsx'

const TABS = [
  { id: 'terms', label: 'Termos de uso', sections: TERMS },
  { id: 'privacy', label: 'Política de privacidade', sections: PRIVACY },
]

// Termos de uso e política de privacidade numa tela só, em duas abas.
export default function Legal() {
  const { go, legalTab, setLegalTab } = useStore()
  const current = TABS.find((t) => t.id === legalTab) || TABS[0]

  return (
    <main className="mx-auto flex w-full max-w-[820px] grow flex-col gap-7 px-6 pb-24 pt-12">
      <div className="flex flex-col gap-2">
        <Eyebrow>As letras miúdas</Eyebrow>
        <h1 className="m-0 font-display text-[clamp(34px,5vw,48px)] font-normal leading-[1.05]">Termos e privacidade</h1>
        <p className="m-0 text-mist">Sem sustos: aqui está tudo o que combinamos com você.</p>
      </div>

      <PillGroup label="Documento" options={TABS} value={current.id} onChange={setLegalTab} />

      <article className="flex flex-col gap-6 rounded-card border border-line bg-panel px-7 py-8">
        <div className="flex flex-col gap-1">
          <div className="font-display text-[26px] leading-[1.1]">{current.label}</div>
          <div className="text-[15px] text-fog">Última atualização: {LEGAL_UPDATED_AT}</div>
        </div>
        {current.sections.map((s, i) => (
          <section key={s.title} className="flex flex-col gap-2">
            <h2 className="m-0 text-[19px] font-extrabold">{i + 1}. {s.title}</h2>
            <p className="m-0 text-mist">{s.text}</p>
          </section>
        ))}
      </article>

      <div>
        <Button variant="outline" onClick={() => go('home')}>Voltar ao início</Button>
      </div>
    </main>
  )
}
