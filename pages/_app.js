import {useRouter} from "next/dist/client/router"
import Head from 'next/head'
import Placeholder from '../components/placeholder'
import '../styles/globals.css'
import '../styles/theme.scss'


export default function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Animefest 2026</title>
                <meta name="description" content="Coming Soon!"/>
                <link rel="icon" href={`${router.basePath}/favicon_2025.jpg`}/>
                <link rel="stylesheet" href={`${router.basePath}/fonts.css`}/>
            </Head>

            <Placeholder />
        </>
    )
}
