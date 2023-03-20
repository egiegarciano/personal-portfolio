import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'
import Twitter from './icons/Twitter'

const MediaBar = () => {
  return (
    <div className='z-10 flex cursor-pointer justify-start gap-5'>
      <a
        href='https://github.com/egiegarciano'
        target='_blank'
        rel='noreferrer'
      >
        <Github />
      </a>
      <a
        href='https://www.linkedin.com/in/egie-garciano/'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedIn />
      </a>
      <a
        href='https://twitter.com/egiegarciano14'
        target='_blank'
        rel='noreferrer'
      >
        <Twitter />
      </a>
    </div>
  )
}

export default MediaBar
