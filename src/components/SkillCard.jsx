import {Card , OverlayTrigger, Tooltip} from "react-bootstrap";
import '../styles/SkillCard.css';

const SkillCard = ({ image, description, size , radius , sizeLock }) => {
    return (
        <OverlayTrigger placement="auto" delay={{ show: 100, hide: 200 }} overlay={<Tooltip>{description}</Tooltip>}>
            <Card className="shadow-sm ratio ratio-1x1 border-0 skill-card"
                  style={{ width: (sizeLock) ? '4rem' : size , height: (sizeLock) ? '4rem' : size }}>
                <Card.Img src={image} draggable={false} alt={description} className={(radius ? "p-0" : "p-1")} style={{ borderRadius : (radius ? "inherit" : "0") }}></Card.Img>
            </Card>
        </OverlayTrigger>
    );
};

export default SkillCard;
