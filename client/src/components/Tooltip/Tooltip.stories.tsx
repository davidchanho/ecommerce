import { ComponentMeta, ComponentStory } from "@storybook/react";

import Tooltip from "./Tooltip";

export default {
    title: "Component/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
    <Tooltip {...args}>Tooltip</Tooltip>
);

export const Default = Template.bind({});
Default.args = {
    content: "Tooltip",
};
