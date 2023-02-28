import { StaticImageData } from 'next/image'

import HTML5 from '../public/images/html5-icon.png'
import CSS3 from '../public/images/css3-icon.png'
import JavaScript from '../public/images/javascript-icon.png'
import Reactjs from '../public/images/react-icon.png'
import Nextjs from '../public/images/nextjs-icon.png'
import Typescript from '../public/images/typescript-icon.png'
import Tailwindcss from '../public/images/tailwindcss-icon.png'
import Expressjs from '../public/images/expressjs-icon.png'
import Nestjs from '../public/images/nestjs-icon.png'
import GraphQL from '../public/images/graphql-icon.png'
import RestAPI from '../public/images/rest-api-icon.png'
import Axios from '../public/images/axios-icon.png'
import ApolloGraphQL from '../public/images/apollo-graphql-icon.png'
import Redux from '../public/images/redux-icon.png'
import ReactHookForm from '../public/images/react-hook-form-icon.png'
import Jest from '../public/images/jest-icon.png'
import TestingLibrary from '../public/images/testing-library-icon.png'

type SkillData = {
  name: string
  src: string | StaticImageData
  proficiency: string
}

export const skillData: SkillData[] = [
  {
    name: 'HTML5',
    src: HTML5,
    proficiency: '95%',
  },
  {
    name: 'CSS3',
    src: CSS3,
    proficiency: '85%',
  },
  {
    name: 'JavaScript',
    src: JavaScript,
    proficiency: '70%',
  },
  {
    name: 'ReactJS',
    src: Reactjs,
    proficiency: '65%',
  },
  {
    name: 'NextJS',
    src: Nextjs,
    proficiency: '55%',
  },
  {
    name: 'Typescript',
    src: Typescript,
    proficiency: '50%',
  },
  {
    name: 'Tailwindcss',
    src: Tailwindcss,
    proficiency: '85%',
  },
  {
    name: 'ExpressJS',
    src: Expressjs,
    proficiency: '40%',
  },
  {
    name: 'NestJS',
    src: Nestjs,
    proficiency: '40%',
  },
  {
    name: 'GraphQL',
    src: GraphQL,
    proficiency: '40%',
  },
  {
    name: 'RestAPI',
    src: RestAPI,
    proficiency: '40%',
  },
  {
    name: 'Axios',
    src: Axios,
    proficiency: '40%',
  },
  {
    name: 'ApolloGraphQL',
    src: ApolloGraphQL,
    proficiency: '40%',
  },
  {
    name: 'ReduxToolkit',
    src: Redux,
    proficiency: '40%',
  },
  {
    name: 'ReactHookForm',
    src: ReactHookForm,
    proficiency: '50%',
  },
  {
    name: 'Jest',
    src: Jest,
    proficiency: '40%',
  },
  {
    name: 'TestingLibrary',
    src: TestingLibrary,
    proficiency: '40%',
  },
]
