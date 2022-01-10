import { Container } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'


export default function Programming() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">Programming</h1>
      </Container>

      <Container fluid className="p-5 section" id="main">
        <h1 className="text-left mb-4 display-text">Main Stage</h1>
        <p>Schedule coming soon!</p>
        <p className="mb-0"></p>
      </Container>

      <Container fluid className="p-5 mt-4 section" id="exhibitor">
        <h1 className="text-left mb-4 display-text">Exhibitor Hall</h1>
        Artist Alley and Vendor assignments will be made public by January 23rd.
      </Container>

      <Container fluid className="p-5 mt-4 section" id="panels">
        <h1 className="text-left mb-4 display-text">Panels</h1>
        <p>The best place for learning more not just about anime, but passion and culture as well! Interesting discussion topics will be present and available for participation at your discretion!
          Some panels will even have workshops for a hands-on experience. More panels and information coming soon!</p>
        <p className="mb-0">Interested in hosting a panel? Please view our Panelist application <a href="https://forms.gle/FmQKZ6JMe9xvr3CU8" className="highlight">here.</a> The deadline to apply is February 1st.</p>
      </Container>

      <Container fluid className="p-5 mt-4 section" id="performances">
        <h1 className="text-left mb-4 display-text">Performances and Showings</h1>
        <p>This year, performances will be hosted at the Price Center Theater. If you are a performer and are interested in performing at Animefest, please view our Performers application <a href="https://forms.gle/U5vXp6oN8YotrfzBA" className="highlight">here.</a> The deadline to apply is January 22nd.</p>
        <p className="mb-0">For this year&apos;s animated film, we will be showcasing famous Japanese film director Shinkai Makoto&apos;s &quot;Weathering With You&quot;, or Tenki no Ko.
          Following its predecessor, Kimi no Nawa, Tenki no Ko, is a modern romance film excelling in audiovisuals, emotional drama, and a picturesque perspective on climate change in Tokyo.
          After selling millions of tickets in 2019, the film won Animaton of the Year award at the 43rd annual Japan Academy Prize Ceremony as well as the Social Impact Award at the 23rd Japan Media Arts Festival.
          In other words, it&apos;s a must-see!</p>
      </Container>

      <Container fluid className="p-5 mt-4 section" id="gaming">
        <h1 className="text-left mb-4 display-text">Gaming</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="tabletop">
        <h1 className="text-left mb-4 display-text">Tabletop Games and Origami</h1>
        Coming Soon!
      </Container>

      <Container fluid className="p-5 mt-4 section" id="manga">
        <h1 className="text-left mb-4 display-text">Manga Library</h1>
        <p className="mb-0">If there&apos;s any dream of any animanga connoisseur or artist, it&apos;s to see all different kinds of physical copies of manga all in one place!
          Whether it be light novels or manga you have or have not seen before, we will be showcasing a modest collection for anyone interested themselves.
          Seeing manga in its authentic book form will be an unforgettable bucket-list experience!</p>
      </Container>
    </>
  )
}
