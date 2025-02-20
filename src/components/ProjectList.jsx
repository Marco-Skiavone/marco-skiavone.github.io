import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const projects = [
    { title: "FastFlow Schedule Management", description: "Thesis Job", image: "https://via.placeholder.com/300", link: "#", when: 2025 },
    { title: "Software App Development", description: "Description of project 1", image: "src/assets/sas.webp", link: "#", when: 2025 },
    { title: "Web Development", description: "Description of project 2", image: "src/assets/tweb.webp", link: "#", when: 2024 },
    { title: "Thread Programming", description: "Description of project 3", image: "https://via.placeholder.com/300", link: "#", when: 2024 }
];

const ProjectList = () => {
    return (
        <section id="projects" className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-4">Projects</h2>
                <Row>
                    {projects.map((project, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <ProjectCard {...project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ProjectList;
