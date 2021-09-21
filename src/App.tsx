import { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { UncontrolledAccordion } from './components/Accordion/UncontrolledAccordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';
import { UncontrolledRating } from './components/Rating/UncontrolledRating';

type AppTitlePropsType = {
    title: string
}

export function App() {

    let [value, setValue] = useState(0);
    let [collapsed, setCollapsed] = useState(false);

    return (
        <div className={"App"}>
            <AppTitle title={"This is App Component"} />
            <Rating value={value} setValue={setValue} />
            <UncontrolledRating />
            <UncontrolledAccordion title={"Menu"} />
            <Accordion title={"List"} collapsed={collapsed} setCollapsed={setCollapsed} />
            <OnOff />
        </div>
    );
}

function AppTitle(props: AppTitlePropsType) {
    return <h3>{props.title}</h3>
}