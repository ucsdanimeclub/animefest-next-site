import {Col, Container, Row} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"
import Prizes from "../data/prizes.json"
import PrizeImages from "../components/prizes/prizeimages"


export default function Yugioh() {
    const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "YGO").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2024.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">GAMMA GAMMA DRIVER YUGIOH</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">YU-GI-OH! TOURNAMENT</h4>

                <Row className="mb-4">
                    <Col xs={0} md={2} lg={3}/>
                    <Col xs={12} md={8} lg={6}>
                        <MyImage src="images/yugioh_flyer2024.png" alt="Yu-gi-oh Flyer"
                                 className="mw-100 border-stroke mx-auto d-block"/>
                    </Col>
                    <Col xs={0} md={2} lg={3}/>
                </Row>

                <p className="mb-0">Gamma Gamma Drive Yu-gi-oh will be hosting a tournament for Yu-gi-oh TCG! The tournament will be <b>free
                    to enter</b>, and open to all <b>UCSD Students and Alumni</b>. Feel free to join their Discord server for more information!</p>
                    <p><a 
                    href="https://discord.gg/Q3k8jEfbES">https://discord.gg/Q3k8jEfbES</a></p>

                <h4 className="text-left title-text">Register:</h4>
                <p>You can register for the event on site during Animefest and also on their Discord.</p>
                <p><a 
                    href="https://forms.gle/vuyk18QVTaXgSS1M8">Click here to register!</a></p>
                <h4 className="text-left title-text">Cost and Prizing:</h4>
                <p>The tournament will be free to enter, and will have a grand prize for the winner provided by Anime &amp;
                    Manga Enthusiasts!</p>
                <h4 className="text-left title-text">Tournament Rules:</h4>
                <ul>
                    <li>Only open to all UCSD Students and Alumni</li>
                    <li>Entry is <b>free</b></li>
                    <li>Rounds will be Swiss; no Top Cut unless agreed upon by participants - Konami official tournament policy will be followed with the following exception.</li>
                    <li>TCG format only</li>
                    <ul>
                        <li>No OCG cards or custom cards</li>
                        <li>For foreign cards, please have a translation ready</li>
                        <li>Current Banlist</li>
                        <li>No Proxy</li>
                    </ul>
                    </ul>    
                <h4 className="text-left title-text">Schedule:</h4>
                    <p>In-person sign ups start from <b>12pm</b>, and the bracket will start at <b>1 PM</b> and last until <b>6pm</b>.</p>
                <h4 className="text-left title-text">Location:</h4>
                <p className="mb-0">We’ll be in the <b>Green Table Room</b>, which is inside Sun God Lounge. You can find
                directions to the Sun God Lounge on the Triton Smash webpage.</p> 
                <p><a 
                    href="https://animefest.ucsd.moe/gaming">Triton Smash</a></p>
            </Container>

            <Container fluid className="p-3 mt-4 section">
                <h4 className="text-left mb-4 display-text">PRIZING</h4>
                <PrizeImages prizes={prizesInPool}/>
            </Container>
        </>
    )
}
