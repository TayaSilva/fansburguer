import Hero from '../components/features/Hero.jsx'
import Marquee from '../components/layout/Marquee.jsx'
import MenuTeaser from '../components/features/MenuTeaser.jsx'
import Legend from '../components/features/Legend.jsx'
import Visit from '../components/features/Visit.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <MenuTeaser />
      <Legend />
      <Visit />
    </main>
  )
}
