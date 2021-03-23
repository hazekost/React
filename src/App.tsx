import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

export function App() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [collapsed, setCollapsed] = useState(true)

    return (
        <div className={"App"}>
            <AppTitle title={"This is App component"}/>
            <Rating value={value1} setValue={setValue1}/>
            <Accordion title={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Rating value={value2} setValue={setValue2}/>
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    return <h1>{props.title}</h1>
}