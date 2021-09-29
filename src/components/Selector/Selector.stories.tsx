import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Selector, SelectorPropsType } from './Selector';

export default {
    component: Selector,
    title: 'Components/Selector',
} as Meta;

const Template: Story<SelectorPropsType> = (args) => {

    let arr = [
        { title: "Minsk", value: "1" },
        { title: "Kiew", value: "2" },
        { title: "Moscow", value: "3" }
    ]
    let [value, setValue] = useState<string | null>("1")

    return <Selector {...args} value={value} onChange={setValue} items={arr} />
};

export const WithValue = Template.bind({});

const Template2: Story<SelectorPropsType> = (args) => {

    let arr = [
        { title: "Minsk", value: "1" },
        { title: "Kiew", value: "2" },
        { title: "Moscow", value: "3" }
    ]
    let [value, setValue] = useState<string | null>(null)

    return <Selector {...args} value={value} onChange={setValue} items={arr} />
};

export const WithoutValue = Template2.bind({});