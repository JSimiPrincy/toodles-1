import React from "react";
import "./Contact.css";
import {Twitter,Facebook,Instagram} from "@material-ui/icons"

const Contact = () => {
    return (
        <div className="contact-main">
            <div>
                <img className="contact" src="https://s3-alpha-sig.figma.com/img/6745/f01c/694661c93334bc7223989ed311bdfe04?Expires=1676851200&Signature=WSXleuf81eTV5A7XvYV-DDQUsDCZbjPE0qUZ8Nk71pr6IcNMy~Gwe74qTj0I2w~DoTiOGx1scyNlWTqZLpclSG3laYrKo536jR5yJzBifOSq1vnFR-i8ACVqZjVTEPvJWDIG5oxNzzHtbzS9OM-LJgroFYxiqkL8p8ROmdvC20v144UYCpea7fwlNAzSjaS2oZtvYdi-lYfOIpglWewILow2hRnH-PeEYLDVqtUjQ-7bczJDhKns4VrcG1gXIO-U5YeSduUKsKkfF6RzNhDeHj7Ok05SR2hq88GTYtxIhBSCR0enZQvFJS7K2gsmvHR2zG0hvQnrjLznn0pZpCjZyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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