import { useEffect, useState } from 'react'
import Link from 'next/link'

import Logo from './icons/Logo'
import Bars from './icons/Bars'
import XMark from './icons/XMark'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
        document.body.classList.remove('overflow-hidden')
      }
    }
  }, [])

  const handleOnClick = () => {
    setIsOpen((prev) => !prev)

    if (!isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }

  return (
    <nav className='relative'>
      <div className='gradient-01 absolute inset-0 w-[70%] md:w-[50%]' />
      <div className='relative flex h-[100px] items-center justify-between px-6 md:px-[50px]'>
        <Link href='/' className='z-10 lg:z-40'>
          <Logo />
        </Link>
        <div onClick={handleOnClick} className='z-30 block lg:hidden'>
          {isOpen ? <XMark /> : <Bars />}
        </div>
        <div
          className={`absolute inset-0 z-20 h-screen justify-end bg-[#0000002a] lg:h-auto lg:space-x-10 lg:bg-transparent ${
            isOpen ? 'flex' : 'hidden lg:flex'
          }`}
        >
          <div className='flex w-[260px] flex-col items-center space-y-10 bg-[#0F1624] pt-[100px] text-base font-medium tracking-wider lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-7 lg:bg-transparent lg:pt-0 lg:pr-[50px]'>
            <Link href='#home'>Home</Link>
            <Link href='#home'>About Me</Link>
            <Link href='#home'>Contact Me</Link>
            <Link href='#home'>Projects</Link>
            <Link href='#home' className='rounded-sm border py-3 px-4'>
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
