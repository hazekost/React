import React, {useState} from "react";

export default {
    title: "useState Demo"
}

function generateData() {
    console.log("rand")
    return Math.round(Math.random() * 100)
}

export const Example1 = () => {
    console.log("Ex1")

    const [counter, setCounter] = useState(generateData)


    return <>
    <button onClick={() => setCounter((state) => state + 1)}>+</button>
        {counter}
    </>
}