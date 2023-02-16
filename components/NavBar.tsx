import Link from 'next/link'

import Logo from './icons/Logo'

const NavBar = () => {
  return (
    <nav className='relative px-[50px]'>
      <div className='gradient-01 absolute inset-0 w-[50%]' />
      <div className='flex h-[88px] items-center justify-between'>
        <Logo />
        <div className='space-x-10 text-base font-medium tracking-wider'>
          <Link href='#home'>Home</Link>
          <Link href='#home'>About</Link>
          <Link href='#home'>Skills</Link>
          <Link href='#home'>Projects</Link>
          <Link href='#home' className='rounded-sm border py-2 px-3'>
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
