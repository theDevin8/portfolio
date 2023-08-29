import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ScrollReveal from "scrollreveal";
import './webpage.css'

const Webpage = () => {
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const message = "I am, Devin Stockton...";
        const typeMessage = () => {
            let i = 0;
            const intervalId = setInterval(() => {
                setWelcomeMessage((prevMessage) => {
                    const nextMessage = message.substring(0, i);
                    return i >= message.length ? `${nextMessage}|` : `${nextMessage}|`;
                });
                i++;
                if (i > message.length + 1) {
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
        <div className="webpage-element" id="webpage-element">
            {!isMobile && (
                <div className="home-page">
                    <h2 className="welcome-message" id='welcome-message'>{welcomeMessage}</h2>
                    <div className="overall-me">
                        <p className="description">
                            Hi there! My name is <span className="special-words">Devin Stockton</span>, and I'm a rising junior <span className="special-words" >@ University of Houston </span>
                            majoring in Computer Science and minoring in Chemical Engineering. When I'm not studying, you can usually find me with my nose buried in a book, kicking around a soccer ball with friends, or tinkering away on a new coding project.
                            As a Computer Science major, I'm always looking for ways to push myself and learn new things, whether it's through coursework or personal projects.
                        </p>

                        <p className="description">
                            One of those personal projects is actually what brought you to my website!
                            I built this web application to showcase some of the things that I'm most passionate about, from my programming skills to my interests and hobbies outside of school.
                            I wanted a space where I could share a little more about myself than what you might find on a traditional resume or LinkedIn profile,
                            and I hope that this website gives you a better sense of who I am as a person and a programmer.
                        </p>
                    </div>
                    <Link to='/learn'>
                        <div className="email-button">Learn More About Devin</div>
                    </Link>
                </div>
            )}

            {isMobile && (
                <div className="webpage-moblie-container">
                    <h2 className="welcome-message">Hello, I am <span className="special-words">Devin Stockton</span>.</h2>
                    <div className="overall-me">
                        <p className="description">
                            Hi there! My name is <span className="special-words">Devin Stockton</span>, and I'm a rising junior <span className="special-words" >@ University of Houston </span>
                            majoring in Computer Science and minoring in Chemcial Engineering. When I'm not studying, you can usually find me with my nose buried in a book, kicking around a soccer ball with friends, or tinkering away on a new coding project.
                            As a computer science major, I'm always looking for ways to push myself and learn new things, whether it's through coursework or personal projects.
                        </p>
                    </div>
                    <Link to='/learn' className="back-button">
                        <div className="email-button">Learn More About Devin</div>
                    </Link>
                </div>
            )}

        </div>
    )
}

export default Webpage