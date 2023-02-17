import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'

const MediaBar = () => {
  return (
    <div className='z-10 flex cursor-pointer justify-start gap-5 lg:fixed lg:h-full lg:flex-col lg:pl-[40px]'>
      <a href='#'>
        <Github />
      </a>
      <a href='#'>
        <LinkedIn />
      </a>
    </div>
  )
}

export default MediaBar
