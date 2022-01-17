import { Container } from 'react-bootstrap'
import MyImage from "../components/myimage"


export default function Manga() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">MANGA LIBRARY</h1>
      </Container>

      <Container fluid className="p-5 section">
        <h4 className="text-left mb-4 display-text">ABOUT</h4>
        <p>The Manga Library will be at the Roger Revelle Room in Price Center.</p>
        <p>If there&apos;s any dream of any animanga connoisseur or artist, it&apos;s to see all different kinds of physical copies of manga all in one place!
          Whether it be light novels or manga you have or have not seen before, we will be showcasing a modest collection for anyone interested themselves.
          Seeing manga in its authentic book form will be an unforgettable bucket-list experience!</p>
        <MyImage src="images/manga_library_program.jpg" alt="Manga Library photo" className="mt-4 mw-100 border-stroke mx-auto d-block" />
      </Container>
    </>
  )
}
