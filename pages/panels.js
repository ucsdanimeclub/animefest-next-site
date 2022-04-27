import { Container, Row, Col } from 'react-bootstrap'
import EventTable from "../components/eventtable"
import Panelists from "../data/panels.json"


export default function Panels() {
  const panels_abc = Panelists["panels"].sort((e1, e2) => e1["topic"].localeCompare(e2["topic"]))
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">PANELS</h1>
      </Container>

      <Container fluid className="p-5 section">
        <h4 className="text-left mb-4 display-text">ABOUT</h4>
        <p>Panels will be held at the Thurgood Marshall and Eleanor Roosevelt rooms in Price Center.</p>
        <p className="mb-0">The best place for learning more not just about anime, but passion and culture as well! Interesting discussion topics will be present and available for participation at your discretion!
          Some panels will even have workshops for a hands-on experience.</p>
      </Container>

      <Container fluid className="p-5 section mt-4">
        <h4 className="text-left mb-5 display-text">SCHEDULE</h4>
        <Row className="mb-4">
          <Col sm={0} md={1} />
          <Col sm={12} md={5} className="mb-2">
            <h4 className="text-left title-text text-center">Thurgood Marshall</h4>
            <EventTable data={Panelists["panels"]} location={"marshall"} />
          </Col>
          <Col sm={12} md={5}>
            <h4 className="text-left title-text text-center">Eleanor Roosevelt</h4>
            <EventTable data={Panelists["panels"]} location={"roosevelt"} />
          </Col>
          <Col sm={0} md={1} />
        </Row>
        <h4 className="text-left title-text mb-4">Panel Descriptions</h4>
        {panels_abc.map((panel, index) => {
          return (
            <div key={index}>
              <p className="text-left highlight mb-1">{panel["topic"] !== "Panel TBA" && panel["topic"]}</p>
              <p className="caption-text mb-2 ms-4">{panel["topic"] !== "Panel TBA" && 'By ' + panel["panelist"]}</p>
              <p className="mb-4 ms-4">{panel["topic"] !== "Panel TBA" && panel["description"]}</p>
            </div>
          )
        })}
      </Container>
    </>
  )
}
