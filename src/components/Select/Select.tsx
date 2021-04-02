import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    items: Array<ItemType>
    setValue: (value: string) => void
    value?: string
}

export const Select: React.FC<SelectPropsType> = React.memo((props) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.setValue(pretendentElement.value)
                        return;
                    }
                }
            }
            if (selectedItem) {
                props.setValue(props.items[0].value)
            }
        }
        if (e.key === "Enter" || "Escape") {
            setActive(false)
        }
    }

    return (
        <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
            <span className={s.main} onClick={() => setActive(!active)}>{selectedItem?.title}</span>
            {active && <SelectOptions selectedItem={hoveredItem} items={props.items} setActive={setActive}
                                      setHoveredElementValue={setHoveredElementValue} setValue={props.setValue}/>}
        </div>
    )
})

type SelectOptionsPropsType = {
    items: Array<ItemType>
    setValue: (value: string) => void
    setActive: (value: boolean) => void
    selectedItem?: ItemType
    setHoveredElementValue: (value: string) => void
}

const SelectOptions: React.FC<SelectOptionsPropsType> = React.memo((props) => {

    const clickHandler = (value: string) => {
        props.setValue(value)
        props.setActive(false)
    }

    return (
        <div className={s.items}>
            {props.items.map(i => <div className={s.item + " " + (props.selectedItem === i ? s.selected : "")}
                                       onMouseEnter={() => props.setHoveredElementValue(i.value)}
                                       key={i.value}
                                       onClick={() => clickHandler(i.value)}>{i.title}</div>)}
        </div>
    )
})