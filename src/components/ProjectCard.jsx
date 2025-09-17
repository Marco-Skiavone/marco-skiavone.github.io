import { Card, Button } from "react-bootstrap";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";
import ProjectSkill from "./ProjectSkill.jsx";
import '../styles/ProjectCard.css'

const ProjectCard = ({ title, description, image, link, when, array}) => {
    const rootRef = useRef(null);
    const scopeRef = useRef(null);
    useEffect(() => {
        scopeRef.current = createScope({ root: rootRef }).add(() => {
            if (window.matchMedia("(hover: hover)")) {
                document.querySelectorAll(".project-card").forEach((el) => {
                    el.addEventListener("pointerenter", () => {
                        const skills = rootRef.current.querySelectorAll(".projectSkill");
                        Array.from(skills).filter(sk => el.contains(sk)).forEach((elem, key) => {
                            elem.style.display = "flex";
                            animate(elem, {
                                translateX: '-200%', // adjust offset if you want
                                rotate: 360,
                                opacity: 1,
                                duration: 600,
                                easing: "ease-in-out",
                            });
                        });
                    })

                    el.addEventListener("pointerleave", () => {
                        const skills = rootRef.current.querySelectorAll(".projectSkill");
                        Array.from(skills).filter(sk => el.contains(sk)).forEach((elem, key) => {
                            animate(elem, {
                                translateX: '-800%', // adjust offset if you want
                                rotate: 0,
                                opacity: 0,
                                duration: 600,
                                easing: "ease-in-out",
                                onComplete: () => {
                                    elem.style.display = "none";
                                    elem.style.transform = "translateX(0)";
                                }
                            });
                        });
                    })
                })
            }
        })
        return () => {  // Cleanup on unmount
            scopeRef.current.revert();
        };
    });

    const skillsArr = array.split(" ");
    return (
        <Card ref={rootRef} id={title.slice(0, 3) + "ID"} className="d-flex shadow-sm text-light border-0 ratio ratio-16x9 image-bg project-card" style={{
            backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
            <div style={{ backgroundImage: 'linear-gradient(0.40turn, #111111, rgba(17, 17, 17, 0.15))', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: 'inherit'}}>
                <Card.Body className="d-flex h-100 flex-column justify-content-between">
                    <div className="overflow-hidden">
                        <Card.Title className="fw-bold fs-3">{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </div>
                    <div className="d-flex w-100 justify-content-start">
                        <Button variant="light" className="d-flex" href={link} target="_blank" style={{ width: '112px !important' }}>
                            <span>See Repo <BsBoxArrowUpRight className="ms-1 text-center align-text-top" style={{fontSize: "0.7rem"}}/></span>
                        </Button>
                        <div className="d-flex align-items-center flex-fill justify-content-end pe-4 pe-md-2">
                            {skillsArr.map((el, key) => <ProjectSkill key={key} {...Array(el)} />)}
                        </div>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
};

export default ProjectCard;
