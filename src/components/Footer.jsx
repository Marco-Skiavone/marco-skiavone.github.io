import { Container } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="contacts" className="bg-dark text-light text-center py-4">
            <Container>
                <span className="h2 text-center my-2">My Contacts</span>
                <div className="my-3">
                    <a href={"#"}><FaEnvelope size={45} className="mx-4" /></a>
                    <a href={"https://github.com/Marco-Skiavone"}><FaGithub size={45} className="mx-4" /></a>
                    <a href={"#"}><FaLinkedin size={45} className="mx-4" /></a>
                </div>
                <p className="m-0">
                    This website has been made by myself.
                </p>
                <p className="m-0">
                    My logo was designed by <a href="#" className="text-decoration-underline">Alessia Baronetto</a>.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
