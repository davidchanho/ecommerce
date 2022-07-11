import { ComponentMeta, ComponentStory } from "@storybook/react";

import Pickers from "./Pickers";

export default {
    title: "Feature/Pickers",
    component: Pickers,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Pickers>;

const Template: ComponentStory<typeof Pickers> = (args) => {
    return <Pickers />;
};

export const Default = Template.bind({});
