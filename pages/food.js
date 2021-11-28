import Head from 'next/head'
import {Container} from 'react-bootstrap'


export default function Food() {
  return (
    <>
      {/* <Head>
        <title>Animefest 2022</title>
        <meta name="description" content="February 12 at UC San Diego's Price Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4">Food</h1>
      </Container>

      <Container fluid className="p-5 mt-4 section">
        Coming Soon!
      </Container>
    </>
  )
}
