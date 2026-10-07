import { useCallback, useEffect, useState } from 'react'
import { useStore } from './context/StoreContext.jsx'
import Intro from './components/layout/Intro.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './screens/Home.jsx'
import Menu from './screens/Menu.jsx'
import Login from './screens/Login.jsx'
import Signup from './screens/Signup.jsx'
import ForgotPassword from './screens/ForgotPassword.jsx'
import Cart from './screens/Cart.jsx'
import Checkout from './screens/Checkout.jsx'
import Done from './screens/Done.jsx'
import Legal from './screens/Legal.jsx'
import StyleGuide from './screens/StyleGuide.jsx'

const SCREENS = {
  home: Home,
  menu: Menu,
  login: Login,
  signup: Signup,
  forgot: ForgotPassword,
  cart: Cart,
  checkout: Checkout,
  done: Done,
  legal: Legal,
  styleguide: StyleGuide,
}

const INTRO_MS = 4300

export default function App() {
  const { screen } = useStore()
  const [introKey, setIntroKey] = useState(1) // 0 = abertura desligada

  // tira a abertura da tela quando a animação termina
  useEffect(() => {
    if (!introKey) return
    const t = setTimeout(() => setIntroKey(0), INTRO_MS)
    return () => clearTimeout(t)
  }, [introKey])

  const replayIntro = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    setIntroKey(Date.now())
  }, [])

  const Screen = SCREENS[screen] || Home

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-night font-sans text-[17px] leading-normal text-ghost">
      {introKey !== 0 && <Intro key={introKey} />}
      <Header />
      <div className="flex grow flex-col">
        <Screen />
      </div>
      <Footer onReplayIntro={replayIntro} />
    </div>
  )
}
