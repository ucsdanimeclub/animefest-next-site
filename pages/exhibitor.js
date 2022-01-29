import { Container } from 'react-bootstrap'


export default function Exhibitor() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">EXHIBITOR HALL</h1>
      </Container>

      <Container fluid className="p-5 section">
        <h4 className="text-left mb-4 display-text">ABOUT</h4>
        <p>The Exhibitor Hall is home to our Artist Alley and Vendor space. It is located throughout the West Ballroom.</p>
        <p className="mb-0">Table assignments coming soon!</p>
      </Container>
    </>
  )
}
