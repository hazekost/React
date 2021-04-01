import React, {useReducer} from "react";
import {reducer} from "./reducer";

type UncontrolledAccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [state, dispatch] = useReducer(reducer, {collapsed: true})

    return <div style={{marginTop: "30px"}}>
        <AccordionTitle title={props.title}
                        setCollapsed={() => dispatch({type: "TOGGLE-COLLAPSED", collapsed: !state.collapsed})}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.setCollapsed()
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