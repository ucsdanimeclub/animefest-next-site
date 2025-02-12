import {Container} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
import Prizes from "../data/prizes.json"
import PrizeImages from "../components/prizes/prizeimages"


export default function Cosplay() {
    const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Cosplay Contest").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2025_v2.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">COSPLAY CONTEST</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h1 className="text-left mb-4 display-text">ABOUT</h1>
                <p className="text-left caption-text mb-3">6:00 PM - 7:00 PM: Contest</p>
                <p>The Cosplay Masquerade is our annual contest where participants show off their cosplay! It
                    will be held at the East Ballroom.</p>
                <p>Participants will have up to 30 seconds to show off
                    their cosplay. During those 30 seconds, you may do a model walk or perform a short skit.</p>
                <p>The top winners will be awarded prizes! Winners will be determined by a panel of judges and announced
                    shortly after the contest.</p>
            </Container>

            <Container fluid className="p-3 mt-4 section">
                <h1 className="text-left mb-4 display-text">SIGN UP</h1>
                <p className="mb-4">The contest sign-up form will open
                    on the day of the convention at 11:00 AM and close at 5:30 PM, 30 minutes prior to the start
                    of
                    the contest. The sign-up form is only available on-site at the East Ballroom Help Desk.</p>
            </Container>

            <Container fluid className="p-3 mt-4 section">
                <h1 className="text-left mb-4 display-text">COSPLAY & PROP GUIDELINES</h1>
                <ol>
                    <li><p>No inappropriate (18+) cosplay is permitted.</p></li>
                    <li><p>No weapons or props designed or made with the ability to cause death or serious
                        bodily injury to any person or property is permitted. Misuse of a prop will result in
                        that prop being deemed unsafe.</p></li>
                    <li><p>Props resembling weapons are prohibited, including but not limited to bows,
                        replica/toy swords, and firearms (airsoft, replica, paintball, BB guns, and Nerf
                        guns).</p></li>
                    <li><p>All props will be checked and marked with tape by our convention staff at the
                        registration table.</p></li>
                </ol>
            </Container>

            <Container fluid className="p-3 mt-4 section">
                <h4 className="text-left mb-4 display-text">PRIZING</h4>
                <PrizeImages prizes={prizesInPool}/>
            </Container>
        </>
    )
}
