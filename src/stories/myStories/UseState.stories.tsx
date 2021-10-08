import React from "react";
import { useState } from "react";

export default {
    title: "useState Demo"
}

function generateData() {
    console.log("generate data");

    return 561684351384
}

const App = React.memo(() => {
    console.log("Example");

    let [count, setCount] = useState(generateData) /*useState может принимать внешнюю функцию
                                                     которая вернёт инициализационное значение*/
    return <div>
        <button onClick={() => setCount(state => state + 1)}>inc</button> {/* setCount может принимать функцию 
                                                                            (берёт актуальное значение стейта) */}
        <div>{count}</div>
    </div>
})

const Template = () => <App />

export const ReactMemo = Template.bind({})