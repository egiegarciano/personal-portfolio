import Image from 'next/image'

import { skillData } from '../constants/skillsData'

const AboutMe = () => {
  return (
    <section className='relative mx-6 space-y-6 py-12 md:mx-[50px] md:py-20 lg:mb-10 lg:space-y-12 xl:mx-auto xl:w-[1033px]'>
      <div className='gradient-04' />
      <div className='!mt-0 space-y-5'>
        <h2 className='text-center text-4xl font-semibold tracking-wider md:text-5xl'>
          About Me
        </h2>
        <p className='md:text-center'>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className='space-y-6 lg:flex lg:gap-x-14 lg:space-y-0'>
        <div className='space-y-4 text-justify [&>p]:text-[15px] md:[&>p]:text-base'>
          <h3 className='text-2xl font-medium md:text-[26px]'>
            Get to know me!
          </h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for lorem ipsum will
            uncover many web sites still in their infancy.
          </p>
          <button type='button' className='contact-me__button !mt-10'>
            Contact
          </button>
        </div>
        <div className='relative space-y-4 pt-10 lg:pt-0'>
          <h3 className='text-2xl font-medium md:text-[26px]'>My Skills</h3>
          <p className='text-base'>
            Hover over a skill for current proficiency
          </p>
          <div className='flex flex-wrap gap-x-3 gap-y-5 pb-4 pt-2 md:gap-x-5'>
            {skillData.map((item) => (
              <div
                key={item.name}
                className='group relative rounded-full bg-white p-1'
              >
                <Image
                  alt='icons'
                  src={item.src}
                  className='h-9 w-9 rounded-full object-cover md:h-10 md:w-10'
                />
                <span className='absolute inset-0 flex items-center justify-center rounded-full bg-gray-300 font-extrabold text-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-90'>
                  {item.proficiency}
                </span>
                <p className='absolute bottom-[-38%] text-[11px] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100'>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
