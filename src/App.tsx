import { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';

type AppTitlePropsType = {
    title: string
}

export function App() {

    let [value, setValue] = useState(0);
    let [collapsed, setCollapsed] = useState(false);
    let [on, setOn] = useState(false);

    return (
        <div className={"App"}>
            <AppTitle title={"This is App Component"} />
            <Rating value={value} setValue={setValue} />
            <Accordion title={"Controlled"} collapsed={collapsed} setCollapsed={setCollapsed} />
            <OnOff on={on} setOn={setOn} />
        </div>
    );
}

function AppTitle(props: AppTitlePropsType) {
    return <h3>{props.title}</h3>
}