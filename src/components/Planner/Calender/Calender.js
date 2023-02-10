import React from "react";
import {Scheduler} from "@aldabil/react-scheduler";

const Calender = () => {
  return (
    <Scheduler
    view="week"
    selectedDate={new Date(2023,8,2)}
    />
  )
}

export default Calender;