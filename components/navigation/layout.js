import Link from 'next/link'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
// import Sponsor from "./sponsor"
// import Sponsors from "../../data/sponsors.json"


export default function Layout({children}) {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Link href="/" passHref><Navbar.Brand className="display-text">ANIMEFEST</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav navbarScroll className="ms-auto">
                            <NavDropdown title="Home" id="basic-nav-dropdown">
                                <Link href='/' passHref><NavDropdown.Item>Home</NavDropdown.Item></Link>
                                <NavDropdown.Divider/>
                                <Link href='/#about' passHref><NavDropdown.Item>About</NavDropdown.Item></Link>
                                <Link href='/#map' passHref><NavDropdown.Item>Map and Schedule</NavDropdown.Item></Link>
                                <Link href='/#parking' passHref><NavDropdown.Item>Parking</NavDropdown.Item></Link>
                            </NavDropdown>
                            <NavDropdown title="Programming" id="basic-nav-dropdown">
                                <NavDropdown.Header>West Ballroom</NavDropdown.Header>
                                <Link href="/exhibitor" passHref><NavDropdown.Item>Exhibitor
                                    Hall</NavDropdown.Item></Link>
                                <NavDropdown.Header>East Ballroom and Muir Room</NavDropdown.Header>
                                <Link href="/performances"
                                      passHref><NavDropdown.Item>Performances</NavDropdown.Item></Link>
                                <Link href="/cosplay" passHref><NavDropdown.Item>Cosplay
                                    Contest</NavDropdown.Item></Link>
                                <Link href="/raffles" passHref><NavDropdown.Item>Raffles</NavDropdown.Item></Link>
                                <NavDropdown.Header>Price Center Theater</NavDropdown.Header>
                                <Link href="/theater" passHref><NavDropdown.Item>Movie Showing</NavDropdown.Item></Link>
                                <NavDropdown.Header>College Rooms</NavDropdown.Header>
                                <Link href="/panels" passHref><NavDropdown.Item>Panels</NavDropdown.Item></Link>
                                <Link href="/boardgames" passHref><NavDropdown.Item>Board
                                    Games</NavDropdown.Item></Link>
                                <NavDropdown.Header>Sun God Lounge</NavDropdown.Header>
                                <Link href="/gaming" passHref><NavDropdown.Item>Triton Smash</NavDropdown.Item></Link>
                                <Link href="/yugioh" passHref><NavDropdown.Item>Gamma Gamma Driver
                                    Yugioh</NavDropdown.Item></Link>
                            </NavDropdown>
                            <Link href='/food' passHref><Nav.Link>Food</Nav.Link></Link>
                            <Link href='/rules' passHref><Nav.Link>Rules</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>{children}</main>
            <footer className="footer">
                <Container className="text-center">
                    {/*<h5 className="mb-3">Sponsored By</h5>*/}
                    {/*<Sponsor data={Sponsors}/>*/}
                    <p className="caption-text">&copy; 2022 Anime &amp; Manga Enthusiasts at UC San Diego. Website
                        design by Kaitlyn Chan. All assets belong to their respective owners.</p>
                </Container>
            </footer>
        </>
    )
}
