import React from "react";
import "./Contact.css";
import {Twitter,Facebook,Instagram} from "@material-ui/icons"

const Contact = () => {
    return (
        <div className="contact-main">
            <div>
            <h4 className="contact-header">Toodles.</h4>
            <h4 className="contact-header-1">Let’s talk Planning!</h4>
            </div>
            <button className="email"><b className="email-id">EMAIL</b></button>
            <p className="email-n">hello@reallygreatsite.com</p>
            <button className="phone"><b className="phone-id">PHONE</b></button>
            <p className="phone-n">(123) 456-7890</p>
            <button className="social"><b className="social-id">SOCIAL</b></button>
           <div className="icons">
            <Facebook className="facebook" />
            <Instagram className="instagram" />
            <Twitter className="twitter" />
           </div>
           </div>
    );
}

export default Contact;