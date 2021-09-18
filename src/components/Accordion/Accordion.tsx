import { useState } from "react"

type AccordionPropsType = {
    title: string
}
type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.title} setCollapsed={() => setCollapsed(!collapsed)} />
        {!collapsed && <AccordionBody />}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {

    const onClickHandler = () => props.setCollapsed()

    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}