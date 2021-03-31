import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: "Select",
    component: Select
}

const callback = action("some item was clicked")

export const WithValue = () => {
    const [value, setValue] = useState("1")

    return <Select
        setValue={setValue}
        value={value}
        items={[
            {value: "1", title: "Moscow"},
            {value: "2", title: "Kiev"},
            {value: "3", title: "Minsk"}
        ]}/>
}

export const WithoutValue = () => <Select
    setValue={callback}
    items={[
        {value: "1", title: "Moscow"},
        {value: "2", title: "Kiev"},
        {value: "3", title: "Minsk"}
        ]}/>