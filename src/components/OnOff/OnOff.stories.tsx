import React, {useState} from 'react';
import {OnOff} from './OnOff'
import {action} from "@storybook/addon-actions";

export default {
    title: 'On Off stories',
    component: OnOff
};

export const OffMode = () => <OnOff on={false} setOn={action("on or off clicked")}/>
export const OnMode = () => <OnOff on={true} setOn={action("on or off clicked")}/>
export const ModeChanging = () => {
    const [on, setOn] = useState(false)
    return <OnOff on={on} setOn={setOn}/>
}
