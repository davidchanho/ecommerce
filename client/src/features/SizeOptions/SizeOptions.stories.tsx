import { ComponentMeta, ComponentStory } from "@storybook/react";

import SizeOptions from "./SizeOptions";

export default {
    title: "Feature/SizeOptions",
    component: SizeOptions,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof SizeOptions>;

const Template: ComponentStory<typeof SizeOptions> = (args) => {
    return <SizeOptions />;
};

export const Default = Template.bind({});
