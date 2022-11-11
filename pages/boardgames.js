import {Container} from 'react-bootstrap' // add Col and Row when displaying image
// import MyImage from "../components/myimage"


export default function Boardgames() {
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">BOARD GAMES</h1>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Coming soon!</p> {/*add className="mb-4" when displaying image*/}
                {/*<Row className="mb-4">*/}
                {/*    <Col xs={0} md={2} lg={4} />*/}
                {/*    <Col xs={12} md={8} lg={4}>*/}
                {/*        <MyImage src="images/board_game_club.jpg" alt="Board Game Club photo"*/}
                {/*                 className="mw-100 border-stroke mx-auto d-block" />*/}
                {/*    </Col>*/}
                {/*    <Col xs={0} md={2} lg={4} />*/}
                {/*</Row>*/}
            </Container>
        </>
    )
}
