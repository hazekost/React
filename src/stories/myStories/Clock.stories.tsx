import { useEffect, useState } from "react";

export default {
    title: "Clock Demo",
}

const getDigitString = (num: number) => num < 10 ? `0${num}` : num

const Clock = () => {

    let [date, setDate] = useState(new Date())

    useEffect(() => {
        let intervalid = setInterval(() => {
            console.log("interval");
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalid)
        }
    }, [])

    return <div>
        <span>{getDigitString(date.getHours())}</span>
        :
        <span>{getDigitString(date.getMinutes())}</span>
        :
        <span>{getDigitString(date.getSeconds())}</span>
    </div>
}


const Template = () => <Clock />

export const ClockExample = Template.bind({})