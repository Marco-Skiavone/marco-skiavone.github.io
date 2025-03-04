import {Col, Container, Image, Row} from "react-bootstrap";
import { useState } from "react";
import SkillCard from "./SkillCard.jsx";
import {Virtual,  Autoplay, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const skills1 = [
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/bootstrap/bootstrap-original.svg", description: "Bootstrap" , size: "5rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/c/c-line.svg", description: "C" , size: "5.1rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/cplusplus/cplusplus-original.svg", description: "C++" , size: "3.8rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg", description: "CSS3" , size: "3.9rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/figma/figma-original.svg", description: "Figma" , size: "3.5rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg", description: "HTML5" , size: "3.8rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/java/java-original-wordmark.svg", description: "Java" , size: "4.8rem" , radius: false}
];
const skills2 = [
    { image: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg", description: "JavaScript" , size: "5rem" , radius: true},
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/jupyter/jupyter-original-wordmark.svg", description: "Jupyter" , size: "3.3rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mongodb/mongodb-original-wordmark.svg", description: "MongoDB" , size: "3.9rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/pandas/pandas-original.svg", description: "Pandas" , size: "3.9rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postgresql/postgresql-original.svg", description: "PostgreSQL" , size: "3.4rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/python/python-original.svg", description: "Python" , size: "3.7rem" , radius: false},
    { image: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/spring/spring-original-wordmark.svg", description: "Spring" , size: "4.2rem" , radius: false}
];

/** It plays the quack sound and print a quack text with a volume icon */
const getQuack = () => {
    new Audio('/audio/Duck.mp3').play().catch(err => {console.error(err)})
}

const rotateDuckLeft = (elem) => {
    if (elem && elem.currentTarget)
        elem.currentTarget.style.transform = "rotate(10deg)";
    else console.error("elem: ", elem , " in left")
}

const rotateDuckRight = (elem) => {
    if (elem && elem.currentTarget)
        elem.currentTarget.style.transform = "rotate(-10deg)";
    else console.error("elem: ", elem , " in right")
}

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    if (window.innerWidth < 1370) {
        return (
            <section id="skills" className="py-5 bg-grey3">
                <Container>
                    <Container fluid className="d-flex justify-content-center position-relative mb-4">
                        <Image src={"/images/mask_Avatar.png"} alt="Avatar" className={"img"}/>
                        <Image id="quacker" src={"/images/rubber_duck_2.svg"} alt="Duck Image" className="img position-absolute" onClick={getQuack}
                               onMouseDown={rotateDuckLeft.bind(document.getElementById('quacker'))} onMouseUp={rotateDuckRight.bind(document.getElementById('quacker'))}
                               style={{ "rotate": "20deg", "bottom": "-2rem", "right": "20%" }}/>
                    </Container>
                    <Swiper modules={[Virtual, Autoplay, Pagination]}
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
                            loop={true} pagination={{dynamicBullets: true}}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            className={'mt-4 py-5'}>
                        {skills1.concat(skills2).map((skill, index) => (
                            <SwiperSlide key={index} index={index} className={'d-flex justify-content-center'}
                                         style={{transform: `scale(${index === activeIndex ? 1.5 : 0.7})`, transition: 'transform 0.5s ease' }}>
                                <SkillCard {...skill} sizeLock={'true'} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </section>
        );
    } else {
        // alert(window.innerWidth) // #DEBUG
        return (
            <section id="skills" className="py-5 bg-grey3">
                <Row className={"d-flex justify-content-between w-100"}>
                    <Col xl={5}>
                        <Row className="d-flex align-items-stretch w-100 h-100 justify-content-center">
                            <Col className="d-flex flex-column w-100 justify-content-around py-3 align-items-center">
                                <SkillCard {...(skills1[0])} />
                                <SkillCard {...(skills1[2])} />
                            </Col>
                            <Col className="d-flex flex-column w-100 justify-content-between py-5 align-items-center">
                                <SkillCard {...(skills1[1])} />
                                <SkillCard {...(skills1[3])} />
                                <SkillCard {...(skills1[5])} />
                            </Col>
                            <Col className="d-flex flex-column w-100 justify-content-around py-5 my-5 align-items-center">
                                <SkillCard {...(skills1[4])} />
                                <SkillCard {...(skills1[6])} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={2} lg={10} md={10} className="position-relative">
                        <Image src={"/images/mask_Avatar.png"} alt="Avatar" className={"img"}/>
                        <Image id="quacker" src={"/images/rubber_duck_2.svg"} alt="Duck Image" className="img position-absolute" onClick={getQuack}
                               onMouseDown={rotateDuckLeft.bind(document.getElementById('quacker'))} onMouseUp={rotateDuckRight.bind(document.getElementById('quacker'))}
                               style={{ "rotate": "20deg", "bottom": "-2rem", "right": "-6rem" }}/>
                    </Col>
                    <Col xl={5}>
                        <Row className="d-flex align-items-stretch w-100 h-100 justify-content-center">
                            <Col className="d-flex flex-column justify-content-evenly align-items-center">
                                <SkillCard {...(skills2[0])} />
                                <SkillCard {...(skills2[1])} />
                            </Col>
                            <Col className="d-flex flex-column justify-content-between align-items-center">
                                <SkillCard {...(skills2[2])} />
                                <SkillCard {...(skills2[3])} />
                                <SkillCard {...(skills2[4])} />
                            </Col>
                            <Col className="d-flex flex-column justify-content-between my-5 align-items-center">
                                <SkillCard {...(skills2[5])} />
                                <SkillCard {...(skills2[6])} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        );
    }
};

export default Skills;
