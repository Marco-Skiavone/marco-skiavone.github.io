import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const projects = [
    { title: "FastFlow Schedule Management", description: "My Thesis Topic: Thread Scheduling (in Linux)", image: "/images/projects/fastflow.webp", link: "https://github.com/Marco-Skiavone/fastflow", when: 2025 },
    { title: "Software App Development", description: "Application Design & Iterative Development Strategies", image: "/images/projects/sas.webp", link: "#", when: 2025 },
    { title: "Web Development", description: "Use of routing technologies with: JS, Bootstrap, Express (node.js)...", image: "/images/projects/tweb.webp", link: "#", when: 2024 },
    { title: "Thread Programming", description: "Threaded Mailing List Management (Java)", image: "/images/projects/threads.webp", link: "#", when: 2024 },
    { title: "Data Analisys", description: "Overview of Pandas, Seaborn & other tools", image: "https://via.placeholder.com/300", link: "#", when: 2024 },
    { title: "Algorithm Studies", description: "Algorithms, Complexity & Data Structures Overview", image: "https://via.placeholder.com/300", link: "#", when: 2023 },
    // { title: "title", description: "desc", image: "https://via.placeholder.com/300", link: "#", when: 2024 }
];

const ProjectList = () => {
    return (
        <section id="projects" className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-4">Projects</h2>
                <Row>
                    {projects.map((project, index) => (
                        <Col key={index} className="col-1 col-sm-2 col-md-4 mb-4">
                            <ProjectCard {...project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ProjectList;
