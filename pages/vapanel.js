import {Container, Row, Ratio, Col} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"



export default function VAPanel() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2026.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-header">VA PANEL</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <h4 className="text-left title-text">Voice Actor Introductions:</h4>
                <h5><b>Kayleigh McKee</b></h5>
                <Row className="mb-4">
                    <Col xs={6} md={4} lg={2}>
                        <MyImage src="images/Kayleigh_McKee_Headshot.png" alt="Kayleigh McKee"
                                 className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                </Row>
                <p>Kayleigh is Voice Actress, Writer, Worldbuilder and Artist from a cornfield somewhere in the backwoods of Illinois. 
                    She is best known for playing the fan favorite characters like Yuta Okkotsu in Jujutsu Kasien, Pina in the hit anime BEASTARS on Netflix, Testament in Guilty Gear Strive, Scarab in Adventure Time: Fionna & Cake,
                     and as nonbinary mage Varden Dawngraspin the massive Hearthstone digital card game set in the world of Warcraft. She is one of few Transgender women in professional voice over, and a major advocate of
                      social progress blazing a new path in the realm of acting for anime, cartoons, and games. Her most striking attribute is her ability to portray a vast range of characters masculine, feminine and further, 
                      as well as just being an overall goof!<br></br><br></br>
                    Socials:<br></br>
                    X/Twitter: @GhaspeyVO<br></br>
                    Instagram: @ghaspeyvo<br></br>
                    Website: https://www.kayleigh-mckee.com/
                </p>
                <h5><b>Tara Sands</b></h5>
                <Row className="mb-4">
                    <Col xs={6} md={4} lg={2}>
                        <MyImage src="images/Tara_Sands_Headshot.png" alt="Tara Sands"
                                 className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                </Row>
                <p>Tara Jayne Sands can be heard as over 50 characters in the original English Pokémon tv series including Bulbasaur, Richie, Jasmine, Oddish, Yamper and Tori. 
                    Some other roles include Biscuit in HunterXHunter, Mokuba in Yu-Gi-Oh!, Kari in Digimon Adventure Tri, Anna in Shaman King, Curious in My Hero Academia,  
                    Momo, Utahime and Young Panda in Jujutsu Kaisen, Kirio Hikifume in Bleach: Thousand-Year Blood War, Young Ban in Seven Deadly Sins, Kombu Infinity in One Punch Man, 
                    Circe in Generator Rex, YoungKabuto in Naruto, Filia in Slayers, Summer in Barbie: Life in The Dreamhouse, Death 13/Mannish Boy in Jojo’s Bizarre Adventure, Namida in Boruto, 
                    Sonya in Fire Emblem, Kyu in Bungou Stray Dogs, Ruby in Rainbow High, Kilo and Bay in Goddess of Victory: Nikke and lots more.<br></br><br></br>
                    For 2 years (over 100 episodes!), Tara was the on-camera host of Cartoon Network’s weekly Friday night lineup, appropriately titled “Fridays.”<br></br><br></br>
                    On “Fridays” Tara interviewed dozens of celebrities like George Lucas, Robin Williams, Charles Barkley and Daniel Radcliffe, and had more on-camera food fights than she cares to remember.<br></br><br></br>
                    Tara has also narrated over 300 audiobooks!<br></br><br></br>
                    Currently, Tara is co-hosting a podcast called 4KidsFlashback where she interviews the actors and staff of 4Kids Entertainment, the company who brought tons of anime (like Pokemon, Yu-Gi-Oh! and One Piece) to English speaking audiences.<br></br><br></br>
                    Socials:<br></br>
                    X/Twitter: @TaraSandsvo<br></br>
                    Instagram: @tarasandsvo<br></br>
                    TikTok: @tarasandsvo
                </p>
                <h4 className="text-left title-text">Check-In:</h4>
                <p>Please check-in at the check-in table in front of the entrance to Price Center Theater.</p>
                <h4 className="text-left title-text">Schedule:</h4>
                <p>The VA Panel will last from <b>1:00 PM to 2:00 PM</b>.</p>
                <h4 className="text-left title-text">Location:</h4>
                <p>The VA Panel will be held at <b>Price Center Theater</b>. Below is a helpful guide on how to get there:</p>
                <Row className="mb-4">
                    <Col xs={0} md={2} lg={4} />
                    <Col xs={12} md={8} lg={4}>
                        <MyImage src="images/price_center_theatre.png" alt="pc theater location"
                                 className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                    <Col xs={0} md={2} lg={4} />
                </Row>
            </Container>
        </>
    )
}
