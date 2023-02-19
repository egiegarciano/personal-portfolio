import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'
import Project from '../components/Project'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen overflow-hidden bg-[#1A232E] text-white'>
      <Hero />
      <About />
      <Skill />
      <Project />
      <GetInTouch />
      <Footer />
    </div>
  )
}
