import {Container} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
// import PrizeDisplay from "../components/prizes/prizedisplay"
// import Prizes from "../data/prizes.json"


export default function Raffles() {
    // const prizePools = [
    //     "Afternoon Raffle", "Evening Raffle", "Fist of the North Star",
    //     "Kancolle", "Modelkit"
    // ]
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header.jpg" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">RAFFLES</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                {/*<p className="text-left caption-text mb-1">1:30 PM - 2:00 PM: Afternoon Raffle</p>*/}
                {/*<p className="text-left caption-text mb-4">7:00 PM - 8:00 PM: Evening Raffle</p>*/}
                <p>Our raffles will be held in the East Ballroom. More information coming soon!</p>
            </Container>

            {/*<Container fluid className="p-3 mt-4 section">*/}
            {/*    <h4 className="text-left mb-4 display-text">RAFFLE POOLS</h4>*/}
            {/*    <PrizeDisplay data={Prizes["prizes"]} pools={prizePools}/>*/}
            {/*</Container>*/}
        </>
    )
}
