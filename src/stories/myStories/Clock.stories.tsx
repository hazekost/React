import { Meta, Story } from "@storybook/react"
import { Clock, ClockPropsType } from "../../components/Clock/Clock"

export default {
    component: Clock,
    title: "Clock Demo"
} as Meta

const Template: Story<ClockPropsType> = (args) => <Clock {...args} />

export const ClockExample = Template.bind({})

ClockExample.args = {
    mode: "digital"
}

export const AnalogClockExample = Template.bind({})

AnalogClockExample.args = {
    mode: "analog"
}