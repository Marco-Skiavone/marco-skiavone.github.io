import { Card, Tooltip } from "react-bootstrap";
import './SkillCard.css'

const SkillCard = ({ image, description, size, position }) => {
    return (
        <Card className="shadow-sm position-absolute border-0 skill-card" data-bs-toggle="tooltip"
              style={{ width: size , height: size , top: position.top , left: position.left , borderRadius: size }}>
            <Card.Img src={image} className="img"></Card.Img>
            <Tooltip >{description}</Tooltip>
        </Card>
    );
};


export default SkillCard;
