import {useState} from "react";
import React from "react";

export default {
    title: "React memo"
}

const NewMessagesCounter = React.memo((props: { count: number }) => {
    console.log("Counter render")
    return <div>{props.count}</div>
})

type UsersType = {
    users: Array<string>
}

const Users = React.memo((props: UsersType) => {
    console.log("Users render")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})

export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<Array<string>>(["Ler", "Lex", "Len"])

    const AddUser = () => {
        setUsers([...users, "Sveta"])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={AddUser}>Add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}