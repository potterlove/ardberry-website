import Head from 'next/head'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=.7" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
