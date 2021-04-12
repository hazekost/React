import React, {useEffect, useState} from "react";
import {clearInterval, setInterval} from "timers";

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

export const SetIntervalExample = () => {
    console.log("SetTimeoutExample")

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        counter: {counter}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("Component rendered with " + counter)

    useEffect(() => {
        console.log("Effect occurred: " + counter)

        return () => {
            console.log("Reset Effect " + counter)
        }
    }, [counter])

    return <>
        counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")
    console.log("Component rendered with " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((text) => text + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState("")
    console.log("Component rendered with " + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("Timeout Expired")
            setText("3 second passed")
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}
