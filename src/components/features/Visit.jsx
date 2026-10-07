import { SITE } from '../../data/site.js'

const INFO = [
  { title: 'Onde', value: SITE.address, note: 'A casa com a luz da varanda piscando.' },
  { title: 'Quando', value: SITE.hours, note: 'Aberto até a hora morta.' },
  { title: 'Invocação', value: SITE.whatsapp, note: 'Delivery: o entregador é de carne e osso.' },
]

export default function Visit() {
  return (
    <section id="visite" className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-24">
      <h2 className="m-0 font-display text-[clamp(34px,4.6vw,56px)] font-normal leading-[1.05]">Venha nos assombrar</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {INFO.map((i) => (
          <div key={i.title} className="flex flex-col gap-2 border-t-2 border-accent pt-5">
            <div className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-accent">{i.title}</div>
            <div className="text-xl">{i.value}</div>
            <div className="text-fog">{i.note}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
