import { useRouter } from "next/dist/client/router"
import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/theme.scss'


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Animefest 2022</title>
        <meta name="description" content="February 12 at UC San Diego's Price Center" />
        <link rel="icon" href={`${router.basePath}/favicon.ico`}/>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
