import {Container} from 'react-bootstrap'
import EventTable from "../components/eventtable"
import Panelists from "../data/panels.json"


export default function Sandbox() {
    return (
        <>
            <Container fluid className="p-5 section">
                <h4 className="text-left title-text mb-4">Marshall</h4>
                <EventTable data={Panelists["panels"]} location={"marshall"} className="mb-4"/>
                {/* <h4 className="text-left title-text mb-4">Roosevelt</h4>
                <EventTable data={Panelists["panels"]} location={"roosevelt"}/> */}
            </Container>
        </>
    )
}
