import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: "digital" | "analog"
}
export type ClockViewPropsType = {
    date: Date
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        console.log("useEffect")
        const intervalID = setInterval(() => {
            console.log("Tick")
            setDate(new Date())
        }, 1000)

        return () => {
            console.log("kill interval")
            clearInterval(intervalID)
        }
    }, [])

    let view

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}