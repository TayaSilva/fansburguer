import { useStore } from '../context/StoreContext.jsx'
import AuthCard from '../components/features/AuthCard.jsx'
import Field from '../components/ui/Field.jsx'
import Button from '../components/ui/Button.jsx'

export default function Signup() {
  const { go, signIn } = useStore()

  function handleSubmit(e) {
    e.preventDefault()
    const nome = String(new FormData(e.currentTarget).get('nome') || '').trim()
    // TODO: trocar pela chamada real de cadastro (sua API)
    signIn(nome.split(' ')[0])
  }

  return (
    <AuthCard
      title="Junte-se aos assombrados"
      subtitle="Crie sua conta em um minuto. Prometemos não aparecer no seu espelho."
      onSubmit={handleSubmit}
      footer={
        <>
          <span className="text-mist">Já assombra por aqui?</span>
          <Button variant="outline" size="sm" onClick={() => go('login')}>Entrar</Button>
        </>
      }
    >
      <Field label="Nome" type="text" name="nome" autoComplete="name" placeholder="Como devemos chamar você" required />
      <Field label="E-mail" type="email" name="email" autoComplete="email" placeholder="voce@email.com" required />
      <Field label="Celular" type="tel" name="celular" autoComplete="tel" placeholder="(00) 00000-0000" />
      <Field label="Senha" type="password" name="senha" autoComplete="new-password" placeholder="Mínimo de 8 caracteres" minLength={8} required />
      <Button type="submit" size="lg">Criar conta</Button>
    </AuthCard>
  )
}
