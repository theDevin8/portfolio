import React, { useState, useEffect } from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import './contact.css';


const Contact = () => {
    useEffect(() => {
        ScrollReveal().reveal(".contact-element", {
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

    return (
        <div className="contact-element">
            {!isMobile && (
                <div>
                    <h1 id="contact">{'Contact Me'}</h1>
                    <div className="icons-box">
                        <a href="https://github.com/theDevin8">
                            <FaGithub className='icons' />
                        </a>
                        <a href="mailto:devinstockton2003@gmail.com" >
                            <FaEnvelope className='icons' />
                        </a>
                        <a href="https://www.linkedin.com/in/devin-stockton-25846a252/">
                            <FaLinkedin className='icons' />
                        </a>
                    </div>
                    <div className="overall-me">
                        <p className="description">
                            Looking to slide into my DMs? My contact me page is the perfect spot to do just that! It's the virtual equivalent of a handshake and a smile, a place where you can reach out and say hi.
                            Whether you want to connect for professional networking or just shoot the breeze, my contact me page is the perfect place to start.
                            So come on down and drop me a line - who knows where our conversation could take us!
                        </p>
                        <div>
                            <a href="mailto:devinstockton2003@gmail.com" className="email-button"><FaEnvelope className="mail-icon" />Email Me</a>
                        </div>
                    </div>


                    <p className="description-p">© Created by Devin Stockton</p>

                </div>
            )}
            {isMobile && (
                <div>
                    <h1 id="contact">{'Contact Me'}</h1>
                    <div className="icons-box">
                        <a href="https://github.com/theDevin8">
                            <FaGithub className='icons' />
                        </a>
                        <a href="mailto:devinstockton2003@gmail.com" >
                            <FaEnvelope className='icons' />
                        </a>
                        <a href="https://www.linkedin.com/in/devin-stockton-25846a252/">
                            <FaLinkedin className='icons' />
                        </a>
                    </div>
                    <div className="overall-me">
                        <p className="description-contact">
                            Looking to slide into my DMs? My contact me page is the perfect spot to do just that! It's the virtual equivalent of a handshake and a smile, a place where you can reach out and say hi.
                            Whether you want to connect for professional networking or just shoot the breeze, my contact me page is the perfect place to start.
                            So come on down and drop me a line - who knows where our conversation could take us!
                        </p>
                        <div>
                            <a href="mailto:devinstockton2003@gmail.com" className="email-button"><FaEnvelope className="mail-icon" />Email Me</a>
                        </div>
                    </div>


                    <p className="credits">© Created by Devin Stockton</p>
                </div>
            )}
        </div>
    )
}
export default Contact