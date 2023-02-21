import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'
import Twitter from './icons/Twitter'

const MediaBar = () => {
  return (
    <div className='z-10 flex cursor-pointer justify-start gap-5'>
      <a href='#'>
        <Github />
      </a>
      <a href='#'>
        <LinkedIn />
      </a>
      <a href='#'>
        <Twitter />
      </a>
    </div>
  )
}

export default MediaBar
