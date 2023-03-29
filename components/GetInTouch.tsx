import Link from 'next/link'

const GetInTouch = () => {
  return (
    <section
      id='contact'
      className='relative mx-6 py-12 text-center md:mx-[50px] md:py-20 lg:py-36 xl:mx-auto xl:w-[1033px]'
    >
      <div className='gradient-02 h-[300px] md:h-[438px]' />
      <h2 className='text-[40px] font-semibold tracking-wider md:text-5xl'>
        Get In Touch
      </h2>
      <p className='mt-4 text-[15px] md:mt-6 md:px-6 lg:px-36 xl:px-56'>
        My mailbox is always open, even though I&apos;m not seeking for any new
        opportunities right now. I will do my best to get back to you whether
        you have a question or are just looking to say hello!
      </p>
      <Link
        href='mailto:egiegarciano14@gmail.com'
        target='_blank'
        rel='noreferrer'
        className='contact-button-wrapper'
      >
        <p className='contact-button-text'>Contact me</p>
      </Link>
    </section>
  )
}

export default GetInTouch
