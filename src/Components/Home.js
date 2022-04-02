import React from "react";
import myPhoto from "../Assets/mydisplay.jpg";
import bgWave from "../Assets/wave.svg";

const Home = () => {

   return(
        <div className="home_container">
            <div className="home_inner_container1">
                <div className="home_yellow_text">Hi, I am Brahmaraj Rathod</div>
                <div className="home_bold_text">A Full-Stack Developer</div>
                <div className="home_para">Turning your imagination into website</div>
                <div className="home_buttons">
                    <a href="mailto:brahmarajrathod@gmail.com?subject=Interested in hiring you"><button className="home_button home_button_blue">Hire Me</button></a>
                    <a href="https://drive.google.com/file/d/10GNK8rjlSLQMqLQTSn0FpigLj6Bs0Oqj/view?usp=sharing"><button className="home_button home_button_yellow" >Get Resume</button></a>
                </div>
            </div>
            <div className="home_image_container">
                <img src={myPhoto} alt="my display" width="400px"/>
            </div>
            <div className="home_wave_container">
                <img src={bgWave} alt="wave" width="100%"/>
            </div>
        </div>
    )
}

export default Home;