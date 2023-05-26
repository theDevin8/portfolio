import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from './navbar/navbar';
import Webpage from "../pages/Webpage/webpage";
import Aboutme from "../pages/aboutme/aboutme";
import Projects from "../pages/projects/projects";
import Contact from "../pages/contact/contact";
import './layout.css';

const Layout = () => {
  useEffect(() => {
    const intro = document.querySelector('.intro');
    const logo = document.querySelector('.logo-header');
    const logoSpan = document.querySelectorAll('.logo');

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 50);
        });
      }, 2000);

      setTimeout(() => {
        intro.style.top = '-100vh';
      }, 2300);
    }, 0);
  }, []);

  return (
    <div>
      <div className="intro">
        <h1 className="logo-header">
          <span className="logo">Devin</span>
          <span className="logo">Stockton.</span>
          <br />
        </h1>
      </div>
      <header>
        <Navbar />
        <Webpage />
        <Aboutme />
        <Projects />
        <Contact />
        <Outlet />
      </header>
    </div>
  );
};

export default Layout;
