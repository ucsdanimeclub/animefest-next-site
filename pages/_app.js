import {useRouter} from "next/dist/client/router"
import Head from 'next/head'
import Layout from '../components/navigation/layout'
import '../styles/globals.css'
import '../styles/theme.scss'


export default function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Animefest 2023</title>
                <meta name="description" content="February 18, 2023 at UC San Diego's Price Center"/>
                <link rel="icon" href={`${router.basePath}/favicon.ico`}/>
                <link rel="stylesheet" href={`${router.basePath}/fonts.css`}/>
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
