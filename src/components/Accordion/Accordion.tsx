import React from "react";

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (value: boolean) => void
    items: Array<ItemType>
    onClick: (value: any) => void
}

export const Accordion = React.memo((props: AccordionPropsType) => {
    return <div style={{marginTop: "30px"}}>
        <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
})

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    return <h3 onClick={onClickHandler}>--{props.title}--</h3>
})

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

const AccordionBody = React.memo((props: AccordionBodyPropsType) => {
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
})