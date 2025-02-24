import { Card, Tooltip } from "react-bootstrap";
import './SkillCard.css'

const SkillCard = ({ image, description, size, position }) => {
    return (
        <Card className="d-flex justify-content-center align-content-center shadow-sm ratio ratio-1x1 position-absolute border-0 skill-card" data-bs-toggle="tooltip"
              style={{ width: size + "rem" , height: size + "rem" , top: position.top , left: position.left }}>
            <Card.Img src={image} className="img p-1"></Card.Img>
            <Tooltip >{description}</Tooltip>
        </Card>
    );
};


export default SkillCard;
