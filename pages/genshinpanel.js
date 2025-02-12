import {Container, Row, Ratio, Col} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"



export default function GenshinPanel() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2025_v2.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">GENSHIN VA PANEL</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Come learn more about your favorite Genshin English voice actors and listen as they discuss what it&apos;s 
                    like to be a voice actor. Voice actors appearing include Ben Balmaceda (voice of Kaveh) and Kayli Mills (voice of Keqing), with others being revealed soon! 
                    There will be time for questions afterward.</p>
                <h4 className="text-left title-text">Voice Actor Introductions:</h4>
                <h5><b>Ben Balmaceda</b></h5>
                <Row className="mb-4">
                    <Col xs={6} md={4} lg={2}>
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
                    Babysittng.
                </p>
                <h5><b>Kayli Mills</b></h5>
                <Row className="mb-4">
                    <Col xs={6} md={4} lg={2}>
                        <MyImage src="images/Kayli_Mills_Headshot.png" alt="Kayli Mills"
                                 className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                </Row>
                <p>Kayli grew up in multiple towns in the LP of Michigan. As a child she was frequently relocated,
                    but in middle school she found comfort and friendship in creating song covers, writing and voice
                    acting online. After years of chasing her dream, you can hear her as colorful cast of characters
                    including Keqing (Genshin Impact), Rapie and Alice (NIKKE), Alice (Sword Art Online), Emilia
                    (Re:Zero), Clara (Welcome to Demon School: Iruma-kun), Quna - Speaking and singing (PSO2)
                    and many more!
                    Beyond being a voice actor, Kayli is also a professional writer, lyricist and singer with a
                    certification in audio engineering and a Youtube channel with a following for her cover songs.
                    She enjoys being active in many ways (weight lifting, yoga, hiking, surfing, sports) and loves
                    going on adventures! She&apos;s also a huge foodie and could talk to you for hours about how to
                    perfectly construct a gourmet donut!
                    Fun fact: She has sung and appeared in a music video for a single released by J-pop singer
                    Yun*Chi. She is also a part of the virtual idol group Interlunium, an 11 member group that
                    releases original music and story. She even designed her own character, Akira!
                    Follow her gremlin adventures online via Instagram or Twitter @KayliMills
                </p>
                <h5><b>Corina Boettger</b></h5>
                <Row className="mb-4">
                    <Col xs={6} md={4} lg={2}>
                        <MyImage src="images/Corina_Boettger_Headshot.jpg" alt="Corina Boettger"
                                 className="mw-100 border-stroke mx-auto d-block" />
                    </Col>
                </Row>
                <p>Corina Boettger is a Non-binary professional actor for over 20 years starting as a child in theater/on-camera and now 
                    working in the voice over world. They can be heard has Paimon in Genshin Impact, Tornado in One Punch Man, Naphula 
                    in Welcome to Demon School Iruma-kun, Mizuki in Ai: The Somnium Files, Sailor Tin Nyanko in Sailor Moon, Somali in 
                    Somali and the Forest Spirit, Marshtato Mary in DreamWorks&apos; Trollstopia and much more. You may also recognize their 
                    face as they have guest starred and co-starred on shows like My Name is Earl, Glee, Shameless, Desperate Housewives 
                    and more. They are an advocate for health care as Corina has Crohn&apos;s disease & Autism and wants to be an advocate for 
                    others who are similar that want to become a part of the industry.
                </p>
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
