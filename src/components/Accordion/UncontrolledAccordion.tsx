import { useReducer } from "react"

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}
export type AccordionPropsType = {
    title: string
}

type ActionType = {
    type: "TOGGLE-COLLAPSED"
}

export const reducer = (state: { collapsed: boolean }, action: ActionType): { collapsed: boolean } => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return { ...state, collapsed: !state.collapsed }
        default:
            return state
    }
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [state, dispatch] = useReducer(reducer, { collapsed: true })

    return <div>
        <AccordionTitle title={props.title} setCollapsed={() => dispatch({ type: "TOGGLE-COLLAPSED" })} />
        {!state.collapsed && <AccordionBody />}
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