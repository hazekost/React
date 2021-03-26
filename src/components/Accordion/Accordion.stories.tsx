import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: Accordion
};

export const CollapsedMode = () => <Accordion title={"Menu"} collapsed={true} setCollapsed={action("un collapse")}/>
export const UnCollapsedMode = () => <Accordion title={"Menu"} collapsed={false} setCollapsed={action("collapse")}/>
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState(true)
   return <Accordion title={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}/>
}
