import {Col, Container, Row} from 'react-bootstrap'
import MyImage from "../components/myimage"
import Prizes from "../data/prizes.json"
import PrizeImages from "../components/prizes/prizeimages"


export default function Gaming() {
    const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Smash Ultimate").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">GAMING</h1>
            </Container>

            <Container fluid className="p-5 section">
                <h4 className="text-left mb-4 display-text">TRITON SMASH TOURNAMENT</h4>
                <p className="text-left caption-text mb-1">12:00 PM: Venue Opens for Friendlies and Sign-ups</p>
                <p className="text-left caption-text mb-4">1:00 PM: Bracket Begins</p>
                <p>Want to play games with others in the San Diego area? Look forward to a Super Smash Bros. Ultimate
                    Tournament at the Red Shoe and Bear rooms in the Sun God Lounge! The top players will receive
                    prizes, seen below.</p>
                <p className="mb-4"><a href="https://smash.gg/tournament/animefest-2022/details">Find more information
                    and sign up for free here.</a> Entrants must bring their own controller.</p>
                <Row>
                    <Col xs={0} md={2} lg={3}/>
                    <Col xs={12} md={8} lg={6}>
                        <MyImage src="images/smashbros.jpg" alt="Super Smash Bros gameplay"
                                 className="mw-100 border-stroke mx-auto d-block"/>
                    </Col>
                    <Col xs={0} md={2} lg={3}/>
                </Row>
            </Container>

            <Container fluid className="p-5 mt-4 section">
                <h4 className="text-left mb-4 display-text">PRIZING</h4>
                <PrizeImages prizes={prizesInPool}/>
            </Container>
        </>
    )
}
