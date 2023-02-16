import { Inter } from '@next/font/google'

import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-screen overflow-hidden bg-[#1A232E] text-white'>
      <Hero />

      <About />
      <Skill />
      <Project />
      <Footer />
    </div>
  )
}
