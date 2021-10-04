import { useMemo, useState } from "react"

export default {
    title: "useMemo Demo"
}

const Ex1 = () => {

    let [a, setA] = useState(3)
    let [b, setB] = useState(3)

    let resA = 1
    let resB = 1

    resA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let Fake = 0
            resA *= i
            while (Fake < 100000000) {
                Fake += 1
                const FakeValue = Math.random()
            }
        }
        return resA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resB *= i
    }

    return <div>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
        <hr />
        <div>
            Result A: {resA}
        </div>
        <div>
            Result B: {resB}
        </div>
    </div>
}

const Template = () => <Ex1 />

export const UseMemo = Template.bind({})