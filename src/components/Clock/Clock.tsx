import React, {useEffect, useState} from "react";

type PropsType = {}

const getTime = (time: number) => {
    return time < 10 ? "0" + time : time
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

    return <div>
        <span>{getTime(date.getHours())}</span>
        :
        <span>{getTime(date.getMinutes())}</span>
        :
        <span>{getTime(date.getSeconds())}</span>
    </div>
}