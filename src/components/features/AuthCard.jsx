// Moldura comum das telas de login, cadastro e recuperação de senha.
// Com `onSubmit` vira um <form>; sem ele, um bloco simples.
export default function AuthCard({ title, subtitle, onSubmit, children, footer }) {
  const Tag = onSubmit ? 'form' : 'div'
  return (
    <main className="mx-auto w-full max-w-[480px] grow px-6 pb-24 pt-12">
      <Tag onSubmit={onSubmit} className="flex flex-col gap-5 rounded-panel border border-line bg-panel px-7 py-9">
        <div className="flex flex-col gap-2">
          <h1 className="m-0 font-display text-4xl font-normal leading-[1.05]">{title}</h1>
          <p className="m-0 text-mist">{subtitle}</p>
        </div>
        {children}
        {footer && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">{footer}</div>
        )}
      </Tag>
    </main>
  )
}
