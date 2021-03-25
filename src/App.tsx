import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

export function App() {

    const [value, setValue] = useState(0)
    const [collapsed, setCollapsed] = useState(true)
    const [on, setOn] = useState(false)

    return (
        <div className={"App"}>
            <AppTitle title={"This is App component"}/>
            <Rating value={value} setValue={setValue}/>
            <Accordion title={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <OnOff on={on} setOn={setOn}/>
            <UncontrolledAccordion title={"Settings"}/>
            <UncontrolledRating/>
            <UncontrolledOnOff/>
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    return <h1>{props.title}</h1>
}