import Link from 'next/link'

import BgAnimation from './BgAnimation'

const Hero = () => {
  return (
    <section id='home' className='h-screen'>
      <div className='relative mx-6 flex md:mx-[50px] md:mt-[140px] lg:mt-0 xl:mx-auto xl:w-[1033px]'>
        <div className='z-10 mt-7 flex flex-col space-y-5 lg:mt-[190px] lg:space-y-4'>
          <p className='ml-1 text-base tracking-widest md:text-lg'>
            Hi, my name is
          </p>
          <div className='space-y-2 text-4xl font-semibold md:space-y-4 md:text-6xl lg:text-7xl'>
            <h1>Egie Garciano.</h1>
            <h1>I create web-based apps.</h1>
          </div>
          <p className='text-lg md:w-[540px] md:text-xl lg:py-4'>
            A versatile web developer who works on the frontend and backend of
            websites, ensuring the overall success of the product. Interested in
            learning new technologies and taking on new challenges.
          </p>
          <Link
            href='#projects'
            className='w-[175px] cursor-pointer rounded-full bg-gradient-to-r from-[#00DBD8] to-[#B133FF] py-3 text-center font-bold tracking-widest md:py-4'
          >
            PROJECTS
          </Link>
        </div>
        <BgAnimation className='absolute top-[-11%] left-1/2 hidden w-[700px] md:top-[-15%] md:block lg:top-[11%] lg:left-[40%]' />
      </div>
    </section>
  )
}

export default Hero
