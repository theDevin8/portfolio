import React, { useState, useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import "./aboutme.css";
import bluelockgif from '../../gifs/bluelock.gif';
import codingGif from '../../gifs/coding-me.gif';
import animeGif from '../../gifs/anime.gif';
import tutorGif from '../../gifs/tutor.gif';
import { TbPlaystationCircle, TbPlaystationSquare, TbPlaystationTriangle, TbPlaystationX } from 'react-icons/tb';

const Aboutme = () => {
    const [aboutme, setaboutme] = useState("");

    useEffect(() => {
        const message = "< about me >";
        const typeMessage = () => {
            let i = 0;
            const intervalId = setInterval(() => {
                setaboutme(message.substring(0, i));
                i++;
                if (i > message.length) {
                    clearInterval(intervalId);
                }
            }, 50);
        };

        typeMessage();

        const resetMessage = () => {
            setaboutme("");
            typeMessage();
        };
        const intervalId = setInterval(resetMessage, 4000);
        return () => {
            clearInterval(intervalId);
        };

    }, []);

    //mobile view
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkIsMobile = () => {
            const width = window.innerWidth;
            setIsMobile(width >= 320 && width <= 428); //change this later
            console.log(width);
        };

        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".aboutme-element", {
            delay: 200,
            distance: "6px",
            duration: 1000,
            easing: "ease-out",
            origin: "bottom",
            reset: true,
            scale: 1,
            viewFactor: 0,
        });
    }, []);

    return (
        <div className="aboutme-element">
            {!isMobile && (
                <div>
                    <h1 id='aboutme' >{aboutme}</h1>
                    <div className="about-page">
                        <div >
                            {/*Work Experience*/}
                            <h2 className="about-title">Work Experience</h2>
                            <div className="job-container">
                                <div className="list-jobs">
                                    <div className="job-info">
                                        <h3 className="job-title">Connextrix Advisor @ <span className="special-words">Rice University</span></h3>
                                        <p className="job-description">July 2023</p>
                                        <p className="job-description">
                                            In the Connextrix program, I will be an advisor to high school students, collaborating with college students from various universities to
                                            provide mentorship and guidance, fostering a supportive environment for their personal and academic growth. Together, we will inspire and
                                            empower the next generation of aspiring minds.
                                        </p>
                                    </div>

                                    <div className="job-info">
                                        <h3 className="job-title">Software Engineer Intern @ <span className="special-words">lootswap</span></h3>
                                        <p className="job-description">May 2023 - Present</p>
                                        <p className="job-description">
                                            During my internship at LootSwap in summer 2023, I will be actively engaged in the development and implementation of
                                            advanced software solutions, working alongside a talented team to create innovative products and contribute to the growth of the organization.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            {/*PERSONAL PURSUITS*/}
                            <h2 className="about-title">Personal Pursuits</h2>
                            <div className="aboutme-cards-container">
                                <div className="aboutme-cards">
                                    <a className="aboutme-link" href="https://github.com/theDevin8" target="_blank" rel="noreferrer">
                                        <div className="aboutme-card" >
                                            <img className="coding-gif" src={codingGif} alt="codingGif" />
                                            <h3 className="aboutme-title">Programming</h3>
                                            <p className="aboutme-description">My love for building and creating started with Legos and gradually evolved into a passion for coding.
                                                The process of constructing complex structures with Legos helped me develop the logical and problem-solving skills necessary for coding.
                                                Through my fascination with Legos, I discovered the endless possibilities of technology and became inspired to pursue a career in computer science.
                                            </p>
                                            <p className="github">"click to view my projects"</p>

                                        </div>
                                    </a>
                                    <a className="aboutme-link" href="https://discord.com/users/733158227335708672" target="_blank" rel="noreferrer">
                                        <div className="aboutme-card" >
                                            <img className="tutor-gif" src={tutorGif} alt="tutorGif" />
                                            <h3 className="aboutme-title">Tutoring</h3>
                                            <p className="aboutme-description-tutor">As a programming tutor, I've helped and guided students in their understanding of Python and C++.
                                                I am passionate about sharing my knowledge and helping others.Through this experience, I have not only developed my own technical skills but also honed my
                                                ability to communicate complex ideas in a clear and concise manner.
                                                Tutoring has taught me the value of patience and persistence, as I strive to help students reach their full potential.</p>
                                            <p className="tutor">"click if in need of a tutor"</p>

                                        </div>
                                    </a>

                                    <a className="aboutme-link" href="https://youtu.be/BWmkWGnx7UE" target="_blank" rel="noreferrer">
                                        <div className="aboutme-card" >
                                            <img className='bluelock-gif' src={bluelockgif} alt="bluelockgif" />
                                            <h3 className="aboutme-title">Fútbol</h3>
                                            <p className="aboutme-description"> I grew up playing competitive soccer and it has been a significant part of my life.
                                                Being a part of a team and constantly striving to improve my skills and strategy has shaped me into the dedicated and driven individual I am today.
                                                Through my experiences, I have developed a love for the sport and a deep appreciation for the discipline and perseverance it requires.
                                            </p>
                                            <p className="aboutme-description">"click to view soccer highlights"</p>
                                        </div>
                                    </a>

                                    <div className="aboutme-card" >
                                        <img className="anime-gif" src={animeGif} alt="animeGif" />
                                        <h3 className="aboutme-title">Anime</h3>
                                        <p className="aboutme-description">I have a deep love for anime and enjoy watching various genres such as action, romance, and slice of life.
                                            What draws me to anime is the creativity and uniqueness of the stories, as well as the complex characters and emotional depth portrayed in the shows.
                                            Through watching anime, I have gained insights into different cultures and perspectives, broadening my worldview and understanding of the world around me.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*SKILLS*/}
                            <div className="about-skills">
                                <h2 className="about-title">Skills</h2>
                                <div className="list-of-skills">
                                    <ul className="left-list">
                                        <li>
                                            <TbPlaystationTriangle className="list-icons" /> <span className="list-item">C++</span>
                                        </li>
                                        <li>
                                            <TbPlaystationSquare className="list-icons" /> <span className="list-item">Python</span>
                                        </li>
                                        <li>
                                            <TbPlaystationCircle className="list-icons" /> <span className="list-item">Javascript</span>
                                        </li>
                                        <li>
                                            <TbPlaystationX className="list-icons" /> <span className="list-item">HTML/CSS</span>
                                        </li>
                                    </ul>
                                    <ul className="right-list">
                                        <li>
                                            <TbPlaystationTriangle className="list-icons" /> <span className="list-item">ReactJS</span>
                                        </li>
                                        <li>
                                            <TbPlaystationSquare className="list-icons" /> <span className="list-item">NodeJS</span>
                                        </li>
                                        <li>
                                            <TbPlaystationCircle className="list-icons" /> <span className="list-item">SQL</span>
                                        </li>
                                        <li>
                                            <TbPlaystationX className="list-icons" /> <span className="list-item">GitHub</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isMobile && (
                <div>
                    <h1 id='aboutme' >{aboutme}</h1>
                    <div className="about-page">
                        <div>
                            {/*Work Experience*/}
                            <h2 className="about-title">Work Experience</h2>
                            <div className="job-container">
                                <div className="list-jobs">
                                    <div className="job-info">
                                        <h3 className="job-title">Connextrix Advisor @ <span className="special-words">Rice University</span></h3>
                                        <p className="job-description">July 2023</p>
                                        <p className="job-description">
                                            In the Connextrix program, I will be an advisor to high school students, collaborating with college students from various universities to
                                            provide mentorship and guidance, fostering a supportive environment for their personal and academic growth. Together, we will inspire and
                                            empower the next generation of aspiring minds.
                                        </p>
                                    </div>

                                    <div className="job-info">
                                        <h3 className="job-title">Software Engineer Intern @ <span className="special-words">lootswap</span></h3>
                                        <p className="job-description">May 2023 - Present</p>
                                        <p className="job-description">
                                            During my internship at LootSwap in summer 2023, I will be actively engaged in the development and implementation of
                                            advanced software solutions, working alongside a talented team to create innovative products and contribute to the growth of the organization.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*PERSONAL PURSUITS*/}
                            <h2 className="about-title">Personal Pursuits</h2>
                            <div className="aboutme-cards-container">
                                <div className="aboutme-cards">
                                    <a className="aboutme-link" href="https://github.com/theDevin8" target="_blank" rel="noreferrer">
                                        <div className="aboutme-card" >
                                            <img className="coding-gif" src={codingGif} alt="codingGif" />
                                            <h3 className="aboutme-title">Programming</h3>
                                            <p className="aboutme-description">
                                                There's nothing quite like the thrill of diving headfirst into a complex coding challenge and emerging victorious with a finely
                                                crafted solution. As a passionate coder, I relish the opportunity to turn lines of code into powerful tools that can make a real difference in the world.
                                            </p>
                                            <p className="github">"Tap to view my projects"</p>

                                        </div>
                                    </a>
                                    <a className="aboutme-link" href="https://discord.com/users/733158227335708672" target="_blank" rel="noreferrer">
                                        <div className="aboutme-card" >
                                            <img className="tutor-gif" src={tutorGif} alt="tutorGif" />
                                            <h3 className="aboutme-title">Tutoring</h3>
                                            <p className="aboutme-description">
                                                I am an enthusiastic programming tutor with expertise in Python and C++. Sharing my knowledge and helping students learn these languages has
                                                allowed me to refine my communication skills, enhance my technical abilities, and appreciate guiding students towards their full potential.
                                            </p>
                                            <p className="github">"Tap if in need of a tutor"</p>

                                        </div>
                                    </a>
                                    <a className="aboutme-link" href="https://youtu.be/BWmkWGnx7UE" target="_blank" rel="noreferrer">
                                        <div className="aboutme-card" >
                                            <img className='bluelock-gif' src={bluelockgif} alt="bluelockgif" />
                                            <h3 className="aboutme-title">Fútbol</h3>
                                            <p className="aboutme-description">
                                                Competitive soccer has been a significant part of my life, shaping me into a dedicated and driven individual who appreciates the discipline and perseverance required to succeed.
                                                Playing as a team member and constantly striving to improve my skills and strategy has instilled in me a love for the sport that I carry to this day.
                                            </p>
                                            <p className="aboutme-description">"Tap to view soccer highlights"</p>
                                        </div>
                                    </a>
                                    <div className="aboutme-card" >
                                        <img className="anime-gif" src={animeGif} alt="animeGif" />
                                        <h3 className="aboutme-title">Anime</h3>
                                        <p className="aboutme-description">I have a deep love for anime and enjoy watching various genres such as action, romance, and slice of life.
                                            What draws me to anime is the creativity and uniqueness of the stories, as well as the complex characters and emotional depth portrayed in the shows.
                                            Through watching anime, I have gained insights into different cultures and perspectives, broadening my worldview and understanding of the world around me.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*SKILLS*/}
                            <div className="about-skills">
                                <h2 className="about-title">Skills</h2>
                                <div className="list-of-skills">
                                    <ul className="left-list">
                                        <li>
                                            <TbPlaystationTriangle className="list-icons" /> <span className="list-item">C++</span>
                                        </li>
                                        <li>
                                            <TbPlaystationSquare className="list-icons" /> <span className="list-item">Python</span>
                                        </li>
                                        <li>
                                            <TbPlaystationCircle className="list-icons" /> <span className="list-item">Javascript</span>
                                        </li>
                                        <li>
                                            <TbPlaystationX className="list-icons" /> <span className="list-item">HTML/CSS</span>
                                        </li>
                                    </ul>
                                    <ul className="right-list">
                                        <li>
                                            <TbPlaystationTriangle className="list-icons" /> <span className="list-item">ReactJS</span>
                                        </li>
                                        <li>
                                            <TbPlaystationSquare className="list-icons" /> <span className="list-item">NodeJS</span>
                                        </li>
                                        <li>
                                            <TbPlaystationCircle className="list-icons" /> <span className="list-item">SQL</span>
                                        </li>
                                        <li>
                                            <TbPlaystationX className="list-icons" /> <span className="list-item">GitHub</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Aboutme