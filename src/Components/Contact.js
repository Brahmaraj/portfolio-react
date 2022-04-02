import React from "react";

const Contact = () => {
    return (
        <div className="contact_container">
            <div className="contact_heading resume_heading">Contact Me</div>
            <div className="contact_form_container">
                <div className="contact_details">
                    <h2 className="color_green contact_form_title">Let's connect</h2>
                    <br />
                    <br />
                    <p>let's connect, always up for a good conversation and can share our journey and bad decisions without judging xD.</p>
                    <br />
                    <p>I love talking about New Technology, Cyber Security and Web 3.0 related stuff. Interested in Stock Market, Crypto Currency, Fitness, Fashion and Adventures</p>
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