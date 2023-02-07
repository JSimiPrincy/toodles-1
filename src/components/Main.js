import React from "react";
import "./Main.css";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./Home/Home";
import Planner from "./Planner/Planner";
import Signup from "./Signup/Signup";
import Contact from "./Contact/Contact";
import Login from "./Signup/Login/Login";
import Navbar from "./Navbar/Navbar";

const Main = () => {
    return (
        <div className="master">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/planner" exact component={Planner} />
                    <Route path="/Contact" exact component={Contact} />
					<Route path="/Signup" exact component={Signup} />
					<Route path="/Login" exact component={Login} />
				</Switch>
			</Router>
		</div>
    );
}

export default Main;
