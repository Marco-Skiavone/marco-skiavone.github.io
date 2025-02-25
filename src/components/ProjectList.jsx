import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const projects = [
    { title: "FastFlow Schedule Management", description: "My Thesis Topic: Thread Scheduling (in Linux)", image: "/images/projects/fastflow.webp", link: "https://github.com/Marco-Skiavone/fastflow", when: 2025 },
    { title: "Software App Development", description: "Application Design & Iterative Development Strategies", image: "/images/projects/sas.webp", link: "#", when: 2025 },
    { title: "Web Development", description: "Use of routing technologies with: JS, Bootstrap, Express (node.js)...", image: "/images/projects/tweb.webp", link: "#", when: 2024 },
    { title: "Thread Programming", description: "Threaded Mailing List Management (Java)", image: "https://via.placeholder.com/300", link: "#", when: 2024 }
    // { title: "title", description: "desc", image: "https://via.placeholder.com/300", link: "#", when: 2024 }
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
