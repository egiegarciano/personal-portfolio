import React from 'react'

const GetInTouch = () => {
  return (
    <section className='mx-6 py-12 text-center md:mx-[50px] md:py-20 xl:mx-[400px]'>
      <h2 className='text-[40px] font-semibold tracking-wider md:text-5xl'>
        Get In Touch
      </h2>
      <p className='mt-4 text-[15px] md:px-6 lg:px-36 xl:px-56'>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <button
        type='button'
        className='mt-16 rounded-md border-2 px-4 py-3 text-base font-medium md:text-lg'
      >
        Contact me
      </button>
    </section>
  )
}

export default GetInTouch
