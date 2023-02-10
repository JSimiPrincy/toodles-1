import React from "react";
import "./Signup.css";
import Login from "./Login/Login";
import {useHistory} from "react-router-dom";

const Signup = () => {
    const history = useHistory();
    return (
        <div>
            <div className="signup-main">
                <h3 className="signup-header">Creating efficient scheduling for you</h3>
                <img className="signup-img" src="https://s3-alpha-sig.figma.com/img/4111/2eda/2fb981487c819b9904bd9277450a7376?Expires=1676851200&Signature=VqxHMFcaeAv9RVT4I45mTslsyc~fciLCX614XMpxyZWIm0fjX90pqKJAmBNDPVU9V0iLmhi2IRCD21TUefomN7KghN6tAvMi8uQc4B18yQhaFJH3kFEbo-IMXD8S~qhv6uYuP6WllrIQ2Ta45NjywKHGCeDfyP9z0dAKSDzIkquJ7sQCKInp9cUunUJ9L6MJzTjZOXck8YELJz0TUN0gISl8VGmXUtUzNbEao~QfQHoug9oJD4xeFGQ-HDRmdvZaGIb6ZIAHwYikz~ES66NfahL9x0Ltot2IEzZTpTTLITz1GhgZhxAby~qxg85~S35B16QFMeZXYr3oIPbLFzxeqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <button className="login" onClick={() =>history.push('/Login')}>Login</button>
                <button className="signin" onClick={() =>history.push('/Login')}>Signup</button>
            </div>
            <div className="Login">
                <Login />
            </div>
        </div>
    );
}

export default Signup;