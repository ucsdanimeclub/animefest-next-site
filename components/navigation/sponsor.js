import { Col, Row } from 'react-bootstrap'
import Sponsors from "../../data/sponsors.json"
import MyImage from "../myimage"


export default function Sponsor({centered = true,...otherProps}) {
  let {className, ...otherPropsWithoutClassName} = otherProps
  let classes = "mx-4 mb-4 gy-4"
  if (centered) {
    classes = classes + " justify-content-center"
  }
  if (className) {
    classes = classes + " " + className
  }
  return (
    <Row className={classes} {...otherPropsWithoutClassName}>
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
