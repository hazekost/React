import { Story, Meta } from '@storybook/react';
import { Rating, RatingPropsType } from './Rating';

export default {
    component: Rating,
    title: 'Components/Rating',
    argTypes: {
        setValue: { action: "set rating: " }
    }
} as Meta;

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});

EmptyRating.args = {
    value: 0
};

export const FullRating = Template.bind({});

FullRating.args = {
    value: 5
};