import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <Navbar className="navbar border-bottom" expand="lg" fixed="top">
        <Container>
          <Link href="/" passHref><Navbar.Brand>ANIMEFEST</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <Link href='/#about' passHref><NavDropdown.Item>About</NavDropdown.Item></Link>
                <Link href='/#map' passHref><NavDropdown.Item>Map and Schedule</NavDropdown.Item></Link>
                <Link href='/#location' passHref><NavDropdown.Item>Location and Parking</NavDropdown.Item></Link>
                <Link href='/#sponsors' passHref><NavDropdown.Item>Sponsors</NavDropdown.Item></Link>
              </NavDropdown>
              <Link href='/food' passHref><Nav.Link>Food</Nav.Link></Link>
              <NavDropdown title="Programming" id="basic-nav-dropdown">
                <Link href="/programming#main" passHref><NavDropdown.Item>Main Stage</NavDropdown.Item></Link>
                <Link href="/programming#artist" passHref><NavDropdown.Item>Artist Alley</NavDropdown.Item></Link>
                <Link href="/programming#vendors" passHref><NavDropdown.Item>Vendors</NavDropdown.Item></Link>
                <Link href="/programming#panels" passHref><NavDropdown.Item>Panels</NavDropdown.Item></Link>
                <Link href="/programming#cosplay" passHref><NavDropdown.Item>Cosplay Masquerade</NavDropdown.Item></Link>
                <Link href="/programming#gaming" passHref><NavDropdown.Item>Gaming</NavDropdown.Item></Link>
                <Link href="/programming#showings" passHref><NavDropdown.Item>Showings</NavDropdown.Item></Link>
                <Link href="/programming#manga" passHref><NavDropdown.Item>Manga Library</NavDropdown.Item></Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="mt-0 mb-0 navbar"/>
      <main>{children}</main>
      <footer className="footer">
        © 2022 Cal Animage Beta. All assets belong to their respective owners.
      </footer>
    </>
  )
}