import {Col, Container, Row} from 'react-bootstrap' //Row, Col for the panel tables
import BackgroundImage from "../components/index/backgroundimage"
import EventTable from "../components/eventtable"
import Panelists from "../data/panels.json"


export default function Panels() {
    const panelsSorted = Panelists["panels"].sort((e1, e2) => e1["topic"].localeCompare(e2["topic"]))
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header.jpg" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">PANELS</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Panels will be held at the Thurgood Marshall and Eleanor Roosevelt rooms in Price Center.</p>
                <p>The best place for learning more not just about anime, but passion and culture as well! Interesting
                    discussion topics will be present and available for participation at your discretion!
                    Some panels will even have workshops for a hands-on experience.</p>
                {/*<p>Check back here closer to the event date for more information!</p>*/}
            </Container>

            {/*add panels by editing the panels.json datafile, then uncommenting all commented lines on this page*/}

            <Container fluid className="p-3 section mt-4">
              <h4 className="text-left mb-4 display-text">SCHEDULE</h4>
              <Row className="mb-4">
                <Col xs={0} md={1} />
                <Col xs={12} md={5} className="mb-2">
                  <h4 className="text-left title-text text-center">Thurgood Marshall</h4>
                  <EventTable data={Panelists["panels"]} location={"marshall"} />
                </Col>
                <Col xs={12} md={5}>
                  <h4 className="text-left title-text text-center">Eleanor Roosevelt</h4>
                  <EventTable data={Panelists["panels"]} location={"roosevelt"} />
                </Col>
                <Col xs={0} md={1} />
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
            </Container>
        </>
    )
}
