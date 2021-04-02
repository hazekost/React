import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "Use Memo"
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA
    let resultB = 1

    resultA = useMemo(() => {
        let res = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeRand = Math.random()
            }
            res *= i
        }
        return res
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

type UsersType = {
    users: Array<string>
}

const Users = React.memo((props: UsersType) => {
    console.log("Users render")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})

export const HelpsToReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<Array<string>>(["Ler", "Lex", "Len"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("r") > -1)
    }, [users])

    const AddUser = () => {
        setUsers([...users, "Sveta"])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={AddUser}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}