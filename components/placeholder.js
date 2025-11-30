import { Col, Container, Row } from 'react-bootstrap'
import MyImage from "../components/myimage"

export default function Placeholder() {
  return (
      <Container fluid className="text-center p-0 mb-4">
          <div className="landing w-100 d-flex flex-column justify-content-center align-items-center"
                  style={{
                      backgroundImage: "url('images/AF26_Website_Banner_Flowers.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      minHeight: "100vh"
                  }}>
              <Row className="align-items-center justify-content-center w-100 h-75 g-0 glow-text d-flex flex-column">
                  <Col xs={12} sm={10} md={8} lg={6} xl={5} className="text-center" >
                      <MyImage src="images/AF26_logo.png" className="w-100 mb-3 img-fluid" alt="Animefest 2026 logo"/>
                      <div className="text-light">
                          <div className="d-inline-flex flex-column bg-translucent p-3 rounded"
                              style={{
                                  maxWidth: "90%",
                                  width: "fit-content",
                                  wordWrap: "break-word",
                                  overflowWrap: "break-word",
                                  whiteSpace: "normal"
                              }}>
                              <h4>February 14, 2026 at UC San Diego&apos;s Price Center</h4>
                              <h5>11:00 AM to 8:00 PM</h5>
                              <h5>FREE Admission for UCSD affiliates. $5 General Entry</h5>
                          </div>
                      </div>
                  </Col>
              </Row>
          </div>
      </Container>
  )
}