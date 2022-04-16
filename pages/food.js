import {Container} from 'react-bootstrap'
import MyImage from "../components/myimage";


export default function Food() {
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">FOOD</h1>
            </Container>

            <Container fluid className="p-5 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p className="mb-4">Animefest is located in UCSD&apos;s Price Center, which has a variety of <a
                    href="https://universitycenters.ucsd.edu/dining-retail/dining/">dining
                    options</a> convenient for staying fed during the convention.
                </p>
                <a href="images/food_coupon.png"><MyImage src="images/food_coupon.png" alt="Food coupon"
                                                          className="mw-100 border-stroke mx-auto d-block mb-1"/></a>
                <p className="text-center caption-text">Click on the image to enlarge.</p>
            </Container>
        </>
    )
}
