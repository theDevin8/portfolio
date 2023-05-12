import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import './projects.css'
import amusement from '../../gifs/amusement.gif';
import reactIcon from '../../img/react.png';
import nodeIcon from '../../img/node.png';
import javaScript from '../../img/javascript.png';
import mysql from '../../img/mySql.png';
import portfolio from '../../gifs/portfolio.gif';
import css from '../../img/css.png';
import tg from '../../gifs/tg.gif';
import cpp from '../../img/cpp.png';

const Projects = () => {
    const [projects, setprojects] = useState("");

    useEffect(() => {
        const message = "<projects/>";
        const typeMessage = () => {
            let i = 0;
            const intervalId = setInterval(() => {
                setprojects(message.substring(0, i));
                i++;
                if (i > message.length) {
                    clearInterval(intervalId);
                }
            }, 50);
        };

        typeMessage();

        const resetMessage = () => {
            setprojects("");
            typeMessage();
        };
        const intervalId = setInterval(resetMessage, 4000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".project-element", {
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

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkIsMobile = () => {
            const width = window.innerWidth;
            setIsMobile(width >= 320 && width <= 896); //change this later
            console.log(width);
        };

        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return( 
        <div className="project-element">
            {!isMobile && (
                <div>
                    <h1 id="projects">{projects}</h1>
                    <div className="projects-container">
                        <div className="project-card" onClick={() => window.open("https://github.com/theDevin8/Amusment_Frontend")}>
                            <div className="left-project-card">
                                <img className="project-gif" src={amusement} alt="ThemeParkProject.gif"></img>
                                <div className="list-project-tools">
                                    <img className="projectTp-icon" src={reactIcon} alt="React.png" />
                                    <img className="projectTp-icon" src={nodeIcon} alt="Node.png" />
                                    <img className="projectTp-icon" src={javaScript} alt="javascript.png" />
                                    <img className="projectTp-icon" src={css} alt="css.png" />
                                    <img className="projectTp-icon" src={mysql} alt="mySQL.png" />
                                </div>
                            </div>

                            <div className="right-project-card">
                                <h3 className="project-name">Theme Park Management System</h3>
                                <p className="project-description">
                                    Imagine you're in charge of your own theme park - you've got the rides, the food, and the crowds of eager visitors ready to have a blast.
                                    But how do you keep track of it all? That's where our theme park management system comes in! With this cutting-edge technology, you can manage everything from ride operations to staffing schedules,
                                    all in one convenient and user-friendly interface. It's like having your own personal magic wand for theme park management!
                                </p>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="left-project-card">
                                <img className="project-gif" src={portfolio} alt="PersonalWebsite.gif"></img>
                                <div className="list-project-tools">
                                    <img className="projectP-icon" src={reactIcon} alt="React.png" />
                                    <img className="projectP-icon" src={javaScript} alt="Node.png" />
                                    <img className="projectP-icon" src={css} alt="javascript.png" />

                                </div>
                            </div>

                            <div className="right-project-card">
                                <h3 className="project-name">Personal Website</h3>
                                <p className="project-description">
                                    Think of my personal website like a digital version of myself - it's where you can go to get to know me better, see what I'm up to, and maybe even learn a thing or two!
                                    With its sleek design and user-friendly interface, my website is the perfect place to showcase my projects, share my passions, and connect with others.
                                    It's like a personalized portal into my world - come on in and stay awhile!
                                </p>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="left-project-card">
                                <img className="project-gif" src={tg} alt="TamagotchiPetGame.gif"></img>
                                <div className="list-project-tools">
                                    <img className="project-icon" src={cpp} alt="React.png" />
                                </div>
                            </div>

                            <div className="right-project-card">
                                <h3 className="project-name">Tamagotchi Pet Game</h3>
                                <p className="project-description">
                                    Get ready to enter a world of cuteness overload with my Tamagotchi pet game!
                                    It's like having your very own virtual pet that you can feed, play with, and take care of.
                                    Watch as your pet evolves and grows under your loving care, or risk being left with a grumpy little creature that won't stop nagging you for attention! With its addictive gameplay,
                                    my Tamagotchi pet game is the perfect way to satisfy your craving for cute and cuddly companionship - no real animals required!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {isMobile && (
                <div>
                    <h1 id="projects">{projects}</h1>
                    <div className="projects-container">
                        <div className="project-card" onClick={() => window.open("https://github.com/theDevin8/Amusment_Frontend")}>
                            <div className="left-project-card">
                                <img className="project-gif" src={amusement} alt="ThemeParkProject.gif"></img>
                                <div className="list-project-tools">
                                    <img className="projectTp-icon" src={reactIcon} alt="React.png" />
                                    <img className="projectTp-icon" src={nodeIcon} alt="Node.png" />
                                    <img className="projectTp-icon" src={javaScript} alt="javascript.png" />
                                    <img className="projectTp-icon" src={css} alt="css.png" />
                                    <img className="projectTp-icon" src={mysql} alt="mySQL.png" />
                                </div>
                            </div>

                            <div className="right-project-card">
                                <h3 className="project-name">Theme Park Management System</h3>
                                <p className="project-description">
                                Our theme park management system is a cutting-edge technology that enables you to manage everything from ride operations to staffing schedules, 
                                all in one convenient and user-friendly interface.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                            <div className="left-project-card">
                                <img className="project-gif" src={portfolio} alt="PersonalWebsite.gif"></img>
                                <div className="list-project-tools">
                                    <img className="projectP-icon" src={reactIcon} alt="React.png" />
                                    <img className="projectP-icon" src={javaScript} alt="Node.png" />
                                    <img className="projectP-icon" src={css} alt="javascript.png" />

                                </div>
                            </div>

                            <div className="right-project-card">
                                <h3 className="project-name">Personal Website</h3>
                                <p className="project-description">
                                    Think of my personal website like a digital version of myself - it's where you can go to get to know me better, see what I'm up to, and maybe even learn a thing or two!
                                    With its sleek design and user-friendly interface, my website is the perfect place to showcase my projects, share my passions, and connect with others.
                                    It's like a personalized portal into my world - come on in and stay awhile!
                                </p>
                            </div>
                    </div>
                

                </div>
            )}

        </div>
    )
}
export default Projects