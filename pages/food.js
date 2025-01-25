import {Col, Container, Row} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import MyImage from "../components/myimage"


export default function Food() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2024.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">FOOD</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Animefest is located in UCSD&apos;s Price Center, which has a variety of <a
                    href="https://universitycenters.ucsd.edu/dining-and-retail/index.html">dining
                    options</a> convenient for staying fed during the convention.
                </p>
                <Row>
                    <Col xs={0} md={2} lg={3}/>
                    <Col xs={12} md={8} lg={6}>
                        <div className="text-center">
                            <a href="images/AF_25_Food_Flyer.png"><MyImage src="images/AF_25_Food_Flyer.png" alt="Food coupon"
                                                                      className="mw-100 border-stroke mx-auto d-block mb-1"/></a>
                            <p className="caption-text mb-0">Click on the image to open.</p>
                        </div>
                    </Col>
                    <Col xs={0} md={2} lg={3}/>
                </Row>
            </Container>
        </>
    )
}
