import { Card, Button } from "react-bootstrap";
import './ProjectCard.css'

const ProjectCard = ({ title, description, image, link, when }) => {
    return (
        <Card className="d-flex shadow-sm text-light ratio ratio-16x9 image-bg" style={{backgroundImage: `url(${image})`}}>
            <div style={{ backgroundImage: `linear-gradient(0.40turn, #333333, transparent)` }}>
                <Card.Body className="d-flex h-100 flex-column justify-content-between">
                    <div>
                        <Card.Title className="fw-bold fs-3">{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                        <Button variant="light" className="w-25" href={link} target="_blank">See Repo</Button>
                        <span className="fs-5 text-center">{when}</span>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
};

export default ProjectCard;
