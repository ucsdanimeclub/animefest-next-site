import {Container, Row, Ratio, Col} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"



export default function GenshinPanel() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2024.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">GENSHIN VA PANEL</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Come learn more about your favorite Genshin English voice actors and listen as they discuss what it&apos;s 
                    like to be a voice actor. Voice actors appearing include Ben Balmaceda (voice of Kaveh), with others being revealed soon! 
                    There will be time for questions afterward.</p>
                <h4 className="text-left title-text">Voice Actor Introductions:</h4>
                <h5><b>Ben Balmaceda</b></h5>
                <Row className="mb-4">
                    <Col xs={12} md={8} lg={4}>
                        <MyImage src="images/Ben_Balmaceda_Headshot.png" alt="Ben Balmaceda"
                                 className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                </Row>
                <p>Ben Balmaceda is a Chilean voice actor currently based in LA. He primarily works in anime dubbing, with
                    some notable roles being Andy from Undead Unluck, Travis from Unicorn Overlord, Neku Sakuraba in
                    The World Ends With You: The Animation, Raido in Aharen-san wa Hakarenai, Jiro Yakuin in More Than A
                    Married Couple But Not Lovers, Pedro in One Piece, Rikiel in Jojo&apos;s Bizarre Adventure: Stone Ocean,
                    Tenza in Hell&apos;s Paradise and Saber in the upcoming dub of Fate/Strange fake. He&apos;s also appeared in
                    numerous video games including Genshin Impact as Kaveh, LIVE A LIVE, Pokemon Masters EX, Eternal
                    Return, Path of the Midnight Sun and Project Wingman. Finally, he assisted in production work on
                    several anime dubs including Kemono Jihen, A Place Further Than The Universe and Yakuza&apos;s Guide to
                    Babysittng.</p>
                <h4 className="text-left title-text">Check-In:</h4>
                <p>Please check-in at the check-in table in front of the entrance to Price Center Theater.</p>
                <h4 className="text-left title-text">Schedule:</h4>
                <p>The Genshin VA Panel will last from <b>3:30 PM to 4:30 PM</b>.</p>
                <h4 className="text-left title-text">Location:</h4>
                <p>The Genshin VA Panel will be held at <b>Price Center Theater</b>. Below is a helpful guide on how to get there:</p>
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
