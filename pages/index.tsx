import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen overflow-hidden bg-[#1A232E] text-white'>
      <Hero />
      <div className='section-divider' />
      <About />
      <Skill />
      <div className='section-divider' />
      <Projects />
      <div className='section-divider' />
      <GetInTouch />
      <div className='section-divider' />
      <Footer />
    </div>
  )
}
