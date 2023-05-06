import React, { useState, useEffect } from "react";
import './skills.css'
import skillsGif from '../../gifs/skills.gif';
import cpp from '../../img/cpp.png';
import javascript from '../../img/javascript.png';
import mysql from '../../img/mySql.png';
import python from '../../img/python.png';

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
    return(
        <>
            <h1 id="skills">{skills}</h1>
            <div className="skills-container">
                <h2 className="skills-title">{"<programming languages />"}</h2>
                <div className="list-skills">
                    <img className="skill-icon" src={cpp} alt="cpp.png" />
                    <h3 className="programming-lang">C++ programming</h3>
                    <img className="skill-icon" src={python} alt="python.png"/>
                    <h3 className="programming-lang">Python programming</h3>
                </div>
                <div className="list-skills">
                    <img className="skill-icon" src={javascript} alt="javascript.png"/>
                    <h3 className="programming-lang">Javascript programming</h3>
                    <img className="skill-icon" src={mysql} alt="mySql.png"/>
                    <h3 className="programming-lang">MySQL</h3>
                </div>

            </div>
        </>
    )
}

export default Skills