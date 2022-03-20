import { Col, Row } from 'react-bootstrap'
import Sponsors from "../data/sponsors.json"
import MyImage from "./myimage"


export default function Sponsor() {
  return (
    <Row className="mx-4 mb-4 gy-4 justify-content-center">
      {Sponsors['sponsors'].map((sponsor, index) => (
        <Col xs={12} sm={6} md={3} key={index}>
          <a href={sponsor['url']}>
            <MyImage
              className="mw-100 bg-light rounded border-stroke"
              src={sponsor['image']}
              alt={sponsor['name']}
            />
          </a>
        </Col>
      ))}
    </Row>
  )
}
