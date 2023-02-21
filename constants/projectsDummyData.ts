import { StaticImageData } from 'next/image'

import SampleImage from '../public/images/sample-image.jpg'
import DummyImage600x300 from '../public/images/dummyImage600x300.png'
import DummyImage600x400 from '../public/images/dummyImage600x400.png'
import DummyImage640x480 from '../public/images/dummyImage640x480.png'

type ProjectsDummyData = {
  image: StaticImageData | string
  title: string
  description: string
  technologies: string[]
}

export const projectsDummyData: ProjectsDummyData[] = [
  {
    image: SampleImage,
    title: 'What is Lorem Ipsum?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    technologies: ['VS Code', 'NextJS', 'React', 'Tailwind'],
  },
  {
    image: DummyImage600x300,
    title: 'What is Lorem Ipsum?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    technologies: ['VS Code', 'NextJS', 'React', 'Tailwind'],
  },
  {
    image: DummyImage600x400,
    title: 'What is Lorem Ipsum?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    technologies: ['VS Code', 'NextJS', 'React', 'Tailwind'],
  },
  {
    image: DummyImage640x480,
    title: 'What is Lorem Ipsum?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    technologies: ['VS Code', 'NextJS', 'React', 'Tailwind'],
  },
]
