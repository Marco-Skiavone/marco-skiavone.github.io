import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
    { title: "FastFlow Schedule Management", description: "My Thesis Topic: Real-Time Linux Scheduling for FastFlow library (threads parallelism)", image: "/images/projects/fastflow.webp", link: "https://github.com/Marco-Skiavone/fastflow", when: 2025, array: 'C++ C' },
    { title: "Software App Development", description: "Application Design & Iterative Development Strategies", image: "/images/projects/sas.webp", link: "https://github.com/Marco-Skiavone/Catering-implementation", when: 2025, array: 'Java' },
    { title: "Web Development", description: "Use of routing technologies with: JS, Bootstrap, Express (node.js)...", image: "/images/projects/tweb.webp", link: "https://github.com/IvanLusso/LussoSchiavoneStefanettiIUM-Tweb", when: 2024, array: 'Spring MongoDB PostgreSQL ETC+4' },
    { title: "Thread Programming", description: "Threaded Mailing List Management (in Java + JavaFX)", image: "/images/projects/threads.webp", link: "https://github.com/Marco-Skiavone/Programming-3-Project", when: 2024, array: 'Java' },
    { title: "Data Analisys", description: "Overview of Pandas, Seaborn & other tools", image: "/images/projects/data_an.webp", link: "https://github.com/Marco-Skiavone/ium_dataset_processor", when: 2024, array: 'Python Pandas Jupyter ETC+2' },
    { title: "Algorithm Studies", description: "Algorithms, Complexity & Data Structures Overview", image: "/images/projects/algo.png", link: "https://github.com/Marco-Skiavone/Algoritmi_e_Strutture_Dati", when: 2023, array: 'C Java' },
    // { title: "HMI Figma Project", description: "desc", image: "https://via.placeholder.com/300", link: "#", when: 2024, array: 'Figma' }
    // { title: "title", description: "desc", image: "https://via.placeholder.com/300", link: "#", when: 2024, array: '' }
];

const ProjectList = () => {
    return (
        <section id="projects" className="px-sm-0 px-0 py-5 bg-light">
            <Container>
                <h2 className="h2 text-center mb-4">Projects</h2>
                <Row>
                    {projects.map((project, index) => (
                        <Col key={index} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
                            <ProjectCard {...project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ProjectList;
