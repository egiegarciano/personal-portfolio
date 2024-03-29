import Image from 'next/image'

import ArrowTopRightSquare from './icons/ArrowTopRightSquare'
import GithubIcon from './icons/Github'
import { projectsData } from '../constants/projectsData'

const Projects = () => {
  return (
    <section
      id='projects'
      className='relative mx-6 py-12 md:mx-[50px] md:py-20 lg:mb-10 xl:mx-auto xl:w-[1033px]'
    >
      <div className='gradient-03 left-[-50%] md:left-[-70%] xl:top-0' />
      <h2 className='md:text-5x relative z-10 mb-10 text-center text-4xl font-semibold tracking-wider'>
        Projects
      </h2>
      <div className='relative z-10 space-y-9 lg:space-y-20'>
        {projectsData.map((project, idx) => (
          <div key={idx}>
            <hr className='mb-9 border-gray-600 lg:mb-20' />
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
                  <a
                    href='https://github.com/egiegarciano/todo-next_frontend'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href='https://todo-next-frontend.vercel.app'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <ArrowTopRightSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='gradient-05 lg:!h-[500px] lg:!w-[500px]' />
    </section>
  )
}

export default Projects
