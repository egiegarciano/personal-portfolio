import NavBar from './NavBar'
import BgAnimation from './BgAnimation'
import MediaBar from './MediaBar'

const Hero = () => {
  return (
    <div className='h-screen'>
      <NavBar />
      <MediaBar />
      <div className='relative flex justify-center'>
        <div className='z-10 mt-[210px] flex w-1/2 flex-col space-y-4'>
          <p className='ml-1 text-lg tracking-widest'>Hi, my name is</p>
          <div className='space-y-4 text-6xl font-semibold lg:text-7xl'>
            <h1>Egie Garciano.</h1>
            <h1>I build things for the web.</h1>
          </div>
          <p className='w-[540px] text-xl'>
            A Fronted focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
          <button
            type='button'
            className='w-[175px] cursor-pointer rounded-full bg-gradient-to-r from-[#00DBD8] to-[#B133FF] py-4 tracking-widest'
          >
            PROJECTS
          </button>
        </div>
        <BgAnimation className='absolute top-[11%] left-1/2 w-[700px]' />
      </div>
    </div>
  )
}

export default Hero
