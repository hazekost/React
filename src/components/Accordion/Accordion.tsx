type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}
export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.title} setCollapsed={() => props.setCollapsed(!props.collapsed)} />
        {!props.collapsed && <AccordionBody />}
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