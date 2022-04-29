import { Carousel } from "react-bootstrap"
import MyImage from "../myimage"


export default function ProgramsCarousel({data, centered = true, ...otherProps}) {
  let {className, ...otherPropsWithoutClassName} = otherProps
  let classes = "carousel border-stroke caption-text glow-text"
  if (centered) {
    classes = classes + " mx-auto"
  }
  if (className) {
    classes = classes + " " + className
  }
  return (
    <Carousel className={classes} {...otherPropsWithoutClassName}>
      {data.map((program, index) => (
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
