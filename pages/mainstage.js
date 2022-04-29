import Link from 'next/link'
import {Container} from 'react-bootstrap'
import PrizeDisplay from "../components/prizes/prizedisplay";
import Prizes from "../data/prizes.json";


export default function Mainstage() {
    const prizePools = [
        "Cosplay Masquerade", "Genshin Cosplay"
    ]
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">MAIN STAGE</h1>
            </Container>

            <Container fluid className="p-5 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>The Main Stage is located at the front of the West Ballroom. Look forward to our annual Cosplay
                    Masquerade contest, photobooth, and <Link href="/raffles" passHref>raffles</Link> throughout the day!</p>
                <p className="mb-0">This year, performances will be hosted at the <Link href="/theater" passHref>Price
                    Center Theater</Link> instead of the Main Stage.</p>
            </Container>
            {/*, a contest where participants show off their cosplay! The top winners will be awarded
                    prizes seen below. Look out for our sign up form on the day of the convention!*/}
            <Container fluid className="p-5 mt-4 section">
                <h1 className="text-left mb-4 display-text">PHOTOBOOTH</h1>
                <p className="mb-4">Earn a chance to get a free ticket by taking a picture in our photobooth! If you post your picture onto social media with the hashtag <b>#Animefest2022</b>, you&apos;ll get another extra ticket. You can find the photo booth to the right of the stage in West Ballroom.</p>
                <h4 className="text-left title-text mb-4">Genshin Cosplay</h4>
                <p className="mb-0">If you show up to our convention with a Genshin Impact cosplay and take a picture in our photobooth, you will be entered into an exclusive raffle with special prizes, seen below!</p>
            </Container>

            <Container fluid className="p-5 mt-4 section">
                <h4 className="text-left mb-4 display-text">PRIZING</h4>
                <PrizeDisplay data={Prizes["prizes"]} pools={prizePools} />
            </Container>
        </>
    )
}
