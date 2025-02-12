import {Container, Row, Col} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import Artists from "../data/artists.json"
import CatTable from "../data/cattable.json"
import Vendors from "../data/vendors.json"
import ExhibitorTable from "../components/exhibitor/exhibitortable"
import MyImage from "../components/myimage"


export default function Exhibitor() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2025_v2.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">EXHIBITOR HALL</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p className="mb-4">The Exhibitor Hall is home to our Artist Alley and Vendor space. It is located
                    throughout the West
                    Ballroom.</p>
                <h4 className="text-left title-text mb-4">Artists</h4>
                <Row>
                    <Col xs={0} md={1} lg={2}>
                    </Col>
                    <Col xs={12} md={10} lg={8}>
                        <ExhibitorTable data={Artists} className="mb-4"/>
                    </Col>
                    <Col xs={0} md={1} lg={2}>
                    </Col>
                </Row>
                <h4 className="text-left title-text mb-4">CAT Table</h4>
                <Row>
                    <Col xs={0} md={1} lg={2}>
                    </Col>
                    <Col xs={12} md={10} lg={8}>
                        <ExhibitorTable data={CatTable} className="mb-4"/>
                    </Col>
                    <Col xs={0} md={1} lg={2}>
                    </Col>
                </Row>
                <h4 className="text-left title-text mb-4">Vendors</h4>
                <Row>
                    <Col xs={0} md={1} lg={2}>
                    </Col>
                    <Col xs={12} md={10} lg={8}>
                        <ExhibitorTable data={Vendors} className="mb-4"/>
                    </Col>
                    <Col xs={0} md={1} lg={2}>
                    </Col>
                </Row>
                {/* <h4 className="text-left title-text mb-4">West Ballroom Map</h4>
                <div className="text-center">
                    <a href="images/west_ballroom_exhibitors_2024.png"><MyImage src="images/west_ballroom_exhibitors_2024.png"
                                                                           alt="West Ballroom map"
                                                                           className="mw-100 mb-1 border-stroke"/></a>
                    <p className="caption-text mb-0">Click on the image to open.</p>
                </div> */}
            </Container>
        </>
    )
}