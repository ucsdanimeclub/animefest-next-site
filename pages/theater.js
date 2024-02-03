import {Container, Row, Col} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"


export default function Theater() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2024.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">MOVIE SHOWING</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>The Price Center Theater is located on the first floor and below the Bear Room.<br></br> <br></br> 

                    Feel free to use the following image as a reference: </p>

                    <Row className="mb-4">
                    <Col xs={0} md={2} lg={4} />
                    <Col xs={12} md={8} lg={4}>
                        <MyImage src="images/price_center_theatre.png" alt="pc theater location"
                                 className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                    <Col xs={0} md={2} lg={4} />
                </Row>
            </Container>

            <Container fluid className="p-3 mt-4 section">
                <Row className="align-items-start">
                    <Col md={8}>
                        <h4 className="text-left mb-4 display-text">ONGAKU: OUR SOUND</h4>
                        <p className="text-left caption-text mb-1">11:30 AM - 1:00 PM: First Showing</p>
                        <p className="text-left caption-text mb-3">5:00 PM - 6:30 PM: Second Showing</p>
                        <p>We will be hosting two showings of <i>Ongaku: Our Sound</i>. </p>
                        
                        <h4 className="text-left title-text">Synopsis</h4>
                        <p>Having no skill, money, or even a full set of drums, 
                        three high school delinquents form a rock &apos;n&apos;
                        roll band to impress their only friend, avoid a rival gang, and jam out.</p>


                        <h4 className="text-left title-text">Behind the Scenes</h4>
                        <p><i>Ongaku: Our Sound</i> is a 2019 musical comedy film written, directed and 
                        animated by Kenji Iwaisawa, based on the 2005 self-published manga <i>Ongaku to Manga</i> by 
                        Hiroyuki Oohashi. The film was produced by the studios Rock&apos;n Roll Mountain and Tip Top, 
                        and stars the voices of Shintaro Sakamoto, Tateto Serizawa, Tomoya Maeno, Ren Komai, Naoto Takenaka 
                        and Kami Hiraiwa. </p>
                    </Col>
                    <Col md={4}>
                        <MyImage src="images/movie_poster_2024.jpg" alt="Ongaku poster"
                                 className="border-stroke mw-100 mx-auto d-block"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
