import Image from 'next/image'

import ArrowTopRightSquare from './icons/ArrowTopRightSquare'
import GithubIcon from './icons/Github'
import { projectsDummyData } from '../constants/projectsDummyData'

const Projects = () => {
  return (
    <section
      id='projects'
      className='relative mx-6 py-12 md:mx-[50px] md:py-20 lg:mb-10 xl:mx-auto xl:w-[1033px]'
    >
      <div className='gradient-03 left-[-50%] md:left-[-40%]' />
      <h2 className='mb-10 text-center text-4xl font-semibold tracking-wider md:text-5xl'>
        Projects
      </h2>
      <div className='space-y-9 lg:space-y-20'>
        {projectsDummyData.map((project, idx) => (
          <div key={idx}>
            <hr className='mb-9 lg:mb-20' />
            <div className='md:flex md:justify-between'>
              <div className='relative flex items-center justify-center'>
                <Image
                  src={project.image}
                  alt='thumbnail'
                  className='h-[163px] w-[320px] object-cover md:h-[275px] md:w-[300px] lg:h-[400px] lg:w-[500px]'
                  quality={70}
                />
              </div>
              <div className='mt-4 space-y-3 md:w-[340px] lg:w-[400px] xl:w-[500px]'>
                <h3 className='text-xl font-medium md:text-2xl md:font-semibold lg:text-3xl'>
                  {project.title}
                </h3>
                <p className='text-[15px] md:text-base'>
                  {project.description}
                </p>
                <ul className='flex space-x-2 pt-4 text-sm'>
                  {project.technologies.map((technology, idx) => (
                    <li key={idx}>{technology}</li>
                  ))}
                </ul>
                <div className='flex items-center space-x-4 pt-4'>
                  <GithubIcon />
                  <ArrowTopRightSquare />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
