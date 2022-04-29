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
                {/*<p>The Main Stage is located at the front of the West Ballroom. It is home to our annual Cosplay*/}
                {/*    Masquerade, a contest where participants show off their cosplay! The top winners will be awarded*/}
                {/*    prizes. Look out for our sign up form on the day of the convention!</p>*/}
                {/*<p>We will also be hosting raffles throughout the day.</p>*/}
                {/*<p>Schedule coming soon!</p>*/}
                {/*<p className="mb-0">This year, performances will be hosted at the <Link href="/theater" passHref>Price*/}
                {/*    Center Theater</Link> instead of the Main Stage.</p>*/}
            </Container>

            <Container fluid className="p-5 mt-4 section">
                <h4 className="text-left mb-4 display-text">PRIZING</h4>
                <PrizeDisplay data={Prizes["prizes"]} pools={prizePools} />
            </Container>
        </>
    )
}
