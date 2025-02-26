import { Card, Tooltip } from "react-bootstrap";
import './SkillCard.css'

const SkillCard = ({ image, description, size , radius }) => {
    return (
        <Card className="d-flex justify-content-center align-content-center shadow-sm ratio ratio-1x1 border-0 skill-card" data-bs-toggle="tooltip"
              style={{ width: size , height: size }}>
            <Card.Img src={image} className={(radius ? "p-0" : "p-1")} style={{borderRadius : (radius ? "inherit" : "0") }}></Card.Img>
        </Card>
    );
};
// <Tooltip className="d-none" >{description}</Tooltip>


export default SkillCard;
