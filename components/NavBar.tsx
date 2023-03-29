import { useEffect, useState } from 'react'
import Link from 'next/link'

import Logo from './icons/Logo'
import Bars from './icons/Bars'
import XMark from './icons/XMark'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
        document.body.classList.remove('overflow-hidden')
      }
    }

    window.addEventListener('resize', handleOnResize)

    return () => window.removeEventListener('resize', handleOnResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if (currentScrollPos > prevScrollPos) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const handleOnClick = () => {
    setIsOpen((prev) => !prev)

    if (!isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }

  return (
    <nav
      className={`sticky z-20 bg-[#1A232E] text-white shadow-xl lg:overflow-hidden  ${
        isVisible && 'top-0'
      }`}
    >
      <div className='gradient-01 absolute inset-0 hidden w-[70%] md:w-[50%] lg:flex' />
      <div className='relative flex h-[75px] items-center justify-between px-6 md:px-[50px]'>
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
            <Link href='#aboutme'>About Me</Link>
            <Link href='#projects'>Projects</Link>
            <Link href='#contact'>Contact Me</Link>
            <Link
              href='#home'
              className='rounded-md bg-gradient-to-r from-[#8F60D5] to-[#2EA7C8] p-[2px]'
            >
              <div className='rounded-md bg-[#1A232E] py-2 px-4'>Resume</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
