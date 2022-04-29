import {Container} from 'react-bootstrap'
import PrizeDisplay from "../components/prizes/prizedisplay"
import PrizeImages from "../components/prizes/prizeimages"
import Prizes from "../data/prizes.json"


export default function Sandbox() {
    const prizePools = [
        "Afternoon Raffle", "Cosplay Masquerade", "Evening Raffle", "Fist of the North Star",
        "Genshin Cosplay", "Kancolle", "Modelkit", "Smash Ultimate"
    ]
    const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Afternoon Raffle").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-5 section">
                <PrizeDisplay data={Prizes["prizes"]} pools={prizePools} />
                <PrizeImages prizes={prizesInPool}></PrizeImages>
            </Container>

            <Container fluid className="p-4 mt-5 section">
                <div>
                    <iframe className="sheet-schedule w-75 d-block mx-auto"
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSh2gBYXSEV57p05RAVENMwqDHmJ5GFHTjgb0M9LOTAYrBbLrrwA5fMECz7R3F2qfpnRElr854rGZOG/pubhtml?widget=true&amp;headers=false"></iframe>
                </div>
            </Container>
        </>
    )
}
