import React, { useCallback } from "react";
import { useState } from "react";

export default {
    title: "useCallback Demo"
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log("count rendered");
    return <div>{props.count}</div>
}

const Users = React.memo((props: { books: Array<string>, addBook: () => void }) => {
    console.log("books rendered");

    return <div>
        <button onClick={props.addBook}>Add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
    </div>
})

const App = () => {

    let [count, setCount] = useState(0)
    let [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    const addBook = useCallback(() => {
        setBooks([...books, "Angular " + new Date().getTime()])
    }, [books])

    return <div>
        <button onClick={() => setCount(count + 1)}>inc</button>
        <NewMessagesCounter count={count} />
        <Users books={books} addBook={addBook} />
    </div>
}

const Template = () => <App />

export const UseCallback = Template.bind({})