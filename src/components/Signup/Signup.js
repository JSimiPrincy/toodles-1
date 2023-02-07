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