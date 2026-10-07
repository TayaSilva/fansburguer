import { useStore } from '../../context/StoreContext.jsx'
import Button from '../ui/Button.jsx'
import BrandLogo from '../brand/BrandLogo.jsx'

export default function Header() {
  const { go, user, signOut, count } = useStore()
  return (
    <header className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-4 p-6">
      <button type="button" onClick={() => go('home')} className="border-0 bg-transparent py-1">
        <BrandLogo />
      </button>
      <nav aria-label="Principal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <Button variant="link" onClick={() => go('menu')}>Cardápio</Button>
        {user ? (
          <>
            <span className="text-mist">Olá, {user.name}</span>
            <Button variant="link" className="underline" onClick={signOut}>Sair</Button>
          </>
        ) : (
          <Button variant="link" onClick={() => go('login')}>Entrar</Button>
        )}
        <Button size="sm" onClick={() => go('cart')}>Carrinho ({count})</Button>
      </nav>
    </header>
  )
}
