import {Col, Container, Row} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import EventTable from "../components/eventtable"
import Panelists from "../data/panels.json"
import MyImage from "../components/myimage"


export default function Panels() {
    const activitiesSorted = Panelists["panels"].sort((e1, e2) => e1["start"].localeCompare(e2["start"]))
    const panelsSorted = activitiesSorted.filter((e) => e["type"] === "panel")
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2026.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-header">PANELS</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Panels will be held in the Eleanor Roosevelt room in Price Center.</p>
                <p>The best place for learning more not just about anime, but passion and culture as well! Interesting
                    discussion topics will be present and available for participation at your discretion!
                </p>
            </Container>

            <Container fluid className="p-3 section mt-4">
                <h4 className="text-left mb-4 display-text">SCHEDULE</h4>
                <Row className="mb-4">
                    <Col xs={0} md={4}/>
                    <Col xs={12} md={4}>
                        <h4 className="text-left title-text text-center">Eleanor Roosevelt College Room</h4>
                        <EventTable data={Panelists["panels"]} location={"roosevelt"}/>
                    </Col>
                    <Col xs={0} md={1}/>
                </Row>
                <Row className="mb-4">
                    <Col xs={0} md={4}/>
                    <Col xs={12} md={4}>
                        <h4 className="text-left title-text text-center">Marshall College Room</h4>
                        <EventTable data={Panelists["panels"]} location={"marshall"}/>
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

                <Row className="mb-4">
                    <Col xs={0} md={2} lg={4} />
                    <Col xs={12} md={8} lg={4}>
                        <MyImage src="images/panels2023.jpg" alt="mashy panel photo"
                                 className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                    <Col xs={0} md={2} lg={4} />
                </Row>

            </Container>
        </>
    )
}
