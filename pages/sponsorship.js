import {Container} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import MyImage from "../components/myimage"

const previousSponsors = [
    {name: "Associated Students at UC San Diego", image: "images/sponsors/logo_as.png"},
    {name: "Gundam Planet", image: "images/sponsor/logo_gundamplanet.png"},
    {name: "Sekai Project", image: "images/sponsors/logo_sekai.png"},
    {name: "Aniplex", image: "images/sponsors/logo_aniplex.png"},
    {name: "FuRyu", image: "images/sponsors/logo_furyu.png"},
    {name: "Clip Studio Paint", image: "images/sponsors/logo_csp.png"},
    {name: "Bushiroad", image: "images/sponsors/logo_bushiroad.png"},
]

export default function Sponsorship() {
    return (
        <div className="sponsor-page">
            <BackgroundImage src="images/sponsors/opportunities_banner.jpg" className="sponsor-banner sponsor-banner-tall">
                <h1 className="sponsor-title">SPONSORSHIP<br/>OPPORTUNITIES</h1>
            </BackgroundImage>

            <Container className="sponsor-section">
                <h2 className="sponsor-heading text-red">Why Animefest?</h2>
                <h3 className="sponsor-subheading">College Demographic</h3>
                <ul>
                    <li>Supporting Animefest will allow direct connections to students of UC San Diego and even San
                        Diego locals!</li>
                    <li>Make your brand known to over 1,800 attendees that attend Animefest annually!</li>
                </ul>
                <h3 className="sponsor-subheading">Supporting the Local Community</h3>
                <ul>
                    <li>All sponsorships &amp; donations go towards making Animefest an immeasurable experience for
                        attendees to enjoy!</li>
                    <li>Products and merchandise are distributed into our early and late opportunity drawings for
                        attendees to participate in! Additionally, they are also gifted to volunteers who help make
                        Animefest possible!</li>
                </ul>
                <h3 className="sponsor-subheading">Social Media Presence</h3>
                <ul className="mb-0">
                    <li>Over 400,000 impressions generated from our Animefest social media campaign. Have your brand
                        appear in our posts and reach the impressions!</li>
                </ul>
            </Container>

            <Container className="sponsor-section">
                <h2 className="sponsor-heading">Previous Sponsors</h2>
                <div className="sponsor-grid">
                    {previousSponsors.map((sponsor) => (
                        <MyImage key={sponsor.name} src={sponsor.image} className="sponsor-logo" alt={sponsor.name}/>
                    ))}
                </div>
            </Container>

            <Container className="sponsor-section">
                <h2 className="sponsor-heading text-red">Getting Started</h2>
                <p>Want to sponsor Animefest or have a partnership idea with the Anime &amp; Manga Enthusiasts?</p>
                <p className="mb-0">Reach out to our email
                    at <a href="mailto:ucsdanimeclub@gmail.com">ucsdanimeclub@gmail.com</a>!</p>
            </Container>
        </div>
    )
}
