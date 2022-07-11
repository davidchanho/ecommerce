import { ComponentMeta, ComponentStory } from "@storybook/react";

import Skeleton from "./Skeleton";

export default {
    title: "Component/Skeleton",
    component: Skeleton,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Circle = Template.bind({});
Circle.args = {
    circle: true,
    height: 64,
};

export const Box = Template.bind({});
Box.args = {
    box: true,
    height: 300,
    weight: 300,
};
