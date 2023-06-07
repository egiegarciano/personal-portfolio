import { StaticImageData } from 'next/image'

import TodoListApp from '../public/images/todo-list-app.png'
import DummyImage600x300 from '../public/images/dummyImage600x300.png'
import DummyImage600x400 from '../public/images/dummyImage600x400.png'
import DummyImage640x480 from '../public/images/dummyImage640x480.png'

type ProjectData = {
  image: StaticImageData | string
  title: string
  description: string
  technologies: string[]
  github?: string
  liveApp?: string
}

export const projectsData: ProjectData[] = [
  {
    image: TodoListApp,
    title: 'To-Do List App',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    technologies: [
      'Django',
      'NextJS',
      'Typescript',
      'Tailwind',
      'Jest',
      'RTK Query',
    ],
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
