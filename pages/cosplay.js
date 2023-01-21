import {Col, Container, Row} from 'react-bootstrap' // import Button for forms
// import Prizes from "../data/prizes.json"
// import PrizeImages from "../components/prizes/prizeimages"


export default function Cosplay() {
    // const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Cosplay Masquerade").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">COSPLAY CONTEST</h1>
            </Container>

            <Row className="align-items-center g-0">
                <Col lg={12}> {/*Change to lg-8 when mascot art is ready*/}
                    <Container fluid className="p-3 section">
                        <h1 className="text-left mb-4 display-text">ABOUT</h1>
                        {/*<p className="text-left caption-text mb-4">4:30 PM - 5:00 PM: Contest</p>*/}
                        <p>The Cosplay Masquerade is our annual contest where participants show off their cosplay! It
                            will be held at the East Ballroom. Check back here closer to the event date for more
                            information!</p>
                    </Container>

                    <Container fluid className="p-3 mt-4 section">
                        <h1 className="text-left mb-4 display-text">ENTER AND VOTE</h1>
                        <p>Look out for the registration and voting form for the winners here! The voting form will open
                            on the day of the convention.</p> {/*Add className="mb-4" when form buttons open*/}
                        {/*<div className="text-center mb-4">*/}
                        {/*    <Button variant="danger" href="https://forms.gle/E9RKd5Di2JVS16Je8" size="lg" className="mb-4">Cosplay Masquerade Sign Up Form</Button>*/}
                        {/*    <br />*/}
                        {/*    <Button variant="danger" href="https://forms.gle/QcQZJKVACZNGxfLq8">Vote for the winners HERE!</Button>*/}
                        {/*</div>*/}
                    </Container>

                    <Container fluid className="p-3 mt-4 section">
                        <h1 className="text-left mb-4 display-text">COSPLAY & PROP GUIDELINES</h1>
                        <ol>
                            <li><p>No inappropriate (18+) cosplay is permitted.</p></li>
                            <li><p>No weapons or props designed or made with the ability to cause death or serious bodily injury to any person or property is permitted. Misuse of a prop will result in that prop being deemed unsafe.</p></li>
                            <li><p>Props resembling weapons are prohibited, including but not limited to bows, replica/toy swords, and firearms (airsoft, replica, paintball, BB guns, and Nerf guns).</p></li>
                            <li><p>All props will be checked and marked with tape by our convention staff at the registration table.</p></li>
                        </ol>
                    </Container>
                </Col>
                {/*<Col lg={4} className="d-none d-lg-block p-4">*/}
                {/*    <MyImage src="images/kai.png" alt="Kai mascot art" className="mw-100"/>*/}
                {/*</Col>*/}
            </Row>

            {/*<Container fluid className="p-3 mt-4 section">*/}
            {/*    <h4 className="text-left mb-4 display-text">PRIZING</h4>*/}
            {/*    <PrizeImages prizes={prizesInPool}/>*/}
            {/*</Container>*/}
        </>
    )
}
