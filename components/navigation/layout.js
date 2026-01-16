import Link from 'next/link'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Sponsor from "./sponsor"
import Sponsors from "../../data/sponsors.json"


export default function Layout({children}) {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Link href="/" passHref><Navbar.Brand className="display-text">ANIMEFEST</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav navbarScroll className="ms-auto">
                            <NavDropdown title="Home" id="basic-nav-dropdown">
                                <Link href='/' passHref><NavDropdown.Item>Home</NavDropdown.Item></Link>
                                <NavDropdown.Divider/>
                                <Link href='/#about' passHref><NavDropdown.Item>About</NavDropdown.Item></Link>
                                <Link href='/#discord' passHref><NavDropdown.Item>Discord</NavDropdown.Item></Link>
                                <Link href='/#programs' passHref><NavDropdown.Item>Programs</NavDropdown.Item></Link>
                                <Link href='/#registration' passHref><NavDropdown.Item>Registration</NavDropdown.Item></Link>
                                <Link href='/#parking' passHref><NavDropdown.Item>Parking</NavDropdown.Item></Link>
                            </NavDropdown>
                            <NavDropdown title="Programming" id="basic-nav-dropdown">
                                <NavDropdown.Header>West Ballroom</NavDropdown.Header>
                                <Link href="/exhibitor" passHref><NavDropdown.Item>Exhibitor
                                    Hall</NavDropdown.Item></Link>
                                <NavDropdown.Header>East Ballroom</NavDropdown.Header>
                                <Link href="/performances"
                                      passHref><NavDropdown.Item>Performances</NavDropdown.Item></Link>
                                <Link href="/cosplay" passHref><NavDropdown.Item>Cosplay
                                    Contest</NavDropdown.Item></Link>
                                <Link href="/raffles" passHref><NavDropdown.Item>Raffles</NavDropdown.Item></Link>
                                <NavDropdown.Header>Price Center Theater</NavDropdown.Header>
                                <Link href="/vapanel" passHref><NavDropdown.Item>VA Panel</NavDropdown.Item></Link>
                                <NavDropdown.Header>College Rooms</NavDropdown.Header>
                                <Link href="/panels" passHref><NavDropdown.Item>Panels</NavDropdown.Item></Link>
                                <Link href="/gameshows" passHref><NavDropdown.Item>Game Shows</NavDropdown.Item></Link>
                                <Link href="/manga" passHref><NavDropdown.Item>Manga Library</NavDropdown.Item></Link>
                                <NavDropdown.Header>Sun God Lounge</NavDropdown.Header>
                                <Link href="/gaming" passHref><NavDropdown.Item>Triton Fighters</NavDropdown.Item></Link>
                                <Link href="/mtg" passHref><NavDropdown.Item>Magic: The Gathering</NavDropdown.Item></Link>
                            </NavDropdown>
                            <Link href='/food' passHref><Nav.Link>Food</Nav.Link></Link>
                            <Link href='/rules' passHref><Nav.Link>Rules</Nav.Link></Link>
                            <Link href='/map_schedule' passHref><Nav.Link>Map and Schedule</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>{children}</main>
            <footer className="footer">
                <Container className="text-center">
                    <h5 className="mb-3 text-light">Sponsored By</h5>
                    <Sponsor data={Sponsors}/>
                    <p className="caption-text text-light">&copy; 2025 Anime &amp; Manga Enthusiasts at UC San Diego. All assets belong to their respective owners.</p>
                </Container>
            </footer>
        </>
    )
}
