import {Col, Container, Ratio, Row} from 'react-bootstrap'
import MyImage from "../components/myimage"


export default function Theater() {
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">THEATER</h1>
            </Container>

            <Container fluid className="p-5 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>The Price Center Theater is located on the
                    first floor and
                    below the Bear Room. This year, look forward to a musical performance by Super Tonic!</p>
                <p className="mb-0">We will also be hosting two showings of Weathering With You throughout the day.</p>
            </Container>

            <Container fluid className="p-5 mt-4 section">
                <h4 className="text-left mb-4 display-text">FEATURING SUPER TONIC</h4>
                <p className="text-left caption-text mb-4">3:00 PM - 4:00 PM: Performance</p>
                <p className="mb-4">A San Diego based anime and video game cover band composed of UCSD alumni, with a
                    set of songs sure to deliver a huge dose of excitement. Check out their last Animefest performance
                    here:</p>
                <div className="video-player mx-auto">
                    <Ratio aspectRatio="16x9">
                        <iframe className="border-stroke"
                                src="https://www.youtube-nocookie.com/embed/Ul4fmEYF7Bk"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={true}/>
                    </Ratio>
                </div>
            </Container>

            <Container fluid className="p-5 mt-4 section">
                <Row className="align-items-start">
                    <Col md={8}>
                        <h4 className="text-left mb-4 display-text">WEATHERING WITH YOU</h4>
                        <p className="text-left caption-text mb-1">11:30 AM - 1:30 PM: First Showing</p>
                        <p className="text-left caption-text mb-4">5:30 PM - 7:30 PM: Second Showing</p>
                        <p>For this year&apos;s animated film, we will be showcasing famous Japanese film director
                            Shinkai Makoto&apos;s &quot;Weathering With You&quot;, or Tenki no Ko.
                            Following its predecessor, Kimi no Nawa, Tenki no Ko, is a modern romance film excelling in
                            audiovisuals, emotional drama, and a picturesque perspective on climate change in Tokyo.
                            After selling millions of tickets in 2019, the film won Animaton of the Year award at the
                            43rd annual Japan Academy Prize Ceremony as well as the Social Impact Award at the 23rd
                            Japan Media Arts Festival.
                            In other words, it&apos;s a must-see!</p>
                    </Col>
                    <Col md={4}>
                        <MyImage src="images/wwy_poster.jpg" alt="Weathering With You poster"
                                 className="border-stroke mw-100 mx-auto d-block"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
