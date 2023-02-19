import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'

const MediaBar = () => {
  return (
    <div className='z-10 flex cursor-pointer justify-start gap-5'>
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
