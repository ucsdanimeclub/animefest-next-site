import {Container} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import PrizeDisplay from "../components/prizes/prizedisplay"
import Prizes from "../data/prizes.json"


export default function Raffles() {
    const prizePools = [
        "Early Raffle", "Final Raffle"
    ]
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2025_v2.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">RAFFLES</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p className="text-left caption-text mb-1">2:00 PM - 2:30 PM: Early Raffle</p>
                <p className="text-left caption-text mb-3">7:00 PM - 7:30 PM: Final Raffle</p>
                <p>Our raffles will be held in the East Ballroom. There will be two raffle periods: one in the afternoon and one in the evening. A prize list is coming soon!</p>
            </Container>

            {/* <Container fluid className="p-3 mt-4 section">
                <h4 className="text-left mb-4 display-text">RAFFLE POOLS</h4>
                <PrizeDisplay data={Prizes["prizes"]} pools={prizePools}/>
            </Container> */}
        </>
    )
}
