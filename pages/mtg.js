import {Col, Container, Row} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"
import Prizes from "../data/prizes.json"
import PrizeImages from "../components/prizes/prizeimages"


export default function MTG() {
    // const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "YGO").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2026.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-header">Magic: the Gathering at UC San Diego</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">MAGIC: THE GATHERING TOURNAMENT</h4>

                {/* <Row className="mb-4">
                    <Col xs={0} md={2} lg={3}/>
                    <Col xs={12} md={8} lg={6}>
                        <MyImage src="images/yugioh_flyer2025.png" alt="Yu-gi-oh Flyer"
                                 className="mw-100 border-stroke mx-auto d-block"/>
                    </Col>
                    <Col xs={0} md={2} lg={3}/>
                </Row> */}

                <p className="mb-0">Magic: the Gathering at UC San Diego will be hosting a tournament for Magic: The Gathering! The tournament will be <b>free
                    to enter</b>, and open to all UCSD students and affiliates! Feel free to join their Discord server for more information!</p>
                    <p><a href="https://discord.gg/wJdXcaTS7E">https://discord.gg/wJdXcaTS7E</a></p>

                <h4 className="text-left title-text">Tournament:</h4>
                <p>Come show your pauper prowess! Entry to the tournament is free and open to people in and outside of Magic: the Gathering at UC San Diego. Topping players will be rewarded with special prizes!</p>
                <h4 className="text-left title-text">Meet the Club:</h4>
                <p>Meet the current principal members, general body, and what we’re all about at Magic: the Gathering at UC San Diego! This is a great chance to meet people that love the same format as you, or, for newer players, to learn more about the game, how to play, and what’s possible and beyond in this unique card game!</p>
                <h4 className="text-left title-text">Free Play:</h4>
                <p>Join us for some casual gameplay! There’s always an open space for you in an EDH pod or a modern master to take down! Don’t have a deck? No problem! Be sure to ask a principal member about this during free play for a special gift.</p> 
                <h4 className="text-left title-text">Schedule:</h4>
                    <p>The tournament starts at <b>11 AM</b> and will be held till <b>3:30 PM</b>. Meet the Club will be held from <b>3:30 PM</b> to <b>4 PM</b>. Free play will be held from <b>4 PM</b> to <b>8 PM</b>.</p>
                <h4 className="text-left title-text">Location:</h4>
                <p className="mb-0">We&apos;ll be in the <b>Green Table Room</b>, which is inside Sun God Lounge.</p> 
            </Container>

            {/* <Container fluid className="p-3 mt-4 section">
                <h4 className="text-left mb-4 display-text">PRIZING</h4>
                <PrizeImages prizes={prizesInPool}/>
            </Container> */}
        </>
    )
}
