import React from "react";
import "./Contact.css";
import {Twitter,Facebook,Instagram} from "@material-ui/icons"

const Contact = () => {
    return (
        <div className="contact-main">
            <div>
                <img className="contact" src="https://s3-alpha-sig.figma.com/img/6745/f01c/694661c93334bc7223989ed311bdfe04?Expires=1677456000&Signature=TcLWHmiSZtBOTM5ZxCuBIMy9fSTzUimznGZaW-cCYQ80wos6xpTmDCR4O0HKG0CTWjZn13Dwfij3RhooE6Hs5m0zPEniAEe0ggGJK~PB4CpPrbhiDcERDbzJPaEqU4EouQslntjaq2jf6HDIrDXhxFHzM-mB1hbfq6c3DcAxlO5n5MIxRrpbuSs5uoxm~FHz0LegwUAM0I4FA0cmrHArpR39QgESmLERdX75enjpkG4m6mteZ1kQwrAvBTEbMdabPlKx4PdaVyTV490EXtEuwmhcPgrNCRd-xX6G4Os4XzreVyaonvEY6GD-OqAg0dq7C584ZNmrAFwYvc4D7i9SLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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