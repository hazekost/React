import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: 'Accordion stories',
    component: Accordion,
} as Meta;

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")
const items = [{title: "Max", value: 1}, {title: "Leen", value: 2}, {title: "Ler", value: 3}]

const Template: Story<AccordionPropsType> = (args) => {
    return <Accordion {...args}/>
}

export const MenuCollapsedMode = Template.bind({})

MenuCollapsedMode.args = {
    title: "Menu",
    collapsed: true,
    setCollapsed: callback,
    items: [],
    onClick: onClickCallback
}

export const UsersUnCollapsedMode = Template.bind({})

UsersUnCollapsedMode.args = {
    title: "Users",
    collapsed: false,
    setCollapsed: callback,
    items: items,
    onClick: onClickCallback
}

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState(true)
    return <Accordion items={items} onClick={(value) => alert(value)}
                      title={"Items"} collapsed={collapsed} setCollapsed={setCollapsed}/>
}
