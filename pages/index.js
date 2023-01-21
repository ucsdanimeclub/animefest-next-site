import { Col, Container, Ratio, Row } from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
// import ProgramsCarousel from "../components/index/programscarousel"
import Social from "../components/index/social"
import MyImage from "../components/myimage"
// import Programs from "../data/programs.json"
import Socials from "../data/socials.json"


export default function Home() {
    return (
        <>
            <Container fluid className="text-center my-1 text-light">1/18: Less than one month till Animefest! Please read our updated rules page for 2023.</Container>

            <Container fluid className="text-center vh-100 p-0 mb-3">
                <BackgroundImage src="images/landing.jpg" className="landing">
                    <Row className="align-items-center h-75 g-0 glow-text">
                        <Col>
                            <MyImage src="images/logo_af.svg" className="w-50 my-4" alt="Animefest 2022 logo" />
                            <h4>February 18 at UC San Diego&apos;s Price Center</h4>
                            <h5>11:00 AM to 8:00 PM</h5>
                            <h5>Free Admission</h5>
                        </Col>
                    </Row>
                </BackgroundImage>
            </Container>

            <Container>
                <Social data={Socials} className="mb-2" />
                <p className="caption-text text-center mb-3">Contact us and get live event coverage on our social
                    media!</p>
            </Container>

            <Container fluid className="p-3 section" id="about">
                <h1 className="text-left mb-4 display-text">ABOUT</h1>
                <p>Animefest, a time and place where animanga lovers, artists, and entertainers celebrate what we love!
                    On February 18, 2023, participants go to the Price Center at UCSD to attend discussion and workshop
                    panels, buy the best artwork,
                    and check out your favorite manga in our manga library! And of course, there will be cosplays,
                    festival games, and video games&mdash;all for some otaku fun.</p>
                <p className="mb-4">For a taste of the convention, take a look at our recap video of Animefest 2019:</p>
                <div className="video-player mx-auto mb-2">
                    <Ratio aspectRatio="16x9">
                        <iframe className="border-stroke"
                            src="https://www.youtube-nocookie.com/embed/eITsJPrRF4c"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true} />
                    </Ratio>
                </div>
                {/*<ProgramsCarousel data={Programs["programs"]}/>*/}
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
                <p className="mb-4"><i>Schedule coming soon!</i></p>
                {/*<div className="text-center mb-5">*/}
                {/*    <iframe className="sheet-schedule sheet-constraint w-75 d-block mb-1 mx-auto"*/}
                {/*            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSh2gBYXSEV57p05RAVENMwqDHmJ5GFHTjgb0M9LOTAYrBbLrrwA5fMECz7R3F2qfpnRElr854rGZOG/pubhtml?widget=true&amp;headers=false"/>*/}
                {/*    <p className="caption-text"><a*/}
                {/*        href="https://docs.google.com/spreadsheets/d/11egWL19jhBBIf27SXAjf81tyDxkVJsRjCtNo4gr5bTE/edit?usp=sharing">Have*/}
                {/*        trouble viewing? Click here!</a></p>*/}
                {/*</div>*/}
                <div className="text-center">
                    <a href="images/map.jpg">
                        <MyImage src="images/map.jpg" className="sheet-constraint border-stroke mw-100 mb-1"
                            alt="Price Center map"></MyImage>
                    </a>
                    <p className="caption-text">Click on the image to open.</p>
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

                <p className="mb-4">
                    The Gilman Parking Structure is the closest parking structure to the convention. You can use the
                    Wayfinding feature or the map below to navigate to Price Center:</p>
                <div className="map mx-auto mb-2">
                    <Ratio aspectRatio="4x3">
                        <iframe className="border-stroke"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.697394192468!2d-117.2383838856308!3d32.87972498605018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c46a524fb9%3A0x68571efb243bc289!2sPrice%20Center%2C%20La%20Jolla%2C%20CA%2092093!5e0!3m2!1sen!2sus!4v1638064542514!5m2!1sen!2sus"
                            width="600" height="450" allowFullScreen="" loading="lazy" />
                    </Ratio>
                </div>
            </Container>
        </>
    )
}
