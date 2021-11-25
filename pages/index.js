import Head from 'next/head'
import { Container, ListGroup, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
// import Flicking from "@egjs/react-flicking"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Animefest 2022</title>
        <meta name="description" content="February 12 at UC San Diego's Price Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="p-5 text-center landing">
        <h1 className="display-4">Animefest 2022</h1>
        <p className="lead">February 12 at UC San Diego&apos;s Price Center</p>
      </Container>

      <Container fluid className="p-4 text-center">
        <ListGroup horizontal className="justify-content-center">
          <ListGroup.Item className="bg-transparent"><img src="/images/discord.svg" alt="Discord" width={50}></img></ListGroup.Item>
          <ListGroup.Item className="bg-transparent"><Link href="https://twitter.com/ucsdanimeclub"><a><img src="/images/twitter.svg" alt="Twitter" width={50}></img></a></Link></ListGroup.Item>
          <ListGroup.Item className="bg-transparent"><Link href="https://www.facebook.com/groups/CALAnimageBeta/"><a><img src="/images/facebook.png" alt="Facebook" width={50}></img></a></Link></ListGroup.Item>
          <ListGroup.Item className="bg-transparent"><Link href="https://www.instagram.com/ucsdanimagebeta/"><a><img src="/images/instagram.png" alt="Instagram" width={50}></img></a></Link></ListGroup.Item>
        </ListGroup>
        Contact us and get live event coverage on our social media!
      </Container>

      <Container fluid className="p-5 section" id="about">
        <h1 className="text-left mb-4">About</h1>
        Welcome to Animefest 2022! For a taste of the con, take a look at our promo video of Animefest 2019:
        <Row>
          <Col className="text-center">
            <iframe className="mt-4" width="560" height="315" src="https://www.youtube-nocookie.com/embed/eITsJPrRF4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
        </Row>
        {/* <Flicking circular={true} moveType='freeScroll' bound={true}>
          <span className="mr-2">1</span>
          <span className="mr-2">2</span>
          <span className="mr-2">3</span>
          <span className="mr-2">4</span>
          <span className="mr-2">5</span>
        </Flicking> */}
      </Container>

      <Container fluid className="p-5 mt-4 section" id="map">
        <h1 className="text-left mb-4">Map and Schedule</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="location">
        <h1 className="text-left mb-4">Location and Parking</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="sponsors">
        <h1 className="text-left mb-4">Sponsors</h1>
        Coming Soon!
      </Container>
    </div>
  )
}
