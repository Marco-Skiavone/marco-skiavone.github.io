import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="position-sticky top-0 z-3 w-100" expand="lg">
            <Container fluid className="bg-gray-3 justify-content-center">
                <Navbar.Brand href="#">
                    <img src="/images/logo.svg" alt="logo" className="img me-4"/>
                    <span className="h4 text-center">Marco Schiavone</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
