import Link from 'next/link'
import {Col, Container, Row} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import MyImage from "../components/myimage"

const sponsors = [
    {
        name: "Associated Students at UC San Diego",
        image: "images/sponsors/logo_as.png",
        url: "https://as.ucsd.edu/",
        description: "Our mission is to facilitate and encourage students to grow and develop through their involvement in student government, its services and auxiliaries. We promote student engagement in all areas of campus life through leadership, advocacy, and service in order to build and strengthen our community.",
    },
    {
        name: "Gundam Planet",
        image: "images/sponsor/logo_gundamplanet.png",
        url: "https://www.gundamplanet.com/",
        description: "Ever since Gundam Planet was started by one person in 2010, it has continued growing to comprise the most qualified and focused team in the US, who are all dedicated to bringing you the best products and service in the import Japanese collectible & hobby market. We're an independent small business that is Asian-owned and family-operated, and 100% of our operations are handled by our in-house staff. Whether you want to shop online or in-person at our New Jersey showroom, you'll be sure to find something to love about GP!",
    },
    {
        name: "Sekai Project",
        image: "images/sponsors/logo_sekai.png",
        url: "https://sekaiproject.com/",
        description: "Sekai Project is the leading Visual Novel Publisher in the U.S. We are dedicated to bringing the best from the East to the West. Started in 2013, we were a small group of fans who wanted to bring over our favorite visual novels from Japan to the rest of the world. Since then, we’ve expanded to multiple areas of media such as English visual novels, bullet hell games, strategy games, puzzle games, animation, manga, doujinshi and more!",
    },
]

export default function Sponsors() {
    return (
        <div className="sponsor-page">
            <BackgroundImage src="images/sponsors/sponsors_banner.jpg" className="sponsor-banner">
                <h1 className="sponsor-title">2026<br/>SPONSORS</h1>
                <MyImage src="images/sponsors/kai26_chibi.png" className="sponsor-chibi" alt="Kai waving"/>
            </BackgroundImage>

            <Container className="sponsor-section">
                <p className="sponsor-redirect">For information regarding sponsorship, please check out
                    our <Link href="/sponsorship">Sponsorship Opportunities</Link> page.</p>

                {sponsors.map((sponsor) => (
                    <Row key={sponsor.name} className="align-items-center g-5 mb-4">
                        <Col xs={12} md={4} className="text-center">
                            <a href={sponsor.url}>
                                <MyImage src={sponsor.image} className="sponsor-logo" alt={sponsor.name}/>
                            </a>
                        </Col>
                        <Col xs={12} md={8}>
                            <h2 className="sponsor-name">{sponsor.name}</h2>
                            <p className="mb-0">{sponsor.description}</p>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}
