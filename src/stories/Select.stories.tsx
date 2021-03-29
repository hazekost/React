import React, {ChangeEvent, useState} from "react";

export default {
    title: "select"
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string|undefined>(undefined)
    const ChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <select value={value} onChange={ChangeHandler}>
        <option>none</option>
        <option value={"1"} >Moscow</option>
        <option value={"2"} >Kiev</option>
        <option value={"3"} >Minsk</option>
    </select>
}