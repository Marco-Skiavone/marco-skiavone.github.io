import { Card, Tooltip } from "react-bootstrap";
import './SkillCard.css'

const SkillCard = ({ image, description, size, top, left }) => {
    return (
        <Card className="shadow-sm ratio ratio-1x1 position-absolute border-0 skill-card m-1 card" data-bs-toggle="tooltip"
              style={{ width: size , height: size , top: top , left: left , borderRadius: size }}>
            <Card.Img src={image} className="img"></Card.Img>
            <Tooltip >{description}</Tooltip>
        </Card>
    );
};


export default SkillCard;
