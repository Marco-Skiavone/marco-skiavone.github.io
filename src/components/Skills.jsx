import {Col, Container, Image, Row} from "react-bootstrap";
import {Virtual, Autoplay, Pagination, FreeMode} from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import {createScope, createDraggable, createSpring, animate} from "animejs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const skills1 = [
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/react/react-original.svg",
        description: "React" , size: "6.7rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/bootstrap/bootstrap-original.svg",
        description: "Bootstrap" , size: "7rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/c/c-line.svg",
        description: "C" , size: "6.1rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/cplusplus/cplusplus-original.svg",
        description: "C++" , size: "4.8rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg",
        description: "CSS3" , size: "3.9rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/figma/figma-original.svg",
        description: "Figma" , size: "3.5rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg",
        description: "HTML5" , size: "3.8rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/java/java-original-wordmark.svg",
        description: "Java" , size: "9.8rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg",
        description: "Node.js" , size: "3.7rem" , radius: false, sizeLock: false }
];
const skills2 = [
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
        description: "JavaScript" , size: "7rem" , radius: true, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/jupyter/jupyter-original-wordmark.svg",
        description: "Jupyter" , size: "3.3rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mongodb/mongodb-original-wordmark.svg",
        description: "MongoDB" , size: "5.9rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/pandas/pandas-original.svg",
        description: "Pandas" , size: "3.9rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postgresql/postgresql-original.svg",
        description: "PostgreSQL" , size: "3.4rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/python/python-original.svg",
        description: "Python" , size: "3.7rem" , radius: false, sizeLock: false },
    { image: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/spring/spring-original-wordmark.svg",
        description: "Spring" , size: "4.2rem" , radius: false, sizeLock: false }
];
import SkillCard from "./SkillCard.jsx";
import CV from "./CV.jsx";
import skills from '../utils/MyUtils.ts';

/** It plays the quack sound and print a quack text with a volume icon
 * @param elem - The DOM quacker element to animate */
const getQuack = (elem) => {
    new Audio('/audio/Duck.mp3').play().catch(err => {console.error(err)})
    if (elem && elem.target)
        elem.target.style.animation = 'pulse-click 1.5s ease-in-out infinite !important';
}

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const rootRef = useRef(null);
    const scopeRef = useRef(null);
    useEffect(() => {
        scopeRef.current = createScope({ root: rootRef }).add(() => {
            document.querySelectorAll(".draggableSkill").forEach((el) => {
                createDraggable(el, {
                    container: [0, 0, 0, 0],
                    containerFriction: 0.5,
                    releaseContainerFriction: 0,
                    releaseEase: createSpring({stiffness: 120, damping: 6}),
                    onGrab: () => {
                        animate(el, { scale: 0.8, duration: 350, ease: "out(3)" });
                    },
                    onRelease: () => {
                        animate(el, { scale: 1, duration: 350, ease: "out(3)" })
                    }
                });
                el.addEventListener("pointerenter", () => {
                    if (!el.grabbed)
                        animate(el, { scale: 1.15, duration: 350, ease: "out(3)" });
                });
                el.addEventListener("pointerleave", () => {
                    if (!el.grabbed)
                        animate(el, { scale: 1, duration: 350, ease: "out(3)" });
                });
            });
        });
        return () => {  // Cleanup on unmount
            scopeRef.current.revert();
        };
    }, []);

    return (
            <section ref={rootRef} id='skills' className="p-0 py-3 pb-5 bg-grey3">
                <Container fluid className={'skillSwiper m-0'}>
                    <div className="position-relative d-flex flex-column align-items-center mb-4">
                        <Image src={"/images/mask_Avatar.png"} alt="Avatar" draggable={false} className={"img d-block"}/>
                        <Image id="quacker1" src={"/images/rubber_duck_2.svg"} alt="Duck Image" draggable={false} className="img position-absolute" onClick={getQuack.bind(document.getElementById('quacker1'))}
                               style={{ "bottom": "-2rem", "right": "0" }}/>
                    </div>
                    <h2 className="h2 text-center text-light mb-2 py-2">Skills</h2>
                    <Swiper modules={[Virtual, Autoplay, Pagination, FreeMode]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 5
                                },
                                990: {
                                    slidesPerView: 5,
                                    spaceBetween: 10
                                }
                            }}
                            spaceBetween={8} slidesPerView={3}
                            centeredSlides={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop={true} pagination={{dynamicBullets: true}} freeMode={'sticky'} slideToClickedSlide={true}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            className={'py-5'}>
                        {skills1.concat(skills2).map((skill, index) => (
                            <SwiperSlide key={index} index={index} className={'d-flex justify-content-center'}
                                         style={{transform: `scale(${index === activeIndex ? 1.5 : 0.7})`, transition: 'transform 0.5s ease' }}>
                                <SkillCard {...skill} sizeLock={'true'} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <CV />
                </Container>

                <Row className='skillSpread m-0 p-0'>
                    <Col className='position-relative spread-col1'>
                        <div className={"draggableSkill"}><SkillCard {...(skills1[1])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills1[7])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills1[8])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills1[4])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills1[3])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills1[5])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills1[6])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills1[2])} /></div>
                    </Col>
                    <Col md={3} className="position-relative d-flex flex-column justify-content-center align-items-center p-0 mb-4 mb-xl-0 mx-auto">
                        <Image id='AvatarImg' src={"/images/mask_Avatar.png"} alt="Avatar" draggable={false} className={"img"}/>
                        <Image id="quacker2" src={"/images/rubber_duck_2.svg"} alt="Duck Image" draggable={false} className="img position-absolute" onClick={getQuack.bind(document.getElementById('quacker2'))}
                               style={{ "bottom": "2rem", "right": "-2rem" }}/>
                        <CV />
                    </Col>
                    <Col className='position-relative spread-col2'>
                        <div className={"draggableSkill"}><SkillCard {...(skills1[0])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills2[0])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills2[1])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills2[2])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills2[3])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills2[4])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills2[5])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills2[6])} /></div>
                    </Col>
                </Row>
            </section>
        );
};

export default Skills;
