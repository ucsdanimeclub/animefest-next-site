import { Container } from 'react-bootstrap'
import MyImage from "../components/myimage"


export default function Gaming() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">GAMING</h1>
      </Container>

      <Container fluid className="p-5 section">
        <h4 className="text-left mb-4 display-text">ABOUT</h4>
        <p>Hosted by Triton Smash, look forward to a Super Smash Bros Ultimate Tournament at the Bear and Red Shoe rooms in the Sun God Lounge! More information and sign ups coming soon.</p>
        <MyImage src="images/smashbros.jpg" alt="Super Smash Bros gameplay" className="my-4 mw-100 border-stroke mx-auto d-block" />
      </Container>
    </>
  )
}
