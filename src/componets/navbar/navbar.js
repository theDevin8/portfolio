import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";


import './navbar.css';

function Navbar() {

    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };

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
        <nav className='navbar'>
            {!isMobile && (
                <div className='navbar-container '>
                    <div className='left-box'>
                        <div className='Iam'>
                            <p>Hello, I am</p>
                            <b>
                                <div className='innerIam'>
                                    Devin Stockton.<br />
                                    a programmer.<br />
                                    a student. <br />
                                    a soccer player.<br />
                                    a gamer.<br />
                                </div>
                            </b>
                        </div>

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

                    </div>

                    <div className='nav-tabs'>
                        <Link to="#webpage-element" className='webpage-nav' onClick={handleScroll}>
                            <h1 className='nav-item'>{'Home'}</h1>
                        </Link>
                        <Link to='#aboutme' className="aboutme-nav" onClick={handleScroll}>
                            <h1 className='nav-item'>{'About'}</h1>
                        </Link>
                        <Link to='#projects' className='projects-nav' onClick={handleScroll}>
                            <h1 className='nav-item'>{'Projects'}</h1>
                        </Link>
                        <Link to='#contact' className='skills-nav' onClick={handleScroll}>
                            <h1 className='nav-item'>{'Contact'}</h1>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
export default Navbar;