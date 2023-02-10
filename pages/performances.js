import {Container, Ratio} from 'react-bootstrap'
import {TimeConvert} from '../components/eventtable'
import Performers from '../data/performers.json'
import BackgroundImage from "../components/index/backgroundimage"


function PerformerInfo({performer}) {
    const performerTime = <p className="text-left caption-text">{TimeConvert(performer["start"]) + ' - ' + TimeConvert(performer["end"]) + ": Performance"}</p>
    let performerWebsite = <></>
    if (performer["profile"]) {
        performerWebsite =
            <p className="text-left caption-text mb-1"><a href={performer["profile"]}>{performer["performer"]}&apos;s
                Website</a></p>
    }

    if (performer["embed"]) {
        return (
            <>
                <div className="mb-2">
                    {performerWebsite}
                    {performerTime}
                </div>
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
            </>
        )
    } else {
        return (
            <>
                <div className="mb-2">
                    {performerWebsite}
                    {performerTime}
                </div>
                <p>{performer["description"]}</p>
            </>
        )
    }
}

function PerformerDisplay({performer, ...otherProps}) {
    return (
        <Container fluid {...otherProps}>
            <h4 className="text-left mb-4 display-text">{performer["performer"].toUpperCase()}</h4>
            <PerformerInfo performer={performer}/>
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
        </>
    )
}
