import {Col, Container, Row} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import EventTable from "../components/eventtable"
import Panelists from "../data/panels.json"


export default function Panels() {
    const activitiesSorted = Panelists["panels"].sort((e1, e2) => e1["start"].localeCompare(e2["start"]))
    const panelsSorted = activitiesSorted.filter((e) => e["type"] === "panel")
    const gamesSorted = activitiesSorted.filter((e) => e["type"] === "game")
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2024.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">PANELS AND GAME SHOWS</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Panels will be held in the Elanor Roosevelt room in Price Center, while game shows will be held in the
                    Thurgood Marshall room and Price Center Theatre in Price Center.</p>
                <p>The best place for learning more not just about anime, but passion and culture as well! Interesting
                    discussion topics will be present and available for participation at your discretion!
                    Additionally, test your anime knowledge in our various game shows.</p>
            </Container>

            <Container fluid className="p-3 section mt-4">
                <h4 className="text-left mb-4 display-text">SCHEDULE</h4>
                <Row className="mb-4">
                    <Col xs={0} md={1}/>
                    <Col xs={12} md={3} className="mb-2">
                        <h4 className="text-left title-text text-center">Thurgood Marshall</h4>
                        <EventTable data={Panelists["panels"]} location={"marshall"}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <h4 className="text-left title-text text-center">Eleanor Roosevelt</h4>
                        <EventTable data={Panelists["panels"]} location={"roosevelt"}/>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4 className="text-left title-text text-center">Price Center Theatre</h4>
                        <EventTable data={Panelists["panels"]} location={"pctheatre"}/>
                    </Col>
                    <Col xs={0} md={1}/>
                </Row>

                <h4 className="text-left title-text mb-4">Panel Descriptions</h4>
                {panelsSorted.map((panel, index) => {
                    return (
                        <div key={index}>
                            <p className="text-left highlight mb-1">{panel["topic"]}</p>
                            <p className="caption-text mb-2 ms-4">{'By ' + panel["panelist"]}</p>
                            <p className="mb-4 ms-4">{panel["description"]}</p>
                        </div>
                    )
                })}

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

            </Container>
        </>
    )
}
