import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import darkmodeimg from '../../img/toggle-dark-mode.png';
import linkedIn from '../../img/linkedin-icon.png';
import github from '../../img/github-icon.png';
import twitter from '../../img/twitter-icon.png';
import mail from '../../img/mail-icon.png';
import discord from '../../img/discord-icon.png';
import resume from '../../img/resume-icon.png';

function Navbar() {
    const handleScroll = (event) =>{
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };
    const [greetingIndex, setGreetingIndex] = useState(0);
    const greetings = [
        'Hello, I am Devin Stockton!',
        '¡Hola, soy Devin Stockton!',
        'Bonjour, je suis Devin Stockton!',
        'Ciao, sono Devin Stockton!',
        'Hallo, ik ben Devin Stockton!'
    ];
    const delay = 2000;
    const duration = 600;

    useEffect(() => {
        const timeoutId = setTimeout(() =>{
            setGreetingIndex((greetingIndex + 1) % greetings.length);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, [greetingIndex, greetings.length]);


    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='nav-tabs'>
                    <Link to='#aboutme' classname = "aboutme-nav" onClick={handleScroll}>
                        <h1 className='nav-item'>{'<about me/>'}</h1>
                    </Link>
                    <Link to='#projects' className='projects-nav' onClick={handleScroll}>
                        <h1 className='nav-item'>{'<projects/>'}</h1>
                    </Link>
                    <Link to='#skills' className='skills-nav' onClick={handleScroll}>
                        <h1 className='nav-item'>{'<skills/>'}</h1>
                    </Link>
                    
                    <h1 className='nav-item'>{'<contact me/>'}</h1>
                </div>

                <div className="greeting-container">
                {greetings.map((greeting, index) => (
                    <div key={greeting} className={`greeting ${index === greetingIndex ? 'active' : ''}`} style={{ transition: `opacity ${duration}ms ease-in-out` }}>
                        {greeting}
                    </div>
                ))}
                </div>

                <div className="toogle-container">
                    <img className="darkmode-img" src={darkmodeimg} alt='toggle-dark-mode-img' />
                    <p className="darkmode-text">Toggle Dark Mode</p>
                </div>

                <div className="links-to-me">
                    <a href="https://www.linkedin.com/in/devin-stockton-25846a252/">
                        <img className="icons-to-me" src={linkedIn} alt="linkedin-icon" />
                    </a>
                    <a href="mailto:devinstockton2003@gmail.com">
                        <img className="icons-to-me" src={mail} alt="email-icon" />
                    </a>
                    <a href="https://github.com/theDevin8">
                        <img className="icons-to-me" src={github} alt="github-icon" />
                    </a>
                    <a href="https://twitter.com/devinsxx">
                        <img className="icons-to-me" src={twitter} alt="twitter-icon" />
                    </a>
                    <a href="https://discord.com/users/733158227335708672">
                        <img className="icons-to-me" src={discord} alt="discord-icon" />
                    </a>

                    <img className="icons-to-me" src={resume} alt="resume-icon" />
                </div>

            </div>
        </nav>   
    )
}
export default Navbar;