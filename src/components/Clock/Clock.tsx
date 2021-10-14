import { useEffect, useState } from "react";
import s from "./Clock.module.css"

export type ClockPropsType = {
    mode: "analog" | "digital"
}

export const Clock: React.FC<ClockPropsType> = (props) => {

    let [date, setDate] = useState(new Date())

    useEffect(() => {
        let intervalid = setInterval(() => {
            console.log("interval");
            setDate(new Date())
        }, 1000)
        return () => {
            console.log("interval clear");

            clearInterval(intervalid)
        }
    }, [])

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date} />
            break
        case "digital":
        default:
            view = <DigitalClockView date={date} />
    }
    return <div>
        {view}
    </div>
}

type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {

    const getDigitString = (num: number) => num < 10 ? `0${num}` : num

    return <>
        <span>{getDigitString(date.getHours())}</span>
        :
        <span>{getDigitString(date.getMinutes())}</span>
        :
        <span>{getDigitString(date.getSeconds())}</span>
    </>
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({ date }) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return <div className={s.clock}>
        <div className={s.analogClock}>
            <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
            <div className={`${s.dial} ${s.minutes}`} style={minutesStyle} />
            <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
        </div>
    </div>
}