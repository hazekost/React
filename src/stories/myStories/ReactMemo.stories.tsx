import React from "react";
import { useState } from "react";

export default {
    title: "React.memo Demo"
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log("count rendered");
    return <div>{props.count}</div>
}

const Users = React.memo((props: { users: Array<string> }) => {
    console.log("users rendered");

    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})

const App = () => {

    let [count, setCount] = useState(0)
    let [users, setUsers] = useState(["Igor", "Sveta", "Dima", "Eugen"])

    const addUser = () => {
        setUsers([...users, "Sveta"])
    }

    return <div>
        <button onClick={() => setCount(count + 1)}>inc</button>
        <button onClick={addUser}>addUser</button>
        <NewMessagesCounter count={count} />
        <Users users={users} />
    </div>
}

const Template = () => <App />

export const ReactMemo = Template.bind({})