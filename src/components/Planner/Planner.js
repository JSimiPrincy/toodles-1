import React from "react";
import {useHistory} from "react-router-dom"
import "./Planner.css"
import Calender from "./Calender/Calender"

const Planner = () => {
    const history = new useHistory();
    return (
        <div className="planner-main">
            <button className="btn-4" onClick={() => history.push('/Planner')}>Calendar</button>
            <button className="btn-5" onClick={() => history.push("/Conference")}>Conferencing</button>
            <div>
                <Calender />
            </div>
            
        </div>
    );
}

export default Planner;