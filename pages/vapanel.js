import {Container, Row, Ratio, Col} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"



export default function VAPanel() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header_2025_v2.png" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">VA PANEL</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>More info coming soon!</p>
            </Container>
        </>
    )
}
