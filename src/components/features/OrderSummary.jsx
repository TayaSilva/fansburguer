import { useStore } from '../../context/StoreContext.jsx'
import { formatBRL } from '../../data/menu.js'

// Resumo do pedido.
// Sem `shipping` (carrinho): mostra o subtotal e avisa que o frete vem depois.
// Com `shipping` em reais (pagamento): soma o frete no total; 0 aparece como "Grátis".
export default function OrderSummary({ shipping }) {
  const { count, total } = useStore()
  const known = typeof shipping === 'number'
  const row = 'flex justify-between gap-4'

  return (
    <div className="flex flex-col gap-2 border-t border-line pt-5">
      {known && (
        <div className={`${row} text-mist`}>
          <span>{count === 1 ? '1 item' : `${count} itens`}</span>
          <span>{formatBRL(total)}</span>
        </div>
      )}
      <div className={`${row} text-mist`}>
        <span>Frete</span>
        <span>{known ? (shipping > 0 ? formatBRL(shipping) : 'Grátis') : 'Calculado na próxima etapa'}</span>
      </div>
      <div className={`${row} text-[22px] font-extrabold`}>
        <span>{known ? 'Total' : 'Subtotal dos itens'}</span>
        <span>{formatBRL(total + (known ? shipping : 0))}</span>
      </div>
    </div>
  )
}
