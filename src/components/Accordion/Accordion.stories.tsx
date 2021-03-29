import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: 'Accordion stories',
    component: Accordion,
} as Meta;

const callback = action("accordion mode change event fired")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({})

MenuCollapsedMode.args = {
    title: "Menu",
    collapsed: true,
    setCollapsed: callback
}

export const UsersUnCollapsedMode = Template.bind({})

UsersUnCollapsedMode.args = {
    title: "Users",
    collapsed: false,
    setCollapsed: callback
}

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState(true)
    return <Accordion title={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}/>
}
