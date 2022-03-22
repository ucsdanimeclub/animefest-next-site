import {Container} from 'react-bootstrap'
import Artists from "../data/artists.json"
import Vendors from "../data/vendors.json"
import ExhibitorTable from "../components/exhibitor/exhibitortable"


export default function Sandbox() {
    return (
        <>
            <Container fluid className="p-5 section">
                <h4 className="text-left title-text mb-4">Artists</h4>
                <ExhibitorTable data={Artists} className="mb-4"/>
                <h4 className="text-left title-text mb-4">Vendors</h4>
                <ExhibitorTable data={Vendors}/>
            </Container>
        </>
    )
}
