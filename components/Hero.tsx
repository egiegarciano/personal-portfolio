import NavBar from './NavBar'
import BgAnimation from './BgAnimation'

const Hero = () => {
  return (
    <section className='h-screen'>
      <NavBar />
      <div className='relative mx-6 flex md:mx-[50px] md:mt-[140px] lg:mt-0 xl:mx-auto xl:w-[1033px]'>
        <div className='z-10 mt-7 flex flex-col space-y-5 lg:mt-[200px] lg:space-y-4'>
          <p className='ml-1 text-base tracking-widest md:text-lg'>
            Hi, my name is
          </p>
          <div className='space-y-2 text-4xl font-semibold md:space-y-4 md:text-6xl lg:text-7xl'>
            <h1>Egie Garciano.</h1>
            <h1>I build things for the web.</h1>
          </div>
          <p className='text-lg md:w-[540px] md:text-xl'>
            A Fronted focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
          <button
            type='button'
            className='w-[175px] cursor-pointer rounded-full bg-gradient-to-r from-[#00DBD8] to-[#B133FF] py-3 font-bold tracking-widest md:py-4'
          >
            PROJECTS
          </button>
        </div>
        <BgAnimation className='absolute top-[-11%] left-1/2 hidden w-[700px] md:top-[11%] md:block' />
      </div>
    </section>
  )
}

export default Hero
