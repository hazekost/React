import React from "react";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (value: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return <div style={{marginTop: "30px"}}>
        <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    return <h3 onClick={onClickHandler}>--{props.title}--</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}