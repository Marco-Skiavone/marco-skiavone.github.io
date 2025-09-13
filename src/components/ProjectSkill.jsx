import { Card } from "react-bootstrap";
import { skills } from '../utils/MyUtils.ts';
import "../styles/ProjectCard.css";


// Creating a dictionary
const mappedSkills = skills.reduce((acc, skill) => {
    acc[skill.description] = skill;
    return acc;
});

/**
 * @param title { String } the "description" of the skill
 * @returns {JSX.Element} The mini-card of the skill */
const ProjectSkill = ( title ) => {
    title = title[0]
    if (title.startsWith("ETC"))
        return (
            <Card className="projectSkill ratio ratio-1x1 me-2 border-0 overflow-hidden object-fit-cover rounded-5"
                  style={{ width: '2rem' , height: '2rem', boxSizing: 'border-box', display: 'none !important', background: '#dcdcdc'}}>
                <Card.Title draggable={false} alt={title} className="text-center fs-6 p-lg-1" style={{borderRadius: "inherit"}}>
                    <span className={'fs-6'}>{title.slice(3)}</span>
                </Card.Title>
            </Card>
        );
    else
        return (
            <Card className="projectSkill ratio ratio-1x1 me-2 border-0 overflow-hidden object-fit-cover rounded-5"
                  style={{ width: '2rem' , height: '2rem', boxSizing: 'border-box', display: 'none !important'}}>
                <Card.Img src={mappedSkills[title].image} draggable={false} alt={title} className={(mappedSkills[title].radius ? "p-0" : "p-1")}
                          style={{ borderRadius : (mappedSkills[title].radius ? "inherit" : "0") }}></Card.Img>
            </Card>
        );
};

export default ProjectSkill;
