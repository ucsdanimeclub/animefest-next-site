import { Container, ListGroup } from "react-bootstrap"
import Socials from "../../data/socials.json"
import MyImage from "../myimage"


export default function Social({ children, height = 50, centered = true, ...otherProps }) {
    let {className, ...otherPropsWithoutClassName} = otherProps
    let classes = "p-4"
    let listClasses = "mb-2"
    if (centered) {
        classes = classes + " text-center"
        listClasses = listClasses + " justify-content-center"
    }
    if (className) {
        classes = classes + " " + className
    }
    return (
    <Container fluid className={classes} {...otherPropsWithoutClassName}>
      <ListGroup horizontal className={listClasses}>
        {Socials['socials'].map((social, index) => (
          <ListGroup.Item className="bg-transparent" key={index}>
            {
              social['url'] && <a href={social['url']}>
                <MyImage src={social['icon']} alt={social['name']} height={height} />
              </a>
            }
            {
              !social['url'] &&
              <MyImage src={social['icon']} alt={social['name']} height={height} />
            }
          </ListGroup.Item>
        ))}
      </ListGroup>
      {children}
    </Container>
  )
}
