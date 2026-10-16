import {Col, Container, Ratio, Row} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import MyImage from "../components/myimage"

const videos = [
    {id: "CyGVgK3G2rI", title: "How to Go From Hopkins Parking Structure to West Ballroom"},
    {id: "JZh_e8e9mU0", title: "How to Go From Gilman Parking Structure to West Ballroom"},
    {id: "Eo9QfaOGJvA", title: "How to Go From Scholar Parking Structure to West Ballroom"},
]

export default function Parking() {
    return (
        <div className="parking">
            <BackgroundImage src="images/parking/banner.jpg" className="parking-banner">
                <h1 className="parking-title">PARKING</h1>
                <MyImage src="images/AF25 Kai Chibi.png" className="parking-chibi" alt="Kai running late"/>
            </BackgroundImage>

            <Container className="parking-section">
                <h2 className="parking-heading text-red">Disclaimer</h2>
                <p>Unfortunately, <a href="https://transportation.ucsd.edu/visit/visitor/index.html">parking is not
                    free</a> on UCSD&apos;s campus. We recommend you find free parking off campus and walking to campus
                    or taking the bus to campus. We apologize for the inconvenience.</p>
                <p>For parking on campus, please take a look at the <a
                    href="https://maps.ucsd.edu/map/?id=1005#!ce/17201?ct/36591,27576,20079,18312,18027,35364,29152,36849,42782,43513,45236?mc/32.877341347399,-117.23531663418?z/18?lvl/0">official
                    campus map</a>, expand Parking by Permit Type, and select Visitor in the menu to see areas where you
                    can park. Please ensure that you park in designated Visitor spots which will be marked on the floor
                    in these areas.</p>
                <p>Please consult <a href="https://docs.google.com/document/d/11Sv21KM5owkWAo8rY6XuB6SZz1Ibxe4t/edit?usp=sharing&ouid=102259190788720064357&rtpof=true&sd=true">this
                    document</a> for guides on where to park and how to acquire a permit.</p>
                <p>The Gilman Parking Structure is the closest parking structure to the convention. You can use the
                    Wayfinding feature or the map below to navigate to Price Center:</p>
                <div className="map mx-auto mt-5">
                    <Ratio aspectRatio="4x3">
                        <iframe className="border-stroke"
                                title="Map to Price Center"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.697394192468!2d-117.2383838856308!3d32.87972498605018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c46a524fb9%3A0x68571efb243bc289!2sPrice%20Center%2C%20La%20Jolla%2C%20CA%2092093!5e0!3m2!1sen!2sus!4v1638064542514!5m2!1sen!2sus"
                                allowFullScreen="" loading="lazy"/>
                    </Ratio>
                </div>
            </Container>

            <Container className="parking-section">
                <h2 className="parking-heading">Parking Structure Video Guides</h2>
                <Row className="g-4 mt-2">
                    {videos.map((video) => (
                        <Col key={video.id} xs={12} md={6}>
                            <Ratio aspectRatio="16x9">
                                <iframe className="border-stroke"
                                        src={"https://www.youtube.com/embed/" + video.id}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen={true}/>
                            </Ratio>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
