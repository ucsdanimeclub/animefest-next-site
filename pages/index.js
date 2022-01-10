import { Container, Row, Col, Ratio, Carousel } from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/backgroundimage"
import Social from "../components/social"
import ProgramsCarousel from "../components/programscarousel"


export default function Home() {
  return (
    <>
      <Container fluid className="text-center my-1 text-danger">
        UCSD students and staff must show a green thumb to attend the convention. All other attendees must show a proof of vaccination or
        a negative COVID-19 test result received within the last 24 hours.
      </Container>

      <Container fluid className="text-center vh-100 p-0">
        <BackgroundImage src="images/landing.jpg" className="landing">
          <Row className="align-items-center h-75 g-0 glow-text">
            <Col>
              <MyImage src="images/logo.png" className="w-75"></MyImage>
              <p className="h4">February 12 at UC San Diego&apos;s Price Center</p>
            </Col>
          </Row>
        </BackgroundImage>
      </Container>

      <Social>
        <p className="mb-0 caption-text">Contact us and get live event coverage on our social media!</p>
      </Social>

      <Container fluid className="p-5 section" id="about">
        <h1 className="text-left mb-4 display-text">About</h1>
        <p>Animefest 2022, a time and place where animanga lovers, artists, and entertainers celebrate what we love! On February 12, 2022, participants go to the Price Center at UCSD to attend discussion and workshop panels, buy the best artwork,
          and check out your favorite manga in our manga library! And of course, there will be cosplays, festival games, and video games&mdash;all for some otaku fun.</p>
        <p>For a taste of the convention, take a look at our recap video of Animefest 2019:</p>
        <Row className="align-items-end">
          <Col className="d-none d-lg-block">
            <MyImage src="images/kai.png" alt="Kai mascot art" className="mw-100" />
          </Col>
          <Col>
            <div className="video-player mx-auto">
              <Ratio aspectRatio="16x9">
                <iframe className="mt-2 border-stroke" src="https://www.youtube-nocookie.com/embed/eITsJPrRF4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
              </Ratio>
            </div>
            <ProgramsCarousel />
          </Col>
          <Col className="d-none d-lg-block">
            <MyImage src="images/hina.png" alt="Hina mascot art" className="mw-100" />
          </Col>
        </Row>

      </Container>

      <Container fluid className="p-5 mt-4 section" id="map">
        <h1 className="text-left mb-4 display-text">Map and Schedule</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="location">
        <h1 className="text-left mb-4 display-text">Location and Parking</h1>
        <p>Animefest is held at the Price Center at UC San Diego. Specific rooms coming soon!</p>
        <div className="map mx-auto">
          <Ratio aspectRatio="4x3">
            <iframe className="mt-2 border-stroke" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.697394192468!2d-117.2383838856308!3d32.87972498605018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c46a524fb9%3A0x68571efb243bc289!2sPrice%20Center%2C%20La%20Jolla%2C%20CA%2092093!5e0!3m2!1sen!2sus!4v1638064542514!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
          </Ratio>
        </div>
      </Container>

      {/* <Container fluid className="p-5 mt-4 section" id="sponsors">
        <h1 className="text-left mb-4 display-text">Sponsors</h1>
        Coming Soon!
      </Container> */}
    </>
  )
}
