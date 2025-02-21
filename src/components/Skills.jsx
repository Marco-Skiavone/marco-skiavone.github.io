import { Container, Image } from "react-bootstrap";
import { useRef } from "react";
import SkillCard from "./SkillCard.jsx";

let skills = [
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/bootstrap/bootstrap-original.svg", description: "Bootstrap" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/c/c-line.svg", description: "C" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/cplusplus/cplusplus-original.svg", description: "C++" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg", description: "CSS3" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/figma/figma-original.svg", description: "Figma" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg", description: "HTML5" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/java/java-original-wordmark.svg", description: "Java" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg", description: "JavaScript" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/jupyter/jupyter-original-wordmark.svg", description: "Jupyter" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mongodb/mongodb-original-wordmark.svg", description: "MongoDB" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/pandas/pandas-original.svg", description: "Pandas" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postgresql/postgresql-original-wordmark.svg", description: "PostgreSQL" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/python/python-original-wordmark.svg", description: "Python" },
    { image: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/spring/spring-original-wordmark.svg", description: "Spring" }
];

/** Randomize for width and height! */
const randomizer = (index) => Math.floor(Math.random() * 3) + index;


const Skills = () => {
    let containerRef = useRef(null);

    const getRandomPosition = (size) => {
        const height = (containerRef.current) ? containerRef.current.getBoundingClientRect().height : innerHeight / 3;
        const width = (containerRef.current) ? containerRef.current.getBoundingClientRect().width : innerWidth;
        return {
            top: (Math.floor(Math.random() * (height - size))) + "px",
            left: (Math.floor(Math.random() * (width - size))) + "px"
        };
    };

    /** Randomize position and size of the skill balls! */
    function generatePosition() {
        return skills.map((skill, i) => {
            skill.size = randomizer(i)
            skill.position = getRandomPosition(skill.size)
        })
    }

    generatePosition();

    console.log(skills);
    console.log(containerRef);

    return (
        <section id="skills" className="py-5 bg-grey3">
            <Container fluid ref={containerRef} className="position-relative py-5" style={{ minHeight: "400px" }}>
                <Image src={"src/assets/images/mask_Avatar.png"} alt="Avatar" className="img position-absolute" style={{ top: "50%" , left: "50%" , transform: "translate(-50%, -50%)" }} />
                {skills.map((skill, index) => (
                    <SkillCard {...skill} key={index}/>
                ))}
            </Container>
        </section>
    );
};

export default Skills;
