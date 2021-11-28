import { Container, ListGroup, Row, Col, Ratio, Carousel } from 'react-bootstrap'
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
        <p>Animefest 2022, a time and place where animanga lovers, artists, and entertainers celebrate what we love! On February 12, 2022, participants go to the Price Center at UCSD to attend discussion and workshop panels, buy the best artwork,
        and check out your favorite manga in our manga library! And of course, there will be cosplays, an ani-movie event, as well as festival games and video games will be available, all for some otaku fun~</p>
        <p>For a taste of the convention, take a look at our recap video of Animefest 2019:</p>
        <div className="video-player mx-auto">
          <Ratio aspectRatio="16x9">
            <iframe className="mt-4" src="https://www.youtube-nocookie.com/embed/eITsJPrRF4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
          </Ratio>
        </div>
        <Carousel className="carousel mt-5 mx-auto">
          <Carousel.Item>
            <MyImage
              className="d-block w-100"
              src="images/main_stage.png"
              alt="Main Stage slide"
            />
            <Carousel.Caption>
              <h3>Main Stage</h3>
              <p>From Cosplay Masquerade to dance performances to Intermission Orchestra, all of our main events are held on the Main Stage!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <MyImage
              className="d-block w-100"
              src="images/exhibitor_hall.png"
              alt="Exhibitor Hall slide"
            />

            <Carousel.Caption>
              <h3>Exhibitor Hall</h3>
              <p>Browse fanmade merchandise drawn or designed by local artists in the Artist Alley, or check out items sold by industry vendors.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <MyImage
              className="d-block w-100"
              src="images/panels.png"
              alt="Panels slide"
            />

            <Carousel.Caption>
              <h3>Panels</h3>
              <p>There are both informational and interactive panels lined up this year for your enjoyment run by students, alumni, and professionals. Check them out!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <MyImage
              className="d-block w-100"
              src="images/cosplay_masquerade.png"
              alt="Cosplay Masquerade slide"
            />

            <Carousel.Caption>
              <h3>Cosplay Masquerade</h3>
              <p>Register for the Cosplay Masquerade Contest for the chance at some sweet prizes, and vote for the winners here.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <MyImage
              className="d-block w-100"
              src="images/gaming.png"
              alt="Gaming slide"
            />

            <Carousel.Caption>
              <h3>Gaming</h3>
              <p>We have both video games and table top games available to play throughout the day as well as tournaments with prizes!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <MyImage
              className="d-block w-100"
              src="images/showings.png"
              alt="Showings slide"
            />

            <Carousel.Caption>
              <h3>Showings</h3>
              <p>Movie showings will be held in the Price Center Theater.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <MyImage
              className="d-block w-100"
              src="images/manga_library.png"
              alt="Manga Library slide"
            />

            <Carousel.Caption>
              <h3>Manga Library</h3>
              <p>Relax and check out a book from Cal Animage Beta&apos;s library of donated manga.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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