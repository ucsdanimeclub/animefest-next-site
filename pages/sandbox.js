import { Container, Row, Col, Ratio } from 'react-bootstrap'
import EventTable from "../components/eventtable"
import Panelists from "../data/panels.json"

export default function Sandbox() {
    const panels_abc = Panelists["panels"].sort((e1, e2) => e1["topic"].localeCompare(e2["topic"]))
    return (
        <>
            <Container fluid className="p-5 section">
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
                            <p className="caption-text mb-2 ms-4">{panel["topic"] !== "Panel TBA" && panel["panelist"]}</p>
                            <p className="mb-4 ms-4">{panel["topic"] !== "Panel TBA" && panel["description"]}</p>
                        </div>
                    )
                })}
            </Container>

            <Container fluid className="mt-5 section">
                <div className="p-5 mx-auto">
                    <Ratio aspectRatio="16x9">
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSh2gBYXSEV57p05RAVENMwqDHmJ5GFHTjgb0M9LOTAYrBbLrrwA5fMECz7R3F2qfpnRElr854rGZOG/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                    </Ratio>
                </div>
            </Container>
        </>
    )
}
