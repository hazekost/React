import { useState, KeyboardEvent, useEffect } from "react";
import s from "./Selector.module.css"

type ItemType = {
    value: string
    title: string
}
export type SelectorPropsType = {
    value: string | null
    items: Array<ItemType>
    onChange: (value: string | null) => void
}

export const Selector: React.FC<SelectorPropsType> = (props) => {

    let [active, setActive] = useState(false)
    let [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    let selectedItem = props.items.find(i => i.value === props.value)
    let hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    let index = e.key === "ArrowDown" ? i + 1 : i - 1
                    if (props.items[index]) {
                        props.onChange(props.items[index].value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return <div className={s.selector} onKeyUp={onKeyUp} tabIndex={0} >
        <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
        {active && <div className={s.items}>
            {
                props.items.map(i => {
                    const itemClicked = () => {
                        props.onChange(i.value)
                        setActive(false)
                    }
                    const onMouseEnterHandler = () => setHoveredElementValue(i.value)
                    return <div key={i.value}
                        onMouseEnter={onMouseEnterHandler}
                        className={`${s.item} ${hoveredItem === i ? s.selected : ""}`}
                        onClick={itemClicked}>{i.title}</div>
                })
            }
        </div>}
    </div>
}