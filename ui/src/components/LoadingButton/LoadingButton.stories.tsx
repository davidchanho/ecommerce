import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoadingButton from "./LoadingButton";

export default {
    title: "Component/Button",
    component: LoadingButton,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof LoadingButton>;

const Template: ComponentStory<typeof LoadingButton> = (args) => (
    <LoadingButton {...args}>Submit</LoadingButton>
);

export const Loader = Template.bind({});
Loader.args = {};
