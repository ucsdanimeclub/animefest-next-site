import {Button, Container} from 'react-bootstrap'
import PrizeDisplay from "../components/prizes/prizedisplay"
import PrizeImages from "../components/prizes/prizeimages"
import Prizes from "../data/prizes.json"
import MyImage from "../components/myimage";


export default function Sandbox() {
    const prizePools = [
        "Afternoon Raffle", "Cosplay Masquerade", "Evening Raffle", "Fist of the North Star",
        "Genshin Cosplay", "Kancolle", "Modelkit", "Smash Ultimate"
    ]
    const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Afternoon Raffle").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-5 section">
                <PrizeDisplay data={Prizes["prizes"]} pools={prizePools}/>
                {/*<PrizeImages prizes={prizesInPool}></PrizeImages>*/}
            </Container>

            <Container fluid className="p-5 mt-4 section">
                <p className="mb-5"><span className="highlight">Sign ups are now live!</span> The voting form will open
                    once the contest
                    has begun.</p>
                <div className="text-center">
                    <Button variant="danger" size="lg" className="mb-4">Cosplay Masquerade Sign Up Form</Button>
                    <br/>
                    <Button variant="danger">Vote for the winners HERE!</Button>
                </div>
            </Container>

            <Container fluid className="p-5 mt-4 section">
                <div className="text-center mb-5">
                    <iframe className="sheet-schedule sheet-constraint w-75 d-block mb-1 mx-auto"
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSh2gBYXSEV57p05RAVENMwqDHmJ5GFHTjgb0M9LOTAYrBbLrrwA5fMECz7R3F2qfpnRElr854rGZOG/pubhtml?widget=true&amp;headers=false"/>
                    <p className="caption-text"><a
                        href="https://docs.google.com/spreadsheets/d/11egWL19jhBBIf27SXAjf81tyDxkVJsRjCtNo4gr5bTE/edit?usp=sharing">Have
                        trouble viewing? Click here!</a></p>
                </div>
                <div className="text-center">
                    <a href="images/map.jpg">
                        <MyImage src="images/map.jpg" className="sheet-constraint border-stroke mw-100 mb-1"
                                 alt="Price Center map"/>
                    </a>
                    <p className="caption-text mb-0">Click on the image to open.</p>
                </div>
            </Container>

            <Container fluid className="p-4 mt-5 section">
                <div>
                    <iframe className="sheet-schedule w-75 d-block mx-auto"
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSh2gBYXSEV57p05RAVENMwqDHmJ5GFHTjgb0M9LOTAYrBbLrrwA5fMECz7R3F2qfpnRElr854rGZOG/pubhtml?widget=true&amp;headers=false"/>
                </div>
            </Container>
        </>
    )
}
