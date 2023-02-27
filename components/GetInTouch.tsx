import React from 'react'

const GetInTouch = () => {
  return (
    <section className='relative mx-6 py-12 text-center md:mx-[50px] md:py-20 lg:py-36 xl:mx-auto xl:w-[1033px]'>
      <div className='gradient-02 h-[300px] md:h-[438px]' />
      <h2 className='text-[40px] font-semibold tracking-wider md:text-5xl'>
        Get In Touch
      </h2>
      <p className='mt-4 text-[15px] md:mt-6 md:px-6 lg:px-36 xl:px-56'>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <button type='button' className='contact-me__button'>
        Contact me
      </button>
    </section>
  )
}

export default GetInTouch
