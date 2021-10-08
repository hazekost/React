import { useEffect, useState } from "react";

export default {
    title: "useEffect Demo"
}

const App = () => {
    console.log("Simple Example");

    let [count, setCount] = useState(0)

    useEffect(() => {        /* useEffect срабатывает только после отрисовки компоненты */
        console.log("use effect every rerender");
    })
    useEffect(() => {
        console.log("use effect only first render");
    }, [])
    useEffect(() => {
        console.log("use effect first render and every count change");
    }, [count])

    return <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
}

const Template = () => <App />

export const SimpleExample = Template.bind({})

const App2 = () => {
    console.log("SetInterval Example");

    let [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            console.log("set interval");
            setCount(state => state + 1) // если передать (count + 1), то будет передаваться старое значение из замыкания
        }, 1000)
    }, [])

    return <div>
        {count}
        <div>
            {new Date().getHours()} : {new Date().getMinutes()} : {new Date().getSeconds()}
        </div>
    </div>
}

const Template2 = () => <App2 />

export const SetTimeoutExample = Template2.bind({})