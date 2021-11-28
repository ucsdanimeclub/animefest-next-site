import '../styles/globals.css'
import '../styles/theme.scss'
import Layout from '../components/layout'
import Head from 'next/head'
import { useRouter } from "next/dist/client/router"


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Animefest 2022</title>
        <meta name="description" content="February 12 at UC San Diego's Price Center" />
        <link rel="icon" href={`${router.basePath}/favicon.ico`}/>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
