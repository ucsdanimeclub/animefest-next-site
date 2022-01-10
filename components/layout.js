import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import { useState } from 'react'
import { Toast } from 'react-bootstrap'

export default function Layout({ children }) {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
    <>
      {/* Sticky top is not good for legacy, consider fixing the position instead (but that comes with covering up the page) */}
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Link href="/" passHref><Navbar.Brand className="display-text">ANIMEFEST</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <Link href='/' passHref><NavDropdown.Item>Home</NavDropdown.Item></Link>
                <NavDropdown.Divider />
                <Link href='/#about' passHref><NavDropdown.Item>About</NavDropdown.Item></Link>
                <Link href='/#map' passHref><NavDropdown.Item>Map and Schedule</NavDropdown.Item></Link>
                <Link href='/#location' passHref><NavDropdown.Item>Location and Parking</NavDropdown.Item></Link>
                {/* <Link href='/#sponsors' passHref><NavDropdown.Item>Sponsors</NavDropdown.Item></Link> */}
              </NavDropdown>
              <NavDropdown title="Programming" id="basic-nav-dropdown">
                <Link href='/programming' passHref><NavDropdown.Item>Programming</NavDropdown.Item></Link>
                <NavDropdown.Divider />
                <Link href="/programming#main" passHref><NavDropdown.Item>Main Stage</NavDropdown.Item></Link>
                <Link href="/programming#exhibitor" passHref><NavDropdown.Item>Exhibitor Hall</NavDropdown.Item></Link>
                <Link href="/programming#panels" passHref><NavDropdown.Item>Panels</NavDropdown.Item></Link>
                <Link href="/programming#cosplay" passHref><NavDropdown.Item>Cosplay Masquerade</NavDropdown.Item></Link>
                <Link href="/programming#gaming" passHref><NavDropdown.Item>Gaming</NavDropdown.Item></Link>
                <Link href="/programming#theater" passHref><NavDropdown.Item>Theater</NavDropdown.Item></Link>
                <Link href="/programming#tabletop" passHref><NavDropdown.Item>Tabletop Games and Origami</NavDropdown.Item></Link>
                <Link href="/programming#manga" passHref><NavDropdown.Item>Manga Library</NavDropdown.Item></Link>
              </NavDropdown>
              <Link href='/food' passHref><Nav.Link>Food</Nav.Link></Link>
              <Link href='/rules' passHref><Nav.Link>Rules</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Toast show={showA} onClose={toggleShowA} className="position-absolute w-100 text-center" >
        <Toast.Header>
          <strong className="me-auto">Welcome to Animefest!</strong>
        </Toast.Header>
        <Toast.Body className="text-dark">UCSD students and staff must show a green thumb to attend the convention. All other attendees must show a proof of vaccination or
           a negative COVID-19 test result received within the last 24 hours. Please read our rules for more information.</Toast.Body>
      </Toast>
      <main>{children}</main>
      <footer className="footer caption-text">
        <Container fluid className="text-center">
          &copy; 2022 Cal Animage Beta. All assets belong to their respective owners.
        </Container>
      </footer>
    </>
  )
}
