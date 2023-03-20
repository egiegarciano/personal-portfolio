import { StaticImageData } from 'next/image'

import HTML5 from '../public/images/html5-icon.webp'
import CSS3 from '../public/images/css3-icon.webp'
import JavaScript from '../public/images/javascript-icon.webp'
import Reactjs from '../public/images/react-icon.webp'
import Nextjs from '../public/images/nextjs-icon.webp'
import Typescript from '../public/images/typescript-icon.webp'
import Tailwindcss from '../public/images/tailwindcss-icon.webp'
import Expressjs from '../public/images/expressjs-icon.webp'
import Nestjs from '../public/images/nestjs-icon.webp'
import GraphQL from '../public/images/graphql-icon.webp'
import RestAPI from '../public/images/rest-api-icon.webp'
import Axios from '../public/images/axios-icon.webp'
import ApolloGraphQL from '../public/images/apollo-graphql-icon.webp'
import Redux from '../public/images/redux-icon.webp'
import ReactHookForm from '../public/images/react-hook-form-icon.webp'
import Jest from '../public/images/jest-icon.webp'
import TestingLibrary from '../public/images/testing-library-icon.webp'

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
