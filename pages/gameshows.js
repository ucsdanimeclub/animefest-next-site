import {Col, Container, Row} from 'react-bootstrap' // add Col and Row when displaying image
import BackgroundImage from "../components/index/backgroundimage"
import MyImage from "../components/myimage"
import EventTable from "../components/eventtable"
import GameShows from "../data/gameshows.json"


export default function Gameshows() {
    const activitiesSorted = GameShows["gameshows"].sort((e1, e2) => e1["start"].localeCompare(e2["start"]))
    const gamesSorted = activitiesSorted.filter((e) => e["type"] === "game") 
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2025_v2.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">GAME SHOWS</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">

                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>The Game Shows will be held in the Marshall Room in Price Center, and at the Price Center Theatre.</p>
                <p className="mb-4">Do you wanna test your anime knowledge? Come participate in our Jeopardy, Kahoot and 
                        Anisong Karuta game shows!</p>
                <p>If anything catches your eye, stop by our rooms 11AM-6:30PM!</p>
            </Container>
                

            <Container fluid className="p-3 section mt-4">
                <h4 className="text-left mb-4 display-text">SCHEDULE</h4>
                <Row className="mb-4">
                    <Col xs={0} md={3}/>
                    <Col xs={12} md={3} className="mb-2">
                        <h4 className="text-left title-text text-center">Thurgood Marshall Room</h4>
                        <EventTable data={GameShows["gameshows"]} location={"marshall"}/>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4 className="text-left title-text text-center">Price Center Theatre</h4>
                        <EventTable data={GameShows["gameshows"]} location={"pctheatre"}/>
                    </Col>
                    <Col xs={0} md={1}/>
                </Row>
                

                <h4 className="text-left title-text mb-4">Game Show Descriptions</h4>
                {gamesSorted.map((panel, index) => {
                    return (
                        <div key={index}>
                            <p className="text-left highlight mb-1">{panel["topic"]}</p>
                            <p className="caption-text mb-2 ms-4">{'By ' + panel["panelist"]}</p>
                            <p className="mb-4 ms-4">{panel["description"]}</p>
                        </div>
                    )
                })}

                <Row className="mb-4">
                    <Col xs={0} md={2} lg={4} />
                    <Col xs={12} md={8} lg={4}>
                        <MyImage src="images/karuta2023.jpg" alt="karuta photo"
                                 className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                    <Col xs={0} md={2} lg={4} />
                </Row>
                
            </Container>
        </>
    )
}
