import React, {useCallback, useState} from "react";

export default {
    title: "Use Callback"
}

type BooksType = {
    addBook: () => void
}

const Books = React.memo((props: BooksType) => {
    console.log("Books render")
    return <div><button onClick={props.addBook}>Add book</button></div>
})

export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState<Array<string>>(["React", "JS", "CSS", "HTML"])

    const AddBook = useCallback(() => {
        setBooks([...books, "TS"])
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={AddBook}/>
    </>
}