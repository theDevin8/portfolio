import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './navbar/navbar';
import Webpage from "../pages/Webpage/webpage";
import Aboutme from "../pages/aboutme/aboutme";
import Projects from "../pages/projects/projects";
import Skills from "../pages/skills/skills";

const Layout = () => {
    return (
      <>
        <Navbar />
        <Webpage />
        <Aboutme />
        <Projects />
        <Skills />
        <Outlet />
      </>
    );
  };
  
  export default Layout;