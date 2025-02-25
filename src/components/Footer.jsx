import { Container } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="contacts" className="bg-dark text-light text-center py-4">
            <Container>
                <span className="h2 text-center my-2">My Contacts</span>
                <div className="my-3">
                    <FaEnvelope size={40} className="mx-4" />
                    <FaGithub size={40} className="mx-4" />
                    <FaLinkedin size={40} className="mx-4" />
                </div>
                <p className="m-0">
                    This website has been made by myself.
                </p>
                <p className="m-0">
                    My logo was designed by <a href="#" className="text-decoration-underline text-light">Alessia Baronetto</a>.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
