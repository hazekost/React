import React, {useEffect, useState} from "react";
import {setInterval} from "timers";

export default {
    title: "useEffect Demo"
}

export const SimpleExample = () => {
    console.log("SimpleExample")

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("useEffect")
        document.title = counter.toString()
    }, [counter])

    return <>
        {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log("SetTimeoutExample")

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return <>
        counter: {counter}
    </>
}