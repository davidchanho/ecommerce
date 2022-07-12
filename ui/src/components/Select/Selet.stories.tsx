import { ComponentMeta, ComponentStory } from "@storybook/react";

import Select from "./Select";

export default {
    title: "Component/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select />;

export const Default = Template.bind({});
Default.args = {};
