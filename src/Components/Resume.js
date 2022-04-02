import React from "react";
import resume_photo from "../Assets/resume_photo.jpg";
import twitter from "../Assets/twitter.png";
import linkedin from "../Assets/linkedin.png";
import github from "../Assets/github.png";

const Resume = () => {
    return(
        <div className="resume_main_container">
            <div className="resume_heading color_green ">My Resume</div>
            <div className="flex_container">
            <div className="inner_container">
                <div className="resume_experience ">
                    <h2 className="resume_section_title color_green">Education</h2>
                    <hr />
                    <div className="resume_engineerin resume_section_title">
                        <h2 className="color_green"><p className="centerdot">.</p>Mumbai University</h2>
                        <h3 className="color_green resume_margin">Bachelor of Engineering in Information Technology (2017-2021)</h3>
                        <p className="resume_margin">Completed Engineering in 2021 learnt about how Technologies work theory and practical</p>
                    </div>
                    <div className="resume_hsc resume_section_title">
                        <h2 className="color_green"><p className="centerdot">.</p>Maharashtra State Board </h2>
                        <h3 className="color_green resume_margin">HSC in Science (2015-2017)</h3>
                        <p className="resume_margin">I had opted for PCM/B so learnt about Biology as well so I know maths as well as biology</p>
                    </div>
                    <div className="resume_ssc resume_section_title">
                        <h2 className="color_green"><p className="centerdot">.</p>Maharashtra State Board</h2>
                        <h3 className="color_green resume_margin">SSC (2014-2015)</h3>
                        <p className="resume_margin">This was first Stepping Stone from here on my Journey began to become a IT engineer</p>
                    </div>
                </div>
                </div>
                <div className="resume_image_container">
                <img className="resume_display" src={resume_photo} alt="resume" width="400px"/>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <a href="https://www.linkedin.com/in/brahmaraj-rathod/"><img src={linkedin} alt="LinkedIn" width="50px"/></a>
                <a href="https://twitter.com/brahmarajrathod"><img src={twitter} alt="Twitter" width="50px"/></a>
                <a href="https://github.com/Brahmaraj"><img src={github} alt="GitHUb" width="50px"/></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;