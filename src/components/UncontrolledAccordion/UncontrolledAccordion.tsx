import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)

    return <div style={{marginTop: "30px"}}>
        <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
        {!collapsed && <AccordionBody/>}
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