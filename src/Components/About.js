import React from "react";
import convocationPic from "../Assets/convocation.png";
import netlify from "../Assets/netlify.png";
import github from "../Assets/github.png";
import react_logo from "../Assets/react.png";

const About = () => {
    return(
        <div className="about_container">
            <div className="green_text about_heading">About Me</div>
            <div style={{display:"flex"}}>
            <img className="about_image" src={convocationPic} alt="convocation" width="350px"/>
                <div className="about_para">
                    <p className="about_para_text">
                        I'm Full-Stack Developer and Cyber Security enthusiast, I'm still a fresher looking for opportunities where my skills are fully utilized and I can grow with a friendly working environment.
                        I've completed my Engineering in 2021 in Information Technology from Mumbai University. Completed group academic projects and individual projects having experience in HTML, CSS, JS (MERN Stack) and C++.
                    </p>
                    <br />
                    <p className="about_para_text">
                        I like reading about new technology, Stock market and Web 3.0. If I'm not in front of my desktop then you'll find me playing
                        cricket, reading or playing CSGO.
                    </p>
                </div>
            </div>
            <div className="about_technologies">
                <div className="about_tech_heading">
                Technologies
                </div>
                <div>
                <img className="about_tech_images" src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png" alt="tech stack" />
                <img className="about_tech_images" src={netlify} alt="netlify" />
                <img className="about_tech_images" src={react_logo} alt="react" />
                <img className="about_tech_images" src={github} alt="github" />
                </div>
            </div>
        </div>
    )
}

export default About;