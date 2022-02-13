import { Col, Container, Ratio, Row } from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import ProgramsCarousel from "../components/index/programscarousel"
import Social from "../components/index/social"
import MyImage from "../components/myimage"


export default function Home() {
  return (
    <>
      <Container fluid className="text-center my-1 text-danger">
        Following University regulations, Animefest has been postponed to a later date TBA. Look out for updates here and on our social media!
        {/* UCSD students and staff must show a green thumb to attend the convention. All other attendees must show a proof of vaccination or
        a negative COVID-19 test result received within the last 24 hours. */}
      </Container>

      <Container fluid className="text-center vh-100 p-0">
        <BackgroundImage src="images/landing.jpg" className="landing">
          <Row className="align-items-center h-75 g-0 glow-text">
            <Col>
              <MyImage src="images/logo_af.svg" className="w-75" alt="Animefest 2022 logo"></MyImage>
              <h4>Date TBA at UC San Diego&apos;s Price Center</h4>
              <h5>Free Admission</h5>
            </Col>
          </Row>
        </BackgroundImage>
      </Container>

      <Social>
        <p className="mb-0 caption-text">Contact us and get live event coverage on our social media!</p>
      </Social>

      <Container fluid className="p-5 section" id="about">
        <h1 className="text-left mb-4 display-text">ABOUT</h1>
        <p>Animefest, a time and place where animanga lovers, artists, and entertainers celebrate what we love! On this single-day convention, participants go to the Price Center at UCSD to attend discussion and workshop panels, buy the best artwork,
          and check out your favorite manga in our manga library! And of course, there will be cosplays, festival games, and video games&mdash;all for some otaku fun.</p>
        <p>Please stay tuned for updates on the new date of Animefest 2022.</p>
        <p>For a taste of what to expect, take a look at our recap video of Animefest 2019:</p>
        <Row className="align-items-end">
          {/* <Col className="d-none d-lg-block">
            <MyImage src="images/kai.png" alt="Kai mascot art" className="mw-100"/>
          </Col> */}
          <Col>
            <div className="video-player mx-auto">
              <Ratio aspectRatio="16x9">
                <iframe className="mt-2 border-stroke" src="https://www.youtube-nocookie.com/embed/eITsJPrRF4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
              </Ratio>
            </div>
            <ProgramsCarousel />
          </Col>
          {/* <Col className="d-none d-lg-block">
            <MyImage src="images/hina.png" alt="Hina mascot art" className="mw-100"/>
          </Col> */}
        </Row>

      </Container>

      <Container fluid className="p-5 mt-4 section" id="map">
        <h1 className="text-left mb-4 display-text">MAP AND SCHEDULE</h1>
        <p>Animefest is held at the Price Center at UC San Diego. Specifically, it will be at the West Ballroom, Theater, Thurgood Marshall, Eleanor Roosevelt, Roger Revelle, Bear, and Green Table rooms.</p>
        <p>All rooms are located on the second floor with the exception of the Theater, which is on the first floor and below the Bear Room.</p>
        <p className="mb-0">Full map and schedule coming soon!</p>
      </Container>

      <Container fluid className="p-5 mt-4 section" id="parking">
        <h1 className="text-left mb-4 display-text">PARKING</h1>
        <p>Unfortunately, <a href="https://transportation.ucsd.edu/visit/visitor/index.html">parking is not free</a> on UCSD&apos;s campus. We recommend you find free parking off campus and walking to campus or taking the bus to campus. We apologize for the inconvenience.</p>
        <p>For parking on campus, please take a look at the <a href="https://maps.ucsd.edu/map/?id=1005#!ce/17201?ct/36591,27576,20079,18312,18027,35364,29152,36849,42782,43513,45236?mc/32.877341347399,-117.23531663418?z/18?lvl/0">official campus map</a> and select <b>Parking Structure</b> in the menu to see areas where you can park.
          The Gilman Parking Structure is closest to the convention. You can use the Wayfinding feature or the map below to navigate to Price Center:</p>
        <div className="map mx-auto">
          <Ratio aspectRatio="4x3">
            <iframe className="mt-2 border-stroke" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.697394192468!2d-117.2383838856308!3d32.87972498605018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c46a524fb9%3A0x68571efb243bc289!2sPrice%20Center%2C%20La%20Jolla%2C%20CA%2092093!5e0!3m2!1sen!2sus!4v1638064542514!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
          </Ratio>
        </div>
      </Container>

      {/* <Container fluid className="p-5 mt-4 section" id="photobooth">
        <h1 className="text-left mb-4 display-text">Photobooth</h1>
        Coming Soon!
      </Container> */}
    </>
  )
}
