import {Col, Container, Row} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import Offers from "../components/index/offers"
import Gallery from "../components/index/gallery"
import MyImage from "../components/myimage"
import Countdown from '../components/countdown'

const archive = [
    {year: 2015, image: "images/home/archive/af15.png"},
    {year: 2016, text: "ANIMEFEST", className: "archive-bebas"},
    {year: 2017, text: "ANIMEFEST", className: "archive-bebas"},
    {year: 2018, text: "ANIMEFEST", className: "archive-bebas"},
    {year: 2019, text: "Animefest", className: "archive-fredoka"},
    {year: 2020, image: "images/home/archive/af20.png"},
    {year: 2022, image: "images/home/archive/af22.png"},
    {year: 2023, image: "images/home/archive/af23.png"},
    {year: 2024, image: "images/home/archive/af24.png"},
    {year: 2025, image: "images/home/archive/af25.png"},
    {year: 2026, image: "images/home/archive/af26.png"},
]

export default function Home() {
    return (
        <div className="home">
            <section className="home-hero">
                <BackgroundImage src="images/home/noise.png" className="home-noise"/>
                <div className="home-logo">
                    <h1 className="home-logo-text">
                        <span className="text-red">A</span>NIME<span className="text-red">F</span>EST
                    </h1>
                    <div className="home-logo-bar"/>
                    <div className="home-ame-logo">
                        <MyImage src="images/home/ame_white_long.png" alt="Anime & Manga Enthusiasts"/>
                    </div>
                </div>
            </section>

            <section className="home-date">
                <h2 className="home-date-day">February <span className="text-red">13,</span> 2027</h2>
                <h3 className="home-date-place">UC San Diego&rsquo;s Price Center</h3>
                <p className="home-date-time">11:00 AM - 8:00 PM</p>
                <div className="home-date-bar"/>
                <Countdown/>
            </section>

            <BackgroundImage src="images/home/offers_bg.jpg" className="home-offers">
                <Offers/>
            </BackgroundImage>

            <Gallery/>

            <section className="home-section" id="about">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col xs={12} lg={6}>
                            <MyImage src="images/home/recap_2026.png" className="w-100" alt="Animefest 2026 recap"/>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h2 className="home-heading">ABOUT US</h2>
                            <p>Originating all the way back from the late 1990s when we were still called Cal Animage
                                Beta, our mission has been host an event where animanga lovers, artists, and entertainers
                                can celebrate what we love! Best of all? The event is free to attend!</p>
                            <p>Every year participants go to the Price Center at UCSD to attend discussion and workshop
                                panels, buy the best artwork, and read hidden gems in the manga library! And of course,
                                there will be cosplays, festival games, and video games&mdash;all for some otaku fun!</p>
                            <p className="mb-0">Curious about what it&rsquo;s like in person? Have a sneak peek
                                with <a href="https://youtube.com/playlist?list=PL7vJlkV5FR0fOY1E9ESB3mlrg1NyGp6TV"
                                        target="_blank" rel="noreferrer">our recap videos</a>!</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="home-section home-sponsors text-center" id="sponsors">
                <h2 className="home-sponsors-title">SPONSORS</h2>
                <p className="mb-0">Coming <span className="text-gold">soon...</span></p>
            </section>

            <section className="home-section text-center" id="archive">
                <h2 className="home-heading">ARCHIVE</h2>
                <p>Check out our previous Animefest websites here...</p>
                <div className="home-archive">
                    {archive.map((item) => (
                        <div key={item.year} className="home-archive-item">
                            {item.image
                                ? <MyImage src={item.image} alt={"Animefest " + item.year + " logo"}
                                           className={item.year === 2015 ? "archive-wide" : "archive-square"}/>
                                : <span className={item.className}>{item.text}</span>}
                            <p>(Animefest {item.year})</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
