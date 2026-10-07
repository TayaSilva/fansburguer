import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { MENU } from '../data/menu.js'

// Estado global do site: tela atual, carrinho e usuário.
// Tudo fica só na memória do navegador. Em produção, login, cadastro e pedido
// devem chamar a sua API, e o pagamento um gateway (Mercado Pago, Stripe...).

const StoreContext = createContext(null)

// Telas: home | menu | login | signup | forgot | cart | checkout | done | legal | styleguide

export function StoreProvider({ children }) {
  const [screen, setScreen] = useState('home')
  const [cart, setCart] = useState({}) // { [idDoItem]: quantidade }
  const [user, setUser] = useState(null) // { name }
  const [after, setAfter] = useState(null) // para onde ir depois do login
  const [orderId, setOrderId] = useState('')
  const [legalTab, setLegalTab] = useState('terms') // terms | privacy

  const go = useCallback((next) => {
    setScreen(next)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const openLegal = useCallback((tab) => {
    setLegalTab(tab)
    go('legal')
  }, [go])

  const add = useCallback((id, delta = 1) => {
    setCart((prev) => {
      const next = { ...prev }
      const qty = (next[id] || 0) + delta
      if (qty > 0) next[id] = qty
      else delete next[id]
      return next
    })
  }, [])

  const signIn = useCallback((name) => {
    setUser({ name: name || 'visitante' })
    go(after || 'home')
    setAfter(null)
  }, [after, go])

  const signOut = useCallback(() => setUser(null), [])

  const startCheckout = useCallback(() => {
    if (user) return go('checkout')
    setAfter('checkout')
    go('login')
  }, [user, go])

  const placeOrder = useCallback(() => {
    setOrderId('#' + (1000 + Math.floor(Math.random() * 9000)))
    setCart({})
    go('done')
  }, [go])

  const value = useMemo(() => {
    const lines = MENU.filter((m) => cart[m.id]).map((m) => ({
      ...m,
      qty: cart[m.id],
      total: m.price * cart[m.id],
    }))
    const count = lines.reduce((sum, l) => sum + l.qty, 0)
    const total = lines.reduce((sum, l) => sum + l.total, 0)
    return {
      screen, go, cart, add, lines, count, total,
      user, signIn, signOut, startCheckout, placeOrder, orderId,
      legalTab, setLegalTab, openLegal,
    }
  }, [screen, go, cart, add, user, signIn, signOut, startCheckout, placeOrder, orderId, legalTab, openLegal])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore precisa estar dentro de <StoreProvider>')
  return ctx
}
