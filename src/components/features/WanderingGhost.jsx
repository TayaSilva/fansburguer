import Ghost from '../brand/Ghost.jsx'

// Fantasma que vaga pela tela enquanto um item do cardápio está em destaque.
export default function WanderingGhost({ active }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-30 w-[clamp(90px,11vw,150px)] animate-wander transition-opacity duration-500 [animation-delay:-3s] motion-reduce:translate-x-[80vw] motion-reduce:translate-y-[18vh] motion-reduce:animate-none ${
        active ? 'opacity-40' : 'opacity-0 [animation-play-state:paused]'
      }`}
    >
      <Ghost mouth="open" className="block w-full animate-float motion-reduce:animate-none" />
    </div>
  )
}
