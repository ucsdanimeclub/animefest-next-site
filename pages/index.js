import {Col, Container, Ratio, Row} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import ProgramsCarousel from "../components/index/programscarousel"
import Social from "../components/index/social"
import MyImage from "../components/myimage"
import Programs from "../data/programs.json"
import Socials from "../data/socials.json"


export default function Home() {
    return (
        <>
            <Container fluid className="text-center my-1 text-light">Welcome to Animefest! Please register at our
                check-in tables before entering the convention rooms.</Container>

            <Container fluid className="text-center vh-100 p-0 mb-3">
                <BackgroundImage src="images/Website_blank_better.png" className="landing h-100">
                    <Row className="align-items-center h-75 g-0 glow-text">
                        <Col>
                            <MyImage src="images/AF24_light_re_png.png" className="w-50 my-4" alt="Animefest 2024 logo"/>
                            <div className="text-light ">
                                <div className="d-inline-flex flex-column bg-translucent p-2 rounded">
                                    <h4>February 17 2024 at UC San Diego&apos;s Price Center</h4>
                                    <h5>11:00 AM to 8:00 PM</h5>
                                    <h5>Free Admission</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </BackgroundImage>
            </Container>

            <Container>
                <Social data={Socials} className="mb-2"/>
                <p className="caption-text text-center mb-3 text-light">Contact us and get live event coverage on our
                    social
                    media!</p>
            </Container>

            <Container fluid className="p-3 section" id="about">
                <h1 className="text-left mb-4 display-text">ABOUT</h1>
                <p>Animefest, a time and place where animanga lovers, artists, and entertainers celebrate what we love!
                    On February 17, 2024, participants go to the Price Center at UCSD to attend discussion and workshop
                    panels, buy the best artwork,
                    and check out your favorite manga in our manga library! And of course, there will be cosplays,
                    festival games, and video games&mdash;all for some otaku fun.</p>
                <p className="mb-4">For a taste of the convention, take a look at our recap video of Animefest 2023:</p>
                <div className="video-player mx-auto mb-4">
                    <Ratio aspectRatio="16x9">
                        <iframe className="border-stroke"
                                src="https://www.youtube.com/embed/xDMjU_dA4CU?si=aP4Fd6-g5tKPc6mN"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={true}/>
                    </Ratio>
                </div>
            </Container>

            <Container fluid className="p-3 mt-4 section" id="discord">
                <h1 className="text-left mb-4 display-text">DISCORD</h1>
                <p>Feel free to join the Animefest 2024 discord server here:</p>
                <Row className="align-items-center mb-4">
                <Col xs={12} sm={12} md={6} className="py-2">
                    <Ratio aspectRatio={350 / 500}>
                        <iframe src="https://discord.com/widget?id=913711233360879697&theme=dark" width="350"
                                height="500"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </Ratio>
                </Col>
                </Row>
            </Container>

            <Container fluid className="p-3 mt-4 section" id="programs">
                <h1 className="text-left mb-4 display-text">PROGRAMS</h1>
                <ProgramsCarousel data={Programs["programs"]} className="mb-2"/>
            </Container>

            <Container fluid className="p-3 mt-4 section" id="registration">
                <h1 className="text-left mb-4 display-text">REGISTRATION</h1>
                <p><u>Admission to Animefest is free!</u> All attendees must register at one of our check-in tables
                    designated on the map in the section below.</p>
                <p><b>All attendees</b> will also have to present a completed Event Participant Waiver for UC San Diego events.
                    This waiver <b>can be electronically signed prior to the convention</b> using this <a href="https://ewaivers.ucsd.edu/af2024/waiver/">link</a>. We strongly recommend all attendees
                    complete the waiver ahead of time.</p>
            </Container>

            <Container fluid className="p-3 mt-4 section" id="map">
                <h1 className="text-left mb-4 display-text">MAP AND SCHEDULE</h1>
                <p>Animefest is held at the Price Center at UC San Diego. Specifically, it will be at the West Ballroom,
                    East Ballroom,
                    Thurgood Marshall,
                    Eleanor Roosevelt, Roger Revelle, Theater, Red Shoe, Bear, and Green Table
                    rooms.</p>
                <p>All rooms are located on the second floor with the exception of the Theater, which
                    is on the first
                    floor and below the Bear Room.</p>
                {/*Example of embedding a Google Sheet (2022) in the below div, using custom sheet classes*/}
                {/*<div className="text-center mb-5">*/}
                {/*    <iframe className="sheet-schedule sheet-constraint w-75 d-block mb-1 mx-auto"*/}
                {/*            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSh2gBYXSEV57p05RAVENMwqDHmJ5GFHTjgb0M9LOTAYrBbLrrwA5fMECz7R3F2qfpnRElr854rGZOG/pubhtml?widget=true&amp;headers=false"/>*/}
                {/*    <p className="caption-text"><a*/}
                {/*        href="https://docs.google.com/spreadsheets/d/11egWL19jhBBIf27SXAjf81tyDxkVJsRjCtNo4gr5bTE/edit?usp=sharing">Have*/}
                {/*        trouble viewing? Click here!</a></p>*/}
                {/*</div>*/}
                <div className="text-center">
                    <Row className="mb-4">
                        <Col xs={0} md={2}/>
                        <Col xs={12} md={8}>
                            <a href="images/schedule_2024.png">
                                <MyImage src="images/schedule_2024.png" className="border-stroke mw-100"
                                         alt="Schedule"></MyImage>
                            </a>
                        </Col>
                        <Col xs={0} md={2}/>
                    </Row>
                    <Row className="mb-1 g-3">
                        <Col xs={0} md={0} lg={2}/>
                        <Col xs={12} md={6} lg={4}>
                            <a href="images/map_2nd_floor.jpg">
                                <MyImage src="images/map_2nd_floor_2024.png" className="border-stroke mw-100"
                                         alt="Price Center 2nd Floor map"></MyImage>
                            </a>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <a href="images/map_1st_floor.jpg">
                                <MyImage src="images/map_1st_floor_2024.png" className="border-stroke mw-100"
                                         alt="Price Center 1st Floor map"></MyImage>
                            </a>
                        </Col>
                        <Col xs={0} md={0} lg={2}/>
                    </Row>
                    <p className="caption-text">Click on the images to open.</p>
                </div>
            </Container>

            <Container fluid className="p-3 mt-4 section" id="parking">
                <h1 className="text-left mb-4 display-text">PARKING</h1>
                <p>Unfortunately, <a href="https://transportation.ucsd.edu/visit/visitor/index.html">parking is not
                    free</a> on UCSD&apos;s campus. We recommend you find free parking off campus and walking to campus
                    or taking the bus to campus. We apologize for the inconvenience.</p>
                <p>For parking on campus, please take a look at the <a
                    href="https://maps.ucsd.edu/map/?id=1005#!ce/17201?ct/36591,27576,20079,18312,18027,35364,29152,36849,42782,43513,45236?mc/32.877341347399,-117.23531663418?z/18?lvl/0">official
                    campus map</a>, expand <b>Parking by Permit Type</b>, and select <b>Visitor</b> in the menu to see
                    areas where you can park. Please ensure that you park in designated Visitor spots which will be
                    marked on the floor in these areas.</p>

                <p><b>Please consult <a href="https://docs.google.com/document/d/13nS2z4nOe6K-V522hMTnI1TSUNFnefp4bo7-IQdv99E/edit?usp=sharing">this </a>document for guides on where to park and how to acquire a permit.</b></p>

                <p className="mb-4">
                    The Gilman Parking Structure is the closest parking structure to the convention. You can use the
                    Wayfinding feature or the map below to navigate to Price Center:</p>
                <div className="map mx-auto mb-4">
                    <Ratio aspectRatio="4x3">
                        <iframe className="border-stroke"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.697394192468!2d-117.2383838856308!3d32.87972498605018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c46a524fb9%3A0x68571efb243bc289!2sPrice%20Center%2C%20La%20Jolla%2C%20CA%2092093!5e0!3m2!1sen!2sus!4v1638064542514!5m2!1sen!2sus"
                                width="600" height="450" allowFullScreen="" loading="lazy"/>
                    </Ratio>
                </div>

                <h4 className="text-left title-text mb-4">Parking Structure Video Guides</h4>
                <Row>
                    <Col xs={12} md={3} lg={4}>
                    <div className="video-player mx-auto mb-4">
                    <Ratio aspectRatio="16x9">
                        <iframe className="border-stroke"
                                src="https://www.youtube.com/embed/CyGVgK3G2rI?si=gMyVZFNcIAsPDJ-D"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={true}/>
                    </Ratio>
                    </div>
                    </Col>
                    <Col xs={12} md={8} lg={4}>
                    <div className="video-player mx-auto mb-4">
                    <Ratio aspectRatio="16x9">
                        <iframe className="border-stroke"
                                src="https://www.youtube.com/embed/JZh_e8e9mU0?si=q66u5CjDi124pxRo"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={true}/>
                    </Ratio>
                    </div>
                    </Col>
                    <Col xs={12} md={8} lg={4}>
                    <div className="video-player mx-auto mb-4">
                    <Ratio aspectRatio="16x9">
                        <iframe className="border-stroke"
                                src="https://www.youtube.com/embed/Eo9QfaOGJvA?si=e001i8kuFS1bW8i9"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={true}/>
                    </Ratio>
                    </div>
                    </Col>
                    <Col xs={0} md={2} lg={3}/>
                </Row>
            </Container>
        </>
    )
}
