import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
// import Flicking from "@egjs/react-flicking"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Animefest 2022</title>
        <meta name="description" content="February 12 at UC San Diego's Price Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="pt-5 p-5 text-center landing">
        <h1 className="display-4">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </Container>

      <Container fluid className="w-100 p-5 mt-4 section" id="about">
        <h1 className="text-left mb-4">About</h1>
        Welcome to Animefest 2022! For a taste of the con, take a look at our promo video of Animefest 2019:
      </Container>

      <Container fluid className="w-100 p-5 mt-4 section" id="map">
        <h1 className="text-left mb-4">Map and Schedule</h1>
        Map
      </Container>

      <Container fluid className="w-100 p-5 mt-4 section" id="location">
        <h1 className="text-left mb-4">Location and Parking</h1>
        Animefest is held in Price Center on UC San Diego's campus.
        Specifically, our events will be held in the Price Center West and East Ballrooms, and the ERC, Marshall, Muir, and Revelle College rooms.
        A map of Price Center can be found here.
        <br/>
        Parking is NOT free at UCSD. We recommend you find free parking off campus and walking to campus or taking the bus to campus.
        For parking on campus, parking on Gilman is $X for full day parking, and YY and zz are $X for full day parking.
        We apologize for the inconvenience.
      </Container>


      <Container fluid className="w-100 p-5 mt-4 section" id="sponsors">
        <h1 className="text-left mb-4">Sponsors</h1>
        Thank You To Our Sponsors
      </Container>
    </div>
  )
}
