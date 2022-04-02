import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import "../Styles/style.css";

const Display = () => {
    return(
        <>
        <Header />
        <div id="home"></div>
        <Home />
        <div id="about"></div>
        <About />
        <div id="portfolio"></div>
        <Portfolio />
        <div id="resume"></div>
        <Resume />
        <div id="contact"></div>
        <Contact />
        <Footer />
        </>
    )
}

export default Display;