import { ComponentMeta, ComponentStory } from "@storybook/react";

import Directory from "./Directory";

export default {
    title: "Feature/Directory",
    component: Directory,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Directory>;

const Template: ComponentStory<typeof Directory> = () => <Directory />;

export const Default = Template.bind({});
Default.args = {};
