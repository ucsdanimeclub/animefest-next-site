import {Col, Container, Row} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"


export default function Manga() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2025_v2.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">MANGA LIBRARY</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>The Manga Library will be at the Roger Revelle Room in Price Center.</p>
                <p className="mb-4">If there&apos;s any dream of any animanga connoisseur or artist, it&apos;s to see
                    all different kinds of physical copies of manga all in one place!
                    Whether it be light novels or manga you have or have not seen before, we will be showcasing a modest
                    collection for anyone interested themselves.
                    Seeing manga in its authentic book form will be an unforgettable bucket-list experience!</p>
                <Row>
                    <Col xs={0} md={2} lg={3}/>
                    <Col xs={12} md={8} lg={6}>
                        <MyImage src="images/manga_library_2024.jpg" alt="Manga Library photo"
                                 className="mw-100 border-stroke mx-auto d-block"/>
                    </Col>
                    <Col xs={0} md={2} lg={3}/>
                </Row>
            </Container>
        </>
    )
}
