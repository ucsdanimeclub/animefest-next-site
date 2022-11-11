import {Container} from 'react-bootstrap' //Col and Row for image when it is added
// import MyImage from "../components/myimage"
// import Prizes from "../data/prizes.json"
// import PrizeImages from "../components/prizes/prizeimages"


export default function Yugioh() {
    // const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Smash Ultimate").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">GAMMA GAMMA DRIVER YUGIOH</h1>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">YU-GI-OH! TOURNAMENT</h4>
                {/*<p className="text-left caption-text mb-1">11:00 AM - 1:00 PM: Venue Opens for Free Play and Sign-ups</p>*/}
                {/*<p className="text-left caption-text mb-1">1:00 PM - 6:30 PM: Tournament</p>*/}
                {/*<p className="text-left caption-text mb-4">6:30 PM - 8:00 PM: Free Play</p>*/}
                <p>Look forward to a tournament hosted by Gamma Gamma Driver Yugioh at the Green Table room in the Sun
                    God Lounge! More information
                    coming soon!</p>
                {/*<p className="mb-4"><a href="https://smash.gg/tournament/animefest-2022/details">Find more information*/}
                {/*    and sign up for free here.</a> Entrants must bring their own controller.</p>*/}
                {/*<Row>*/}
                {/*    <Col xs={0} md={2} lg={3}/>*/}
                {/*    <Col xs={12} md={8} lg={6}>*/}
                {/*        <MyImage src="images/smashbros.jpg" alt="Super Smash Bros gameplay"*/}
                {/*                 className="mw-100 border-stroke mx-auto d-block"/>*/}
                {/*    </Col>*/}
                {/*    <Col xs={0} md={2} lg={3}/>*/}
                {/*</Row>*/}
            </Container>

            {/*<Container fluid className="p-3 mt-4 section">*/}
            {/*    <h4 className="text-left mb-4 display-text">PRIZING</h4>*/}
            {/*    <PrizeImages prizes={prizesInPool}/>*/}
            {/*</Container>*/}
        </>
    )
}
