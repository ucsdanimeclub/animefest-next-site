import {Container} from 'react-bootstrap'
import BackgroundImage from "../components/index/backgroundimage"
// import MyImage from "../components/myimage"


export default function Food() {
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header.jpg" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">FOOD</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Animefest is located in UCSD&apos;s Price Center, which has a variety of <a
                    href="https://universitycenters.ucsd.edu/dining-retail/dining/">dining
                    options</a> convenient for staying fed during the convention.
                </p>
                <p>Check back here closer to the event date for more information.</p>
                {/*<div className="text-center">*/}
                {/*    <a href="images/food_coupon.png"><MyImage src="images/food_coupon.png" alt="Food coupon"*/}
                {/*                                              className="mw-100 border-stroke mb-1"/></a>*/}
                {/*    <p className="caption-text mb-0">Click on the image to open.</p>*/}
                {/*</div>*/}
            </Container>
        </>
    )
}
