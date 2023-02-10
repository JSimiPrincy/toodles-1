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
               <img className="home-1" src="https://s3-alpha-sig.figma.com/img/54f5/ca4b/58ccceb1de582f359596198c668eebbb?Expires=1676851200&Signature=Bmenz9aRSf8SD-xeWlAmaZx3mLAz5Nn5pksfuuO5YKO4jNWkj5yIQd8qKd7~syl0upjsP~DH~hDyUL26fo-QmIa--o5WBpSGvxFWE0iXgv0m~TgiR9j0Pfw-zpBFvcVAE68N5Gf8vOxQteUBjp7pJg1HYYMU5O49YLRJsJQibfYzhcMAI73dfgE~VO9iTNJ4AIvB7rLx2eANp3xngGsDvAtZ7-rqreOD5oe0XZ2ZBE4MiztCOjaFDaSJ4dOzMSw55aKkK8F2xCihkMujZazPF1QicRrC8B9uXnsozv8PlytriOLM1Lntf3fvetdisUaHHU5Cor4O0798UGfOgEE~xQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
                <img className="home-3" src="https://s3-alpha-sig.figma.com/img/2895/4a4c/fa0358d946ad5631b1df8551af686e1f?Expires=1676851200&Signature=fDALEgmf~4W0gVtoBUrknC3V-epRZKtDjrPCP7ZJ~xpTSDYTK1NE7N381p3zZI3Oc5bK69V19EaO8Xu1Ghh~ht8NEtcfkmFbwNzIVpLyxiEB2C6gda0GUKY1jTXkSVnzF68QLwQcHeGOQ0PRKIlp3e24wMKqowPkiTPdi40AsxN9Y-yMGsgV2B2Makzj0FCd6MNUBBg6fzFKnS5r8UnI0oomrZ1ZZtjWvyKozl26Ul2GnjHPjSoN1Zw0IE7BZjA5pS9Ym~2X2dHRWSr31QorlA9GPC4KO2oSeTibyQe14LjHLwAkESgrhUpWYsIJnudeHfgDeg3Ztq9ZKnGMWjUdZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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