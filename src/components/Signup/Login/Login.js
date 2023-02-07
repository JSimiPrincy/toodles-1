import { CheckBox } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";
import { OldSocialLogin as SocialLogin } from "react-social-login";
import {FcGoogle} from "react-icons/fc";
import {SiFacebook} from "react-icons/si";
import {SlSocialTwitter} from "react-icons/sl";
import "./Login.css";


const handleSocialLogin = (user,err) => {
    console.log(user);
    console.log(err);
 }
const Login = () => {
    return (
        <div>
            <div className="login-main">
                <h3 className="login-head">Login</h3>
                <TextField label="Enter your email or username"
                className="email-1"
                autoFocus
                required
                />
                <TextField label="Enter password"
                className="password-1"
                autoFocus
                required
                />
                <TextField label="Enter mobile number"
                className="mobile-1"
                autoFocus
                required
                />
                <CheckBox className="remember" label="Remember me"><h6>Remember me</h6></CheckBox>
                <button className="login-1" onClick={() => alert('submitted')}>Login</button>
                <h4 className="or">or</h4>
                <button className="sign-1" onClick={() => alert('submitted')}>Sign in</button>
                <SocialLogin
                provider="google"
                callback={handleSocialLogin}>
                    <FcGoogle className="google" />
                </SocialLogin>
                <SocialLogin
                provider="facebook"
                callback={handleSocialLogin}>
                    <SiFacebook className="facebook" />
                </SocialLogin>
                <SocialLogin
                provider="twitter"
                callback={handleSocialLogin}>
                    <SlSocialTwitter className="twitter" />
                </SocialLogin>

            </div>
        </div>
    )
}

export default Login;