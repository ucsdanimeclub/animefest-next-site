import { Carousel } from "react-bootstrap"
import MyImage from "./myimage"


export default function ProgramsCarousel() {
  return (
    <Carousel className="carousel mt-5 mx-auto border-stroke caption-text glow-text">
      <Carousel.Item>
        <MyImage
          className="d-block w-100"
          src="images/main_stage.png"
          alt="Main Stage slide"
        />
        <Carousel.Caption>
          <h4>Main Stage</h4>
          <p>Our annual Cosplay Masquerade and raffles are held on the Main Stage in West Ballroom.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MyImage
          className="d-block w-100"
          src="images/exhibitor_hall.png"
          alt="Exhibitor Hall slide"
        />

        <Carousel.Caption>
          <h4>Exhibitor Hall</h4>
          <p>Browse fanmade merchandise drawn or designed by local artists in the Artist Alley, or check out items sold by industry vendors.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MyImage
          className="d-block w-100"
          src="images/panels.png"
          alt="Panels slide"
        />

        <Carousel.Caption>
          <h4>Panels</h4>
          <p>We have informational and interactive panels for your enjoyment run by students, alumni, and professionals. Check them out!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <MyImage
          className="d-block w-100"
          src="images/showings.png"
          alt="Performances and Showings slide"
        />

        <Carousel.Caption>
          <h4>Performances and Showings</h4>
          <p>Performances and movie showings will be held in the Price Center Theater.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <MyImage
          className="d-block w-100"
          src="images/gaming.png"
          alt="Gaming slide"
        />

        <Carousel.Caption>
          <h4>Gaming</h4>
          <p>We are hosting a Super Smash Bros Ultimate tournament with prizes, brought to you by Triton Smash!</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <MyImage
          className="d-block w-100"
          src="images/tabletop.png"
          alt="Tabletop slide" />

        <Carousel.Caption>
          <h4>Tabletop Games and Origami</h4>
          <p>Have fun with activities hosted by the Board Game and Origami Folders clubs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <MyImage
          className="d-block w-100"
          src="images/manga_library.png"
          alt="Manga Library slide"
        />

        <Carousel.Caption>
          <h4>Manga Library</h4>
          <p>Relax and check out a book from Cal Animage Beta&apos;s library of donated manga.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
