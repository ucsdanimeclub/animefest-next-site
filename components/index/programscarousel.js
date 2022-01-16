import { Carousel } from "react-bootstrap"
import Programs from "../../data/programs.json"
import MyImage from "../myimage"


export default function ProgramsCarousel() {
  return (
    <Carousel className="carousel mt-5 mx-auto border-stroke caption-text glow-text">
      {Programs['programs'].map((program, index) => (
        <Carousel.Item key={index}>
          <MyImage
            className="d-block w-100"
            src={program['image']}
            alt={program['name']}
          />
          <Carousel.Caption>
            <h4>{program['name']}</h4>
            <p>{program['description']}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
