import {Container} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"


export default function Rules() {
    return (
        <div className="rules">
            <BackgroundImage src="images/rules/banner.jpg" className="rules-banner">
                <h1 className="rules-title">RULES</h1>
                <MyImage src="images/AF25 Hina Chibi.png" className="rules-chibi" alt="Hina chibi"/>
            </BackgroundImage>

            <div className="rules-agree">
                <p>By attending Animefest, you agree to have read and will abide by our detailed rules below.</p>
            </div>

            <Container className="rules-section">
                <h2 className="rules-heading">Check-In</h2>
                <p>All attendees must possess a wristband from one of our check-in tables.</p>
                <p className="mb-0">Attendance is free for UCSD Affiliates.</p>
                <ul className="mb-0">
                    <li>Please show proof of affiliation at door with your UCSD ID.</li>
                </ul>
                <p className="mb-0">$8 General Entry</p>
                <ul>
                    <li>We will not be taking cash at the door.</li>
                </ul>
                <p className="mb-0">All attendees will have to present a completed Event Participant Waiver, which can be
                    e-signed prior to the convention using this <a
                        href="https://ewaivers.ucsd.edu/oal94e/waiver/">link</a>. Guardians must sign the waiver for
                    accompanying minors.</p>
            </Container>

            <Container className="rules-section">
                <h2 className="rules-heading">Guidelines</h2>
                <ol className="rules-list">
                    <li>Anime &amp; Manga Enthusiasts and UC San Diego reserves the right to remove anyone not in
                        compliance with the rules to their discretion.</li>
                    <li>All university policies and regulations apply to attendees of Animefest.
                        <ul>
                            <li>Consult this <a
                                href="https://ophd.ucsd.edu/policies-procedures/polpro_student.html">link</a> for
                                additional guidance.</li>
                        </ul>
                    </li>
                    <li>Attendees must respect common sense rules for public behavior, personal interaction, common
                        courtesy, and respect for private property. Harassing or offensive behavior will not be
                        tolerated.
                        <ul>
                            <li>If your behavior becomes problematic, security will have to intervene to dispute the
                                issue.</li>
                        </ul>
                    </li>
                    <li>Attendees are prohibited from directly handling the console setups. Any attendee seen tampering
                        or otherwise damaging Animefest property are liable for repairs and/or replacements.</li>
                    <li><u>Convention staff</u> may photograph and record video of the convention. By attending
                        Animefest, you give consent to be included in these photographs and recordings by our staff.</li>
                    <li>Physical contact, photography, or recordings of other individuals by non-staff is not allowed
                        without their explicit permission.</li>
                    <li>Please don&apos;t hesitate to call convention staff or campus security if you see anything
                        suspicious or disorderly conduct.</li>
                </ol>
            </Container>

            <Container className="rules-section">
                <h2 className="rules-heading">Cosplays &amp; Props</h2>
                <ol className="rules-list">
                    <li>No inappropriate (18+) cosplay is permitted.</li>
                    <li>No weapons or props designed or made with the ability to cause death or serious bodily injury to
                        any person or property is permitted. Misuse of a prop will result in that prop being deemed
                        unsafe.</li>
                    <li>Props resembling weapons are prohibited, including but not limited to bows, replica/toy swords,
                        and firearms (airsoft, replica, paintball, BB guns, and Nerf guns).</li>
                    <li>All props will be checked and marked with tape by our convention staff at the registration
                        table.</li>
                </ol>
            </Container>
        </div>
    )
}
