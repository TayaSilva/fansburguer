import Ghost from '../brand/Ghost.jsx'

// Abertura: o fantasma surge ao fundo, voa em direção à tela até cobri-la,
// e a camada some revelando o site. Para repetir, o App troca a `key`.
export default function Intro() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 flex animate-intro-out items-center justify-center overflow-hidden bg-abyss motion-reduce:[animation-duration:1.8s]"
    >
      <Ghost mouth="open" className="w-[200px] origin-[50%_75%] animate-ghost-fly motion-reduce:animate-none" />
      <p className="absolute inset-x-0 bottom-[14%] m-0 animate-whisper text-center text-[22px] italic tracking-[0.08em] text-fog motion-reduce:animate-none">
        Tem alguém aí…?
      </p>
    </div>
  )
}
