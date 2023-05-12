import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    
    const handleScroll = (event) =>{
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };
    
    const [isOpen, setIsOpen] = useState(false);
    const [navbar_class, setNavbarClass] = useState("navbar-bar unclicked");
    const [isMobile, setIsMobile] = useState(false);
    

    useEffect(() => {
        const checkIsMobile = () => {
            const width = window.innerWidth;
            setIsMobile(width >= 320 && width <= 496); //change this later
            console.log(width);
        };

        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);
    
    const handleToggle = () => {
        if(!isOpen){
            setNavbarClass("navbar-bar clicked")
        } else{
            setNavbarClass("navbar-bar unclicked")
        }
        setIsOpen(!isOpen);
        
    };
   
    return (
        <nav className='navbar'>
            {isMobile && (
                <div className='navbar-container'>
                    {/*navbar not on click */}
                        <div className="navbar-menu" onClick={handleToggle}>
                            <div className={navbar_class} />
                            <div className={navbar_class} />
                            <div className={navbar_class} />
                        </div>

                        <div className='Iam'>
                            <p className='navbar-greeting'>Hello World, I am</p>
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
                    
                    {/*navbar on click */}
                    {isOpen && (
                        <div className='navbar-mobile-menu'>
                            <Link to='#aboutme' className='nav-item' onClick={handleScroll} >
                                {'About Me'}
                            </Link>
                            <Link to='#projects' className='nav-item' onClick={handleScroll}>
                                {'Projects'}
                            </Link>
                            <Link to='#skills' className='nav-item' onClick={handleScroll}>
                                {'Skills'}
                            </Link>
                            <Link to='#contact' className='nav-item' onClick={handleScroll}>
                                {'Contact Me'}
                            </Link>
                        </div>
                    )}
                </div>
            )}
            
            {!isMobile && (
                <div className='navbar-container'>
                    <div className='nav-tabs'>
                        <Link to='#aboutme' className = "aboutme-nav" onClick={handleScroll}>
                            <h1 className='nav-item'>{'About Me'}</h1>
                        </Link>
                        <Link to='#projects' className='projects-nav' onClick={handleScroll}>
                            <h1 className='nav-item'>{'Projects'}</h1>
                        </Link>
                        <Link to='#skills' className='skills-nav' onClick={handleScroll}>
                            <h1 className='nav-item'>{'Skills'}</h1>
                        </Link>
                        <Link to='#contact' className='skills-nav' onClick={handleScroll}>
                            <h1 className='nav-item'>{'Contact Me'}</h1>
                        </Link>
                    </div>
                </div>
            )}

        </nav>   
    )
}
export default Navbar;