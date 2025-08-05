import { Container } from "react-bootstrap";
import { BsTelegram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <footer id="contacts" className="bg-dark text-light text-center py-5">
            <Container>
                <span className="h2 text-center my-2">My Contacts</span>
                <div className="my-3">
                    <a target={'_blank'} href={"https://www.t.me/Merk_Skia"}><BsTelegram size={45} className="mx-4" /></a>
                    <a target={'_blank'} href={"https://github.com/Marco-Skiavone"}><BsGithub size={45} className="mx-4" /></a>
                    <a target={'_blank'} href={"https://www.linkedin.com/in/marco-schiavone-587b3b203/"}><BsLinkedin size={45} className="mx-4" /></a>
                </div>
                <p className="m-0 mt-4">
                    This website has been made by myself.
                </p>
                <p className="m-0 pb-2">
                    My logo was designed by <a target={'_blank'} href="https://alessiabaronetto.myportfolio.com" className="text-decoration-underline">Alessia Baronetto</a>.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
