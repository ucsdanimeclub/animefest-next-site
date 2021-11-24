import Head from 'next/head'
import {Container} from 'react-bootstrap'


export default function Rules() {
  return (
    <div>
      <Head>
        <title>Animefest 2022</title>
        <meta name="description" content="February 12 at UC San Diego's Price Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Rules
        </h1>
      </main>

      <Container fluid className="p-5 mb-4 section">
        Coming Soon!
      </Container>
    </div>
  )
}
