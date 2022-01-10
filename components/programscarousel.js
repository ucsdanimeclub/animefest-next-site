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
          <p>From Cosplay Masquerade to dance and music performances, all of our main events are held on the Main Stage!</p>
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
          src="images/theater.png"
          alt="Theater slide"
        />

        <Carousel.Caption>
          <h4>Theater</h4>
          <p>Movie showings and performances will be held in the Price Center Theater.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <MyImage
          className="d-block w-100"
          src="images/cosplay_masquerade.png"
          alt="Cosplay Masquerade slide"
        />

        <Carousel.Caption>
          <h4>Cosplay Masquerade</h4>
          <p>Register for the Cosplay Masquerade Contest for the chance at some sweet prizes, and vote for the winners here.</p>
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
          <p>We have both video games and table top games available to play throughout the day as well as tournaments with prizes!</p>
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
