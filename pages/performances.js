import {Container, Ratio} from 'react-bootstrap'
// import {TimeConvert} from '../components/eventtable'
import Performers from '../data/performers.json'
import BackgroundImage from "../components/index/backgroundimage"

function PerformerDisplay({performer, ...otherProps}) {
    return (
        <Container fluid {...otherProps}>
            <h4 className="text-left mb-4 display-text">{performer["performer"].toUpperCase()}</h4>
            {/*<p className="text-left caption-text mb-4">{TimeConvert(performer["start"]) + ' - ' + TimeConvert(performer["end"]) + ": Performance"}</p>*/}
            <p className="mb-4">{performer["description"]}</p>
            <div className="video-player mx-auto">
                <Ratio aspectRatio="16x9">
                    {/*iframe props may need to be updated in the future if YouTube changes their embed feature*/}
                    <iframe className="border-stroke" src={performer["embed"]}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Ratio>
            </div>
        </Container>
    )
}

export default function Performances() {
    let allPerformers = Performers["performers"]
    const performersSorted = allPerformers.sort((e1, e2) => e1["start"].localeCompare(e2["start"]))
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header.jpg" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">PERFORMANCES</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Performances will be held in the East Ballroom. Check out our featured performers below!</p>
            </Container>

            {performersSorted.map((performerDatum, index) => {
                return (
                    <PerformerDisplay performer={performerDatum} key={index} className="p-3 mt-4 section"/>
                )
            })}
            {/*<Container fluid className="p-3 mt-4 section">*/}
            {/*    <h4 className="text-left mb-4 display-text">G-MOTO</h4>*/}
            {/*    /!*<p className="text-left caption-text mb-4">3:00 PM - 4:00 PM: Performance</p>*!/*/}
            {/*    <p className="mb-4">G-Moto is a Bamboo Flute-Beatboxer, based in Southern California. He performs music*/}
            {/*        covers from Video Game Music, Anime, K-Pop, and more. He has covered songs from current and classic*/}
            {/*        favorites such as: the Legend of Zelda, League of Legends, Naruto, Vocaloid, and the Persona series.*/}
            {/*        He has performed at various cultural festivals and anime conventions, such as the 626 Night Market,*/}
            {/*        FoodieLand, and Anime Expo. He was a Finalist at the 2020 Anime Los Angeles&apos; Next Top Star*/}
            {/*        talent*/}
            {/*        competition. He has been featured in Jubilee Media&apos;s SONGLAB series, ShoutOut SoCal Magazine,*/}
            {/*        SD*/}
            {/*        Voyager, TJS Radio, and Travel Deeper. You can find G-Moto on Instagram at <a*/}
            {/*            href="https://www.instagram.com/g.moto.fbx/?hl=en">@g.moto.fbx</a></p>*/}
            {/*    <div className="video-player mx-auto">*/}
            {/*        <Ratio aspectRatio="16x9">*/}
            {/*            <iframe className="border-stroke" src="https://www.youtube-nocookie.com/embed/d9zi1hOJD8M"*/}
            {/*                    title="YouTube video player" frameBorder="0"*/}
            {/*                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*                    allowFullScreen></iframe>*/}
            {/*        </Ratio>*/}
            {/*    </div>*/}
            {/*</Container>*/}

            {/*<Container fluid className="p-3 mt-4 section">*/}
            {/*    <h4 className="text-left mb-4 display-text">AQU♡RIUS ENCORE PROJECT</h4>*/}
            {/*    /!*<p className="text-left caption-text mb-4">3:00 PM - 4:00 PM: Performance</p>*!/*/}
            {/*    <p className="mb-4">Aqu♡rius Encore Project is going on a Carnival Field Trip! Join Jelli, Lily, Haley,*/}
            {/*        Eggy, and Eden on a singing and dancing rollercoaster performance! This live will be filled with a*/}
            {/*        variety of jpop songs from your favorite artists and series. Let&apos;s have fun on this musical*/}
            {/*        merry-go-round!</p>*/}
            {/*    <div className="video-player mx-auto">*/}
            {/*        <Ratio aspectRatio="16x9">*/}
            {/*            <iframe className="border-stroke" src="https://www.youtube-nocookie.com/embed/TLeXOFLiPxo"*/}
            {/*                    title="YouTube video player" frameBorder="0"*/}
            {/*                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*                    allowFullScreen></iframe>*/}
            {/*        </Ratio>*/}
            {/*    </div>*/}
            {/*</Container>*/}

            {/*<Container fluid className="p-3 mt-4 section">*/}
            {/*    <h4 className="text-left mb-4 display-text">INTERMISSION ORCHESTRA</h4>*/}
            {/*    /!*<p className="text-left caption-text mb-4">3:00 PM - 4:00 PM: Performance</p>*!/*/}
            {/*    <p className="mb-4">We&apos;re an orchestra that plays music from video games, anime, film, and other*/}
            {/*        pop*/}
            {/*        culture! We&apos;ll be performing select pieces from our upcoming Winter 2023 concert at*/}
            {/*        Animefest.</p>*/}
            {/*    <div className="video-player mx-auto">*/}
            {/*        <Ratio aspectRatio="16x9">*/}
            {/*            <iframe className="border-stroke" src="https://www.youtube-nocookie.com/embed/jceUgX0sWgE"*/}
            {/*                    title="YouTube video player" frameBorder="0"*/}
            {/*                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*                    allowFullScreen></iframe>*/}
            {/*        </Ratio>*/}
            {/*    </div>*/}
            {/*</Container>*/}

            {/*<Container fluid className="p-3 mt-4 section">*/}
            {/*    <h4 className="text-left mb-4 display-text">SUPER TONIC</h4>*/}
            {/*    /!*<p className="text-left caption-text mb-4">3:00 PM - 4:00 PM: Performance</p>*!/*/}
            {/*    <p className="mb-4">We are a San Diego based anime and video game cover band formed in 2019. From hype*/}
            {/*        anime openings to obscure video game soundtracks, we are passionate about playing music and strive*/}
            {/*        to share the joy and excitement we feel about this unique subculture through our own sound.</p>*/}
            {/*    <div className="video-player mx-auto">*/}
            {/*        <Ratio aspectRatio="16x9">*/}
            {/*            <iframe className="border-stroke"*/}
            {/*                    src="https://www.youtube-nocookie.com/embed/HlicXuZ_LNw"*/}
            {/*                    title="YouTube video player" frameBorder="0"*/}
            {/*                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*                    allowFullScreen></iframe>*/}
            {/*        </Ratio>*/}
            {/*    </div>*/}
            {/*</Container>*/}
        </>
    )
}
