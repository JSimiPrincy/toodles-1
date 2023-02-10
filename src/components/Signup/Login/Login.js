import { CheckBox } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import { GoogleLogin} from "@react-oauth/google";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password,phone);
        setEmail("");
        setPassword("");
        setPhone("");
        history.push("/Planner");
    }

    const responseMessage = (response) => {
        console.log(response);
        history.push("/Planner");
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div>
            <div className="login-main">
                <h3 className="login-head">Login</h3>
                <img className="login-img" src="https://s3-alpha-sig.figma.com/img/95ef/97a9/7a459e171d236f40dc791ce091992187?Expires=1676851200&Signature=OYYvojebTWV0awJ04y3CUs5G8DhmaozR~3CadwvEQR-o~IFI1ks6D2wt3ygGbnnWeLMbAvaH-1WWDq9JZEglNyPS1ZDu8B-sXzkAeFXxnOejiC64vF-0bw6MZMoWM0nFPMiAwIrfe6u8b7a6CtBXtWNKtYQWCxB2zl3DgI-ZIlaNUEGLkxwwFEirNYD3f3fKRRelz5fnfKzQg4KVbqHMSFUxBwR3ws1lM~84uo~x36llrz89rD0kFJfo8ln4zBnBkiKve8GlJe7wafe1OqPmCtFXiV66mP6LZ6MrHBSyPdHrLnV4~cotcF4MrI~AQGRPqxUdlJJr23gBMzcNBfmd6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <TextField type='text'
                id="email"
                value={email}
                label="Enter your email or username"
                className="email-1"
                autoFocus
                required
                onChange={(e) => setEmail(e.target.value)}
                />
                <TextField type="text"
                id="password"
                value={password}
                label="Enter password"
                className="password-1"
                autoFocus
                required
                onChange={(e) => setPassword(e.target.value)}
                />
                <TextField type="phone"
                id="phone"
                value={phone}
                label="Enter mobile number"
                className="mobile-1"
                autoFocus
                required
                onChange={(e) => setPhone(e.target.value)}
                />

                <CheckBox className="remember" label="Remember me"><h6>Remember me</h6></CheckBox>
                <button className="login-1" onClick={handleSubmit}>Login</button>
                <h4 className="or">or</h4>
                <button className="sign-1" onClick={() => alert('submitted')}>Sign in with</button>
                <div className="google">
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                </div>
                
                

            </div>
        </div>
    )
}

export default Login;