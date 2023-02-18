import React from "react";
import {useHistory} from "react-router-dom"
import "./Planner.css"
import Monthview from "./monthview";
import Dayview from "./dayview";
import Weekview from "./weekview";
import Notes from "../Notes/Notes";



const Planner = () => {
    const history = new useHistory();
    return (
        <div className="planner-main">
            <div className="notes">
                <Notes />
            </div>
            
            <button className="btn-4" onClick={() => history.push('/Planner')}>Calendar</button>
            <button className="btn-5" onClick={() => history.push('/Dayview')}>DayView</button>
            <button className="btn-6" onClick={() => history.push('/Weekview')}>WeekView</button>
            <button className="btn-7" onClick={() => history.push('/Monthview')}>MonthView</button>
            <button className="btn-8" onClick={() => history.push("/Conference")}>Conferencing</button>
            
            <div className="month">
                <Monthview />
            </div>
            
        </div>
    );
}

export default Planner;