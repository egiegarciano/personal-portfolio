import MediaBar from './MediaBar'

const Footer = () => {
  return (
    <div className='relative px-6 md:px-[50px]'>
      {/* <div className='gradient-02' /> */}
      <div className='justify-between md:flex'>
        <div className='order-last space-y-4 pt-9 pb-5 md:w-[150px]'>
          <p className='text-lg font-semibold'>Social</p>
          <MediaBar />
        </div>
        <div className='space-y-4 py-5 text-base md:w-[448px]'>
          <p className='font-semibold'>Egie Garciano</p>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
      </div>
      <hr />
      <p className='py-8 text-center text-xs'>
        &copy; Copyright 2023. Made by Egie Garciano
      </p>
    </div>
  )
}

export default Footer
