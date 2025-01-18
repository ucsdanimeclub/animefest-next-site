import {Container, Row, Col} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import Artists from "../data/artists.json"
import Vendors from "../data/vendors.json"
import ExhibitorTable from "../components/exhibitor/exhibitortable"
import MyImage from "../components/myimage"


export default function Exhibitor() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2024.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">EXHIBITOR HALL</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p className="mb-4">We are currently updating our Artist Alley and Vendor list!
                    Check back soon!
                </p>
            </Container>
        </>
    )
}
