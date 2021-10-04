import React, { useMemo } from "react";
import { useState } from "react";

export default {
    title: "Help to React.memo"
}

const Users = React.memo((props: { users: Array<string> }) => {
    console.log("users rendered");

    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})

const App = () => {
    console.log("Helps to React.memo");


    let [count, setCount] = useState(0)
    let [users, setUsers] = useState(["Igor", "Sveta", "Dima", "Eugen"])

    let filteredUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    let addUser = () => {
        setUsers([...users, "Lera" + new Date().getTime()])
    }

    return <div>
        <button onClick={() => setCount(count + 1)}>inc</button>
        <button onClick={addUser}>AddUser</button>
        {count}
        <Users users={filteredUsers} />
    </div>
}

const Template = () => <App />

export const HelpToReactMemo = Template.bind({})