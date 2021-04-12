import React from "react";
import {ClockViewPropsType} from "./Clock";

const getTime = (time: number) => {
    return time < 10 ? "0" + time : time
}
export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{getTime(date.getHours())}</span>
        :
        <span>{getTime(date.getMinutes())}</span>
        :
        <span>{getTime(date.getSeconds())}</span>
    </>
}