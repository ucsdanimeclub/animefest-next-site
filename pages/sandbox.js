import {Container} from 'react-bootstrap'
import Artists from "../data/artists.json"
import Vendors from "../data/vendors.json"
import ExhibitorTable from "../components/exhibitor/exhibitortable"


export default function Sandbox() {
    return (
        <>
            <Container fluid className="p-5 section">
                <ExhibitorTable data={Artists} className="mb-4"/>
                <ExhibitorTable data={Vendors}/>
            </Container>
        </>
    )
}
