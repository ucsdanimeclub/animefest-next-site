import {Container} from 'react-bootstrap' //Row, Col for the table positioning
// import Artists from "../data/artists.json"
// import Vendors from "../data/vendors.json"
// import ExhibitorTable from "../components/exhibitor/exhibitortable"
// import MyImage from "../components/myimage"


export default function Exhibitor() {
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">EXHIBITOR HALL</h1>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>The Exhibitor Hall is home to our Artist Alley and Vendor space. It is located
                    throughout the West
                    Ballroom.</p> {/* className="mb-4" when the tables are displayed */}
                <p>More information coming soon!</p>
                {/*<h4 className="text-left title-text mb-4">Artists</h4>*/}
                {/*<Row>*/}
                {/*    <Col xs={0} md={1} lg={2}>*/}
                {/*    </Col>*/}
                {/*    <Col xs={12} md={10} lg={8}>*/}
                {/*        <ExhibitorTable data={Artists} className="mb-4"/>*/}
                {/*    </Col>*/}
                {/*    <Col xs={0} md={1} lg={2}>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<h4 className="text-left title-text mb-4">Vendors</h4>*/}
                {/*<Row>*/}
                {/*    <Col xs={0} md={1} lg={2}>*/}
                {/*    </Col>*/}
                {/*    <Col xs={12} md={10} lg={8}>*/}
                {/*        <ExhibitorTable data={Vendors} className="mb-4"/>*/}
                {/*    </Col>*/}
                {/*    <Col xs={0} md={1} lg={2}>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<h4 className="text-left title-text mb-4">West Ballroom Map</h4>*/}
                {/*<div className="text-center">*/}
                {/*    <a href="images/west_ballroom_exhibitors.png"><MyImage src="images/west_ballroom_exhibitors.png"*/}
                {/*                                                           alt="West Ballroom map"*/}
                {/*                                                           className="mw-100 mb-1"/></a>*/}
                {/*    <p className="caption-text mb-0">Click on the image to open.</p>*/}
                {/*</div>*/}
            </Container>
        </>
    )
}
