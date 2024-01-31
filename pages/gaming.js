import {Col, Container, Row} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"
import Prizes from "../data/prizes.json"
import PrizeImages from "../components/prizes/prizeimages"


export default function Gaming() {
    const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Smash").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2024.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">TRITON SMASH</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">SUPER SMASH BROS. ULTIMATE TOURNAMENT</h4>

                <p>Triton Smash will be hosting a tournament for Super Smash Bros. Ultimate! The tournament will be <b>free
                    to enter</b>, and <b>open to anyone</b> at all (not just UCSD students).</p>
                <h4 className="text-left title-text">Register:</h4>
                <p>You can register for the event at <a
                    href="https://www.start.gg/tournament/animefest-2024">start.gg!</a></p>
                <p> Registration will also be available in-person until the bracket starts.</p>
                <h4 className="text-left title-text">Cost and Prizing:</h4>
                <p>The tournament will be free to enter, and will have prizes for the top spots provided by Anime &amp;
                    Manga Enthusiasts!</p>
                <h4 className="text-left title-text">Schedule:</h4>
                <p>Doors will open at <b>12 PM</b>, and setups will be open for friendlies. The bracket will go from <b>1 PM</b> until <b>6PM</b>, 
                but free play will be reopened at <b>4 PM</b> and last until <b>6PM</b>.</p>
                <h4 className="text-left title-text">Location:</h4>
                <p>They&apos;ll be in the <b>Red Shoe Room</b>, which is inside Sun God Lounge. Below is a helpful guide
                    to
                    finding the room:</p>

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
