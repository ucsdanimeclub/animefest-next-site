import {Container, Row, Col} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"


export default function Map_Schedule() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2026.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-header">MAP AND SCHEDULE</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section" id="map">
                <p>Animefest is held at the Price Center at UC San Diego. Specifically, it will be at the West Ballroom,
                    East Ballroom,
                    Thurgood Marshall,
                    Eleanor Roosevelt, Roger Revelle, Theater, Red Shoe, Bear, and Green Table
                    rooms.</p>
                <p>All rooms are located on the second floor with the exception of the Theater, which
                    is on the first
                    floor and below the Bear Room.</p>
                <p><b>We will release a map and a schedule soon!</b></p>
                {/*Example of embedding a Google Sheet (2022) in the below div, using custom sheet classes*/}
                {/*<div className="text-center mb-5">*/}
                {/*    <iframe className="sheet-schedule sheet-constraint w-75 d-block mb-1 mx-auto"*/}
                {/*            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSh2gBYXSEV57p05RAVENMwqDHmJ5GFHTjgb0M9LOTAYrBbLrrwA5fMECz7R3F2qfpnRElr854rGZOG/pubhtml?widget=true&amp;headers=false"/>*/}
                {/*    <p className="caption-text"><a*/}
                {/*        href="https://docs.google.com/spreadsheets/d/11egWL19jhBBIf27SXAjf81tyDxkVJsRjCtNo4gr5bTE/edit?usp=sharing">Have*/}
                {/*        trouble viewing? Click here!</a></p>*/}
                {/*</div>*/}
                {/* <div className="text-center">
                    <Row className="mb-4">
                        <Col xs={0} md={2}/>
                        <Col xs={12} md={8}>
                            <a href="images/AF25_Schedule.png">
                                <MyImage src="images/AF25_Schedule.png" className="border-stroke mw-100"
                                            alt="Schedule"></MyImage>
                            </a>
                        </Col>
                        <Col xs={0} md={2}/>
                    </Row>
                    <Row className="mb-1 g-3">
                        <Col xs={0} md={0} lg={3}/>
                        <Col>
                            <a href="images/AF25_Map.png">
                                <MyImage src="images/AF25_Map.png" className="border-stroke mw-100"
                                            alt="Price Center map"></MyImage>
                            </a>
                        </Col>
                        <Col xs={0} md={0} lg={3}/>
                    </Row>
                    <p className="caption-text">Click on the images to open.</p>
                </div> */}
            </Container>
        </>
    )
}