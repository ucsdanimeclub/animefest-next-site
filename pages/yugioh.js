import {Container} from 'react-bootstrap' //Col and Row for image when it is added
import BackgroundImage from "../components/index/backgroundimage"
// import MyImage from "../components/myimage"
// import Prizes from "../data/prizes.json"
// import PrizeImages from "../components/prizes/prizeimages"


export default function Yugioh() {
    // const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Smash Ultimate").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header.jpg" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">GAMMA GAMMA DRIVER YUGIOH</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">YU-GI-OH! TOURNAMENT</h4>
                <p>Look forward to a tournament hosted by Gamma Gamma Driver Yugioh at the Green Table room in the Sun
                    God Lounge! More information
                    coming soon!</p>
                {/*Rows and Cols is a grid system provided by React-Bootstrap. This allows things to be centered on a page.*/}
                {/*The breakpoints for each display size should add up to 12. Learn more about breakpoints on getbootstrap.com*/}

                {/*<Row>*/}
                {/*    <Col xs={0} md={2} lg={3}/>*/}
                {/*    <Col xs={12} md={8} lg={6}>*/}
                {/*        <MyImage src="images/smashbros.png" alt="Super Smash Bros gameplay"*/}
                {/*                 className="mw-100 border-stroke mx-auto d-block"/>*/}
                {/*    </Col>*/}
                {/*    <Col xs={0} md={2} lg={3}/>*/}
                {/*</Row>*/}
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
