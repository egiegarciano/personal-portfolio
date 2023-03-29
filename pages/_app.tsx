import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import NavBar from '../components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='My personal portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
