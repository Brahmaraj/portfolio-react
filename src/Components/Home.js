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
                    <button className="home_button home_button_blue">Hire Me</button>
                    <button className="home_button home_button_yellow" >Get Resume</button>
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