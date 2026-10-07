import { useState } from 'react'
import Modal from '../ui/Modal.jsx'
import Button from '../ui/Button.jsx'
import { FIELD_INPUT } from '../ui/Field.jsx'

const MAX = 200

// Modal "Me conta sua história de terror": um campo de até 200 caracteres.
export default function StoryModal({ onClose }) {
  const [text, setText] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: enviar `text` para a sua API
    setSent(true)
  }

  if (sent) {
    return (
      <Modal titleId="story-title" onClose={onClose}>
        <div className="flex flex-col items-start gap-4">
          <h2 id="story-title" className="m-0 font-display text-3xl font-normal leading-[1.1]">Arrepiou até o chapeiro</h2>
          <p className="m-0 text-mist">História recebida. Se as luzes piscarem hoje à noite, somos nós lendo em voz alta.</p>
          <Button onClick={onClose}>Fechar</Button>
        </div>
      </Modal>
    )
  }

  return (
    <Modal titleId="story-title" onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 id="story-title" className="m-0 font-display text-3xl font-normal leading-[1.1]">Sua história de terror</h2>
        <p className="m-0 text-mist">
          Conta pra gente: qual foi o maior susto da sua vida? Vale casa mal-assombrada, vulto no corredor ou geladeira vazia.
        </p>
        <label className="flex flex-col gap-1.5 text-[15px] font-semibold">
          Sua história
          <textarea
            name="historia"
            rows={5}
            maxLength={MAX}
            required
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, MAX))}
            placeholder="Era uma noite escura e a chapa acendeu sozinha…"
            className={`resize-y ${FIELD_INPUT}`}
          />
        </label>
        <div aria-live="polite" className="text-right text-[15px] text-fog">{text.length}/{MAX} caracteres</div>
        <div className="flex flex-wrap justify-between gap-3">
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button type="submit">Enviar história</Button>
        </div>
      </form>
    </Modal>
  )
}
