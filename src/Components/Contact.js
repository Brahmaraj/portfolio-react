import React from "react";
import mail from "../Assets/mail.png";
import location from "../Assets/location.jpg";
import phone from "../Assets/phone.jpg";

const Contact = () => {
    return (
        <div className="contact_container">
            <div className="contact_heading resume_heading">Contact Me</div>
            <div className="contact_form_container">
                <div className="contact_details">
                    <h2 className="color_green contact_form_title">Let's connect</h2>
                    <br />
                    <br />
                    <p className="contact_para">let's connect, always up for a good conversation and can share our journey and bad decisions without judging xD.</p>
                    <br />
                    <p className="contact_para">I love talking about New Technology, Cyber Security and Web 3.0 related stuff. Interested in Stock Market, Crypto Currency, Fitness, Fashion and Adventures</p>
                    <br />
                    <br />
                    <div className="contact_grey_text" style={{display:"grid",gridTemplateColumns:"40px 300px",alignItems:"center"}}>
                        <img src={mail} alt="mail" width="25px"/> brahmarajrathod@gmail.com
                        <br />
                        <img src={phone} alt="phone" width="25px"/> 8108210821
                        <br />
                        <img src={location} alt="location" width="25px"/> Mulund East, Mumbai - 400081.
                    </div>
                </div>
                <div className="contact_form">
                    <h2 className="color_green contact_form_title">Send me a message</h2>
                    <div className="contact_margin">
                    <label>
                        First & Last name: <span style={{color:"red"}}>*</span>
                        <br />
                        <input className="form_input" type="text" required/>
                    </label>
                    </div>
                    <br />
                    <div className="contact_margin">
                    <label>
                        Phone number: <span style={{color:"red"}}>*</span>
                        <br />
                        <input className="form_input" type="number" required minLength="10"/>
                    </label>
                    </div>
                    <br />
                    <div className="contact_margin">
                    <label>
                        Email address: <span style={{color:"red"}}>*</span>
                        <br />
                        <input className="form_input" type="email" required/>
                    </label>
                    </div>
                    <br />
                    <div className="contact_margin">
                    <label>
                        message: <span style={{color:"red"}}>*</span>
                        <br />
                        <textarea style={{height:"60px"}} className="form_input" required placeholder="type message"/>
                    </label>
                    </div>
                    <button className="contact_send_button">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;