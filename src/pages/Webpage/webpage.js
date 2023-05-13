import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { ParasiteEye } from '../../parasiteEye.js';
import { KrakenEye } from "../../KrakenEye.js";
import { OrbitControls } from "@react-three/drei";
import ScrollReveal from "scrollreveal";
import linkedIn from '../../img/linkedin-icon.png';
import github from '../../img/github-icon.png';
import mail from '../../img/mail-icon.png';
import discord from '../../img/discord-icon.png';
import resume from '../../img/resume-icon.png';
import myresume from '../Webpage/devinResume.pdf';
import './webpage.css'

const Webpage = () => {
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [intervalId, setIntervalId] = useState(null);
    
    useEffect(() => {
        const message = "Exploring the world as I see it...";
        const typeMessage = () => {
            let i = 0;
            const intervalId = setInterval(() => {
                setWelcomeMessage(message.substring(0, i));
                i++;
                if (i > message.length) {
                    clearInterval(intervalId);
                }
            }, 50);
            return intervalId;
        };
    
        const intervalId = typeMessage();
    
        const resetMessage = () => {
            setWelcomeMessage("");
            clearInterval(intervalId);
            const newIntervalId = typeMessage();
            setIntervalId(newIntervalId);
        };
    
        const handleVisibilityChange = () => {
            if (document.hidden) {
                clearInterval(intervalId);
            } else {
                resetMessage();
            }
        };
    
        document.addEventListener("visibilitychange", handleVisibilityChange);
    
        return () => {
            clearInterval(intervalId);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    const [isToggled, setToggled] = useState(false);
    const [circlePosition, setCirclePosition] = useState("left");

    const handleClick = () => {
        setToggled(!isToggled);
        setCirclePosition(circlePosition === "left" ? "right" : "left");
        if (circlePosition === "left") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

    };


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



    //effect page appear
    useEffect(() => {
        ScrollReveal().reveal(".webpage-element", {
            delay: 200,
            distance: "50px",
            duration: 1000,
            easing: "ease-out",
            origin: "bottom",
            reset: true,
            scale: 1,
            viewFactor: 0,
        });
    }, []);

    return (
        <div className="webpage-element">
            {!isMobile && (
                <div>
                    <div className='Iam'>
                        <p>Hello World, I am</p>
                        <b>
                            <div className='innerIam'>
                                Devin Stockton.<br />
                                a programmer.<br />
                                a student. <br />
                                a soccer player.<br />
                                a gamer.<br />
                            </div>
                        </b>
                    </div>

                    <div className="links-to-me">
                        <a href="https://www.linkedin.com/in/devin-stockton-25846a252/" target="_blank" rel="noreferrer">
                            <img className='icons-to-me' src={linkedIn} alt="linkedin-icon" />
                        </a>
                        <a href="mailto:devinstockton2003@gmail.com">
                            <img className="icons-to-me" src={mail} alt="email-icon" />
                        </a>
                        <a href="https://github.com/theDevin8" target="_blank" rel="noreferrer">
                            <img className="icons-to-me" src={github} alt="github-icon" />
                        </a>
                        <a href="https://discord.com/users/733158227335708672" target="_blank" rel="noreferrer">
                            <img className="icons-to-me" src={discord} alt="discord-icon" />
                        </a>

                        <a href={myresume} target="_blank" rel="noreferrer">
                            <img className="icons-to-me" src={resume} alt="resume-icon" />
                        </a>

                    </div>


                    <div className="eyeball">
                        <Canvas style={{ width: "30vw", height: "30vh" }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <Suspense fallback={null}>
                                {isToggled ? <KrakenEye /> : <ParasiteEye />}
                            </Suspense>
                            <OrbitControls />
                        </Canvas>
                    </div>

                    {/* create toogle for dark view */}
                    <label className={`toggle ${isToggled ? "on" : ""}`} onClick={handleClick}>
                        <div className={`circle ${circlePosition}`} />
                    </label>
                    <span className="label-text">{isToggled ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>

                    <h2 className="welcome-message" id='welcome-message'>{welcomeMessage}</h2>

                    <div className="overall-me">
                        <p className="description">
                            Hi there! My name is Devin, and I'm a sophomore at the University of Houston.
                            When I'm not studying, you can usually find me with my nose buried in a book, kicking around a soccer ball with friends, or tinkering away on a new coding project.
                            As a computer science major, I'm always looking for ways to push myself and learn new things, whether it's through coursework or personal projects.
                        </p>

                        <p className="description">
                            One of those personal projects is actually what brought you to my website!
                            I built this web application to showcase some of the things that I'm most passionate about, from my programming skills to my interests and hobbies outside of school.
                            I wanted a space where I could share a little more about myself than what you might find on a traditional resume or LinkedIn profile,
                            and I hope that this website gives you a better sense of who I am as a person and a programmer.
                        </p>

                    </div>
                </div>
            )}

            {isMobile && (
                <div className="webpage-moblie-container">
                    <div className="links-to-me">
                        <a href="https://www.linkedin.com/in/devin-stockton-25846a252/" target="_blank" rel="noreferrer">
                            <img className='icons-to-me' src={linkedIn} alt="linkedin-icon" />
                        </a>
                        <a href="mailto:devinstockton2003@gmail.com">
                            <img className="icons-to-me" src={mail} alt="email-icon" />
                        </a>
                        <a href="https://github.com/theDevin8" target="_blank" rel="noreferrer">
                            <img className="icons-to-me" src={github} alt="github-icon" />
                        </a>
                        <a href="https://discord.com/users/733158227335708672" target="_blank" rel="noreferrer">
                            <img className="icons-to-me" src={discord} alt="discord-icon" />
                        </a>

                        <a href={myresume} target="_blank" rel="noreferrer">
                            <img className="icons-to-me" src={resume} alt="resume-icon" />
                        </a>
                    </div>

                    <div className="eyeball">
                        <Canvas style={{ width: "30vw", height: "30vh" }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <Suspense fallback={null}>
                                {isToggled ? <KrakenEye /> : <ParasiteEye />}
                            </Suspense>
                            <OrbitControls />
                        </Canvas>
                    </div>
                    
                    <label className={`toggle ${isToggled ? "on" : ""}`} onClick={handleClick}>
                        <div className={`circle ${circlePosition}`} />
                    </label>
                    <span className="label-text">{isToggled ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>

                    <h2 className="welcome-message" id='welcome-message'>{welcomeMessage}</h2>
                    <div className="overall-me">
                        <p className="description">
                            Hi there! My name is Devin, and I'm a sophomore at the University of Houston.
                            When I'm not studying, you can usually find me with my nose buried in a book, kicking around a soccer ball with friends, or tinkering away on a new coding project.
                            As a computer science major, I'm always looking for ways to push myself and learn new things, whether it's through coursework or personal projects.
                        </p>
                    
                        <p className="description">
                            One of those personal projects is actually what brought you to my website!
                            I built this web application to showcase some of the things that I'm most passionate about, from my programming skills to my interests and hobbies outside of school.
                            I wanted a space where I could share a little more about myself than what you might find on a traditional resume or LinkedIn profile,
                            and I hope that this website gives you a better sense of who I am as a person and a programmer.
                        </p>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Webpage