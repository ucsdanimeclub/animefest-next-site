import {Container} from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'


export default function Programming() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4">Programming</h1>
      </Container>

      <Container fluid className="p-5 mt-4 section" id="main">
        <h1 className="text-left mb-4">Main Stage</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="exhibitor">
        <h1 className="text-left mb-4">Exhibitor Hall</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="panels">
        <h1 className="text-left mb-4">Panels</h1>
        <p className="mb-0">The best place for learning more not just about anime, but passion and culture as well! Interesting discussion topics will be present ranging from LGBTIA+ identity all the way to origami will be available for participation at your discretion! 
          Some panels will even have workshops for a hands-on experience!</p>
      </Container>

      <Container fluid className="p-5 mt-4 section" id="cosplay">
        <h1 className="text-left mb-4">Cosplay Masquerade</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="gaming">
        <h1 className="text-left mb-4">Gaming</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="showings">
        <h1 className="text-left mb-4">Showings</h1>
        <p className="mb-0">For this year&apos;s animated film, we will be showcasing famous Japanese film director Shinkai Makoto&apos;s "Weathering With You", or Tenki no Ko. 
          Following its predecessor, Kimi no Nawa, Tenki no Ko, is a modern romance film excelling in audiovisuals, emotional drama, and a picturesque perspective on climate change in Tokyo. 
          After selling millions of tickets in 2019, the film won Animaton of the Year award at the 43rd annual Japan Academy Prize Ceremony as well as the Social Impact Award at the 23rd Japan Media Arts Festival. 
          In other words, it is a must-see!</p>
      </Container>

      <Container fluid className="p-5 mt-4 section" id="manga">
        <h1 className="text-left mb-4">Manga Library</h1>
        <p className="mb-0">If there&apos;s any dream of any animanga connoisseur or artist, it&apos;s to see all different kinds of physical copies of manga all in one place! 
        Whether it be light novels or manga you have or have not seen before, we will be showcasing a modest collection for anyone interested themselves. 
        Seeing manga in its authentic book form will be an unforgettable bucket-list experience!</p>
      </Container>
    </>
  )
}
