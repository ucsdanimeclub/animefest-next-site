import { Container, ListGroup, Row, Col, Ratio } from 'react-bootstrap'
import Link from 'next/link'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/backgroundimage"


export default function Home() {
  return (
    <>
      <Container fluid className="text-center vh-100 p-0">
        <BackgroundImage src="images/landing.jpg" className="landing">
          <Row className="align-items-center h-100 g-0">
            <Col>
              <h1 className="display-4">Animefest 2022</h1>
              <p className="lead">February 12 at UC San Diego&apos;s Price Center</p>
            </Col>
          </Row>
        </BackgroundImage>
      </Container>

      <Container fluid className="p-4 text-center">
        <ListGroup horizontal className="justify-content-center mb-2">
          <ListGroup.Item className="bg-transparent"><MyImage src="images/discord.svg" alt="Discord" height={50} /></ListGroup.Item>
          <ListGroup.Item className="bg-transparent"><Link href="https://twitter.com/ucsdanimeclub"><a><MyImage src="images/twitter.svg" alt="Twitter" height={50} /></a></Link></ListGroup.Item>
          <ListGroup.Item className="bg-transparent"><Link href="https://www.facebook.com/groups/CALAnimageBeta/"><a><MyImage src="images/facebook.png" alt="Facebook" height={50} /></a></Link></ListGroup.Item>
          <ListGroup.Item className="bg-transparent"><Link href="https://www.instagram.com/ucsdanimagebeta/"><a><MyImage src="images/instagram.png" alt="Instagram" height={50} /></a></Link></ListGroup.Item>
        </ListGroup>
        Contact us and get live event coverage on our social media!
      </Container>

      <Container fluid className="p-5 section" id="about">
        <h1 className="text-left mb-4">About</h1>
        Welcome to Animefest 2022! For a taste of the con, take a look at our recap video of Animefest 2019:
        <div className="video-player mx-auto">
          <Ratio aspectRatio="16x9">
            <iframe className="mt-4" src="https://www.youtube-nocookie.com/embed/eITsJPrRF4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
          </Ratio>
        </div>
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
    </>
  )
}