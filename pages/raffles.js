import Link from 'next/link'
import {Container} from 'react-bootstrap'
import PrizeDisplay from "../components/prizes/prizedisplay";
import Prizes from "../data/prizes.json";


export default function Raffles() {
    const prizePools = [
        "Afternoon Raffle", "Cosplay Masquerade", "Evening Raffle", "Fist of the North Star",
        "Genshin Cosplay", "Kancolle", "Modelkit"
    ]
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">RAFFLES</h1>
            </Container>

            <Container fluid className="p-5 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Want some free stuff? Then Animefest is the right place for you! Earn raffle tickets by attending various events throughout the convention—from panels, to movie showings, various fun games, and many more!</p>
                <p className="mb-0">Submit your tickets into one of our many raffle pools, located by our help desk in West Ballroom.</p>
            </Container>

            <Container fluid className="p-5 mt-4 section">
                <h4 className="text-left mb-4 display-text">RAFFLE POOLS</h4>
                <PrizeDisplay data={Prizes["prizes"]} pools={prizePools} />
            </Container>
        </>
    )
}
