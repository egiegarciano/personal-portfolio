import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'

const MediaBar = () => {
  return (
    <div className='fixed z-10 flex h-full cursor-pointer flex-col justify-center gap-5 pl-[50px]'>
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
