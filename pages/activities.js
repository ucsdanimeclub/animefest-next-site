import { Container } from 'react-bootstrap'


export default function Activities() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">FEATURED ACTIVITIES</h1>
      </Container>

      <Container fluid className="p-5 section">
        <h4 className="text-left mb-4 display-text">ABOUT</h4>
        <p className="text-left caption-text mb-4">11:00 AM - 5:00 PM: Activities Open</p>
        <p className="mb-0">The Board Game and Origami Folders clubs will be hosting tabletop games and origami lessons at the Green Table Room in the Sun God Lounge.
          We will also have a Cardfight!! Vanguard demo area for attendees to learn how to play the game.</p>
      </Container>

      <Container fluid className="p-5 mt-4 section">
        <h4 className="text-left mb-4 display-text">ORIGAMI FOLDERS</h4>
        <p>Origami Folders at UCSD is a venue for origami enthusiasts to practice and share their craft with others. Beginners are introduced to the traditional Japanese art, as well as its applications in math and engineering.</p>
        <p className="mb-0">During Animefest, we will exhibit a few anime related models. Visitors are welcome to stay awhile and learn how to fold these models for themselves.</p>
      </Container>
    </>
  )
}
