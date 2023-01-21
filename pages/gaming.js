import {Col, Container, Row} from 'react-bootstrap'
import MyImage from "../components/myimage"
// import Prizes from "../data/prizes.json"
// import PrizeImages from "../components/prizes/prizeimages"


export default function Gaming() {
    // const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Smash Ultimate").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">TRITON SMASH</h1>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">SUPER SMASH BROS. ULTIMATE TOURNAMENT</h4>

                <p>Triton Smash will be hosting a tournament for Super Smash Bros. Ultimate! The tournament will be <b>free
                    to enter</b>, and <b>open to anyone</b> at all (not just UCSD students).</p>
                <h4 className="text-left title-text mb-4">Register:</h4>
                <p>You can register for the event on start.gg! Registration will also be available in person until
                    bracket starts.</p>
                <p><a
                    href="https://www.start.gg/tournament/animefest-2023/details">https://www.start.gg/tournament/animefest-2023/details</a>
                </p>
                <h4 className="text-left title-text mb-4">Cost and Prizing:</h4>
                <p>The tournament will be free to enter, and will have prizes for the top spots provided by Anime &amp;
                    Manga Enthusiasts!</p>
                <h4 className="text-left title-text mb-4">Schedule:</h4>
                <p>Doors will open at <b>12 PM</b>, and setups will be open for friendlies. The bracket will start
                    at <b>1 PM.</b></p>
                <h4 className="text-left title-text mb-4">Location:</h4>
                <p>We’ll be in the <b>Red Shoe Room</b>, which is inside Sun God Lounge. Below is a helpful guide to
                    finding the room:</p>

                {/*Rows and Cols is a grid system provided by React-Bootstrap. This allows things to be centered on a page.*/}
                {/*The breakpoints for each display size should add up to 12. Learn more about breakpoints on getbootstrap.com*/}
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

            {/*when uncommenting the below section, plus any other line with the word prizes in it, a prize*/}
            {/*section will be created displaying all the prize images for Triton Smash*/}

            {/*<Container fluid className="p-3 mt-4 section">*/}
            {/*    <h4 className="text-left mb-4 display-text">PRIZING</h4>*/}
            {/*    <PrizeImages prizes={prizesInPool}/>*/}
            {/*</Container>*/}
        </>
    )
}
