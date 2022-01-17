import { Col, Container, Row } from 'react-bootstrap'
import MyImage from "../components/myimage"


export default function Showings() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">SHOWINGS</h1>
      </Container>

      <Container fluid className="p-5 section">
        <Row className="align-items-start">
          <Col>
            <h4 className="text-left mb-4 display-text">ABOUT</h4>
            <p>Performances will be hosted at the Price Center Theater, which is located on the first floor and below the Bear Room.</p>
            <p>If you are a performer and are interested in performing at Animefest, please view our Performers application <a href="https://forms.gle/U5vXp6oN8YotrfzBA">here.</a> The deadline to apply is January 22nd.</p>
            <p>For this year&apos;s animated film, we will be showcasing famous Japanese film director Shinkai Makoto&apos;s &quot;Weathering With You&quot;, or Tenki no Ko.
              Following its predecessor, Kimi no Nawa, Tenki no Ko, is a modern romance film excelling in audiovisuals, emotional drama, and a picturesque perspective on climate change in Tokyo.
              After selling millions of tickets in 2019, the film won Animaton of the Year award at the 43rd annual Japan Academy Prize Ceremony as well as the Social Impact Award at the 23rd Japan Media Arts Festival.
              In other words, it&apos;s a must-see!</p>
          </Col>
          <Col md={4}>
            <MyImage src="images/wwy_poster.jpg" alt="Weathering With You poster" className="border-stroke mw-100 mx-auto d-block" />
          </Col>
        </Row>
      </Container>
    </>
  )
}
