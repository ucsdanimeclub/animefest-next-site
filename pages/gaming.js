import {Col, Container, Row} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"
import Prizes from "../data/prizes.json"
import PrizeImages from "../components/prizes/prizeimages"


export default function Gaming() {
    const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Fighters").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2025_v2.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">TRITON FIGHTERS</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">GRANBLUE FANTASY VERSUS: RISING AND FIGHTERZ TOURNAMENT</h4>

                <p>Want to test your skills? Triton Fighters will be hosting a <b>Granblue Fantasy Versus: Rising Tournament</b> and a <b>FighterZ Tournament</b>!
                     The tournament is <b>free to enter and open to everyone</b>! Or participate in Free Play!</p>
                <h4 className="text-left title-text">Register:</h4>
                <p>More details about registration will be released soon!</p>
                <h4 className="text-left title-text">Schedule:</h4>
                <p>Triton Fighters will open for Free Play and In-Person Sign-ups at <b>11 AM</b> and will last till <b>12 PM</b>. 
                    The Grandblue Fantasy Versus: Rising tournament will last from <b>12 PM to 3 PM</b>. The FighterZ tournament will last from <b>1 PM to 4 PM</b>. Free Play will resume from <b>4 PM to 6 PM</b>.</p>
                <h4 className="text-left title-text">Location:</h4>
                <p>The event will be held at <b>Sungod Gaming Lounge</b>. Below is a helpful guide on how to get there:</p>

                <Row className="mb-2">
                    <Col xs={0} md={2} lg={3}/>
                    <Col xs={12} md={8} lg={6}>
                        <a href="images/smashbros.png">
                            <MyImage src="images/smashbros.png" alt="Super Smash Bros gameplay"
                                     className="mw-100 border-stroke mx-auto d-block mb-1"/>
                        </a>
                        <p className="text-center caption-text">Click on the image to open.</p>
                    </Col>
                    <Col xs={0} md={2} lg={3}/>
                </Row>
            </Container>

            <Container fluid className="p-3 mt-4 section">
                <h4 className="text-left mb-4 display-text">PRIZING</h4>
                <PrizeImages prizes={prizesInPool}/>
            </Container>
        </>
    )
}
