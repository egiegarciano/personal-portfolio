import MediaBar from './MediaBar'

const Footer = () => {
  return (
    <footer className='relative mx-6 mt-12 md:mx-[50px] xl:mx-auto xl:w-[1033px]'>
      <div className='justify-between md:flex xl:py-7'>
        <div className='order-last space-y-4 pt-9 pb-5 md:w-[150px]'>
          <p className='text-lg font-semibold xl:text-[22px]'>Social</p>
          <MediaBar />
        </div>
        <div className='space-y-4 py-6 md:w-[520px]'>
          <p className='text-base font-semibold xl:text-[22px]'>
            Egie Garciano
          </p>
          <p className='text-[15px] md:text-base'>
            A versatile web developer who works on the frontend and backend of
            websites, ensuring the overall success of the product. Interested in
            learning new technologies and taking on new challenges.
          </p>
        </div>
      </div>
      <hr />
      <p className='py-8 text-center text-xs tracking-widest xl:py-11'>
        &copy; Copyright 2023. Made by Egie Garciano
      </p>
    </footer>
  )
}

export default Footer
