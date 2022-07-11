import { ComponentMeta, ComponentStory } from "@storybook/react";

import Card from "./Card";

export default {
    title: "Component/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
