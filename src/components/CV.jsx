import {Container, Button} from "react-bootstrap";
import {BsFiletypePdf} from "react-icons/bs";
import "./CV.css";

const CV = () => {
    return (
        <section id="cv" className='my-2 mt-5'>
            <Container fluid>
                <Button id='CVButton' variant={'light'} target={'_blank'} className='p-2 px-4 rounded-4 text-dark d-block mx-auto'
                        href={'https://www.canva.com/design/DAGhuDkr4B0/DtH-WcY7FzdpK9KnIM8Ekw/view?utm_content=DAGhuDkr4B0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf2b52cf1d9'}>
                    Get My CV <BsFiletypePdf className='mb-1'/></Button>
            </Container>
        </section>
    );
};

export default CV;
