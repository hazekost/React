import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';

type AppTitlePropsType = {
    title: string
}

export function App() {

    return (
        <div className={"App"}>
            <AppTitle title={"This is App Component"} />
            <Rating />
            <Accordion title={"Menu"} />
        </div>
    );
}

function AppTitle(props: AppTitlePropsType) {
    return <h3>{props.title}</h3>
}