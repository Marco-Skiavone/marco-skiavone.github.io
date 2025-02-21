import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid className="bg-gray-3">
                <Navbar.Brand href="#">
                    <img src="src/assets/logo.svg" alt="logo" className="img me-4"/>
                    <span className="h4 text-center">Marco Schiavone</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
