import {useRouter} from "next/dist/client/router"
import Head from 'next/head'
import Layout from '../components/navigation/layout'
import '../styles/globals.css'
import '../styles/theme.scss'
import '../styles/parking.css'
import '../styles/sponsors.css'


export default function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Animefest 2027</title>
                <meta name="description" content="February 13th 2027"/>
                <link rel="icon" href={`${router.basePath}/favicon_2026.png`}/>
                <link rel="stylesheet" href={`${router.basePath}/fonts.css`}/>
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
