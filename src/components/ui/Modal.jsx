import { useEffect } from 'react'

// Janela modal. Fecha com Esc, clicando fora ou pelo botão que você colocar dentro.
export default function Modal({ titleId, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden' // trava a rolagem da página por baixo
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-abyss/80 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[90vh] w-full max-w-[520px] overflow-auto rounded-panel border border-line bg-panel px-7 py-8 text-ghost"
      >
        {children}
      </div>
    </div>
  )
}
