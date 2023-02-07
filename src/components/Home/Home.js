import React from "react";
import {useHistory } from "react-router-dom";
import "./Home.css";
import Contact from "../Contact/Contact";

const Home = () => {
    const history = useHistory();
    return (
        <div>
            <div className="main" >
               <h3 className="header">Hi, Welcome to toodles.</h3>
               <div>
                   <p className="content">
                   Write a paragraph that talks about your company here.
                   You can talk about your company's background, history, 
                   mission, vision, or philosophy. Anything that will introduce 
                   your brand's persona to your clients. This will help build a 
                   connection between you and them, that hopefully leads to a 
                   working relationship.
                   </p>
                </div>
            </div>
            <div className="main-1">
               <h3 className="header-1">Ok, lets start 
               where we left off.</h3>
               <div>
                   <p className="content-1">
                   Use this space to share the blurb of your latest game. 
                   Share the main premise, the gameplay concept, and whatever 
                   sets your game apart. Keep it short, intriguing, and exciting 
                   enough to keep the players wanting more and ready to press 
                   "Add to Cart."
                   </p>
                </div>
                <button className="btn ">Lets get started</button>
            </div>
            <div className="main-2">
                <h3 className="header-2">Scheduling is now one click away</h3>
                <button className="btn-1" onClick={() => history.push('/Contact')}>GET IN TOUCH</button>
                <div>
                    <p className="content-2">
                        Toodles. Provides complete access 
                        to the workflows of our students' parents 
                        and faculties.
                    </p>
                </div>
            </div>
            <div className="last">
                <Contact />
            </div>
        </div>
    );
}

export default Home;