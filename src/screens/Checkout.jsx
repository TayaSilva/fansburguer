import { useState } from 'react'
import { useStore } from '../context/StoreContext.jsx'
import { formatBRL } from '../data/menu.js'
import { SHIPPING_FEE, SITE } from '../data/site.js'
import Button from '../components/ui/Button.jsx'
import Field from '../components/ui/Field.jsx'
import PillGroup from '../components/ui/PillGroup.jsx'
import Eyebrow from '../components/ui/Eyebrow.jsx'
import OrderSummary from '../components/features/OrderSummary.jsx'

const MODES = [
  { id: 'entrega', label: 'Entrega' },
  { id: 'retirada', label: 'Retirar no balcão' },
]

const METHODS = [
  { id: 'cartao', label: 'Cartão de crédito' },
  { id: 'pix', label: 'Pix' },
  { id: 'dinheiro', label: 'Dinheiro na entrega' },
]

const PANEL = 'flex flex-col gap-5 rounded-card border border-line bg-panel p-7'
const GRID = 'grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'

export default function Checkout() {
  const { go, placeOrder } = useStore()
  const [mode, setMode] = useState('entrega')
  const [method, setMethod] = useState('cartao')
  const shipping = mode === 'entrega' ? SHIPPING_FEE : 0

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: enviar o pedido para a sua API e o pagamento para o gateway.
    // Nunca envie nem guarde dados de cartão no seu próprio servidor:
    // use o formulário/SDK do gateway (Mercado Pago, Pagar.me, Stripe...).
    placeOrder()
  }

  return (
    <main className="mx-auto w-full max-w-[760px] grow px-6 pb-24 pt-12">
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <Eyebrow>Último passo</Eyebrow>
          <h1 className="m-0 font-display text-[clamp(34px,5vw,48px)] font-normal leading-[1.05]">Entrega e pagamento</h1>
        </div>

        <section className={PANEL}>
          <h2 className="m-0 text-[22px] font-extrabold">Como o pedido chega até você</h2>
          <PillGroup label="Forma de entrega" options={MODES} value={mode} onChange={setMode} shape="box" />
          {mode === 'entrega' ? (
            <>
              <div className={GRID}>
                <Field label="CEP" name="cep" autoComplete="postal-code" inputMode="numeric" placeholder="00000-000" required />
                <Field label="Rua" name="rua" autoComplete="address-line1" placeholder="Nome da rua" required />
                <Field label="Número" name="numero" placeholder="Nº" required />
                <Field label="Complemento" name="complemento" autoComplete="address-line2" placeholder="Apto, bloco, casa dos fundos" />
                <Field label="Bairro" name="bairro" placeholder="Seu bairro" required />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-photo border border-line bg-night px-5 py-4">
                <div className="flex flex-col gap-0.5">
                  <strong className="text-lg">Frete</strong>
                  <span className="text-mist">Chega em {SITE.deliveryTime} · atendemos {SITE.deliveryArea}</span>
                </div>
                <div className="font-display text-[22px]">{formatBRL(SHIPPING_FEE)}</div>
              </div>
            </>
          ) : (
            <p className="m-0 text-mist">
              Retire no balcão em {SITE.address}. Avisamos quando o pedido se materializar. <strong className="text-ghost">Sem frete.</strong>
            </p>
          )}
        </section>

        <section className={PANEL}>
          <h2 className="m-0 text-[22px] font-extrabold">Forma de pagamento</h2>
          <PillGroup label="Forma de pagamento" options={METHODS} value={method} onChange={setMethod} shape="box" />

          {method === 'cartao' && (
            <>
              <div className={GRID}>
                <Field className="col-span-full" label="Número do cartão" name="cartao" autoComplete="cc-number" inputMode="numeric" placeholder="0000 0000 0000 0000" required />
                <Field className="col-span-full" label="Nome impresso no cartão" name="titular" autoComplete="cc-name" placeholder="Como está no cartão" required />
                <Field label="Validade" name="validade" autoComplete="cc-exp" inputMode="numeric" placeholder="MM/AA" required />
                <Field label="CVV" name="cvv" autoComplete="cc-csc" inputMode="numeric" placeholder="000" required />
              </div>
              <label className="flex min-h-11 cursor-pointer items-center gap-3">
                <input type="checkbox" name="salvar" className="h-[22px] w-[22px] accent-accent" />
                Guardar este cartão para os próximos pedidos
              </label>
            </>
          )}

          {method === 'pix' && (
            <div className="flex flex-col items-start gap-2 rounded-tile border-2 border-dashed border-edge p-7">
              <strong className="text-lg">[QR CODE E CHAVE PIX]</strong>
              <span className="text-mist">O código aparece aqui depois de confirmar. O pagamento cai mais rápido que susto.</span>
            </div>
          )}

          {method === 'dinheiro' && (
            <Field className="max-w-[280px]" label="Troco para quanto?" name="troco" inputMode="decimal" placeholder="R$ 0,00" />
          )}

          <p className="m-0 text-[15px] text-fog">
            Protótipo de demonstração: nada do que for digitado aqui é enviado ou guardado.
          </p>
        </section>

        <OrderSummary shipping={shipping} />

        <div className="flex flex-wrap justify-between gap-4">
          <Button variant="outline" size="lg" onClick={() => go('cart')}>Voltar ao carrinho</Button>
          <Button type="submit" size="lg">Confirmar pedido</Button>
        </div>
      </form>
    </main>
  )
}
