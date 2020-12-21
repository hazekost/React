import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

export function App() {
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"Users"}/>
            <Accordion title={"Menu"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props: {title: string}) {
    return (
        <h1>{props.title}</h1>
    )
}