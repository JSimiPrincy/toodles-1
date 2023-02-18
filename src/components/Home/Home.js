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
               <img className="home-1" src="https://s3-alpha-sig.figma.com/img/54f5/ca4b/58ccceb1de582f359596198c668eebbb?Expires=1677456000&Signature=Zka5VxkKFC0xd9lkKt07wpzDiP11PQ4MYlB4KMtDdYYjwPHZ7oC9PWwYuwApWpTcxlwhrb4idcWFeGREipfYxOlT~WftPHrX4SnLGvJGbh6Bh1ZIMjsEhlK1VwB5FcYFDuvWyfsAU0nk4loZHIGOTgJOGC22d4N8BJCB-p79knZqr-mdcEx7zMj8svxhof6AIzz7jM6t-C1Jsk62SKGZ9q~wBlMw1fuv-zPyhsJMB937YD0m7HYUKOeRG3cumTS0nZEFw1LzHV0FXCxANs6vjSKTsZaw7ti77L9a2LcfqSsOkdRIG8YOVe7J4v5rQdCH8iPd3sRNHQ1iUJLCiBor0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
               where we left off </h3>
               <img className="lets" src="https://s3-alpha-sig.figma.com/img/a79b/0b38/2d9906936d958135c514e7d8816a6246?Expires=1676851200&Signature=Vzy4i5dJKUaIva7S8drqGl4cZHLPnTQtIkNA-Zl7l8mEXQkfGR6vl91Yw2CqnN9FDF2fqjojR-j8deQbMOeFajWlHHo7BxpcAN9RhY0lSIW~TKLOWgNT3ltqg-kPw~DV~9UKBq7K50rhYA~q4k89M7wOATZ3XlTLpTVl7u0kGIskowrUB-vvXF9hDviOzhC1J5uB3ae2LmGNJnKixFm54ciyQzkoUYvQ13Ua1x0Wc~66VzRIdvUXBYblusy-AQI4oZekiEL0zQ6ox70ku5gCmzzwtO4Ta76jepVGf2aVS8J4GGgMPQztA2azN7tJK~1E0zf56nlji9I2aZflwYoZhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
                <img className="home-3" src="https://s3-alpha-sig.figma.com/img/2895/4a4c/fa0358d946ad5631b1df8551af686e1f?Expires=1677456000&Signature=WDz4pKQUX6428jFHhzrm9ZddHHIScdL~4ymziEQGJQsL5dYyZ5A3Svb~j-Vc6jnWANhm3eIEGHdPJUWoOKW9d0tkQwvuhrjLlo6zoXPyK~l8HPkGG8brJ4eNRtC2ML7T1ikOsyidRpswdoMsiMMEbfn1aKAqEfgn14uauZeEO2nKBPOgRsuRPwn-AThZuvb~A9J8MldDQ6vItFltNFot3dRYvrDjSKySg0obVy8jbDwwtWRMcPRcvbd9u4iWaYzO~dHkPZhXWXm31aDCeFAFx7TkCkdVUcr1dihrA57UYjMCK-UnAmdVUzwo07AY-cSS~5Ff1T0p2XvxGhw6wtvLcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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