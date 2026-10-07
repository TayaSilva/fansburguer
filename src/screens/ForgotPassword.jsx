import { useState } from 'react'
import { useStore } from '../context/StoreContext.jsx'
import AuthCard from '../components/features/AuthCard.jsx'
import Field from '../components/ui/Field.jsx'
import Button from '../components/ui/Button.jsx'

export default function ForgotPassword() {
  const { go } = useStore()
  const [sentTo, setSentTo] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const email = String(new FormData(e.currentTarget).get('email') || '')
    // TODO: pedir à sua API o envio do e-mail de recuperação
    setSentTo(email)
  }

  if (sentTo) {
    return (
      <AuthCard
        title="Confira seu e-mail"
        subtitle={
          <>
            Se existir uma conta com <strong className="text-ghost">{sentTo}</strong>, o link para criar uma senha nova chega em alguns minutos. Vale espiar a caixa de spam: às vezes ele se esconde por lá.
          </>
        }
      >
        <Button size="lg" onClick={() => go('login')}>Voltar para o login</Button>
        <Button variant="link" className="text-mist underline" onClick={() => setSentTo('')}>
          Não recebi, tentar outro e-mail
        </Button>
      </AuthCard>
    )
  }

  return (
    <AuthCard
      title="A senha virou fantasma?"
      subtitle="Acontece nas melhores casas mal-assombradas. Informe seu e-mail e enviamos um link para criar uma senha nova."
      onSubmit={handleSubmit}
      footer={
        <>
          <span className="text-mist">Lembrou da senha?</span>
          <Button variant="outline" size="sm" onClick={() => go('login')}>Voltar para o login</Button>
        </>
      }
    >
      <Field label="E-mail" type="email" name="email" autoComplete="email" placeholder="voce@email.com" required />
      <Button type="submit" size="lg">Enviar link de recuperação</Button>
    </AuthCard>
  )
}
