import React, { useState, useEffect } from "react";
import './webpage.css'

const Webpage = () => {
    const [welcomeMessage, setWelcomeMessage] = useState("");
    useEffect(() =>{
        const message = "Hello world!";
        const typeMessage = () =>{
            let i = 0;
            const intervalId = setInterval(() => {
                setWelcomeMessage(message.substring(0,i));
                i++;
                if( i> message.length){
                    clearInterval(intervalId);
                }
            }, 50);
        };

        typeMessage();

        const resetMessage = () => {
            setWelcomeMessage("");
            typeMessage();
        };
        const intervalId = setInterval(resetMessage, 4000);
        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return (
        <div>
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
    )
}

export default Webpage