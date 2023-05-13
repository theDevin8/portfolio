import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import './skills.css'
import cpp from '../../img/cpp.png';
import javascript from '../../img/javascript.png';
import mysql from '../../img/mySql.png';
import python from '../../img/python.png';
import matlab from '../../img/matlab.png';
import rstudio from '../../img/rstudio.png';
import css from '../../img/css.png';
import html from '../../img/html.png';

import vscode from '../../img/vscode.png';
import git from '../../img/git.png';
import github from '../../img/github.png';
import react from '../../img/react.png';
import node from '../../img/node.png';


const Skills = () => {
    const [skills, setskills] = useState("");

    useEffect(() => {
        const message = "<skills/>";
        const typeMessage = () => {
            let i = 0;
            const intervalId = setInterval(() => {
                setskills(message.substring(0, i));
                i++;
                if (i > message.length) {
                    clearInterval(intervalId);
                }
            }, 50);
        };

        typeMessage();

        const resetMessage = () => {
            setskills("");
            typeMessage();
        };
        const intervalId = setInterval(resetMessage, 4000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        ScrollReveal().reveal(".skill-element", {
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
            setIsMobile(width >= 320 && width <= 428); //change this later
            console.log(width);
        };

        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
      }, []);

    return(
        <div className="skill-element">
            {!isMobile && (
                <div>
                    <h1 id="skills">{skills}</h1>
                    <div className="skills-container">
                        <h2 className="skills-title">{"Programming Languages"}</h2>

                        <div className="list-skills">
                            <img className="skill-icon" src={cpp} alt="cpp.png" />
                            <h3 className="programming-lang">C++ programming</h3>
                            <img className="skill-icon" src={python} alt="python.png" />
                            <h3 className="programming-lang">Python programming</h3>
                            <img className="skill-icon" src={javascript} alt="javascript.png" />
                            <h3 className="programming-lang">Javascript programming</h3>

                        </div>

                        <div className="list-skills">
                            <img className="skill-icon" src={html} alt="html.png" />
                            <h3 className="programming-lang">HTML</h3>
                            <img className="skill-icon" src={css} alt="css.png" />
                            <h3 className="programming-lang">CSS</h3>
                            <img className="skill-icon" src={mysql} alt="mySql.png" />
                            <h3 className="programming-lang">MySQL</h3>
                            <img className="skill-icon" src={matlab} alt="matlab.png" />
                            <h3 className="programming-lang">MatLab</h3>
                            <img className="skill-icon" src={rstudio} alt="rstudio.png" />
                            <h3 className="programming-lang">R-studio</h3>
                        </div>

                        <h2 className="skills-title">{"Frameworks & Tools"}</h2>
                        <div className="list-skills">

                            <img className="skill-icon" src={vscode} alt="vscode.png" />
                            <h3 className="programming-lang">Visual Studio Code</h3>
                            <img className="skill-icon" src={git} alt="git.png" />
                            <h3 className="programming-lang">Git</h3>
                            <img className="skill-icon" src={github} alt="github.png" />
                            <h3 className="programming-lang">GitHub</h3>
                            <img className="skill-icon" src={react} alt="react.png" />
                            <h3 className="programming-lang">React.js</h3>
                            <img className="skill-icon" src={node} alt="node.png" />
                            <h3 className="programming-lang">Node.js</h3>
                        </div>
                    </div>
                </div>
            )}

            {isMobile &&(
                <div>
                    <h1 id="skills">{skills}</h1>
                    <div className="skills-container">
                        <h2 className="skills-title">{"Programming Languages"}</h2>

                        <div className="list-skills">
                            <img className="skill-icon" src={cpp} alt="cpp.png" />
                            <h3 className="programming-lang">C++ programming</h3>
                            <img className="skill-icon" src={python} alt="python.png" />
                            <h3 className="programming-lang">Python programming</h3>
                            <img className="skill-icon" src={javascript} alt="javascript.png" />
                            <h3 className="programming-lang">Javascript programming</h3>

                        </div>

                        <div className="list-skills">
                            <img className="skill-icon" src={html} alt="html.png" />
                            <h3 className="programming-lang">HTML</h3>
                            <img className="skill-icon" src={css} alt="css.png" />
                            <h3 className="programming-lang">CSS</h3>
                            <img className="skill-icon" src={mysql} alt="mySql.png" />
                            <h3 className="programming-lang">MySQL</h3>
                            <img className="skill-icon" src={matlab} alt="matlab.png" />
                            <h3 className="programming-lang">MatLab</h3>
                            <img className="skill-icon" src={rstudio} alt="rstudio.png" />
                            <h3 className="programming-lang">R-studio</h3>
                        </div>

                        <h2 className="skills-title">{"Frameworks & Tools"}</h2>
                        <div className="list-skills">

                            <img className="skill-icon" src={vscode} alt="vscode.png" />
                            <h3 className="programming-lang">Visual Studio Code</h3>
                            <img className="skill-icon" src={git} alt="git.png" />
                            <h3 className="programming-lang">Git</h3>
                            <img className="skill-icon" src={github} alt="github.png" />
                            <h3 className="programming-lang">GitHub</h3>
                            <img className="skill-icon" src={react} alt="react.png" />
                            <h3 className="programming-lang">React.js</h3>
                            <img className="skill-icon" src={node} alt="node.png" />
                            <h3 className="programming-lang">Node.js</h3>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default Skills