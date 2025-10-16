import { Col, Container, Row } from 'react-bootstrap'

export default function Placeholder() {
  return (
    <Container fluid className="text-center p-0">
      <div className="landing w-100 d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "100vh"
        }}>
        <Row className="align-items-center justify-content-center w-100 h-75 g-0 glow-text d-flex flex-column">
          <Col xs={12} sm={10} md={8} lg={6} xl={5} className="text-center" >
            <div className="text-light">
              <div className="d-inline-flex flex-column bg-translucent p-3 rounded">
                <h4>Animefest 2026 is coming soon!</h4>
                <h5>Check back later for updates.</h5>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}