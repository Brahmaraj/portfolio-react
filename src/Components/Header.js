import React from "react";

const Header = () => {
    return (
        <div className="header_navbar">
            <div className="green_text header_text">Brahmaraj Rathod</div>
            <div className="header_navbar_button_container">
                <a href="#home" className="header_navbar_button">Home</a>
                <a href="#about" className="header_navbar_button">About</a>
                <a href="#portfolio" className="header_navbar_button">Portfolio</a>
                <a href="#resume" className="header_navbar_button">Resume</a>
                <a href="#contact" className="header_navbar_button">Contact</a>
            </div>
        </div>
    )
}

export default Header;