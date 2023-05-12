import React, { useState, useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import "./aboutme.css";
import bluelockgif from '../../gifs/bluelock.gif';
import codingGif from '../../gifs/coding-me.gif';
import gamingGif from '../../gifs/gaming-me.gif';
import animeGif from '../../gifs/anime.gif';
import tutorGif from '../../gifs/tutor.gif';


const Aboutme = () => {
    const [aboutme, setaboutme] = useState("");
    const [layout, setLayout] = useState('fixed');

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

    //mobile view
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

    useEffect(() => {
        ScrollReveal().reveal(".aboutme-element", {
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

        <div className="aboutme-element">
            {!isMobile && (
                <div>
                    <h1 id='aboutme' >{aboutme}</h1>
                    <div class="button-wrapper">
                        <button class="button left-button" onClick={() => setLayout('fixed')} data-selected={layout === 'fixed'}>Fixed Layout</button>
                        <button class="button right-button" onClick={() => setLayout('scroll')} data-selected={layout === 'scroll'}>Scrolling Layout</button>
                    </div>

                    {layout === 'scroll' ? (
                        <div className="aboutme-cards-container">
                            <div className="aboutme-cards">
                                <a className="aboutme-link" href="https://github.com/theDevin8" target="_blank">
                                    <div className="aboutme-card">
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
                                    <div className="aboutme-card">
                                        <img className="tutor-gif" src={tutorGif} alt="tutorGif" />
                                        <h3 className="aboutme-title">Tutoring</h3>
                                        <p className="aboutme-description-tutor">As a programming tutor, I've helped and guided students in their understanding of Python and C++.
                                            I am passionate about sharing my knowledge and helping others.Through this experience, I have not only developed my own technical skills but also honed my
                                            ability to communicate complex ideas in a clear and concise manner.
                                            Tutoring has taught me the value of patience and persistence, as I strive to help students reach their full potential.</p>
                                        <p className="tutor">"click if in need of a tutor"</p>

                                    </div>
                                </a>

                                <a className="aboutme-link" href="https://youtu.be/BWmkWGnx7UE" target="_blank">
                                    <div className="aboutme-card">
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
                                    <div className="aboutme-card">
                                        <img className="gaming-gif" src={gamingGif} alt="gamingGif" />
                                        <h3 className="aboutme-title">Gaming</h3>
                                        <p className="aboutme-description">I have been an avid gamer since my childhood and have always been fascinated by the immersive worlds and thrilling challenges offered by video games.
                                            Gaming has not only been a source of entertainment for me but has also taught me valuable lessons in teamwork, strategy, and persistence.
                                            To this day, I still enjoy gaming in my free time as a way to unwind and continue to explore new and exciting virtual worlds.</p>
                                    </div>
                                </a>

                                <a>
                                    <div className="aboutme-card">
                                        <img className="anime-gif" src={animeGif} alt="animeGif" />
                                        <h3 className="aboutme-title">Anime</h3>
                                        <p className="aboutme-description">I have a deep love for anime and enjoy watching various genres such as action, romance, and slice of life.
                                            What draws me to anime is the creativity and uniqueness of the stories, as well as the complex characters and emotional depth portrayed in the shows.
                                            Through watching anime, I have gained insights into different cultures and perspectives, broadening my worldview and understanding of the world around me.
                                        </p>
                                    </div>
                                </a>
                            </div>
                            {/*COPY OF CARDS*/}
                            <div className="aboutme-cards">
                                <a className="aboutme-link" href="https://github.com/theDevin8" target="_blank">
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
                                <a className="aboutme-link" href="https://discord.com/users/733158227335708672" target="_blank">
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

                                <a className="aboutme-link" href="https://youtu.be/BWmkWGnx7UE" target="_blank">
                                    <div className="aboutme-card">
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
                                    <div className="aboutme-card">
                                        <img className="gaming-gif" src={gamingGif} alt="gamingGif" />
                                        <h3 className="aboutme-title">Gaming</h3>
                                        <p className="aboutme-description">I have been an avid gamer since my childhood and have always been fascinated by the immersive worlds and thrilling challenges offered by video games.
                                            Gaming has not only been a source of entertainment for me but has also taught me valuable lessons in teamwork, strategy, and persistence.
                                            To this day, I still enjoy gaming in my free time as a way to unwind and continue to explore new and exciting virtual worlds.</p>
                                    </div>
                                </a>

                                <a>
                                    <div className="aboutme-card">
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
                    ) : (
                        <div className="aboutme-cards-container-flex">
                            {/* your fixed layout code here */}
                            <div className="aboutme-cards-flex">
                                <a className="aboutme-link" href="https://github.com/theDevin8" target="_blank">
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
                                <a className="aboutme-link" href="https://discord.com/users/733158227335708672" target="_blank">
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

                                <a className="aboutme-link" href="https://youtu.be/BWmkWGnx7UE" target="_blank">
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

                                <a>
                                    <div className="aboutme-card" >
                                        <img className="gaming-gif" src={gamingGif} alt="gamingGif" />
                                        <h3 className="aboutme-title">Gaming</h3>
                                        <p className="aboutme-description">I have been an avid gamer since my childhood and have always been fascinated by the immersive worlds and thrilling challenges offered by video games.
                                            Gaming has not only been a source of entertainment for me but has also taught me valuable lessons in teamwork, strategy, and persistence.
                                            To this day, I still enjoy gaming in my free time as a way to unwind and continue to explore new and exciting virtual worlds.</p>
                                    </div>
                                </a>

                                <a>
                                    <div className="aboutme-card" >
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
                    )}
                </div>
            )}


            {isMobile && (
                <div>
                    <h1 id='aboutme' >{aboutme}</h1>
                    <div className="aboutme-cards-container">
                        <div className="aboutme-cards">
                            <a className="aboutme-link" href="https://github.com/theDevin8" target="_blank">
                                <div className="aboutme-card">
                                    <img className="coding-gif" src={codingGif} alt="codingGif" />
                                    <h3 className="aboutme-title">Programming</h3>
                                    <p className="aboutme-description">
                                    There's nothing quite like the thrill of diving headfirst into a complex coding challenge and emerging victorious with a finely 
                                    crafted solution. As a passionate coder, I relish the opportunity to turn lines of code into powerful tools that can make a real difference in the world.
                                    </p>
                                    <p className="github">"Tap to view my projects"</p>

                                </div>
                            </a>
                            <a className="aboutme-link" href="https://discord.com/users/733158227335708672" target="_blank">
                                    <div className="aboutme-card" >
                                        <img className="tutor-gif" src={tutorGif} alt="tutorGif" />
                                        <h3 className="aboutme-title">Tutoring</h3>
                                        <p className="aboutme-description">
                                            I am a passionate programming tutor who enjoys sharing my knowledge of Python and C++. 
                                            Through tutoring, I have honed my ability to communicate complex ideas clearly, developed my technical skills, and learned the value of patience
                                            and persistence in helping students reach their full potential.
                                        </p>
                                        <p className="tutor">"Tap if in need of a tutor"</p>

                                    </div>
                            </a>
                            <a className="aboutme-link" href="https://youtu.be/BWmkWGnx7UE" target="_blank">
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
                            <a>
                                    <div className="aboutme-card" >
                                        <img className="gaming-gif" src={gamingGif} alt="gamingGif" />
                                        <h3 className="aboutme-title">Gaming</h3>
                                        <p className="aboutme-description">
                                            Growing up, I was captivated by the immersive worlds and exciting challenges of video games, and have remained an avid gamer to this day. 
                                            Gaming has not only provided me with endless entertainment but also valuable lessons in teamwork, strategy, and perseverance that I continue to apply in my life.
                                        </p>
                                    </div>
                                </a>
                            <a>
                                    <div className="aboutme-card" >
                                        <img className="anime-gif" src={animeGif} alt="animeGif" />
                                        <h3 className="aboutme-title">Anime</h3>
                                        <p className="aboutme-description">
                                            I deeply love anime and its various genres, such as action, romance, and slice of life, because of the creative and unique stories, 
                                            complex characters, emotional depth, and the broadening of my worldview through gaining insights into different cultures and perspectives.
                                        </p>
                                    </div>
                            </a>
                          
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Aboutme