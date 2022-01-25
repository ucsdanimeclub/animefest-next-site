import { Container } from 'react-bootstrap'


export default function Activities() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">FEATURED ACTIVITIES</h1>
      </Container>

      <Container fluid className="p-5 section">
        <h4 className="text-left mb-4 display-text">ABOUT</h4>
        <p className="mb-0">The Board Game and Origami Folders clubs will be hosting tabletop games and origami lessons at the Green Table Room in the Sun God Lounge.
          We will also have a Cardfight!! Vanguard demo area for attendees to learn how to play the game.
          Additional information coming soon!</p>
      </Container>
    </>
  )
}
