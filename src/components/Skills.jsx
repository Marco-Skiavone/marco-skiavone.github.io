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
                <Row fluid className={'skillSwiper flex-column m-0'}>
                    <div className="position-relative d-flex flex-column align-items-center mb-4">
                        <Image src={"/images/mask_Avatar.png"} alt="Avatar" draggable={false} className={"img d-block"}/>
                        <Image id="quacker1" src={"/images/rubber_duck_2.svg"} alt="Duck Image" draggable={false} className="img position-absolute" onClick={getQuack.bind(document.getElementById('quacker1'))}
                               style={{ "bottom": "-2rem", "left": "50vw", 'scale': '0.8' }}/>
                    </div>
                    <h2 className="h2 text-center text-light mb-2 py-2">Skills</h2>
                    <Swiper modules={[Virtual, Autoplay, Pagination, FreeMode]}
                            breakpoints={{
                                540: {
                                    slidesPerView: 3,
                                    spaceBetween: 5
                                },
                                600: {
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
                        {skills.map((skill, index) => (
                            <SwiperSlide key={index} index={index} className={'d-flex justify-content-center'}
                                         style={{transform: `scale(${index === activeIndex ? 1.5 : 0.7})`, transition: 'transform 0.5s ease' }}>
                                <SkillCard {...skill} sizeLock={'true'} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <CV />
                </Row>

                <Row className='skillSpread m-0 p-0'>
                    <Col className='position-relative spread-col1'>
                        <div className={"draggableSkill"}><SkillCard {...(skills[1])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[7])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[8])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[4])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[3])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[5])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[6])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[2])} /></div>
                    </Col>
                    <Col md={3} className="position-relative d-flex flex-column justify-content-center align-items-center p-0 mb-4 mb-xl-0 mx-auto">
                        <Image id='AvatarImg' src={"/images/mask_Avatar.png"} alt="Avatar" draggable={false} className={"img"}/>
                        <Image id="quacker2" src={"/images/rubber_duck_2.svg"} alt="Duck Image" draggable={false} className="img position-absolute" onClick={getQuack.bind(document.getElementById('quacker2'))}
                               style={{ "bottom": "2rem", "left": "15vw" }}/>
                        <CV />
                    </Col>
                    <Col className='position-relative spread-col2'>
                        <div className={"draggableSkill"}><SkillCard {...(skills[0])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[9])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[10])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[11])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[12])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[13])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[14])} /></div>
                        <div className={"draggableSkill"}><SkillCard {...(skills[15])} /></div>
                    </Col>
                </Row>
            </section>
        );
};

export default Skills;
