import { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { UncontrolledAccordion } from './components/Accordion/UncontrolledAccordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';
import { Sidebar } from './components/Sidebar/Sidebar';

type AppTitlePropsType = {
    title: string
}

export function App() {

    let [value, setValue] = useState(0);
    let [collapsed, setCollapsed] = useState(false);
    let [on, setOn] = useState(false);

    return (
        <div className={"App"}>
            <Sidebar />
            {/* <AppTitle title={"This is App Component"} />
            <Rating value={value} setValue={setValue} />
            <Accordion title={"Controlled"} collapsed={collapsed} setCollapsed={setCollapsed} />
            <OnOff on={on} setOn={setOn} />
            <UncontrolledAccordion title={"Uncontrolled Accordion Whith Reducer"} /> */}
        </div>
    );
}

function AppTitle(props: AppTitlePropsType) {
    return <h3>{props.title}</h3>
}