import React, { useState, useEffect } from "react";
import "./aboutme.css";
import bluelockgif from '../../gifs/bluelock.gif';
import codingGif from '../../gifs/coding-me.gif';
import gamingGif from '../../gifs/gaming-me.gif';
import animeGif from '../../gifs/anime.gif';
import tutorGif from '../../gifs/tutor.gif';

const Aboutme = () => {
    const [aboutme, setaboutme] = useState("");

    useEffect(() => {
        const message = "<about me/>";
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

    
    return (
        <>
            <div>
                <h1 id='aboutme' >{aboutme}</h1>
                <div className="aboutme-cards-container">
                    <div className="aboutme-cards">
                        <a className="aboutme-link" href="https://github.com/theDevin8" target="_blank">
                            <div className="aboutme-card" data-index='0'>
                                <img className="coding-gif" src={codingGif} alt="codingGif" />
                                <h3 className="aboutme-title">Programming</h3>
                                <p className="aboutme-description">My love for building and creating started with Legos and gradually evolved into a passion for coding.
                                    The process of constructing complex structures with Legos helped me develop the logical and problem-solving skills necessary for coding.
                                    Through my fascination with Legos, I discovered the endless possibilities of technology and became inspired to pursue a career in computer science.
                                </p>
                                <p className="github">"click to view my projects"</p>

                            </div>
                        </a>

                        <a className="aboutme-link" href="https://discord.com/users/733158227335708672" target="_blank">
                            <div className="aboutme-card" data-index='1'>
                                <img className="tutor-gif" src={tutorGif} alt="tutorGif" />
                                <h3 className="aboutme-title">Tutor</h3>
                                <p className="aboutme-description-tutor">As a programming tutor, I've helped and guided students in their understanding of Python and C++.
                                    I am passionate about sharing my knowledge and helping others.Through this experience, I have not only developed my own technical skills but also honed my
                                    ability to communicate complex ideas in a clear and concise manner.
                                    Tutoring has taught me the value of patience and persistence, as I strive to help students reach their full potential.</p>
                                <p className="tutor">"click if in need of a tutor"</p>

                            </div>
                        </a>

                        <a className="aboutme-link" href="https://youtu.be/BWmkWGnx7UE" target="_blank">
                            <div className="aboutme-card" data-index='2'>
                                <img className='bluelock-gif' src={bluelockgif} alt="bluelockgif" />
                                <h3 className="aboutme-title">Fútbol</h3>
                                <p className="aboutme-description"> I grew up playing competitive soccer and it has been a significant part of my life.
                                    Being a part of a team and constantly striving to improve my skills and strategy has shaped me into the dedicated and driven individual I am today.
                                    Through my experiences, I have developed a love for the sport and a deep appreciation for the discipline and perseverance it requires.
                                </p>
                                <p className="aboutme-description">"click to view soccer highlights"</p>
                            </div>
                        </a>

                        <a>
                            <div className="aboutme-card" data-index='3'>
                                <img className="gaming-gif" src={gamingGif} alt="gamingGif" />
                                <h3 className="aboutme-title">Gaming</h3>
                                <p className="aboutme-description">I have been an avid gamer since my childhood and have always been fascinated by the immersive worlds and thrilling challenges offered by video games.
                                    Gaming has not only been a source of entertainment for me but has also taught me valuable lessons in teamwork, strategy, and persistence.
                                    To this day, I still enjoy gaming in my free time as a way to unwind and continue to explore new and exciting virtual worlds.</p>
                            </div>
                        </a>

                        <a>
                            <div className="aboutme-card" data-index='4'>
                                <img className="anime-gif" src={animeGif} alt="animeGif" />
                                <h3 className="aboutme-title">Anime</h3>
                                <p className="aboutme-description">I have a deep love for anime and enjoy watching various genres such as action, romance, and slice of life.
                                    What draws me to anime is the creativity and uniqueness of the stories, as well as the complex characters and emotional depth portrayed in the shows.
                                    Through watching anime, I have gained insights into different cultures and perspectives, broadening my worldview and understanding of the world around me.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="aboutme-cards">
                        <a className="aboutme-link" href="https://github.com/theDevin8" target="_blank">
                            <div className="aboutme-card" data-index='0'>
                                <img className="coding-gif" src={codingGif} alt="codingGif" />
                                <h3 className="aboutme-title">Programming</h3>
                                <p className="aboutme-description">My love for building and creating started with Legos and gradually evolved into a passion for coding.
                                    The process of constructing complex structures with Legos helped me develop the logical and problem-solving skills necessary for coding.
                                    Through my fascination with Legos, I discovered the endless possibilities of technology and became inspired to pursue a career in computer science.
                                </p>
                                <p className="github">"click to view my projects"</p>

                            </div>
                        </a>

                        <a className="aboutme-link" href="https://discord.com/users/733158227335708672" target="_blank">
                            <div className="aboutme-card" data-index='1'>
                                <img className="tutor-gif" src={tutorGif} alt="tutorGif" />
                                <h3 className="aboutme-title">Tutor</h3>
                                <p className="aboutme-description-tutor">As a programming tutor, I've helped and guided students in their understanding of Python and C++.
                                    I am passionate about sharing my knowledge and helping others.Through this experience, I have not only developed my own technical skills but also honed my
                                    ability to communicate complex ideas in a clear and concise manner.
                                    Tutoring has taught me the value of patience and persistence, as I strive to help students reach their full potential.</p>
                                <p className="tutor">"click if in need of a tutor"</p>

                            </div>
                        </a>

                        <a className="aboutme-link" href="https://youtu.be/BWmkWGnx7UE" target="_blank">
                            <div className="aboutme-card" data-index='2'>
                                <img className='bluelock-gif' src={bluelockgif} alt="bluelockgif" />
                                <h3 className="aboutme-title">Fútbol</h3>
                                <p className="aboutme-description"> I grew up playing competitive soccer and it has been a significant part of my life.
                                    Being a part of a team and constantly striving to improve my skills and strategy has shaped me into the dedicated and driven individual I am today.
                                    Through my experiences, I have developed a love for the sport and a deep appreciation for the discipline and perseverance it requires.
                                </p>
                                <p className="aboutme-description">"click to view soccer highlights"</p>
                            </div>
                        </a>

                        <a>
                            <div className="aboutme-card" data-index='3'>
                                <img className="gaming-gif" src={gamingGif} alt="gamingGif" />
                                <h3 className="aboutme-title">Gaming</h3>
                                <p className="aboutme-description">I have been an avid gamer since my childhood and have always been fascinated by the immersive worlds and thrilling challenges offered by video games.
                                    Gaming has not only been a source of entertainment for me but has also taught me valuable lessons in teamwork, strategy, and persistence.
                                    To this day, I still enjoy gaming in my free time as a way to unwind and continue to explore new and exciting virtual worlds.</p>
                            </div>
                        </a>

                        <a>
                            <div className="aboutme-card" data-index='4'>
                                <img className="anime-gif" src={animeGif} alt="animeGif" />
                                <h3 className="aboutme-title">Anime</h3>
                                <p className="aboutme-description">I have a deep love for anime and enjoy watching various genres such as action, romance, and slice of life.
                                    What draws me to anime is the creativity and uniqueness of the stories, as well as the complex characters and emotional depth portrayed in the shows.
                                    Through watching anime, I have gained insights into different cultures and perspectives, broadening my worldview and understanding of the world around me.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Aboutme