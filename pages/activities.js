import { Col, Container, Row } from 'react-bootstrap'
import MyImage from "../components/myimage"


export default function Activities() {
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">FEATURED ACTIVITIES</h1>
            </Container>

            <Container fluid className="p-5 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <Row className="align-items-start">
                    <Col md={8}>
                        <p className="text-left caption-text mb-4">11:00 AM - 5:00 PM: Activities Open</p>
                        <p className="mb-0">The Board Game and Origami Folders clubs will be hosting tabletop games and origami
                            lessons at the Green Table Room in the Sun God Lounge.
                            We will also have a Cardfight!! Vanguard demo area for attendees to learn how to play the game.</p>
                    </Col>
                    <Col md={4} className="d-none d-md-block">
                        <MyImage src="images/VGE-logo.png" alt="Cardfight!! Vanguard logo" style={{ "backgroundColor": "hsl(231, 18%, 19%)" }} className="mw-100 p-4 rounded" />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="p-5 mt-4 section">
                <h4 className="text-left mb-4 display-text">CLUBS</h4>
                <h4 className="text-left title-text mb-4">Board Game Club</h4>
                <p className="mb-4">Welcome to UCSD Board Game Club! We are a social club that connects those who love
                    to indulge in board games whether it be heavier games like Twilight Struggle and Cosmic Encounters,
                    or party games like Codenames and Exploding Kittens. We host game nights in Price Center every
                    Sunday afternoon/evening (3-8pm) that are super casual. Come and go as you&apos;d like, bring all
                    your friends, play one of our many games or bring your favorites!</p>
                <Row className="mb-4">
                    <Col xs={0} md={2} lg={4} />
                    <Col xs={12} md={8} lg={4}>
                        <MyImage src="images/board_game_club.jpg" alt="Board Game Club photo"
                            className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                    <Col xs={0} md={2} lg={4} />
                </Row>

                <h4 className="text-left title-text mb-4">Origami Folders</h4>
                <p>Origami Folders at UCSD is a venue for origami enthusiasts to practice and share their craft with
                    others. Beginners are introduced to the traditional Japanese art, as well as its applications in
                    math and engineering.</p>
                <p className="mb-0">During Animefest, we will exhibit a few anime related models. Visitors are welcome
                    to stay awhile and learn how to fold these models for themselves.</p>
            </Container>
        </>
    )
}
