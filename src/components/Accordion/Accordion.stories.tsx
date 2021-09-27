
import { Story, Meta } from '@storybook/react';
import { Accordion, AccordionPropsType } from "./Accordion";

export default {
    component: Accordion,
    title: 'Components/Accordion',
    argTypes: {
        setCollapsed: { action: "clicked" }
    }
} as Meta;


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const Collapsed = Template.bind({});

Collapsed.args = {
    title: "Collapsed",
    collapsed: true
};

export const UnCollapsed = Template.bind({});

UnCollapsed.args = {
    title: "UnCollapsed",
    collapsed: false
};