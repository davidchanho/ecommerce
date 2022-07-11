import { ComponentMeta, ComponentStory } from "@storybook/react";

import Colors from "./Colors";

export default {
    title: "Theme/Colors",
    component: Colors,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = (args) => <Colors />;

export const Default = Template.bind({});
Default.args = {
    primary: true,
};
