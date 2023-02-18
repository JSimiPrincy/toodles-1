import React from "react";
import "./Main.css";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Signup/Login/Login";
import Signup from "./Signup/Signup";
import Contact from "./Contact/Contact";
import Planner from "./Planner/Planner";
import Conference from "./conference/Conference";
import Navbar from "./Navbar/Navbar";
import Dayview from "./Planner/dayview";
import Monthview from "./Planner/monthview";
import Weekview from "./Planner/weekview";



const Main = () => {
    return (
        <div className="master">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
                    <Route path="/Contact" exact component={Contact} />
					<Route path="/Signup" exact component={Signup} />
					<Route path="/Login" exact component={Login} />
					<Route path="/Planner" exact component={Planner} />
					<Route path="/Dayview" exact component={Dayview} />
					<Route path="/Monthview" exact component={Monthview} />
					<Route path="/Weekview" exact component={Weekview} />
					
					<Route path="/Conference" exact component={Conference} />
				</Switch>
			</Router>
		</div>
    );
}

export default Main;
