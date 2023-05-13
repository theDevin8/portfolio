import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import './contact.css';
import mail from '../../img/mail-icon.png';
import linkedin from '../../img/linkedin-icon.png';
import discord from '../../img/discord-icon.png';

const Contact = () =>{
    const [contact, setcontact] = useState("");

    useEffect(() => {
        const message = "<contact me/>";
        const typeMessage = () => {
            let i = 0;
            const intervalId = setInterval(() => {
                setcontact(message.substring(0, i));
                i++;
                if (i > message.length) {
                    clearInterval(intervalId);
                }
            }, 50);
        };

        typeMessage();

        const resetMessage = () => {
            setcontact("");
            typeMessage();
        };
        const intervalId = setInterval(resetMessage, 4000);
        return () => {
            clearInterval(intervalId);
        };

    }, []);

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

    return(
        <div className="contact-element">
            {!isMobile && (
                <div>
                    <h1 id="contact">{contact}</h1>
                    <div className="overall-me">
                        <p className="description">
                            Looking to slide into my DMs? My contact me page is the perfect spot to do just that! It's the virtual equivalent of a handshake and a smile, a place where you can reach out and say hi.
                            Whether you want to connect for professional networking or just shoot the breeze, my contact me page is the perfect place to start.
                            So come on down and drop me a line - who knows where our conversation could take us!
                        </p>
                    </div>

                    <div className="list-to-contact">
                        <div className="contact-icon-container">
                            <a href="mailto:devinstockton2003@gmail.com">
                                <img className="contact-icon" src={mail} alt="mail.png" />
                            </a>
                            <h2 className="contact-title">Email</h2>

                        </div>
                        <div className="contact-icon-container">
                            <a href="https://www.linkedin.com/in/devin-stockton-25846a252/" target="_blank" rel="noreferrer">
                                <img className="contact-icon" src={linkedin} alt="linkedin.png" />
                            </a>
                            <h2 className="contact-title">LinkedIn</h2>
                        </div>
                        <div className="contact-icon-container">
                            <a href="https://discord.com/users/733158227335708672" target="_blank" rel="noreferrer">
                                <img className="contact-icon" src={discord} alt="discord.png" />
                            </a>
                            <h2 className="contact-title">Discord</h2>
                        </div>
                    </div>
                    <p className="description-p">© Created by Devin Stockton</p>
                    <p className="credits">{'This work is based on "Parasite eyeball - blender file" (https://sketchfab.com/3d-models/parasite-eyeball-blender-file-a8ac67648d6a4e25a90f757b90a89f01) by ewa_podermanska (https://sketchfab.com/ewapodermanska) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)'}</p>
                    <p className="credits">{'This work is based on "Kraken eyeball - blender file" (https://sketchfab.com/3d-models/kraken-eyeball-blender-file-9af20edc176c460391d1948356c339b7) by ewa_podermanska (https://sketchfab.com/ewapodermanska) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)'}</p>
                </div>
            )}
            {isMobile && (
                <div>
                    <h1 id="contact">{contact}</h1>
                    <div className="overall-me">
                        <p className="description">
                            Looking to slide into my DMs? My contact me page is the perfect spot to do just that! It's the virtual equivalent of a handshake and a smile, a place where you can reach out and say hi.
                            Whether you want to connect for professional networking or just shoot the breeze, my contact me page is the perfect place to start.
                            So come on down and drop me a line - who knows where our conversation could take us!
                        </p>
                    </div>

                    <div className="list-to-contact">
                        <div className="contact-icon-container">
                            <a href="mailto:devinstockton2003@gmail.com">
                                <img className="contact-icon" src={mail} alt="mail.png" />
                            </a>
                            <h2 className="contact-title">Email</h2>

                        </div>
                        <div className="contact-icon-container">
                            <a href="https://www.linkedin.com/in/devin-stockton-25846a252/">
                                <img className="contact-icon" src={linkedin} alt="linkedin.png" />
                            </a>
                            <h2 className="contact-title">LinkedIn</h2>
                        </div>
                        <div className="contact-icon-container">
                            <a href="https://discord.com/users/733158227335708672">
                                <img className="contact-icon" src={discord} alt="discord.png" />
                            </a>
                            <h2 className="contact-title">Discord</h2>
                        </div>
                    </div>
                    <p className="description-p">© Created by Devin Stockton</p>
                    <p className="credits">{'This work is based on "Parasite eyeball - blender file" (https://sketchfab.com/3d-models/parasite-eyeball-blender-file-a8ac67648d6a4e25a90f757b90a89f01) by ewa_podermanska (https://sketchfab.com/ewapodermanska) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)'}</p>
                    <p className="credits">{'This work is based on "Kraken eyeball - blender file" (https://sketchfab.com/3d-models/kraken-eyeball-blender-file-9af20edc176c460391d1948356c339b7) by ewa_podermanska (https://sketchfab.com/ewapodermanska) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)'}</p>
                </div>
            )}
        </div>
    )
}
export default Contact