import { Container, ListGroup } from "react-bootstrap"
import Socials from "../../data/socials.json"
import MyImage from "../myimage"


export default function Social({ children, height = 50 }) {
  return (
    <Container fluid className="p-4 text-center">
      <ListGroup horizontal className="justify-content-center mb-2">
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
