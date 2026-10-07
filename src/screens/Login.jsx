import { useStore } from '../context/StoreContext.jsx'
import AuthCard from '../components/features/AuthCard.jsx'
import Field from '../components/ui/Field.jsx'
import Button from '../components/ui/Button.jsx'

export default function Login() {
  const { go, signIn } = useStore()

  function handleSubmit(e) {
    e.preventDefault()
    const email = String(new FormData(e.currentTarget).get('email') || '')
    // TODO: trocar pela chamada real de autenticação (sua API)
    signIn(email.split('@')[0])
  }

  return (
    <AuthCard
      title="Quem está aí?"
      subtitle="Entre na sua conta para invocar o pedido."
      onSubmit={handleSubmit}
      footer={
        <>
          <span className="text-mist">Primeira vez na casa?</span>
          <Button variant="outline" size="sm" onClick={() => go('signup')}>Criar conta</Button>
        </>
      }
    >
      <Field label="E-mail" type="email" name="email" autoComplete="email" placeholder="voce@email.com" required />
      <Field label="Senha" type="password" name="senha" autoComplete="current-password" placeholder="Sua senha secreta" required />
      <Button type="submit" size="lg">Entrar</Button>
      <Button variant="link" className="text-mist underline" onClick={() => go('forgot')}>Esqueci minha senha</Button>
    </AuthCard>
  )
}
