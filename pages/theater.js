import {Container, Row, Col} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"


export default function Theater() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header.jpg" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">MOVIE SHOWING</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>The Price Center Theater is located on the
                    first floor and
                    below the Bear Room.</p>
            </Container>

            <Container fluid className="p-3 mt-4 section">
                <Row className="align-items-start">
                    <Col md={8}>
                        <h4 className="text-left mb-4 display-text">THE WIND RISES</h4>
                        {/*<p className="text-left caption-text mb-1">11:30 AM - 1:30 PM: First Showing</p>*/}
                        {/*<p className="text-left caption-text mb-4">5:00 PM - 7:00 PM: Second Showing</p>*/}
                        <p>We will be hosting two showings of <i>The Wind Rises</i>. Check back here closer to the event
                            date for more information!</p>
                    </Col>
                    <Col md={4}>
                        <MyImage src="images/movie_poster.jpg" alt="The Wind Rises poster"
                                 className="border-stroke mw-100 mx-auto d-block"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
