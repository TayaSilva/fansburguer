import { useEffect, useState } from 'react'
import { useStore } from '../context/StoreContext.jsx'
import { CATEGORIES, MENU, formatBRL } from '../data/menu.js'
import MenuCard, { GHOST_VARIANT_COUNT } from '../components/features/MenuCard.jsx'
import WanderingGhost from '../components/features/WanderingGhost.jsx'
import PillGroup from '../components/ui/PillGroup.jsx'
import Button from '../components/ui/Button.jsx'
import Eyebrow from '../components/ui/Eyebrow.jsx'

export default function Menu() {
  const { go, count, total } = useStore()
  const [tab, setTab] = useState('lanches')
  const [focusId, setFocusId] = useState(null)
  const [ghostVariants] = useState(() => {
    const variants = Array.from({ length: GHOST_VARIANT_COUNT }, (_, index) => index)

    for (let index = variants.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1))
      const current = variants[index]
      variants[index] = variants[randomIndex]
      variants[randomIndex] = current
    }

    return Object.fromEntries(MENU.map((item, index) => [item.id, variants[index]]))
  })
  const items = MENU.filter((m) => m.cat === tab)

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return

      if (target.closest('[data-add]')) {
        setFocusId(null)
        return
      }

      const card = target.closest('[data-card-id]')
      const cardId = card?.getAttribute('data-card-id') ?? null

      setFocusId((currentFocusId) => {
        if (!cardId) return null
        if (!currentFocusId) return cardId
        return currentFocusId === cardId ? currentFocusId : null
      })
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setFocusId(null)
    }

    document.addEventListener('click', handleDocumentClick)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <main className="mx-auto flex w-full max-w-[1200px] grow flex-col gap-9 px-6 pb-24 pt-12">
      <WanderingGhost active={focusId !== null} />

      <div className="flex max-w-[680px] flex-col gap-3">
        <Eyebrow>Cardápio em cartaz</Eyebrow>
        <h1 className="m-0 font-display text-[clamp(34px,4.6vw,56px)] font-normal leading-[1.05]">As aparições da casa</h1>
        <p className="m-0 text-mist">
          Cada burger é uma sessão de cinema. Escolha o seu filme, adicione ao pedido e aguente o susto.
        </p>
      </div>

      <PillGroup label="Categorias do cardápio" options={CATEGORIES} value={tab} onChange={setTab} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {items.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            variant={ghostVariants[item.id]}
            state={focusId === null ? 'idle' : focusId === item.id ? 'focus' : 'ghost'}
          />
        ))}
      </div>

      {count > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-card border border-line bg-panel px-7 py-5">
          <div className="text-lg">
            <strong>{count === 1 ? '1 item' : `${count} itens`}</strong> no pedido · {formatBRL(total)}
          </div>
          <Button onClick={() => go('cart')}>Ver carrinho</Button>
        </div>
      )}
    </main>
  )
}
