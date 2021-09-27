import { Story, Meta } from '@storybook/react';
import { OnOff, OnOffPropsType } from './OnOff';

export default {
    component: OnOff,
    title: 'Components/OnOff',
    argTypes: {
        setOn: { action: "clicked" }
    }
} as Meta;

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;

export const on = Template.bind({});

on.args = {
    on: true
};

export const off = Template.bind({});

off.args = {
    on: false
};