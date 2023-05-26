import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ScrollReveal from "scrollreveal";
import './learn.css'


const Learn = () => {

    useEffect(() => {
        ScrollReveal().reveal(".learn-element", {
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
        <div>
            {!isMobile && (
                <div>
                    <div className="learn-element">
                        <h1 className="coming-soon"> Coming Soon </h1>
                        <p className="learnMore-p">
                            Here, you'll find a collection of short stories and writings about my life,
                            including my passions, experiences, inspirations, and more. I hope these stories provide you with insights
                            and a deeper understanding of who I am as a person. Enjoy reading!
                        </p>

                        <Link to='/' className="back-button">
                            <div className="email-button">Devin Stockton</div>
                        </Link>

                    </div>
                </div>
            )}
            {isMobile && (
                <div>
                    <div className="learn-element">
                        <h1 className="coming-soon"> Coming Soon </h1>
                        <p className="learnMore-p">
                            Here, you'll find a collection of short stories and writings about my life,
                            including my passions, experiences, inspirations, and more. I hope these stories provide you with insights
                            and a deeper understanding of who I am as a person. Enjoy reading!
                        </p>

                        <Link to='/' className="back-button">
                            <div className="email-button">Devin Stockton</div>
                        </Link>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Learn;